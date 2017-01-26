module.exports = function (sql, host_type){
    var dbHitTableName;
    
    if (host_type === "mangaxyz") {
        dbHitTableName = "db_hit";
    } else {
        dbHitTableName = "db_hit_mangahappy";
    }
    
    var replacedSql = replaceAll(sql, "{{db_hit}}" , dbHitTableName)
        
    return replacedSql;
}

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}