// Display date
var today = moment().format('dddd, MMMM Do YYYY')
$("#currentDay").html(today);


    $(".saveBtn").on("click", function() {
        
        var value = $(this)
        .siblings(".description")
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

        // loop through the different times
        $(".time-block").each(function () {
            // variable that trims and then resulting the hour
            var block = parseInt($(this)
                .attr("id")
                .split("hour-")[1]);

            // using an if statement, compare the time of the variable to the time of the div
            if (block < momentNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (block === momentNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        });

        // using the localStorage get values and place them in the planner
        $("#hour-9 .description").val(localStorage.getItem("hour-9"));
        $("#hour-10 .description").val(localStorage.getItem("hour-10"));
        $("#hour-11 .description").val(localStorage.getItem("hour-11"));
        $("#hour-12 .description").val(localStorage.getItem("hour-12"));
        $("#hour-13 .description").val(localStorage.getItem("hour-13"));
        $("#hour-14 .description").val(localStorage.getItem("hour-14"));
        $("#hour-15 .description").val(localStorage.getItem("hour-15"));
        $("#hour-16 .description").val(localStorage.getItem("hour-16"));
        $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    };
    timeAudit();


