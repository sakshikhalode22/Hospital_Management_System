// to count number of attempts.
let attempt = 3;
let reportFlag = false;
const report = () => {
  const inputEmail = document.getElementById("email");
  const inputPatientId = document.getElementById("patientId");
  const emailSaved = localStorage.getItem("Email");

  if (inputEmail.value.length === 0 || inputPatientId.value.length === 0) {
    attempt--; // Decrementing by one.
    alert(
      `Please enter user name and password! You have left ${attempt} attempt;`
    );

    //Disabling fields after 3 attempts.
    if (attempt === 0) {
      inputEmail.disabled = true;
      inputPatientId.disabled = true;
      document.getElementById("submit").disabled = true;
    }
  } else {
    if (
      [1001, 1002, 1003, 1004, 1005, 1006, 1007].includes(
        Number(inputPatientId.value)
      ) &&
      inputEmail.value === emailSaved
    ) {
      reportFlag = true;
      document.getElementById("message").innerHTML =
        "Lab report has been sent to your registered email ID!";
    } else {
      alert("Oops! Wrong credentials! Please try again");
    }
  }
};
