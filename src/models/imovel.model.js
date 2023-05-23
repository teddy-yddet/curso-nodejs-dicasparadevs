const { MongoTailableCursorError } = require("mongodb");
const mongoose = require("mongoose");

const imovelSchema = new mongoose.Schema(
  {
    tipo:
    {
      type: String,
      required: true,
    },
    descricao: {
      type: String,
    },

    local: {
      type: Object,
      require: true
    }
  }
);

const ImovelModel = mongoose.model("Imovel", imovelSchema);

module.exports = ImovelModel;
