// var plan = {};
// var task = document.querySelector("#task");

var description = $(".description");
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

$('.saveBtn').on('click', function() {
    
    var value = $(this)
      .siblings('.description')
      .val();

    var time = $(this)
        .parent()
        .attr("id");
    // set both variables to localStorage
    localStorage.setItem(time, value);
});

    // hour updating function
    function timeAudit() {
        // store current time in a variable
        var momentNow = moment().hour();
    }

    
// loop through the different times
// variable that trims and then resulting the hour
// using an if statement, compare the time of the variable to the time of the div
// write 3 css possibilities: past, present and future and apply possiblities depending on the outcome

// using the localStorage get values and place them in the planner
