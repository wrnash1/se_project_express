const router = require("express").Router();
const clothingItem = require("./clothingItem");
const userRouter = require("./users");

// --- FIX: Import NOT_FOUND ---
const { SERVER_ERROR, NOT_FOUND } = require("../utils/errors");

router.use("/items", clothingItem);
router.use("/users", userRouter);

router.use((req, res) => {
  res
    // --- FIX: Change to NOT_FOUND ---
    .status(NOT_FOUND)
    .send({ message: "Router Not Found" });
});

module.exports = router;