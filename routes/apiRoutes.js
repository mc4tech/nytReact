const axios = require("axios");
const router = require("express").Router();

router.get("/recipes", (req, res) => {
  console.log(req);
  axios
    .get({
    	url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
    	qs: {
    		'api-key': "800615177aef4833ba3d32c6e164e88a",
    		'q': "nfl",
		    'begin_date': "20170101",
		    'end_date': "20171003",
		    'sort': "newest"
   			// params: req.query }
   		}})
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
