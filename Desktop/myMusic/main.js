const
    router = require("./controller/controllerRouter"),
    express = require("express"),
    app = express();

app.set("view engine", "ejs")

app.use(express.static("public"));

app.get("/", (req, res)=>{
    router.routerEJS(res, "index")
});

app.listen(3000);

console.log("Servidor listo");
