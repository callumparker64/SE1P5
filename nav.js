const fs = require('fs');
const { json } = require('stream/consumers');
// const data = require('./JSON/data.json');
// const users = require('./JSON/users.json');
// const reviews = require('./JSON/reviews.json');

fs.readFile("./JSON/users.json","utf-8",(err, jsonString) => {
    if(err){
        console.log("Error")
    }
    else{
        try{
            const data = JSON.parse(jsonString);
            console.log(data.name)
        }
        catch(e){
            console.log("Parse Error",e)
        }

    }

})

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

function addreview(){
    let review = document.getElementById("review_box").value;
    alert("Review: "+review)
}

function editreview(){
    let review = document.getElementById("review_box").value;
    alert("Review: "+review)
}

function deletereview(){
    let review = document.getElementById("review_box").value;
    alert("Review: "+review)
}