const express = require("express");

const client = require("@mailchimp/mailchimp_marketing");
let app = express();
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));


app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html");


})






client.setConfig({
  apiKey: "02457a255e6f48ce15b7fe5d4ab98418-us13",
  server: "us13",
});





app.post("/", function(req, res){

    const firstname = req.body.fname;
    const lastname = req.body.lname;
    const email = req.body.email;

    





const list_id = "072999c3fc";


    
 const run = async () => {





    const response = await client.lists.batchListMembers(list_id, {
      
        members: [{



            email_address: email,
            status: "subscribed",
            merge_fields: {
          
              FNAME: firstname,
              LNAME: lastname
          
            }
          
         


        }],


 
     

    });

    res.sendFile(__dirname + "/success.html");

     


  };
  run().catch(e => res.sendFile(__dirname + "/failure.html"));



});




app.post("/failure", function(req, res){

    res.redirect("/");
});

app.listen(process.env.PORT || 3000, function(){

    console.log("Server is up and running at Port 3000");
});


//apiKey = e35de323745b3d9d4d167ed1d2868639-us9
//listID = 6857b0acb6