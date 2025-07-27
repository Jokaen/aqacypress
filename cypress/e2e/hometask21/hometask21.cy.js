import { GaragePage } from "../../support/poms/GaragePage.js";

describe('Hometask 21', () => {
    beforeEach('Autorization', () => {
        cy.login()
    })

    const garagePage = new GaragePage();
    it('Garage add car check functionality', () => {
        cy.intercept('POST', '/api/cars').as('createdNewCar');
        garagePage.clickAddCar();

        garagePage.selectRandomCarBrand();

        cy.wait(1000);

        garagePage.selectRandomCarModel();

        garagePage.typeMileage(10000);
        garagePage.clickApplyCar();
        cy.wait('@createdNewCar').then((interception) => {
            console.log('response', interception.response);

            const { id, brand, model, mileage} = interception.response.body.data;
            console.log(`ID: ${id}, Brand: ${brand}, Model: ${model}, Mileage: ${mileage}`);
            expect(interception.response.statusCode).to.eq(201);
            cy.wrap(id).as('newCarId');

            cy.request('/api/cars').then((res) => {
                const car = res.body.data.find(c => c.id === id)
                expect(car).to.exist;
                expect(car.brand).to.eq(brand);
                expect(car.model).to.eq(model);
                expect(car.mileage).to.eq(mileage);
            });

            cy.createExpense({
                carId: id,
                mileage: Math.floor(Math.random() * 10000) + 10000,
                liters: 110,
                totalCost: 11,
                forceMileage: false
            }).then(() => {
                cy.get('[routerlink="expenses"]').click()
                cy.get('table.expenses_table').should('be.visible');
            })
        })
    });
});