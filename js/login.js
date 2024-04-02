const retriveData = () => {
    if (typeof Storage !== "undefined") {
      console.log("Values in retriveData Function");
      console.log(localStorage.getItem("Email"));
      console.log(localStorage.getItem("Password"));
    } else {
      alert("not working");
    }
  };
  
  let attempt = 3;
  
  const login = () => {
    const email = document.getElementById("inputEmail").value;
    const password = document.getElementById("inputPassword").value;
    const [emailSaved, pwdSaved] = [
      localStorage.getItem("Email"),
      localStorage.getItem("Password"),
    ];
  
    if (email.length === 0 || password.length === 0) {
      attempt--; // Decrementing by one.
      alert(
        `Please enter user name and password! You have left ${attempt} attempt;`
      );
  
      // Disabling fields after 3 attempts.
      if (attempt === 0) {
        document.getElementById("inputEmail").disabled = true;
        document.getElementById("inputPassword").disabled = true;
        document.getElementById("submit").disabled = true;
      }
    } else {
      if (email === emailSaved && password === pwdSaved) {
        alert("Credentials validated!");
        location.assign("home.html");
      } else {
        alert("Oops! Wrong credentials! Please try again");
      }
    }
  };