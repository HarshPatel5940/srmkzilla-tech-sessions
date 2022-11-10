const express = require("express");
const app = express();
app.use(express.json());

let MoviesArr = [
    {
        id: 0,
        name: "Kzilla Rocks",
        ratings: 10.0,
    },
];

app.get("/", function (req, res) {
    console.log("redirecting to /movies");
    res.status(302).redirect("http://localhost:3000/movies");
});

app.get("/movies", function (req, res) {
    res.status(200).json({ data: MoviesArr, message: "Movie Data fetched!" });
});

app.post("/movie/new/", function (req, res) {
    MoviesArr.push(req.body);
    res.status(200).json({ data: MoviesArr });
});

app.delete("/movie/delete/:id", function (req, res) {
    MoviesArr = MoviesArr.filter(function (el) {
        return req.params.id !== el.id.toString();
    });
    res.status(200).json({ data: MoviesArr });
});

app.listen(3000, () => {
    console.log("Server started at PORT: 3000");
    console.log("http://localhost:3000");
});
