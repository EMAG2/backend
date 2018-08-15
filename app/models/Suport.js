const mongoose = require('mongoose');

const SuportSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 32,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
      maxlength: 100,
      lowercase: true,
    },
    subject: {
      type: String,
      required: true,
      maxlength: 100,
    },
    message: {
      type: String,
      required: true,
      maxlength: 1500,
    },
    status: {
      type: Boolean,
      default: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
);

mongoose.model('Suport', SuportSchema);
