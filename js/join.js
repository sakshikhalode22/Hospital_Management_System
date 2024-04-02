joinFlag = false;

const join = () => {
  const inputName = document.getElementById("name").value;
  const inputEmail = document.getElementById("email").value;
  const inputMobNumber = document.getElementById("mobile").value;

  if (
    inputEmail.length === 0 ||
    inputMobNumber.length === 0 ||
    inputName.length === 0
  ) {
    alert("Please enter the details");
  } else {
    joinFlag = true;
    document.getElementById("message").innerHTML =
      "We will get back to you shortly. Thank you.";
  }
};

//Email validation
const validateEmail = () => {
  const emailPattern = new RegExp("(?=.*@)(?=.+.com)");
  if (!emailPattern.test(document.getElementById("email").value)) {
    document.getElementById("emailMessage").innerHTML =
      "Email id should contain @ and .com in it!!";
  } else {
    emailFlag = true;
    document.getElementById("emailMessage").innerHTML = "";
  }
};

//Mobile validation
const validateMobile = () => {
  const phonePattern = new RegExp("(?=[0-9]{10})");
  if (!phonePattern.test(document.getElementById("mobile").value)) {
    document.getElementById("mobileMessage").innerHTML =
      "Mobile number should be exactly ten digits!!";
  } else {
    mobileFlag = true;
    document.getElementById("mobileMessage").innerHTML = "";
  }
};
