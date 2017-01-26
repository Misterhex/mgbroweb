var redis = require('redis');
var client = redis.createClient();

function tryFromCacheOrQuery(key, query, res, expiration) {

    expiration = expiration || 300;

    client.get(key, function(err, jsonResult) {

        if (!err && jsonResult) {
            res.setHeader('Content-Type', 'application/json');

            console.log("fetching " + key + " from cache");

            if (jsonResult === "###ERROR###")
                return handleError(res, new Error());

            return res.send(jsonResult);
        } else {
            console.log("fetching " + key + " from query")
            query(function(err, result) {

                console.log(key + " received result from query");

                if (err) {
                    result = "###ERROR###";
                    handleError(res, err);
                    client.set([key, result, "EX", expiration], redis.print);
                } else {
                    res.status(200).json(result);
                    client.set([key, JSON.stringify(result), "EX", expiration], redis.print);
                }

            });
        }
    });
}

function handleError(res, err) {
    return res.status(500).send(err);
}

module.exports = tryFromCacheOrQuery;