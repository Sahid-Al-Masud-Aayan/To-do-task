// ======= varibale part  ========
let todoInput      = document.querySelector('.todoInput')
let addButton      = document.querySelector('.addButton')
let todoList       = document.querySelector('.todoList')
let turn           = true
let taskDoneNumber = document.querySelector('.taskDoneNumber')
let totalTaskNumber= document.querySelector('.totalTaskNumber')
let doneNumber     = 0
let totalNumber    = 0
let wrong = document.querySelector('.Errortext')
// ============== functions part =============
addButton.addEventListener('click' , ()=>{
    //========== condition part start
    if(todoInput.value == ''){
        wrong.innerHTML = 'Please enter your task!'
    }else{
        // ======== todo number  count
        wrong.innerHTML = ''
        totalNumber++
        totalTaskNumber.innerHTML = totalNumber
        //=========== creating elements
        let singel_list   = document.createElement('div')
        let done          = document.createElement('div')
        let todoListInput = document.createElement('input')
        let editButton    = document.createElement('i')
        let deleteButton  = document.createElement('i')
        
        //========== making apped child
        todoList          .appendChild(singel_list)
        singel_list       .appendChild(done)
        singel_list       .appendChild(todoListInput)
        singel_list       .appendChild(editButton)
        singel_list       .appendChild(deleteButton)
        // ========= creating class names
        singel_list       .classList.add('singel_list')
        done              .classList.add('done')
        todoListInput     .classList.add('todoListInput')
        editButton        .classList.add('fa-solid', 'fa-file-pen', 'listIcon' ,'eiditIcon')
        deleteButton      .classList.add('fa-solid','fa-ban' , 'listIcon' ,'deleteIcon')
        //========== set input tag attribute
        todoListInput     .setAttribute('readonly' , 'readonly')
        todoListInput.value  = todoInput.value
        todoInput.value = ''
        // ========= edit input data
        editButton.addEventListener('click', ()=>{
            if(turn == true){                
                todoListInput .removeAttribute('readonly' , 'readonly')
                editButton    .classList.remove('fa-solid', 'fa-file-pen', 'listIcon' ,'eiditIcon')
                editButton    .classList.add('fa-solid' , 'fa-square-check' ,'eiditIcon' , 'listIcon')
                turn = false
            }else{
                if(todoListInput.value == '' ){
                    alert('please enter the new task')
                }else{
                 todoListInput .setAttribute('readonly' , 'readonly')
                 editButton    .classList.remove('fa-solid' , 'fa-square-check' ,'eiditIcon' , 'listIcon')
                 editButton    .classList.add('fa-solid', 'fa-file-pen', 'listIcon' ,'eiditIcon')
                 turn = true
                }
            }
        }) 
        //========= delete todo list
        deleteButton.addEventListener('click' , ()=>{
            singel_list.remove()
            if(doneNumber > 0){
                doneNumber--
                taskDoneNumber.innerHTML = doneNumber
            }
            if(totalNumber > 0){
                totalNumber--
                totalTaskNumber.innerHTML = totalNumber
            }
        })
        //========= done todo task
        done.addEventListener('click' , ()=>{
            done.style = 'border-color: #71ff05 ; background: #71ff05; pointer-events: none;'
            todoListInput.style = 'font-style:bold; color: #71ff05'
            editButton.style  = 'display: none'
            doneNumber++
            taskDoneNumber.innerHTML = doneNumber
        })
    }
})

