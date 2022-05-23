import FormPage from "../../pageObjects/FormPage";

context("Test form", () => {
    context("Filling test form", () => {
        beforeEach(() => {
            FormPage.visit();
        });

        it("Fill form test", () => {
            cy.fixture("data").then((data) => {
                FormPage.firstName.type(data.Name);
                FormPage.lastName.type(data.LastName);
                FormPage.userEmail.type(data.Email);
                FormPage.genderOption.click({ force: true });
                FormPage.userNum.type(data.Mobile);
                FormPage.dob.click();
                FormPage.yearSelection.select("1930");
                FormPage.monthSelection.select("February");
                FormPage.daySelection.click({ force: true });
                FormPage.subjectField.type(data.Subject + "{enter}");
                FormPage.hobbiesSelection.contains(data.Hobbies).click();
                FormPage.uploadImage.selectFile(data.imgPath);
                FormPage.addressSelection.type(data.Address);
                FormPage.stateSelection.type(data.State + "{enter}");
                FormPage.citySelection.type(data.City + "{enter}");
                FormPage.submitForm.click();

                FormPage.table
                .should("contain", data.Name)
                .should("contain", data.LastName)
                .should("contain", data.Email)
                .should("contain", data.Gender)
                .should("contain", data.Mobile)
                .should("contain", "28 February,1930")
                .should("contain", data.Subject)
                .should("contain", data.Hobbies)
                .should("contain", data.Address)
                .should("contain", data.State)
                .should("contain", data.City);
            });
        });
    });

});