describe.skip('Intercept Commands Test Suite', () => {
    
    beforeEach(()=> {
        cy.intercept({
            method: 'GET',
            url: 'http://localhost:3000/users'},
            {
                "users": [{"firstName": "Michel","lastName": "J","subjectId": 1,"id": 1},
                    {"firstName": "Manjunatha","lastName": "Koosalapur","subjectId": 2,},
                    {"firstName": "Nora","lastName": "Jane","subjectId": 2,"id": 3},
                    {"firstName": "Dave","lastName": "John","subjectId": 1,"id": 4},
                    {"firstName": "Sarah","lastName": "Sycha","subjectId": "1","id": 6},
                    {"firstName": "Sarah4","lastName": "Lastname","subjectId": "1","id": 8}]
            })
    })
    
    it('GET request', () => {
        cy.request('GET', 'http://localhost:3000/users').then(response => {

        })

    })
})