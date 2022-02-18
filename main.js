
	$.getJSON("eventdata.json", function(dataJSON) {
    var listItemString = $('#listItem').html();
  var dataObject = dataJSON;
  dataObject.forEach(buildNewList);
  
  function buildNewList(item, index) {
  
    var html = "";
    var topic = "";
      //var queryString = Object.keys(item).map(key => key + '=' + item[key]).join('&');
    var queryString = Object.keys(item).map((key) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(item[key])
  }).join('&');
    console.log(queryString);
        /*html += "<div class='event'>";*/
        html += "<div class='event-box'>";
        html += "<div class='event-image'>";
        html += "<img src='" + item.event_img + "' >";
        html += "</div>";
        html += "<div class='event-second'>";
        html += "<div class='event-title'>";
        html += "<p>" + item.event_name + "</p>";
        html += "</div>";

        html += "<div class='event-info'>";
        html += "<div class='event-date'>" + item.event_date + "</div>";
;
      
      if (item.tickets_availbility > 0) {
        html += "<div class='event-seats'>Tickets Available: <p class='color-red'>" + item.tickets_availbility + "</p></div>";
        html += "</div>";
        html += "<a href='book_now.html?event=" + queryString +"'>";
        html += "<div class='event-booking'><i class='fa fa-calendar-check-o' aria-hidden='true'></i> book event</div>";
        html += "</div>";
        html += "</a>";
        html += "</div>";
       /* html += "<div class='mob-icon'><i class='fa fa-calendar-check-o' aria-hidden='true'></i>"
      html += "</div>";
      html += "</div>";*/
      } else {
        html += "<div class='event-seats'>Tickets Available: <p class='color-red'>N/A</p></div>";
        html += "</div>";
        html += "<div class='event-soldout'><i class='fa fa-calendar-times'></i> SOLD OUT</div>";
        html += "</div>";
        html += "</div>";
       /* html += "<div class='mob-icon'><i class='fa fa-calendar-times' aria-hidden='true'></i>"
      html += "</div>";
      html += "</div>";*/
        }
        
  $('#event_list').append(html);
      //doc.getElementById(item).innerHTML = html;
  
  }
  });


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