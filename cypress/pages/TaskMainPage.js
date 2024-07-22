export class TaskMainPage {
    visitPage(){        
        cy.visit('https://todomvc.com/examples/typescript-react/#/')
        }
    addTask(text){
        cy.get('.new-todo').should('be.visible').type(text+"{enter}")
    }
    selectTask(){
       

    }
  
        


    
}// ultimo 
export const taskMainPage = new TaskMainPage() ;

