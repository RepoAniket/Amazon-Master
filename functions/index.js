const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")(
  "sk_test_51HQ9KKFRy5Ojpoqd31uFOlUWnfjnRWsjeBNp8OaTTdi4FVem2ZQ9wvH6ag9zLDf91Xhn29Djb3MkFRtTr44WYcWJ00QZqLNRJ2"
);

// - API


// - App config
const app = express();


// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send ('HELLO WORLD'))

app.post('/payments/create', async (request,response) => {
    const total = request.query.total;

    console.log('Payment Request Received!!!! for this amount >>>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr",
    });

    response.status(201).send ({
        clientSecret: paymentIntent.client_secret,
    });


});

// - listen command
exports.api = functions.https.onRequest(app)
