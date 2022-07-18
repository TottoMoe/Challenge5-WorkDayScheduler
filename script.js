var table = $('.table');
var tableHead = $('th');
var hour = $('.hour');
var formInputEl = $('.form-input');
var save = $('.saveBtn');
var row = $('#row');

var eventEl1 = $('#event1');
var eventEl2 = $('#event2');
var eventEl3 = $('#event3');
var eventEl4 = $('#event4');
var eventEl5 = $('#event5');
var eventEl6 = $('#event6');
var eventEl7 = $('#event7');
var eventEl8 = $('#event8');
var eventEl9 = $('#event9');
var eventEl10 = $('#event10');
var eventEl11 = $('#event11');
var eventEl12 = $('#event12');
var eventEl13 = $('#event13');
var eventEl14 = $('#event14');
var eventEl15 = $('#event15');
var eventEl16 = $('#event16');
var eventEl17 = $('#event17');
var eventEl18 = $('#event18');
var eventEl19 = $('#event19');
var eventEl20 = $('#event20');
var eventEl21 = $('#event21');
var eventEl22 = $('#event22');
var eventEl23 = $('#event23');
var eventEl24 = $('#event24');

var schedule = {
  eventEl1: $(this).text(),
  eventEl2: $(this).text(),
  eventEl3: $(this).text(),
  eventEl4: $(this).text(),
  eventEl5: $(this).text(),
  eventEl6: $(this).text(),
  eventEl7: $(this).text(),
  eventEl8: $(this).text(),
  eventEl9: $(this).text(),
  eventEl10: $(this).text(),
  eventEl11: $(this).text(),
  eventEl12: $(this).text(),
  eventEl13: $(this).text(),
  eventEl14: $(this).text(),
  eventEl15: $(this).text(),
  eventEl16: $(this).text(),
  eventEl17: $(this).text(),
  eventEl18: $(this).text(),
  eventEl19: $(this).text(),
  eventEl20: $(this).text(),
  eventEl21: $(this).text(),
  eventEl22: $(this).text(),
  eventEl23: $(this).text(),
  eventEl24: $(this).text(),
}
/* Display current time on the top */
var now = moment().format('MMMM Do, YYYY h:mm:ss a');
$('#currentDay').text(now);
//----------------------------------------------

/* Set class for each "th" */
tableHead.addClass('col-1 hour justify-content-center align-items-center');

/* Set attr for each class "form-input" */
formInputEl.attr('contenteditable', true);

/* Add and set Save icon for each class "saveBtn" */
save.html('<i class="fas fa-save fa-2x"></i>');
//---------------------------------------------

// Store the events
table.on('input', 'td', function () {
  var TextInput = $(this).text();
  
  save.on('click', function() {
    localStorage.setItem('getEvent', TextInput)
  })
});

// Display the event items
var item = localStorage.getItem("getEvent");
eventEl1.text(item);
//---------------------------------------------


// var hours = ['1', '2', '3', '4', '5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24']



var currentdate = new Date();
var time = currentdate.getHours();
$('.hour').each(function() {
  $(this).text("yest" + time);
})


