const express = require("express");
const {
  newOrder,
  getSingleOrder,
  myOrders,
  getAllOrders,
  deleteOrder,
  updateOrder,
} = require("../controllers/orderController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/order/new").post(isAuthenticatedUser, newOrder);
router
  .route("/order/:id")
  .get(isAuthenticatedUser, getSingleOrder)
  .delete(isAuthenticatedUser, deleteOrder);
router.route("/orders/me").get(isAuthenticatedUser, myOrders);
// router.route("/orders/:id").delete(isAuthenticatedUser, deleteOrder);
router
  .route("/admin/orders")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAllOrders);

router
  .route("/admin/order/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateOrder);
// .delete(isAuthenticatedUser, deleteOrder);

module.exports = router;
