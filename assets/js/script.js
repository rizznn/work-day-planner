var plan = {};
// var task = document.querySelector("#task");
var saveBtn = document.querySelector(".saveBtn")
// // create event in the textarea
// var createPlan = function(toDoText){

// }

// saveBtn.addEventListener("click", function(){
//     alert("The button was clicked.");
// });

$(saveBtn).click(function(event) {
    event.preventDefault();
    // var taskText = $("#task").val();

    // createPlan(taskText, "task")

    // save();
    console.log("save");
});

// var save = function() {
//     localStorage.setItem("plan", JSON.stringify(plan));
//     console.log(save);
// };