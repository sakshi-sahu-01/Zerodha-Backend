const { model } = require("mongoose");
const HoldingSchema = require("../Schemas/HoldingSchema");

const HoldingModel = model("holding", HoldingSchema);

module.exports = { HoldingModel };
