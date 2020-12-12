var express = require('express');
const Pusher = require("pusher");
const PORT = process.env.PORT || 5000

const pusher = new Pusher({
    appId: process.env.appId,
    key: process.env.key,
    secret: process.env.secret,
    cluster: "eu",
    useTLS: true
});

var app = express();

app.get('/api/event', function (request, response) {
    pusher.trigger("my-channel", "my-event", {
        message: "Event Message"
    });
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));