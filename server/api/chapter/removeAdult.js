var _ = require('lodash');

module.exports = function(chapters){
	var result = _.filter(chapters,function(c){
		var isAdult =  _.contains(c.category.genres, "Ecchi") || _.contains(c.category.genres, "Mature");
		return !isAdult;
	});
	return result;
};
