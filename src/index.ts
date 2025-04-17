// console.log("hi");
import { v4 as uuidV4} from "uuid"

// console.log(uuidV4());

type Task ={
  id:string
  title:string
  completed:boolean
  createdAt: Date
}


const list = document.querySelector<HTMLUListElement>("#list")
const form = document.querySelector<HTMLFormElement>("#new-task-form")
const input = document.querySelector<HTMLInputElement>("#new-task-titel")

const task: Task[] = [] // array of defarent task item stored inside an array

form?.addEventListener("submit",e=>{
  e.preventDefault()

  if(input?.value == "" || input?.value == null)
     return

  const newTask: Task ={
    id: uuidV4(),
    title: input.value,
    completed:false,
    createdAt:new Date(),
  }

  task.push(newTask)

  addListItem(newTask)
  input.value = "" //use for empty the input boxevery time you entered

})
function addListItem(task: Task){
  const item = document.createElement("li")         //to create the list element
  const lable = document.createElement("lable")     //to create the lable element
  const checkbox = document.createElement("input")  //to create the input element
  // const deleteButton = document.createElement("button")
  checkbox.addEventListener("change",()=>{
    task.completed = checkbox.checked
    console.log(task);   // check box is true or false
  })

  checkbox.type= "checkBox"
  checkbox.checked = task.completed
  lable.append(checkbox,task.title)
  item.append(lable)
  list?.append(item)
}