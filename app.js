const express = require("express")
const app = express()
const mailchimp = require("@mailchimp/mailchimp_marketing")

const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static("public"))

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
});

//Setting up MailChimp
mailchimp.setConfig({
    //replace with your api key
    apiKey: "63fdaxxxxxxxxxxxxxxxxxxxx-us17",
    //replace with last us-XX from api key
    server: "xxxx"
});


app.post("/", function (req, res) {

    //change the values to according to your input attributes in html
    const firstName = req.body.firstName;
    const secondName = req.body.lastName;
    const email = req.body.email;

    //Your list/audience id
    const listId = "63c8b1fa3c";

    //Creating an object with the users data
    const subscribingUser = {
        firstName: firstName,
        lastName: secondName,
        email: email
    };

    //Uploading the data to the server
    async function run() {
        const response = await mailchimp.lists.addListMember(listId, {
            email_address: subscribingUser.email,
            status: "subscribed",
            merge_fields: {
                FNAME: subscribingUser.firstName,
                LNAME: subscribingUser.lastName
            }
        });

        //If all goes well logging the contact's id
        res.sendFile(__dirname + "/success.html")
        console.log(
            `Successfully added contact as an audience member. The contact's id is ${response.id
            }.`
        );
    }
    //Running the function and catching the errors (if any)
    //If anything goes wrong send the faliure page
    run().catch(e => res.sendFile(__dirname + "/failure.html"));
});
app.post('/failure', (req, res) => {
    res.redirect("/")
})
app.listen(process.env.PORT || 3000, function () {
    console.log("Server is running on port 3000");
});



