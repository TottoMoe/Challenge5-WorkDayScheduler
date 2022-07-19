var table = $('.table');
var tableHead = $('th');
var hour = $('.hour');
var formInputEl = $('.form-input');
var save = $('.saveBtn');
var row = $('#row');

/* Display current time on the top */
var now = moment().format('MMMM Do, YYYY h:mm:ss a');
$('#currentDay').text(now);

/* Set class for each "th" */
tableHead.addClass('col-1 hour justify-content-center align-items-center');

/* Set attr for each class "form-input" */
formInputEl.attr('contenteditable', true);

/* Add and set Save icon for each class "saveBtn" */
save.html('<i class="fas fa-save fa-2x"></i>');

/* Store the events */
table.on('input', function () {
  var e8 = $("#8").text();
  var e9 = $("#9").text();
  var e10 = $("#10").text();
  var e11 = $("#11").text();
  var e12 = $("#12").text();
  var e13 = $("#13").text();
  var e14 = $("#14").text();
  var e15 = $("#15").text();
  var e16 = $("#16").text();
  var e17 = $("#17").text();

  save.on('click', function() {
    localStorage.setItem('getEvent8', e8);
    localStorage.setItem('getEvent9', e9);
    localStorage.setItem('getEvent10', e10);
    localStorage.setItem('getEvent11', e11);
    localStorage.setItem('getEvent12', e12);
    localStorage.setItem('getEvent13', e13);
    localStorage.setItem('getEvent14', e14);
    localStorage.setItem('getEvent15', e15);
    localStorage.setItem('getEvent16', e16);
  })
});

/* Display the event items */
$("#8").text(localStorage.getItem("getEvent8"));
$("#9").text(localStorage.getItem("getEvent9"));
$("#10").text(localStorage.getItem("getEvent10"));
$("#11").text(localStorage.getItem("getEvent11"));
$("#12").text(localStorage.getItem("getEvent12"));
$("#13").text(localStorage.getItem("getEvent13"));
$("#14").text(localStorage.getItem("getEvent14"));
$("#15").text(localStorage.getItem("getEvent15"));
$("#16").text(localStorage.getItem("getEvent16"));
$("#17").text(localStorage.getItem("getEvent17"));

/* Event bg change during time change */
var time = moment().hours();
formInputEl.each(function() {
  var num = $(this).data('event');
  if (num > time) {
    $(this).addClass("future");
  } else if (time == num) {
    $(this).addClass("present");
  } else {
    $(this).addClass("past");
  }
});
