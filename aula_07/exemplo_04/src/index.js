import express, { json } from "express";

import { middlewares, controllers } from "./handlers.js";

const app = express();
const PORT = 3001;

app.use(json());
app.use(middlewares.logInfo);

app.post("/orders", controllers.postOrders);
app.get("/orders", controllers.getOrders);

app.put("/orders/:id", middlewares.getId, controllers.putOrder);
app.delete("/orders/:id", middlewares.getId, controllers.deleteOrder);
app.get("/orders/:id", middlewares.getId, controllers.getOrder);
app.patch("/orders/:id", middlewares.getId, controllers.patchOrder);

app.listen(PORT, () => console.log(`🚀 @: http://localhost:${PORT}`));
