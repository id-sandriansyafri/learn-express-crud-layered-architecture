

import app from "./config/server.config.js";
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Express API running in port: " + PORT);
});
