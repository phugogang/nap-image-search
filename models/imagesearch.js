var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/imagesearch/:keyword', (req, res) => {
    var keyword = req.params.keyword;
    var offset = req.query.offset || 10;
   
   
    var options = {
        url: `https://api.cognitive.microsoft.com/bing/v5.0/images/search?q=${keyword}&count=15&offset=${offset}`,
        headers: {
            'Ocp-Apim-Subscription-Key': 'd21e90df15f74408bf92f9a775719b92'
  }
};


    function callback(error, response, results) {        
        if (!error && response.statusCode == 200) {
            var info = JSON.parse(results);
            
            var data = info.value.map((img) => {
                return {
                    name: img.name,
                    thumbnailUrl: img.thumbnailUrl,                  
                   contentUrl: img.contentUrl
                }
            })

            res.status(200).json(data);


                       
        }
    }

    request(options, callback);
  
    
    





});




module.exports = router;


