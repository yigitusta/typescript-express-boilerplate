import express = require("express");

// Create a new express application instance
const app: express.Application = express();

app.get("/", function (req: express.Request, res: express.Response) {
    res.send("Hello World!");
});

app.listen(process.env.PORT || 3000, function () {
    console.log("Example index listening on port 3000!");
});