import { expect } from "chai"


export class petstore {
       getPetId(baseURL,petId,petStatus){
        cy.request({
               method: "GET",
               headers:{
                Accept: "*/*",
                "Content-Type":"application/json"
               },
               url: baseURL+"/v2/pet/"+pId    
           }).its('body').then((body) =>{
               expect(body.id).to.eq(petId);
               expect(body.status).to.eq(petStatus);
           })
       }

       getPetIdbByStatus(baseURL,petStatus){
        cy.request({
               method: "GET",
               headers:{
                Accept: "*/*",
                "Content-Type":"application/json"
               },
               url: baseURL+"/v2/pet/findByStatus?status="+petStatus    
           }).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body[0].id).to.not.null;
            expect(response.body[0].status).to.eq(petStatus);
          });
       }


       addPetToStore(baseURL,petId,petName,){
        cy.request({
               method: "POST",
               headers:{
                Accept: "*/*",
                "Content-Type":"application/json"
               },
               url: baseURL+"/v2/pet",
               body:{
                "id": petId,
                "category": {
                  "id": petId,
                  "name": "string"
                },
                "name": petName,
                "photoUrls": [
                  "string"
                ],
                "tags": [
                  {
                    "id": 0,
                    "name": "string"
                  }
                ],
                "status": "available"
              }    
           }).then(response => {
            expect(response.status).to.eq(200);
               
           })
       }

       deletePetId(baseURL,pId){
        cy.request({
            method: "DELETE",
            headers:{
             Accept: "*/*",
             "Content-Type":"application/json"
            },
            url: baseURL+"/v2/pet/"+pId  
        }).its('body').then((body) =>{
            expect(body.code).to.eq(200);
        })
       }

       updatePetStatusUsingFormData(baseURL,petId,petStatus){
        {
            cy.request({
                method: "POST",
                headers:{
                    Accept: "*/*",
                    "Content-Type":"application/x-www-form-urlencoded"
                },
                url: baseURL+"/v2/pet/"+petId,
                body: {"status": petStatus}    
            }).then((response) =>{
                expect(response.status).to.eq(200)
                expect(response.body.message).to.eq(petId);
            })
            
          }
       }

       updatePetDetails(baseURL,petId,petStatus){
        {
            cy.request({
                method: "PUT",
                headers:{
                    Accept: "*/*",
                    "Content-Type":"application/json"
                },
                url: baseURL+"/v2/pet",
                body:
                {"id": petId,
                "category": {
                  "id": 0,
                  "name": "string"
                },
                "name": "doggy",
                "photoUrls": [
                  "string"
                ],
                "tags": [
                  {
                    "id": 0,
                    "name": "string"
                  }
                ],
                "status": petStatus}
                  
            }).then((response) =>{
                expect(response.status).to.eq(200)
                expect(response.body.status).to.eq(petStatus);
               
            })
            
          }
       }
}