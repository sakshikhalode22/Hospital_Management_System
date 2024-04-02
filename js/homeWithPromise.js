const doctorDetails = () => {
    return new Promise((resolve, reject) => {
      let XHR;
      if (window.ActiveXObject) {
        XHR = new ActiveXObject("Microsoft.XMLHTTP");
      } else if (window.XMLHttpRequest) {
        XHR = new XMLHttpRequest();
      }
      XHR.open("GET", "data/doctorData.json", true);
      XHR.onreadystatechange = () => {
        if (XHR.readyState === 4) {
          if (XHR.status === 200) {
            resolve(XHR.responseText);
          } else {
            reject(new Error("Unable to retrieve doctors data"));
          }
        }
      };
      XHR.send();
    });
  };
  
  doctorDetails()
    .then(response => {
      const d = JSON.parse(response);
      for (let i = 0; i < 5; i++) {
        document.getElementById("data" + i).innerHTML = `
          <td>
            <br/>
            <img src="${d[i].imgUrl}" />
            <br/><br/>
            <b>Name: </b>${d[i].name}<br/>
            <b>Consultant: </b>${d[i].consultant}<br/>
            <b>Expertise: </b>${d[i].expertise}
          </td>
        `;
      }
    })
    .catch(error => {
      console.error(error);
    });