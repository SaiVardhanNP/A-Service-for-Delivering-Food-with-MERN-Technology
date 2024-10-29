import express from 'express'
import authMiddleware from '../middleware/auth.js'
import { placeOrder, userOrders, verifyOrder, allOrders, updateStatus } from '../controllers/orderController.js'

const orderRouter = express.Router()

// Route for placing an order
orderRouter.post('/place', authMiddleware, placeOrder)

// Route for verifying an order
orderRouter.post('/verify', verifyOrder)

// Route for getting all orders of a user
orderRouter.post('/userorders', authMiddleware, userOrders)

// Route for getting all orders
orderRouter.get('/allorders', allOrders)

// Route for updating the status of an order
orderRouter.post('/status', updateStatus)

export default orderRouter