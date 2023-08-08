const { log } = require("console");
const app = require("http");
const fs = require("fs");
const index = fs.readFileSync("index.html", "utf-8");
const data2 = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const product = data2.products[0];
const data = { age: 5 };
const server = app.createServer((req, res) => {
  console.log("Server started");
  res.setHeader("Dummy", "Dummyvalue");
  if (req.url.startsWith("/product")) {
    console.log(req.url, req.method);
    const id = req.url.split("/")[2];
    const product_id = data2.products[id];
    // console.log(id);
    res.setHeader("Content-Type", "text/html");
    const modified_index = index
      .replace("**title**", product_id.title)
      .replace("**url**", product_id.thumbnail)
      .replace("**price**", product_id.price)
      .replace("**rating**", product_id.rating);
    //   res.end(modifiedIndex);
    res.end(modified_index);
  }

  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      const modified_index = index
        .replace("**title**", product.title)
        .replace("**url**", product.thumbnail)
        .replace("**price**", product.price)
        .replace("**rating**", product.rating);
      //   res.end(modifiedIndex);
      res.end(modified_index); // Remove JSON.stringify here
      break;

    case "/api":
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(data));
      break;
  }
});

server.listen(8080);
