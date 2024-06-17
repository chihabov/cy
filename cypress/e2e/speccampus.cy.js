describe('campus spec', () => {
  it('passes', () => {


    

    cy.visit('https://www.campusfrance.org/fr/user/register')


    cy.get('.header > .title').should('contain', 'compte'); // Vérifier que le text contien 
    cy.get('.header > .title').should('have.text', 'Mon compte'); // Vérifier que le text correspond 

    cy.get('#tarteaucitronPersonalize2').click()
    cy.get('#edit-account > .js-form-type-textfield > #edit-name').type("chihab@gmail.com")
    cy.get('#edit-pass-pass1').type("Chiahb1998/")
    cy.get('#edit-pass-pass2').type("chiahb1998/")
    cy.get('#edit-pass-pass2').click()
    cy.get('#edit-field-nom-0-value').type("chihab")
    cy.get('#edit-field-prenom-0-value').type("lekh")
    // Cliquez sur l'élément d'entrée pour ouvrir la liste déroulante 
    cy.get('#edit-field-pays-concernes-wrapper > .js-form-item > .selectize-control > .selectize-input') .click(); // Sélectionnez l'option dans la liste déroulante 
    cy.get('.selectize-dropdown-content') .contains('Asie') .click()
    //cy.get('#edit-field-pays-concernes-wrapper > .js-form-item > .selectize-control > .selectize-input > .item').click()
    cy.get('#edit-field-nationalite-0-target-id').type("Algérie")
    cy.get('#edit-field-code-postal-0-value').type("15000")
    cy.get('#edit-field-ville-0-value').type("TIZI OUZOU")
    cy.get('#edit-field-telephone-0-value').type("0667554883")
    cy.get('#edit-field-publics-cibles > :nth-child(1)').click()
    // Cliquez sur l'élément d'entrée pour ouvrir la liste déroulante du domaine d'étude 
    cy.get('#edit-field-domaine-etudes-wrapper > .js-form-item > .selectize-control > .selectize-input').click(); // Sélectionnez l'option dans la liste déroulante 
    cy.get('.selectize-dropdown-content') .contains('Physique') .click()
     // Cliquez sur l'élément d'entrée pour ouvrir la liste déroulante du NIVEAU d'étude 
     cy.get('#edit-field-niveaux-etude-wrapper > .js-form-item > .selectize-control > .selectize-input').click(); // Sélectionnez l'option dans la liste déroulante 
     cy.get('.selectize-dropdown-content') .contains('Licence 1').click()


     cy.get('#edit-field-accepte-communications-wrapper > .js-form-item').click()
   })
  })
