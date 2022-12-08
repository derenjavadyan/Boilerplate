app.get("/bookstore", function (req, res, next) {
  // Your route data
  var bookStore = [
    {
      title: "Templating with Pug",
      author: "Winston Smith",
      pages: 143,
      year: 2017,
    },
    {
      title: "Node.js will help",
      author: "Guy Fake",
      pages: 879,
      year: 2015,
    },
  ];
  res.render("index", {
    bookStore: bookStore,
  });
});
