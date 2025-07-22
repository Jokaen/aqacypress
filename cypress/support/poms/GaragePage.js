export class GaragePage {
    selectors = {
        addCarButton: () => cy.contains('button', 'Add car'),
        addCarBrand: () => cy.get('[id=addCarBrand]'),
        addCarModel: () => cy.get('[id=addCarModel]'),
        addCarMileage: () => cy.get('[id=addCarMileage]'),
        applyCarButton: () => cy.get('.modal-footer > .btn-primary'),
        addFuelButton: () => cy.contains('button', 'Add fuel expense'),
        addExpenseMileage: () => cy.get('[id=addExpenseMileage]'),
        addExpenseLiters: () => cy.get('[id=addExpenseLiters]'),
        addExpenseTotalCost: () => cy.get('[id=addExpenseTotalCost]'),
        applyFuelButton: () => cy.get('.modal-footer > .btn-primary')
    }

    clickAddCar() {
        this.selectors.addCarButton().click()
    }

    selectRandomCarBrand() {
        this.selectors.addCarBrand()
            .find('option')
            .then(options => {
                const randomIndex = Math.floor(Math.random() * options.length);
                const value = options[randomIndex].value;
                this.selectors.addCarBrand().select(value);
            })
    }

    selectRandomCarModel() {
        this.selectors.addCarModel()
            .find('option')
            .then(options => {
                const randomIndex = Math.floor(Math.random() * options.length);
                const text = options[randomIndex].textContent.trim();
                this.selectors.addCarModel().select(text);
            })
    }

    typeMileage(mileage) {
        this.selectors.addCarMileage().type(mileage);
    }

    clickApplyCar() {
        this.selectors.applyCarButton().click();
    }

    clickAddFuel() {
        this.selectors.addFuelButton().click();
    }

    fillFuelForm(mileage, liters, cost) {
        this.selectors.addExpenseMileage().clear().type(mileage);
        this.selectors.addExpenseLiters().type(liters);
        this.selectors.addExpenseTotalCost().type(cost);
    }

    clickApplyFuel() {
        this.selectors.applyFuelButton().click();
    }
}