const url = "http://124.222.206.192:8080/wedding/submitRegistration"; // Replace with your backend API URL

// Create the data object to be sent in the request body
const data = {
  name: "name",
  arriveDate: "arriveDate",
  personNum: "personNumber",
  phone: "phone",  
};

// Send the POST request
fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json", // Set the appropriate content-type for your request
  },
  body: JSON.stringify(data), // Convert the data object to a JSON string
})
  .then((response) => response.json()) // Parse the response as JSON
  .then((responseData) => {
    // Handle the response data
    console.log(responseData);
  })
  .catch((error) => {
    // Handle any errors
    console.error("Error:", error);
  });
