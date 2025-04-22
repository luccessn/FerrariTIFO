const mongosee = require("mongoose");

const ImagesSchema = new mongosee.Schema({
  hamilton: {
    propf: String,
    ham1: String,
    hamf251: String,
    hamf252: String,
    hamf253: String,
  },
  leclerc: {
    propf: String,
    lecl1: String,
    hamf251: String,
  },
  team: {
    hamlecl: String,
    teamF1: String,
    teamF2: String,
  },
  ferrari: {
    frlogo: String,
    frenzo: String,
  },
});

const ImagesModel = mongosee.model("images", ImagesSchema);
module.exports = ImagesModel;
