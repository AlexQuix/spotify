const 
    controllerRouter = require("./controllers/controllerRouter"),
    errorController = require("./controllers/errorController"),
    listCursos = require("./public/js/listCursos"),
    comprarCurs = require("./public/js/comprarCurs"),
    express = require("express"),
    app = express();

    app.use(express.static("public"))

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.set("view engine", "ejs");

//plantillas de ejs
app.get("/", (req, res)=>{
    let cursos = listCursos.list;
    controllerRouter.routerEJS(req, res, "index", cursos);
});
app.get("/contact", (req, res)=>{
    controllerRouter.routerEJS(req, res, "contact");
});
app.get("/cursos", (req, res)=>{
    let cursos = listCursos.list;
    controllerRouter.routerEJS(req, res, "courses", cursos);
});
app.get("/cursos/:especialidad", (req, res)=>{
    let inf = comprarCurs.mapa.get(`${req.params.especialidad}`)
    controllerRouter.routerEJS(req, res, "comprarCurs", inf)
});
app.post("/thanks", (req, res)=>{
    controllerRouter.routerEJS(req, res, "thanks")
});

//Midleware de errores

app.use(errorController.errorServer);
app.use(errorController.errorFile);

app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"));

console.log("El servidor esta escuchando el puerto 3000");