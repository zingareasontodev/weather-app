
const phoneInput = document.getElementById("phone");
const networkIcon = document.querySelector(".network-icon");
const airtelNetwork = document.querySelector(".attachment-icon-airtel");
const gloNetwork = document.querySelector(".attachment-icon-glo");
const nineMobileNetwork = document.querySelector(".attachment-icon-ninemobile");
const inputField = document.getElementById("inputField");
const attachmentIcon = document.getElementById("attachmentIcon");

// Map of phone number prefixes to network provider names
const networkProviders = {
  "0803": "MTN",
  "0806": "MTN",
  "0813": "MTN",
  "0810": "MTN",
  "0814": "MTN",
  "0816": "MTN",
  "0703": "MTN",
  "0706": "MTN",
  "0903": "MTN",
  "0906": "MTN",
  "0805": "Glo",
  "0905": "Glo",
  "0811": "Glo",
  "0815": "Glo",
  "0705": "Glo",
  "0807": "Glo",
  "0915": "Glo",
  "0701": "Airtel",
  "0802": "Airtel",
  "0808": "Airtel",
  "0708": "Airtel",
  "0702": "Airtel",
  "0902": "Airtel",
  "0907": "Airtel",
  "0901": "Airtel",
  "0809": "9mobile",
  "0817": "9mobile",
  "0818": "9mobile",
  "0908": "9mobile",
  "0909": "9mobile",
  "0809": "9mobile",
  // Add more prefixes as needed
  // Added the prefix
};

// phoneInput.addEventListener("input", updateNetworkIcon);

// function updateNetworkIcon() {
//   const phoneNumber = phoneInput.value;
//   const prefix = phoneNumber.substring(0, 4);

//   if (networkProviders[prefix] === "MTN") {
//     networkIcon.style.display = "block";
//   } else if (networkProviders[prefix] === "Airtel") {
//     airtelNetwork.style.display = "block";
//   } else if (networkProviders[prefix] === "Glo") {
//     gloNetwork.style.display = "block";
//   } else if (networkProviders[prefix] === "9mobile") {
//     nineMobileNetwork.style.display = "block";
//   } else {
//     networkIcon.style.display = "none";
//     airtelNetwork.style.display = "none";
//     gloNetwork.style.display = "none";
//     nineMobileNetwork.style.display = "none";
//   }
// }

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".nav-collapse");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
});

inputField.addEventListener("input", function () {
  const phoneNumber = inputField.value;
  const prefix = phoneNumber.substring(0, 4);
  if (networkProviders[prefix] === "MTN" && inputField.value.trim() !== "") {
    attachmentIcon.style.opacity = 1;
  } else if (
    networkProviders[prefix] === "Airtel" &&
    inputField.value.trim() !== ""
  ) {
    airtelNetwork.style.opacity = 1;
    // airtelNetwork.style.display = "block";
  } else if (
    networkProviders[prefix] === "Glo" &&
    inputField.value.trim() !== ""
  ) {
    gloNetwork.style.opacity = 1;
    // gloNetwork.style.display = "block";
  } else if (
    networkProviders[prefix] === "9mobile" &&
    inputField.value.trim() !== ""
  ) {
    nineMobileNetwork.style.opacity = 1;
    // nineMobileNetwork.style.display = "block";
  } else {
    attachmentIcon.style.opacity = 0;
    airtelNetwork.style.opacity = 0;
    gloNetwork.style.opacity = 0;
    nineMobileNetwork.style.opacity = 0;
  }
});

//some more modification on the input


function incorrectNumber() {
  
  let v0 = Object.keys(networkProviders)[0];
  let v1 = Object.keys(networkProviders)[1];
  let v2 = Object.keys(networkProviders)[2];
  let v3 = Object.keys(networkProviders)[3];
  let v4 = Object.keys(networkProviders)[4];
  let v5 = Object.keys(networkProviders)[5];
  let v6 = Object.keys(networkProviders)[6];
  let v7 = Object.keys(networkProviders)[7];
  let v8 = Object.keys(networkProviders)[8];
  let v9 = Object.keys(networkProviders)[9];
  let v10 = Object.keys(networkProviders)[10];
  let v11 = Object.keys(networkProviders)[11];
  let v12 = Object.keys(networkProviders)[12];
  let v13 = Object.keys(networkProviders)[13];
  let v14 = Object.keys(networkProviders)[14];
  let v15 = Object.keys(networkProviders)[15];
  let v16 = Object.keys(networkProviders)[16];
  let v17 = Object.keys(networkProviders)[17];
  let v18 = Object.keys(networkProviders)[18];
  let v19 = Object.keys(networkProviders)[19];
  let v20 = Object.keys(networkProviders)[20];
  let v21 = Object.keys(networkProviders)[21];
  let v22 = Object.keys(networkProviders)[22];
  let v23 = Object.keys(networkProviders)[23];
  let v24 = Object.keys(networkProviders)[24];
  let v25 = Object.keys(networkProviders)[25];
  let v26 = Object.keys(networkProviders)[26];
  let v27 = Object.keys(networkProviders)[27];
  let v28 = Object.keys(networkProviders)[28];
  let v29 = Object.keys(networkProviders)[29];
  let v30 = Object.keys(networkProviders)[30];
  let v31 = Object.keys(networkProviders)[31];

  const element = document.getElementById('inputField');
  const value2 = element.value;
  const value = value2.substring(0, 4)

  if (value2.length == 11) {
    
  if (value == v0|| value == v1 || value == v2  || value == v3 || value == v4 || value == v5 || value == v6 || value == v7 || value == v8 || value == v9 || value == v10 || value == v11 || value == v12 || value == v13 || value == v14 || value == v15 || value == v16 || value == v17 || value == v18 || value == v19 || value == v20 || value == v21 || value == v22 || value == v23 || value == v24 || value == v25 || value == v26 || value == v27 || value == v28 || value == v29 || value == v30 || value == v31 ) 
  {
    return
  }else
    element.style = "background-color: red";
  }
  
  else {
    element.style = "background-color: green; color:white";
  }

  }