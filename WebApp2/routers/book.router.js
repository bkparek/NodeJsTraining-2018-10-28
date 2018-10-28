const express = require("express");

const router = new express.Router();

router.get("/details",function(request,response){
    response.send("<h1> Book Details </h1>");
    });

    module.exports = router;
