const app = require("./src/config/app");
require("./src/config/database");

const PORT = 8000;

app.listen(PORT, () => console.log("Servicio REST Conectado"));