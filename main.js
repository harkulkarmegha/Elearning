        //  login page validation
        function validated(){
            var email1=document.getElementById('email1').value;
            var pass1=document.getElementById('pass1').value;   
   
   
 
 if (email1==""){
           document.getElementById('email1_id').innerHTML="  **please fill email field.";
       return false;
  }
      if(email1.indexOf('@') <= 0) {
       document.getElementById('email1_id').innerHTML="  **@ invalid position.";
       return false;
  }


     if (pass1==""){
           document.getElementById('passwords1').innerHTML="  **please fill password field.";
       return false;
  }
 if ((pass1.length <=5) || (pass1.length >20)) {
         document.getElementById('passwords1').innerHTML=" ** password length should be between 5 and 20.";
       return false;
 }     

if (pass1==""){
     document.getElementById('passwords1').innerHTML="  **please fill password field.";
 return false;
}
if ((pass1.length <=5) || (pass1.length >20)) {
   document.getElementById('passwords1').innerHTML=" ** password length should be between 5 and 20.";
 return false;
}     
   
}

// register page validation
         
function validate(){
             var user=document.getElementById('user').value;
       
            var email=document.getElementById('email').value;
            var pass=document.getElementById('pass').value;   
   
   
     if (user==""){
           document.getElementById('username').innerHTML="  **please fill username field.";
       return false;
  }
    
      if ((user.length <= 2) || (user.length >15)) {
         document.getElementById('username').innerHTML=" ** user length should be between 2 and 15";
       return false;
 }     
     if(! isNaN(user)) {
      document.getElementById('username').innerHTML="  **only characters are allowed.";
       return false;
}
 
 if (email==""){
           document.getElementById('email_id').innerHTML="  **please fill email field.";
       return false;
  }
      if(email.indexOf('@') <= 0) {
       document.getElementById('email_id').innerHTML="  **@ invalid position.";
       return false;
  }


     if (pass==""){
           document.getElementById('passwords').innerHTML="  **please fill password field.";
       return false;
  }
 if ((pass.length <=5) || (pass.length >20)) {
         document.getElementById('passwords').innerHTML=" ** password length should be between 5 and 20.";
       return false;
 }     

if (pass1==""){
     document.getElementById('passwords1').innerHTML="  **please fill password field.";
 return false;
}
if ((pass1.length <=5) || (pass1.length >20)) {
   document.getElementById('passwords1').innerHTML=" ** password length should be between 5 and 20.";
 return false;
}     
   
}



// contact us page validation

// function validate(){
//     var name=document.getElementById('name').value;

//    var mobile=document.getElementById('mobilenumber').value;

//    var email=document.getElementById('email').value;



// if (name==""){
//   document.getElementById('name').innerHTML="  **please fill name field.";
// return false;
// }

// if ((name.length <= 2) || (name.length >15)) {
// document.getElementById('name').innerHTML=" ** name length should be between 2 and 15";
// return false;
// }     
// if(! isNaN(name)) {
// document.getElementById('name').innerHTML="  **only characters are allowed.";
// return false;
// }



// if (email==""){
//   document.getElementById('email_id').innerHTML="  **please fill email field.";
// return false;
// }
// if(email.indexOf('@') <= 0) {
// document.getElementById('email_id').innerHTML="  **@ invalid position.";
// return false;
// }


// if (mobile==""){
//   document.getElementById('mobileno').innerHTML="  **please fill mobile number field.";
// return false;
// }
// if(isNaN(mobile)) {
// document.getElementById('mobileno').innerHTML="  **must write digit only characters are not allowed.";
// return false;
// }
// if (mobile.length != 10) {

// document.getElementById('mobileno').innerHTML="  **enter valid mobile number.";
// return false;

// }   
// }