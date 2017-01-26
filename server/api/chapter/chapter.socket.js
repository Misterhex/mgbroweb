/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Chapter = require('./chapter.model');

exports.register = function(socket) {
  Chapter.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Chapter.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('chapter:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('chapter:remove', doc);
}