function sendmail(){
    var name= $('#name').val();
    var email= $('#email').val();
    var subject = ("Contact form submission from holagraphcorporate"); 
    var message= $('#message').val();
  
    var Body='Name: '+name+'<br>Email:'+email+'<br>Subject: '+subject+'<br>Message: '+message;
    if(email != "" && name != ""){
      Email.send({
        SecureToken: "00a9d24f-c64d-4162-8eda-17a6cbe543d2",
        To : 'info@reach-tech.com',
        From : "holagraphcorporate@gmail.com",
        // Host : "",
        // Username : "",
        // Password : "",
        // To : '',
        // From : "",
        Subject : "Contact Form holagraphcorporate from:"+name,
        Body : Body
      }).then(message => {
        if(message == "OK"){
        alert("Thankyou We will get back to you soon");
        window.location.reload();
    }
    else{
        alert(message);
        window.location.reload();
    }
});
    }
    else{
      alert("Kindly Fill All The Details")
    }
  }
  