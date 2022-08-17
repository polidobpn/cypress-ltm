



describe ('Controle de Acesso', ()=>{
    it ('Usuário deverá realizar acesso ao sistema com sucesso', ()=>{
        cy.viewport(1400, 900)
        
        cy.visit('https://padrao-qa2.webpremios.digital/fuelcredit')     
        cy.on('uncaught:exception', (err, runnable) => {return false}) 
        cy.get('button[id="MileageType"]').click() 
    })
})






