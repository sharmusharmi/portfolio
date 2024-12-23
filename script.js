// function valid(){
//   var Name=document.getElementById("name");
//   var uname=/^([A-Z a-z])$/
//   var PhoneNo=document.getElementById("phoneno");
//   var num=/^([0-9])$/
//   var Mail = document.getElementById("email");
//   var enter=/^([A-Z a-z 0-9\_]+)@([a-z A-Z 0-9]+).([a-z]+).([a-z])$/

//    if (!enter.test(Mail)){
//     alert("Enter a valid mail")
// }
// else if(Mail==null || Mail==""){
//   alert("Enter a Mail ID")
// }
// else if (Name==null || Name==""){
//   alert("Enter Your Name")
// }
// else if (PhoneNo==null || PhoneNo==""){
//   alert("Enter a Phone Number")
// }
// else if (PhoneNo.length!=10){
//   alert("Phone Nuber must be 10 char")
// }
// else {
//   alert("Login Successfully")
// }
// }


// function valid(){
//     var Name=document.getElementById("name");
//      var uname=/^([A-Z a-z])$/
//      var PhoneNo=document.getElementById("phoneno");
//      var num=/^([0-9])$/
//      var Mail = document.getElementById("email");
//      var enter=/^([A-Z a-z 0-9\_]+)@([a-z A-Z 0-9]+).([a-z]+).([a-z])$/

    
//       // if (Name == null || Name == ""){
//       // alert("Enter Your Name")}

//         if(!uname.test(Name)){
//           alert("Enter a currect Name")
//         }

//       else if (PhoneNo == null || PhoneNo == ""){
//             alert("Enter a Phone Number")}

//             else if (!num.test(PhoneNo)){
//               alert("Enter a Currect Phone Number")
//             }

//              else if (!enter.test(Mail)){
//                   alert("Enter a valid mail")}

//                   else if (PhoneNo.length!=10){
//                     alert("Phone Nuber must be 10 char") }

//                    else {
//                        alert("Subit Successfully")}
//                    }

 




document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const phoneno = document.getElementById("phoneno").value;
    const email = document.getElementById("email").value;
  
    console.log(`Name: ${name}, Phone no:${phoneno}, Email: ${email},`);
    // console.log("Form Data:", { name, email, message });
    alert("Form submitted successfully!");

    
  });


  