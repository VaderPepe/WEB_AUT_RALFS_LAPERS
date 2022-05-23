import BasePage from "./BasePage";

class FormPage extends BasePage {
  static get url() {
    return "/automation-practice-form";
  }
  static get firstName() {
    return cy.get("#firstName");
  }
  static get lastName() {
    return cy.get("#lastName");
  }
  static get userEmail() {
    return cy.get("#userEmail");
  }
  static get genderOption() {
    return cy.get("gender-radio-1");
  }
  static get userNum() {
    return cy.get("#userNumber");
  }
  static get dob() {
    return cy.get("#dateOfBirthInput");
  }
  static get monthSelection() {
    return cy.get(".react-datepicker__month-select");
  }
  static get yearSelection() {
    return cy.get(".react-datepicker__year-select");
  }
  static get daySelection() {
    return cy.get("[aria-label='Choose Friday, February 28th, 1930']");
  }
  static get subjectField() {
    return cy.get("#subjectsContainer");
  }
  static get hobbiesSelection() {
    return cy.get("#hobbies-checkbox-3");
  }
  static get uploadImage() {
    return cy.get("input[type=file]");
  }
  static get addressSelection() {
    return cy.get("#currentAddress");
  }
  static get stateSelection() {
    return cy.get("#state");
  }
  static get citySelection() {
    return cy.get("#city");
  }
  static get submitForm() {
    return cy.get("#submit");
  }
  static get table() {
    return cy.get("tr");
  }
}
export default FormPage;