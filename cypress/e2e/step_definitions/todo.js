import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import { taskMainPage } from '../../pages/TaskMainPage';


Given('I visit to page', () => {
    taskMainPage.visitPage()
})

When('I type task {string}', (text) => {
    taskMainPage.addTask(text)
})

When ('I select Task ', (text)=>{
    taskMainPage.selectTask(text);
})
