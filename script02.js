const url = "https://124.222.206.192:8080/wedding/submitRegistration"; // Replace with your backend API URL

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission behavior

  // Retrieve the values from the form input fields
  const name = document.getElementById("name").value;
  const arriveDate = document.getElementById("arriveDate").value;
  const personNum = document.getElementById("personNum").value;
  const phone = document.getElementById("phone").value;

  // Create the data object to be sent in the request body
  const data = {
    name: name,
    arriveDate: arriveDate,
    personNum: personNum,
    phone: phone,
  };

  // Send the POST request
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((responseData) => {
      // Handle the response data
      console.log(responseData);
    })
    .catch((error) => {
      // Handle any errors
      console.error("Error:", error);
    });
});
