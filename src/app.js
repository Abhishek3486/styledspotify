const express = require("express");
const app = express();
app.use(express.json());
const AuthRoute = require("./routes/auth");

app.use("/",AuthRoute);


// app.get("/",(req,res) => {
//     res.send("ok");
// })
// app.post("/",(req,res) => {
//     console.log(req.body)
//     res.send(req.body)
// })


app.listen(8001, () => {
    console.log("server listening at 8001")
})