function signin(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if(username == "username" && password == "password1"){
        alert("Login Successful");
        window.location.href = "game.html"
    }
    else{
        alert("Incorrect Username or password please try again");
    }
}


function signup(){
    let name = document.getElementById("su_name").value;
    let dob = document.getElementById("su_dob").value;
    let username = document.getElementById("su_username").value;
    let password = document.getElementById("su_password").value;

    
    alert("Name: "+name+" DOB: "+dob+" Username: "+username+" Password: "+password)
    window.location.href = "game.html"

}