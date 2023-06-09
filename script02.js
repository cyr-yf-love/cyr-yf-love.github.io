const url = "http://124.222.206.192/api.php";//"http://124.222.206.192:8080/wedding/submitRegistration"; // Replace with your backend API URL

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
    $.ajax({
        url:url,
        type:"GET",
        data:data,
        jsonp:"callback",
        jsonpCallback:(result) => {
        console.log('result');
        console.log(result);
            return false;
        },
        success:function(res){
            var res = JSON.parse(res);
            if(res.code == 0){
            $("#myModal").modal();
            }
        }
    });

});
