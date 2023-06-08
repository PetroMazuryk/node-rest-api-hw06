const express = require("express");
const ctrl = require("../../controllers/contacts-controller");
const {
  isValidId,
  validateBody,
  authenticate,
  validateBodyFavorite,
} = require("../../middlewars");
const { schemas } = require("../../models/contact");

const router = express.Router();

router.use(authenticate);

router.get("/", ctrl.getAllContacts);

router.get("/:id", isValidId, ctrl.getById);

router.post("/", validateBody(schemas.addSchema), ctrl.addContact);

router.delete("/:id", isValidId, ctrl.deleteContactById);

router.put(
  "/:id",
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.updateContactById
);

router.patch(
  "/:id/favorite",
  isValidId,
  validateBodyFavorite(schemas.uptadeFavoriteSchema),
  ctrl.updateFavorite
);

module.exports = router;
