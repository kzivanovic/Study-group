export class LandingPage {
    openPage() {
        cy.visit('/');
    }
    get username() {
        return cy.get('[data-test="username"]');
    }
    get password(){
        return cy.get('[data-test="password"]');
    }
    get loginButton(){
        return cy.get('[data-test="login-button"]');
    }
}
export default new LandingPage ();