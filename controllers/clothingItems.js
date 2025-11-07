// controllers/clothingItems.js

const ClothingItem = require("../models/clothingItem");
const {
  CREATED,
  SERVER_ERROR,
  SUCCESS,
  NOT_FOUND,
  BAD_REQUEST, // Make sure to import all needed codes
} = require("../utils/errors");

//
// --- ADDED BACK ---
// CREATE a new item
//
const createItem = (req, res) => {
  const { name, weather, imageUrl, owner } = req.body;

  ClothingItem.create({ name, weather, imageUrl, owner })
    .then((item) => {
      res.status(CREATED).send({ data: item });
    })
    .catch((err) => {
      console.error(err);
      // You can add validation error checking here too
      if (err.name === "ValidationError") {
        return res.status(BAD_REQUEST).send({ message: err.message });
      }
      res.status(SERVER_ERROR).send({ message: err.message });
    });
};

//
// --- ADDED BACK ---
// GET all items
//
const getItems = (req, res) => {
  ClothingItem.find({})
    .then((items) => res.status(SUCCESS).send(items))
    .catch((err) => {
      console.error(err);
      res.status(SERVER_ERROR).send({ message: "Error from getItems", err });
    });
};

//
// --- YOUR CORRECTLY UPDATED FUNCTION ---
//
const updateItem = (req, res) => {
  const { itemId } = req.params;
  const { imageUrl } = req.body;

  ClothingItem.findByIdAndUpdate(itemId, { $set: { imageUrl } })
    .orFail()
    .then((item) => {
      res.status(SUCCESS).send({ data: item });
    })
    .catch((err) => {
      console.error(err);
      if (err.name === "DocumentNotFoundError") {
        return res.status(NOT_FOUND).send({ message: "Item not found" });
      }
      if (err.name === "CastError") {
        return res.status(BAD_REQUEST).send({ message: "Invalid item ID" });
      }
      res.status(SERVER_ERROR).send({ message: "Error from updateItem", err });
    });
};

//
// --- YOUR CORRECTLY UPDATED FUNCTION ---
//
const deleteItem = (req, res) => {
  const { itemId } = req.params;

  ClothingItem.findByIdAndDelete(itemId)
    .orFail()
    .then((item) => {
      res.status(SUCCESS).send({ data: item });
    })
    .catch((err) => {
      console.error(err);
      if (err.name === "DocumentNotFoundError") {
        return res.status(NOT_FOUND).send({ message: "Item not found" });
      }
      if (err.name === "CastError") {
        return res.status(BAD_REQUEST).send({ message: "Invalid item ID" });
      }
      res.status(SERVER_ERROR).send({ message: "Error from deleteItem", err });
    });
};

module.exports = { createItem, getItems, updateItem, deleteItem };