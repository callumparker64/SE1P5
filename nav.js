const fs = require('fs');

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

// readJson('./JSON/data.json',(err,data) => {
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data.users[0].name);
//         fs.writeFile('./JSON/users.json',JSON.stringify(data,null,2),err =>{
//         if(err){
//                 console.log(err);
//             }
//             else{
//                 console.log("Success");
//             }
//         })
//     }
// })


// fs.appendFile('./JSON/data.JSON',JSON.stringify(newUser),err =>{
//     if(err){
//             console.log(err);
//         }
//         else{
//             console.log("Success");
//         }
// })


function signin(){
    const users = {"users":[
        { "id":"0", "name":"John", "dob":"10/05/87", "username":"username1",  "password":"12345" },
        { "id":"1", "name":"Adam", "dob":"27/08/94", "username":"username2",  "password":"test123" },
        { "id":"2", "name":"Steve", "dob":"21/04/88", "username":"username3",  "password":"pass123" }
    ]}
    let loggedIn = false;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    for(let i = 0; i <= users.users.length - 1;i++)
    {
        if(username == users.users[i].username && password == users.users[i].password){
            alert("Login Successful");
            loggedIn = true;
        }
    }
    if(loggedIn === true){
        window.location.href = "game.html";
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

    const newUser = {
        "id": '2',
        "name": name,
        "dob": dob,
        "username": username,
        "password": password
    }

    const jsonString = JSON.stringify(newUser);
    console.log(jsonString)


    alert(jsonString)
    window.location.href = "game.html"

}

function getReview(){
    const reviews = {"reviews":[
        { "uid":"0", "rid":"0", "name":"John", "review":"In ornare metus dapibus scelerisque pretium. Proin aliquam euismod nulla vel vehicula.", "rating":"5" },
        { "uid":"0", "rid":"1", "name":"John", "review":" Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "rating":"4" },
        { "uid":"1",  "rid":"0", "name":"Adam", "review":"estibulum volutpat dignissim enim id elementum. Morbi molestie pretium tristique. Cras accumsan dui eget arcu efficitur aliquet. Nullam sed nulla ut lacus dictum finibus. Aenean aliquam mi felis, nec tincidunt metus vestibulum ac. Donec ut pretium justo, eget interdum diam. Interdum et malesuada fames ac ante ipsum primis in faucibus.", "rating":"1" },
        { "uid":"2",  "rid":"0", "name":"Steve", "review":"Mauris et lorem rhoncus, cursus eros ut, pellentesque ante. Nunc laoreet ante sit amet diam sodales, vitae ornare odio finibus. Cras non nisi a diam imperdiet ultricies. Etiam consequat condimentum sem, vitae feugiat ipsum condimentum at.", "rating":"3" }
    ]}
    for(const element of reviews.reviews)
    {
        let elements = document.createElement("p");
        elements.innerText = (element.review);
        document.getElementById("reviews").appendChild(elements);
    }
    

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