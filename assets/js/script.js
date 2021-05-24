// var plan = {};
// var task = document.querySelector("#task");
var saveBtn = document.querySelectorAll(".saveBtn")
var description = document.querySelectorAll(".description");
var contain = document.querySelectorAll(".contain");
var today = moment().format('dddd, MMMM Do YYYY')
$("#currentDay").html(today);
// create event in the textarea
// var createPlan = function(toDoText){
//     var contain = $("<div>").addClass("listItem");
//     var taskPlan = $("<p>")
//       .addClass("")
//       .text(taskText);
  
//     // append p
//     contain.append(taskPlan);
// }

$(saveBtn).on("click", "description", function() {
    var taskText = $(this).val();
    // var time = $(contain).attr("id");

    // localStorage.setItem(time, taskText);

    console.log(taskText);
});