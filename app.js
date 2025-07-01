

let tasks = [];
const input = document.getElementById("addTask");
const butInput = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});

butInput.addEventListener("pointerdown", () => {
    addTask();
});

function addTask() {
    const taskText = input.value.trim();
    if (taskText === "") return;

    let value = {
        task: taskText,
    };

    tasks.push(value);
    input.value = '';
    console.log(tasks);

    displayTask();
}

function displayTask(){
    taskList.innerHTML='';
    tasks.forEach((item,index)=>{
        const li=document.createElement("li");
        
        li.innerHTML = `
  <div class="task ml-1 mt-1 flex flex-row items-center gap-1 text-white p-2 border-b border-gray-600">
    <button type="button" class="focus:outline-none text-white font-medium rounded-lg text-sm px-5 py-2 me-2 bg-green-600 hover:bg-green-700 focus:ring-green-800">
      Done
    </button>
    <p>${item.task}</p>
  </div>
`;

        taskList.appendChild(li);

        const doneButton=li.querySelector("button");
        doneButton.addEventListener("click", () => {
            
            tasks.splice(index, 1);
          
            displayTask();
          });
    });
}


