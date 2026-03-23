const mongoose = require("mongoose");

const userCoordinatesDetailsSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    index: true
  },
  location: {
    type: {
      type: String,
      enum: ["Point"],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true,
      validate: {
        validator: function (val) {
          return val.length === 2;
        },
        message: "Coordinates must be [lng, lat]"
      }
    }
  }
}, { timestamps: true });

userCoordinatesDetailsSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("UserCoordinates", userCoordinatesDetailsSchema);