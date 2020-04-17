exports.errorServer = (req, res)=>{
    res.status(404);
    res.sendFile("./public/404.html", {
        root: "./"
    });
}

exports.errorFile = (req, res)=>{
    res.status(500);
    res.sendFile("./public/500.html", {
        root: "./"
    });
}