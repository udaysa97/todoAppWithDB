(function(){
let add=document.getElementById('add');
let closeButton=document.getElementById('close');
let checkboxBoxes=document.querySelectorAll('input[type="checkbox"]');
let incompleteTask=0;
let completedTask = 0;
// To hide the list of tasks and show the add event container
add.addEventListener('click',(e)=>{
    document.getElementById('viewtask').style.display='none';
    document.getElementById('addtask').style.display='block';
    
});

//To hide the add task container when close is clicked
closeButton.addEventListener('click',(e)=>{
    document.getElementById('addtask').style.display='none';
    document.getElementById('viewtask').style.display='block';
});

//To count all tasks status and set total number of complete and incomplete tasks
for(let i=0;i<checkboxBoxes.length;i++){
    console.log(checkboxBoxes[i].checked);
        if(checkboxBoxes[i].checked){           
            completedTask++;
        }
        else{
            incompleteTask++;
        }
             
}
document.getElementById('complete-task-count').innerText=completedTask;
document.getElementById('incomplete-task-count').innerText=incompleteTask;
})();
