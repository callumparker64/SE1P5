const fs = require('fs');
const { json } = require('stream/consumers');
// const data = require('./JSON/data.json');
// const users = require('./JSON/users.json');
// const reviews = require('./JSON/reviews.json');
function readJson(filePath, cb){
    fs.readFile(filePath,'utf-8',(err, jsonString) => {
        if(err){
            return cb && cb(err);
        }
        else{
            try{
                const data = JSON.parse(jsonString);
                return cb && cb(null,data);
            }
            catch(e){
                return cb && cb(e);
            }

        }

    }) 
}

const newUser = {
    "id": '2',
    "name": 'Steve',
    "dob":'27/08/94',
    "username":'username2',
    "password":'test123'
}
const jsonString = JSON.stringify(newUser);
console.log(jsonString)


readJson('./JSON/data.json',(err,data) => {
    if(err){
        console.log(err);
    }
    else{
        console.log(data.users[0].name);
        fs.writeFile('./JSON/users.json',JSON.stringify(data,null,2),err =>{
        if(err){
                console.log(err);
            }
            else{
                console.log("Success");
            }
        })
    }
})


// fs.appendFile('./JSON/data.JSON',JSON.stringify(newUser),err =>{
//     if(err){
//             console.log(err);
//         }
//         else{
//             console.log("Success");
//         }
// })


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