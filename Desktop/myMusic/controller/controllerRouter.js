exports.routerEJS = (res, file, object)=>{
    res.render(file, object);
}

exports.errorPag= (req, res)=>{
    res.status(404);
    res.sendFile("/public/404.html", {root: "./"})
}