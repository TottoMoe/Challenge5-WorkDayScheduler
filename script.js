var formInputEl = $('.form-input');
var eventInputEl = $('#event-input');
var save = $('#saveItemBtn');


var now = moment().format('MMMM Do, YYYY');
$('#currentDay').text(now);
var count = localStorage.getItem("getEvent");
eventInputEl.text(count);

// var content=$('#event-input').html();
var TextInput;
$('table td').on('input', function () {
  TextInput = $(this).text();

  save.on('click', function() {
    localStorage.setItem('getEvent', TextInput)
  })
});



// $('table td').on('blur', function () {
//   console.log("blur new value : "+$(this).text());
// });
// Table
// formInputEl.text('');

// eventInputEl.on('click', editable);



// function editable() {
//  $(this).prop('contenteditable', value);
//   // return value;
//   console.log('contenteditable');
// }


// save.on('click', saveLocal);

// function saveLocal() {
//   console.log(customerId);

//   // var eventSave = $(this).val();
// console.log(eventSave);
//   localStorage.setItem('getEvent', value);
  
// }

// eventInputEl.on('click', show);

// function show(even) {
//   console.log("heloow work")
// }

//_________________________

// $(function() {

//   $('tbody').on('click', 'td', function() {
//     displayForm( $(this) );
//   });

// });

// function displayForm(cell) {
//   var column = cell.attr('class'),
//       id = cell.closest('tr').attr('id'),
//       cellWidth = cell.css('width'),
//       prevContent = cell.text(),
//       form = '<form action="javarscript: this.preventDefault"><input type="text" name="newValue: size="4" value="'+prevContent+'" /><input type="hidden" name="id" value="'+id+'" />'+'<input type="hidden" name="column" value="'+column+'" /></form>';

//   cell.html(form).find('input[type=text]')
//       .focus()
//       .css('width',cellWidth);

//   cell.on('click',function() {return false;});
  
//   cell.on('keydown',function(e) {
//     if(e.keyCode === 13) { //enter
//       changeField(cell, prevContent);
//     } else if (e.keyCode === 27) {
//       cell.text(prevContent);
//       cell.off('click');
//     }
//   });

// }

// function changeField(cell, prevContent) {
//   cell.off('keydown');

//   var url = 'ajax.php?edit&',
//       input = cell.find('form').serialize();

//   $.getJSON(url+input, function(data) {

//     if (data.success) {
//       cell.html(data.value);
//     } else {
//       alert("There was a problem updating the data.");
//       cell.html(prevContent);
//     }
//   });

//   cell.off('click');
// }
//--------------------------------