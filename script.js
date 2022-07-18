var hour = 5;
var formInputEl = $('.form-input');
var eventInputEl = $('#event-input');
var save = $('#saveItemBtn');

// Display current time on the top
var now = moment().format('MMMM Do, YYYY h:mm:ss a');
$('#currentDay').text(now);
//----------------------------------------------

if (hour === moment().format('LT')) {
  console.log(true);
  
}




// Store and Display the events
var count = localStorage.getItem("getEvent");
eventInputEl.text(count);

$('table td').on('input', function () {
  var TextInput = $(this).text();

  save.on('click', function() {
    localStorage.setItem('getEvent', TextInput)
  })
});
//---------------------------------------------
