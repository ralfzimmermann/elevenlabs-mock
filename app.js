var express = require("express");
var app = express();

app.get("/voices", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
    }
);

app.get("/user/subscription", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
    }
);


app.post('/text-to-speech/:id*', function(req, res, next) {
        // res.json({
        //     id: req.params['id'],
        //     body:req.body.text            
        // });    
        const file = `${__dirname}/bVMeCyTHy58xNoL34h3p.mp3`;
        res.download(file); // Set disposition and send it.
    }
);
app.get('/text-to-speech-get/:id*', function(req, res, next) {        
        const file = `${__dirname}/bVMeCyTHy58xNoL34h3p.mp3`;
        res.download(file); // Set disposition and send it.
    }
);


app.listen(3000, () => {
    console.log("Server running on port 3000");
});