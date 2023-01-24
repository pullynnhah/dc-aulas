import { v4 as uuid } from "uuid";

const orders_db = [];

const logInfo = (req, res, next) => {
  const url = req.protocol + "://" + req.get("host") + req.originalUrl;
  console.log({ method: req.method, url });
  next();
};

const getId = (req, res, next) => {
  const { id } = req.params;

  const index = orders_db.findIndex(order => order.id === id);
  if (index === -1) return res.status(404).json({ error: "Order not found" });
  req.orderIndex = index;

  next();
};

const postOrders = (req, res) => {
  const { order, clientName, price } = req.body;
  if (!(order && clientName && price)) {
    return res.status(422).json({ error: "All fields are required" });
  }
  const newOrder = { id: uuid(), order, clientName, price, status: "pending" };
  orders_db.push(newOrder);
  res.status(201).json(newOrder);
};

const getOrders = (req, res) => res.json(orders_db);

const putOrder = (req, res) => {
  const index = req.orderIndex;
  const { order, clientName, price } = req.body;
  const { id, status, oldOrder, oldClientName, oldPrice } = orders_db[index];
  orders_db[index] = {
    id,
    status,
    order: order ?? oldOrder,
    clientName: clientName ?? oldClientName,
    price: price ?? oldPrice
  };

  res.status(204).json();
};

const deleteOrder = (req, res) => {
  const index = req.orderIndex;
  orders_db.splice(index, 1);
  res.status(204).json();
};

const getOrder = (req, res) => {
  const index = req.orderIndex;
  res.json(orders_db[index]);
};

const patchOrder = (req, res) => {
  const index = req.orderIndex;
  orders_db[index].status = "ready";
  res.status(204).json();
};

const middlewares = { logInfo, getId };
const controllers = { postOrders, getOrders, putOrder, deleteOrder, getOrder, patchOrder };
export { middlewares, controllers };
