const express = require('express');
const app = express();
app.use(express.json());


app.use(myMiddleware);

function myMiddleware(req, res, next) {
    console.log("Inside the middle ware I created");
    next();

}
/**
 * Stich the routes to the server
 */
require("./routes/idea.routes")(app);


/*
*starting the server
*/
app.listen(8080, () => {
    console.log('Sever Started')
})