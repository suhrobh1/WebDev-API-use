// import { response } from "express";


'use strict'



function buttonHandler(e) {
    e.preventDefault();

    async function directCall() {
        console.log("direct call function")

        let userData = []

        await fetch('https://randomuser.me/api/')
            .then((res) => res.json())
            .then((data) => {
                // console.log(data['results'][0])
                let userData = data['results'][0]
                displayData(userData)
            })
            .catch((err) => console.log(err))
    }




    async function expressCall(e) {
        e.preventDefault()

        await fetch('/express')
            .then((res) => res.json())
            .then((data) => {
                 console.log("random.js log", data)
                let userData = data['results'][0]
                displayData(userData)
            })
            .catch((err) => console.log(err))
    }

    
    function displayData(userData) {
              
        let firstName = userData['name']['first']
        console.log(firstName)
        let user = document.createElement('p');
        user.textContent = `${firstName} - das user!`
        document.getElementById('userInfo').appendChild(user);
    }


    
    document.getElementById('directCall').addEventListener('click', directCall);
    document.getElementById('expressCall').addEventListener('click', expressCall);

}

document.addEventListener("DOMContentLoaded", buttonHandler);