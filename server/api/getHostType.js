module.exports = function(req){
    var mangaSite = req.get("x-manga-site");
    var host_type = mangaSite === "mangaxyz" ? "mangaxyz" : "mangahappy" ;
    return host_type;
}