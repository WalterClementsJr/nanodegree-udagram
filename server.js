import express from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles, errorResponse} from './util/util.js';


// Init the Express application
const APP = express();

// Set the network port
const PORT = process.env.PORT || 8082;

// Use the body parser middleware for post requests
APP.use(bodyParser.json());

// GET /filteredimage?image_url={{URL}}
// endpoint to filter an image from a public url.
// IT SHOULD
//    1. validate the image_url query
//    2. call filterImageFromURL(image_url) to filter the image
//    3. send the resulting file in the response
//    4. deletes any files on the server on finish of the response
// QUERY PARAMATERS
//    image_url: URL of a publicly accessible image
// RETURNS
//   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]
/**************************************************************************** */

// Root Endpoint Displays a simple message to the user
APP.get("/", async (req, res) => {
  res.send("try GET /filteredimage?image_url={{}}")
});

APP.get("/filteredimage", async (req, res) => {
  const image_url= req.query["image_url"];

  if (!image_url) {
    console.info("URL is empty")
    return res.status(400).send(errorResponse("Bad request", "URL not valid"));
  } else {
    filterImageFromURL(image_url).then((result) => {
      res.sendFile(result);
      res.on("finish", () => deleteLocalFiles([result]));
    }).catch((err) => {
      console.info(err);
      res.status(422).send(errorResponse("Unprocessable Content", err.message));
    })
  }
})

// Start the Server
APP.listen(PORT, () => {
  console.log(`server running http://localhost:${PORT}`);
});
