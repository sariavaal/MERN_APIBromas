const { PORT } = require("./config/settings");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./config/mongoose.config");

const JokeRouter = require("./routes/jokes.route");
app.use("/api/jokes", JokeRouter);

app.listen(PORT, () => console.log(`Listening on port: http://localhost:${PORT}`));
