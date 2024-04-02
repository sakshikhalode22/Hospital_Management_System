// Method to make asynchronous call and invoke doctorData.json file and call displayDoctorDetails(XHR) method
// This was without promise please check homeWithPromise.js for promise
/*
const doctorDetails = () => {
  let XHR;
  if (window.ActiveXObject) {
    //For Microsoft Browsers
    XHR = new ActiveXObject("Microsoft.XMLHTTP");
  } else if (window.XMLHttpRequest) {
    //For Mozilla and Non Microsoft Browsers
    XHR = new XMLHttpRequest();
  }
  XHR.open("GET", "data/doctorData.json", true);
  XHR.onreadystatechange = () => {
    displayDoctorDetails(XHR);
  }; //function(){displayDoctorDetails(XHR);};
  XHR.send();
};
// displayDoctorDetails(XHR) method
const displayDoctorDetails = (XHR) => {
  document.getElementById("tableMain").style.display = "table";
  if (XHR.readyState == 4) {
    if (XHR.status == 200) {
      const d = JSON.parse(XHR.responseText);
      console.log(d);
      for (i = 0; i < 5; i++) {
        document.getElementById("data" + i).innerHTML =
          "<td><br/>" +
          '<img src="' +
          d[i].imgUrl +
          '"  /><br/><br/>' +
          "<b>" +
          "Name: " +
          "</b>" +
          d[i].name +
          "<br/>" +
          "<b>" +
          "Consultant: " +
          "</b>" +
          d[i].consultant +
          "<br/>" +
          "<b>" +
          "Expertise: " +
          "</b>" +
          d[i].expertise +
          " </td>";
      }
    } else {
      console.log("Unable to retrieve doctors data");
    }
  }
};

window.onload = doctorDetails;
*/


// method which is invoked from Home.html
const proceedAppointment=() =>{
  const location = document.getElementById("Location");
  const locationSelected = location.options[location.selectedIndex].value;
  const dptToVisit = document.getElementById("dpt");
  const dptToVisitSelected = dptToVisit.options[dptToVisit.selectedIndex].value;
  const date = document.getElementById("dateField").value;
  const time = document.getElementById("time").value;

  if (locationSelected === "" || dptToVisitSelected === "" || date === "" || time === "") {
    alert("Please enter the details");
  } else {
    alert(
      `Appoinment booked for ${dptToVisitSelected} at location ${locationSelected} on ${date}   Click OK to proceed for further details`
    );
    
    window.open("appointment.html");

  }
}


//method for invoking blood.html page
function bloodAvailability() {
  window.open("blood.html", "_self", "menubar = no, toolbar = no, resizable = no ");
}
