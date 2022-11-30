// create a schema for reminder app
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ReminderSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    date: {
      type: Date,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

// export the model
const Reminder = mongoose.model("Reminder", ReminderSchema);
module.exports = Reminder;
