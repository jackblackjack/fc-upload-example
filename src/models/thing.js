'use strict'
/**
 * Thing model.
 * @version 2021-04-12
 */
const Mongoose = require('mongoose')
      , Schema = Mongoose.Schema

const ThingSchema = new Schema({
  is_deleted: {
    type: Boolean,
    required: true,
    default: false
  },
  attrs: [Schema.Types.Mixed],
}, { strict: false, timestamps: true })

module.exports = Mongoose.model('Thing', ThingSchema)
