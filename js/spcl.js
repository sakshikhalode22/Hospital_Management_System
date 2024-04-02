const loadData = () => {
  //Declaration of JSON Array Object
  const jsonResponse = [
    { name: "Plastic and Cosmetic Surgery", location: "Delhi" },
    { name: "Radiology Surgery", location: "Mumbai" },
    { name: "Neuro sciences", location: "Hyderabad" },
    { name: "Psychiatry", location: "Delhi" },
    { name: "Oncology", location: "West Bengal" },
    { name: "Pulmonology", location: "Karnataka" },
    { name: "Endocrinology", location: "Kerala" },
    { name: "Stress Management", location: "Chennai..." },
  ];

  jsonResponse.forEach((element) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${element.name}, ${element.location}`;
    document.getElementById("here").appendChild(listItem);
  });
};

//Self-invoking function declaration

window.onload = loadData;
