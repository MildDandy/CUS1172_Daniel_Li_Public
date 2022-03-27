//var task_array = [{}];

document.addEventListener("DOMContentLoaded", () => {
  //user can't click on submit yet
  document.querySelector("#submit").disabled = true;
  //Only enable when user types something
  document.querySelector("#task").onkeyup = () => {
    if(document.querySelector("#task").value.length > 0){
      document.querySelector("#submit").disabled = false;
    }
    else{
      document.querySelector("#submit").disabled = true;
    }
  }

  document.querySelector("#new_task").onsubmit = () => {
    //This is programatically creating a new element, referencing an empty <li></li> item
    const li = document.createElement("li");
    //Creating a string literal AND a button given a class called remove;
    let task_title = document.querySelector("#task").value;
    let task_priority = document.querySelector('input[name="task-priority"]:checked').parentElement.className;
    console.log(task_priority);
    let new_task_html = `
      <span class="${task_priority}">${task_title}</span>
      <button class="remove">❌</button>
      <button class="complete">✔️</button>
    `;
    li.innerHTML = new_task_html;
    // Add the actual new item to the empty tasks_list
    document.querySelector("#tasks_list").append(li);
    //Doesn't exist in the DOM, exists locally in the browser in memory
    //Resets the input field and submit button for the next go-around

    document.querySelector("#task").value = "";
    document.querySelector("#submit").disabled = true;
    //Prevents the page from reloading
    return false;
  }

  //Click event registered to the ENTIRE page.
  document.addEventListener("click", event => {
    console.log(event.target.className);
    console.log(event.target.parentElement);
    element = event.target;
    if(element.className === "remove"){
      element.parentElement.remove();
    }

    if(element.className === "complete"){
      element.parentElement.classList.add("completed");
      element.remove();
    }
  })
})
