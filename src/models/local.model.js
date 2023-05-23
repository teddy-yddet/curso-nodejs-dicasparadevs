const mongoose = require("mongoose");

const localSchema = new mongoose.Schema({
  cidade: {
    type: String,
    required: true,
  },
  logradouro: {
    type: String,
    required: true,
  },
  cidade: {
    type: String,
    required: true,
  },
  estado: {
    type: String,
    required: true,
    minlength: 7,
  },
});

const LocalModel = mongoose.model("Local", userSchema);

module.exports = LocalModel;
