describe('Agregar dos productos al carrito', () => {
    it('Agrega dos productos al carrito, visualiza el carrito, completa el formulario de compra y finaliza la compra', () => {
      //Entra a la página  
      cy.visit('https://www.demoblaze.com/')
      //Inserta dos productos
      cy.get(':nth-child(1) > .card > :nth-child(1) > .card-img-top').click();
      cy.get('.col-sm-12 > .btn').click();
      cy.get('.col-sm-12 > .btn').click();
      // Visualiza los productos en el carrito
      cy.get('#cartur').click()
      cy.url().should('include', '/cart.html')
      // Completa el formulario de compra

      cy.get('.col-lg-1 > .btn').click();
      cy.get('#name').type('Luis')
      cy.get('#country').type('RD')
      cy.get('#city').type('SD')
      cy.get('#card').type('1234567890123456')
      cy.get('#month').type('06')
      cy.get('#year').type('2025')
      
      // Finaliza la compra
      cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
      cy.get('.sweet-alert').should('be.visible')
      cy.get('.sweet-alert').contains('Thank you for your purchase!')
      cy.get('.confirm').click();
    })
  })
