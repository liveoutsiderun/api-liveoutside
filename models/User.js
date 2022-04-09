const { Schema, model } = require('mongoose');
const { ENUM_ACTIVITY, ENUM_REGIONS } = require('../utils/const');

const UserSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  birth_date: {
    type: Date,
    required: true,
  },
  activitys: {
    type: [
      {
        type: String,
        enum: ENUM_ACTIVITY,
      },
    ],
  },
  region: {
    type: String,
    enum: ENUM_REGIONS,
    required: true,
  },
  role: {
    type: String,
    default: 'USER_ROLE',
    enum: ['ADMIN_ROLE', 'USER_ROLE'],
  },
  status: {
    type: Boolean,
    default: true,
  },
  terms_conditions: {
    type: Boolean,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model('User', UserSchema);
