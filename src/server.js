import  express  from "express";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import bodyParser from "body-parser";
require("dotenv").config();
//dotenv.config({ path: __dirname+'/.env' });
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
viewEngine(app);
initWebRoutes(app);

let port =process.env.PORT || 8080;

app.listen(port, () => {
    console.log("test"+port);
})
