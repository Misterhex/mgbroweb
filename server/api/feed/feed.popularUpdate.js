var _ = require('lodash');
var popularUpdate = require('../chapter/chapter.popularUpdate');

module.exports = function(host_type, callback){
    popularUpdate(host_type, function(err, result){
    if (err) return callback(err);

        result = _.map(result, function(i){
            return {
                "manga_link": "http://mangaxyz.com/manga/" + i.category_name + "/" + i.chapter_no + "/1",
                "manga_name": i.category_name,
                "chapter_num": i.chapter_no,
                "manga_pic": i.hosted_category_image,
            } 
        });
        
        return callback(null, result);
    })  
}