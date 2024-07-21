import app from "./app";
import { config } from "./config";

const { port } = config;

app.listen(config.port, () => console.log(`Server running on port ${port}`));
