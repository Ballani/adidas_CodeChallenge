import { petstore } from "../pages/petstore";
import { Given, Then } from 'cypress-cucumber-preprocessor/steps';


//Creating reference variable to access methods from class
const petApi = new petstore;

// Variables 
const baseURL="https://petstore.swagger.io"


// Step Definitions for Pet Store API
//Gets List of pets with status
Given(/I get "([^"]+)" pets/,(petStatus)=>{
  petApi.getPetIdbByStatus(baseURL,petStatus)
})

//Post new pets to store
Then(/I post a new available pet "([^"]+)" with "([^"]+)" to the store/,(petId,petName)=>{
  petApi.addPetToStore(baseURL,petId,petName)
})

//Updates pet details
And(/I update this pet "([^"]+)" status to "([^"]+)"/,(petId,petStatus)=>{
  petApi.updatePetDetails(baseURL,petId,petStatus)
})

//Udpdates pet details with form
And(/I update pet "([^"]+)" status to "([^"]+)" using form data/,(petId,petStatus)=>{
  petApi.updatePetStatusUsingFormData(baseURL,petId,petStatus)
})

// deletes pet 
Then(/I delete this pet "([^"]+)"/,(petId)=>{
  petApi.deletePetId(baseURL,petId)
})