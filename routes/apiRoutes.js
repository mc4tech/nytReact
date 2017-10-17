const axios = require("axios");
const router = require("express").Router();

router.get("/articles", (req, res) => {
  // console.log(req.query);
  // console.log(res);
  const baseUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
  const key = "api-key=800615177aef4833ba3d32c6e164e88a";
  const url = baseUrl + key;
  console.log(url);
  console.log("****");
  axios
    .get(url, { params: req.query})
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
    // console.log(req.query);
    console.log("22222");
    console.log("8888");
});

module.exports = router;
