exports.routerEJS = (req, res, file, cursos)=>{
    res.render(file, {cursos: cursos});
}