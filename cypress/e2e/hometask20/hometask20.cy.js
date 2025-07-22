import { GaragePage } from "../../support/poms/GaragePage.js";

describe('Hometask 20', () => {
    beforeEach('Autorization', () => {
        cy.login()
    })

    it.skip('Garage add car check functionality', () => {
        cy.contains('button', 'Add car').click()

        // Добавили нову машину
        cy.get('[id=addCarBrand]')
            .find('option')
            .then(options => {
                const randomIndex = Math.floor(Math.random() * options.length);
                const randomValue = options[randomIndex].value;
                cy.get('[id=addCarBrand]').select(randomValue);
            })
        
        cy.wait(1000)

        cy.get('[id=addCarModel]')
            .find('option')
            .then(options => {
                const randomIndex = Math.floor(Math.random() * options.length);
                const randomText = options[randomIndex].textContent.trim();

                cy.get('[id=addCarModel]').select(randomText);
            });
        
        cy.get('[id=addCarMileage]').type(10000)
        cy.get('.modal-footer > .btn-primary').click()

        // Добавляємо для неї Fuel
        cy.contains('button', 'Add fuel expense').click()
        
        cy.get('[id=addExpenseMileage]').clear().type(10001)
        cy.get('[id=addExpenseLiters]').type(1000)
        cy.get('[id=addExpenseTotalCost]').type('15')
        cy.get('.modal-footer > .btn-primary').click()
    })

    const garagePage = new GaragePage();
    it('Garage add car check functionality', () => {
        garagePage.clickAddCar();

        garagePage.selectRandomCarBrand();

        cy.wait(1000);

        garagePage.selectRandomCarModel();

        garagePage.typeMileage(10000);
        garagePage.clickApplyCar();

        garagePage.clickAddFuel();
        garagePage.fillFuelForm(10001, 1000, '15');
        garagePage.clickApplyFuel();
    });
});