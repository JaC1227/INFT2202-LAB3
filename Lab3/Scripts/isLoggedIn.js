"use strict";

(() =>{
    // check if the user is already logged in
    if(sessionStorage.getItem("user"))
    {
        // redirect to the secure area
        location.href = "contact-list.html";
        // user is logged in
        sessionStorage.setItem("isLoggedIn", true);
    } else {
        // user is not logged in
        sessionStorage.setItem("isLoggedIn", false);
    }

})();
