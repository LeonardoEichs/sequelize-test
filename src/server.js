const express = require("express");
const app = express();

const routes = require("./routes");

require("./database");

app.use(express.json());
app.use(routes);

const PORT = 3000;

app.listen(PORT, () => console.log(`Server working at ${PORT}`));
