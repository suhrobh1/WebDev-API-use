'use strict'

import { response } from "express";


function buttonHandler(e){
    e.preventDefault();



    function directCall(){
        console.log("direct call function")

        fetch('https://randomuser.me/api/')
            .then((res) => response.json())
            .then((data) => console.log(data))




        let user = document.createElement('p');
        user.textContent = "Nothing for now!"
        document.getElementById('userInfo').appendChild(user);
        



    }



    function expressCall(){
        console.log("express call function")
    }


document.getElementById('directCall').addEventListener('click', directCall);
document.getElementById('expressCall').addEventListener('click', expressCall);

}

document.addEventListener("DOMContentLoaded", buttonHandler);