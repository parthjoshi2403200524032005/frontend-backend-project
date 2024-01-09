const express = require("express");
const app = express();
const port = 3000;



app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: " a jokes",
      content: "it is my jokes",
    },
    {
      id: 2,
      title: " 2 jokes",
      content: "it is my 2 jokes",
    },
    {
      id: 3,
      title: " 3 jokes",
      content: "it is my 3 jokes",
    },
    {
      id: 4,
      title: " 4 jokes",
      content: "it is my 4 jokes",
    },
    {
      id: 5,
      title: " 5 jokes",
      content: "it is my 5 jokes",
    },
    {
      id: 6,
      title: " 6 jokes",
      content: "it is my 6 jokes",
    },
    {
      id: 7,
      title: " 7 jokes",
      content: "it is my 7 jokes",
    },
    {
      id: 8,
      title: " 8 jokes",
      content: "it is my 8 jokes",
    },
    {
      id: 9,
      title: " 9 jokes",
      content: "it is my 9 jokes",
    },
    {
      id: 10,
      title: " 10 jokes",
      content: "it is my 10 jokes",
    },
  ];
  res.send(jokes);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
