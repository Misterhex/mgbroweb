'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PageSchema = new Schema({ 
  pageNo: Number,
  mangaSrc: String,
  hostedMangaSrc: String
 });
 
var V2ChapterSchema = new Schema({
  category: {
   name: String,
   categoryImage: String,
   hostedCategoryImage: String,
   altName: String,
   yearOfRelease: Number,
   status: String,
   author: String,
   artist: String,
   genres: { type : Array , "default" : [] },
   description: String
  },
  chapter: {
   name: String
  },
  chapterNo: Number,
  totalPages: Number,
  pages: [PageSchema],
  scrappedUnixTIme: Number
});

module.exports = mongoose.model('v2chapter', V2ChapterSchema);