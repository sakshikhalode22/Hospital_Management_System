// method to check form submission value .
let feedbackFlag = false;

const feedback = () => {
  const inputName = document.getElementById("name").value;
  const inputEmail = document.getElementById("email").value;
  const inputMobile = document.getElementById("mobile").value;
  const inputFeedback = document.getElementById("feedbackMessage").value;

  if (!inputEmail || !inputMobile || !inputName || !inputFeedback) {
    alert("Please enter the details");
  } else {
    feedbackFlag = true;
    document.getElementById("message").innerHTML = "Thanks for your feedback.";
  }
};

const validateName = () => {
  const length = document.getElementById("name").value.length;
  if (length < 5 || length > 10) {
    document.getElementById("nameMessage").innerHTML =
      "Name should have minimum 5 characters";
  } else {
    firstNameFlag = true;
    document.getElementById("nameMessage").innerHTML = "";
  }
};

const validateEmail = () => {
  const emailPattern = new RegExp("(?=.*@)(?=.+.com)");
  if (!emailPattern.test(document.getElementById("email").value)) {
    document.getElementById("emailMessage").innerHTML =
      "Email id should contain @ and .com in it";
  } else {
    emailFlag = true;
    document.getElementById("emailMessage").innerHTML = "";
  }
};

const validateMobile = () => {
  const phonePattern = new RegExp("(?=[0-9]{10})");
  if (!phonePattern.test(document.getElementById("mobile").value)) {
    document.getElementById("mobileMessage").innerHTML =
      "Mobile number should be exactly ten digits";
  } else {
    mobileFlag = true;
    document.getElementById("mobileMessage").innerHTML = "";
  }
};
