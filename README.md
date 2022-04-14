# Adidas QA Code Challenge

This repository contains a collection of cypress project that demonstrate how to use the tool and execute automation script using the Cucumber BDD framework with cypress as automation tool.

# Overview of Cypress

# Installing Cypress from Scratch
Create a project directory
Open a Terminal in the project root directory

`$ npm install cypress --save-dev`

for further details refer to [Cypress io npm install](https://docs.cypress.io/guides/getting-started/installing-cypress.html#npm-install)

## Opening Cypress 

You can now open the Cypress console by running:

`$ node_modules/.bin/cypress open`

or

`$ npx cypress open`

from the project root folder.

To run from  a command line add a Script to the Package JSON file

`cyrun": "node_modules/.bin/cypress run --browser chrome"`

Tests can then be run from a Terminal

`$ npm run cyrun`



## Plugins

### Cucumber

`$ npm install cypress-cucumber-preprocessor --save-dev`

Now configure Cypress by adding the [Cucumber Plugin](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor) 
to the cypress/plugins/index.js.
 
 
## About Framework
Its a Page Object Model design pattern with BDD approach using cucumber. All dependancies for project is stored in pacakage.json, On buliding project all dependancies will be added to node modules.

All the objects within the test code are maintained as follows.
        
        pages in "cypress/integration/pages/**.js"

 Cucumber feature files are maintained as follows
        
        features are maintained under project path  "cypress/integration/**.feature".

 All dependancies are maintained as follows 
        
        cypress dependancies in "rootfolder/cypress.json"
        project dependancies in "rootfolder/pacakage.json"
## Implementation

Code Challenge 1: Rest API Automation
    
    1. Feature file is added in "integration/PetStore.feature"
    2. Spec file is added in "integration/petstore/**.spec.js"
    3. Pages file in added in "integration/pages/**.js"

    Scripts are implemented to test a scenario which does get, create and update pet details.

    Improvements: 
    1. Currently methods are written functionality. It can improved with reusable functions.
    2. API resusable utils can be created to make it more resusable and maintainable.


Code Challenge 2: WEB FE Automation
    
    1. Feature file is added in "integration/DemoBlaze.feature"
    2. Spec file is added in "integration/demoblaze/**.spec.js"
    3. Pages file in added in "integration/pages/**.js"

    Scripts are implemented to test a scenario which does selection of product, add to cart and place order.

    Improvements: 
    1. All step definitions are written in single spec file. That can be improved by creating spec file for each functionality for good maintainablity.


Test Management Task:
    1. Test File is added to root folder "rootfolder/TestManagement_Task.md"
