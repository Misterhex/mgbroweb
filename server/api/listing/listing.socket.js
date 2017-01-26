/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Listing = require('./listing.model');

exports.register = function(socket) {
  Listing.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Listing.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('listing:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('listing:remove', doc);
}