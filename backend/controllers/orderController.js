import Order from "../models/orderModel.js";
import asyncHandler from "express-async-handler";

//@description fetch order
//post request, private
export const addOrder = asyncHandler(async (req, res) => {
  const {
    paymentMethod,
    totalPrice,
    shippingPrice,
    taxPrice,
    orderItems,
    shippingAddress,
    itemsPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No order was created");
    return;
  } else {
    const order = new Order({
      paymentMethod,
      user: req.user._id,
      totalPrice,
      shippingPrice,
      taxPrice,
      orderItems,
      shippingAddress,
      itemsPrice,
    });
    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  }
});
//@description fetch order by Id
//get request, private
export const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );
  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

//@description fetch order by Id (pay)
//get request, private //paypal and paystack
export const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  //paypal
  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address,
    };
    //code for paystack
    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

//@description: get my orders
//@access private
export const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.json(orders);
});

//@description: get all orders
//@access private/admin
export const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({}).populate("user", "id name");
  res.json(orders);
});

//@description: update order to delivered
//@access: private/admin

export const updateOrderToDelivered = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    order.isDelivered = true;
    order.deliveredAt = Date.now();

    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});
