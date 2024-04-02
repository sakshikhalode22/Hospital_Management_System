// Method to populate registered Email id onto console: retrieveData()
const retrieveData = () => {
    if (typeof Storage !== "undefined") {
      console.log(`Registered Email id is: ${localStorage.getItem("Email")}`);
    } else {
      alert("local storage is not working");
    }
  };
  
  // Method validate mobile pattern: validateMobile()
  const validateMobile = () => {
    const phonePattern = /(?=[0-9]{10})/;
    if (!phonePattern.test(document.getElementById("mobile").value)) {
      document.getElementById("mobileMessage").innerHTML =
        "Mobile number should be exactly ten digits!!";
    } else {
      mobileFlag = true;
      document.getElementById("mobileMessage").innerHTML = "";
    }
  };
  
  // Method to add consultation fee details and invoke IIFE logic: closure()
  const checkDetails = () => {
    confirmDetails();
    const fee = consult();
    document.getElementById("content").innerHTML =
      `Consultation fee to be paid at counter: ${fee} INR`;

  };
  
  // IIFE function: consult()
  const consult = (() => {
    let fee = 0;
    return () => {
      if (document.forms[0].elements[4].checked) {
        const inputEmail = document.getElementById("email").value;
        const userName = document.getElementById("name").value;
        const emailSaved = localStorage.getItem("Email");
  
        if (inputEmail === emailSaved) {
          alert(`Hi ${userName}, Please carry your previous health records!`);
          return (fee = 170);
        } else {
          alert(
            `Please enter registered EmailId for fee concession, else default fee will be charged`
          );
          return (fee = 280);
        }
      } else {
        return (fee = 280);
      }
    };
  })();
  
  // Method to generate alert dialog box based on patient type value
  const confirmDetails = () => {
    const userName = document.getElementById("name").value;
    if (document.forms[0].elements[4].checked) {
      alert(`Hi ${userName}, Please carry your previous health records!`);
    } else {
      alert(`Hi ${userName}, Patient ID has been sent to your registered phone number!`);
    }
  };