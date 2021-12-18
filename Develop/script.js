//setting variables
var hour9 = $('#h-9');
var hour10 = $('#h-10');
var hour11 = $('#h-11');
var hour12 = $('#h-12');
var hour13 = $('#h-1');
var hour14 = $('#h-2');
var hour15 = $('#h-3');
var hour16 = $('#h-4');
var hour17 = $('#h-5');
var save = $('.saveBtn');

// setting array
const timeArray = [
    hour9,
    hour10,
    hour11,
    hour12,
    hour13,
    hour14,
    hour15,
    hour16,
    hour17
];

// sets day, time, and adds classes to hour elements to signify past, present, and future
function updateDateAndTime() {
    $('#currentDay').text(moment().format("LLLL"));

    let now = moment().hour();
    for (let i = 0; i < timeArray.length; i++) {

        timeArray[i].removeClass("past");
        timeArray[i].removeClass("present");
        timeArray[i].removeClass("future");

        if (now > timeArray[i].data("hour")) {
            timeArray[i].addClass("past");
        } else if (now === timeArray[i].data("hour")) {
            timeArray[i].addClass("present");
        } else {
            timeArray[i].addClass("future");
        }
    }
};

// saves to local storage
$(".saveBtn").on("click", function(){
    var userEvent = $(this).siblings(".description").val().trim();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, userEvent);
})

// shows local storage
$("#9AM .description").val(localStorage.getItem("9AM"));
$("#10AM .description").val(localStorage.getItem("10AM"));
$("#11AM .description").val(localStorage.getItem("11AM"));
$("#12PM .description").val(localStorage.getItem("12PM"));
$("#1PM .description").val(localStorage.getItem("1PM"));
$("#2PM .description").val(localStorage.getItem("2PM"));
$("#3PM .description").val(localStorage.getItem("3PM"));
$("#4PM .description").val(localStorage.getItem("4PM"));
$("#5PM .description").val(localStorage.getItem("5PM"));

// applying functions
updateDateAndTime();
setInterval(updateDateAndTime, 1000);