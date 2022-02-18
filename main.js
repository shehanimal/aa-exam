function myFunction() {
    var x = document.getElementById("resposivnav");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

/*bookig form*/
  	
$(document).ready(function(){
  $("form").on("submit", function(event){
      event.preventDefault();

      var formValues= $(this).serialize();
      console.log(formValues);
    
  });
});	


var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;

  for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
          return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
      }
  }
  return false;
};


var start = 0;
var availseat = getUrlParameter('tickets_availbility');
var options = "";
for(var seat = start ; seat <=availseat; seat++){
options += "<option value="+ seat +">"+ seat +"</option>";
}

$( document ).ready(function() {
var ename = getUrlParameter('event_name');
var edate = getUrlParameter('event_date');
var availseat = getUrlParameter('tickets_availbility');

var html = '';	
html += "<div class='booked-event'><h2>"+ename+"</div>";
html += "<div class='booked-date'>"+edate+"</div>";

  html += "<div class='availableseats'>Tickets Available: "+availseat+"</div>";

$('#header_info').html(html);
});

$(document).ready(function(){
$('#seats_list').change(function(){
  var num = $(this).val();
  var HTML='';
  for(i = 0; i < num; i++){
    HTML += "<input type='text' id='attendees' name='attendees"+i+"' required><br/>"
    }
  $('#newDiv').html(HTML);
})                  

})
document.getElementById("seats_list").innerHTML = options;
 // add row
/*   $("#addRow").click(function () {
     var html = '';
     html += '<input type="text" id="attendees" name="attendees[]" >';

     $('#newRow').append(html);
 });

 // remove row
 $(document).on('click', '#removeRow', function () {
     $(this).closest('#inputFormRow').remove();
 });*/
 
function validateForm() {
let x = document.forms["bookingform"]["clientname"].value;
if (x == "") {
  alert("Please enter your name");
  return false;
}

/*  var term = document.forms["bookingform"]["clientname"].value;
var re = new RegExp("/^[a-z][a-z\s]*$/");
if (re.test(term))
{
    return true;
   }
 else
   {
   alert("Only letters and spaces are allowed.");
   return false;
   }*/

/*let y = document.forms["bookingform"]["clientemail"].value;
if (y == "") {
  alert("Please enter your email");
  return false;
}
*/


 
/*var term_mail = document.forms["bookingform"]["clientemail"].value;
var re_mail = new RegExp("/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/");
if (re_mail.test(term_mail))
{
    return true;
   }
 else
   {
   alert("invalid email.");
   return false;
   }*/
 
let z = document.forms["bookingform"]["seats_list"].value;
if (z == "0") {
  alert("Please select  the number of seats");
  return false;
}
   

}

function showMessage(){
var clientName = document.getElementById("inputclientname").value;
var clientEmail = document.getElementById("inputclientemail").value;
var clientContact = document.getElementById("inputclientcontact").value;
var numberofseats = document.getElementById("seats_list").value;
var attendeesnames = document.getElementById("attendees").value;


var html = '';	
html += "Name :"+clientName+"</br>";
html += "Email :"+clientEmail+"</br>";
html += "Mobile :"+clientContact+"</br>";
html += "selected seats :"+numberofseats+"</br>";
html += "Attendees :"+attendeesnames+"</br>";

$('#result').html(html);


          
          display_message.innerHTML= message;
      }