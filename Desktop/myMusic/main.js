const
    router = require("./controller/controllerRouter"),
    express = require("express"),
    app = express();

app.use(express.urlencoded({extended: false})); 
app.use(express.json());

app.set("view engine", "ejs");

app.use(express.static("public"));

//Agregando rutas
app.get("/", (req, res)=>{
    router.routerEJS(res, "index");
});
app.get("/home", (req, res)=>{
    router.routerEJS(res, "home");
});
//Manejando errores
app.use(router.errorPag);

app.listen(3000);

console.log("Servidor listo");
