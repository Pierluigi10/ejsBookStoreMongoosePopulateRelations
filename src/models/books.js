import mongoose from "mongoose";
import PersonsModel from "../models/persons.js";
import CommentsModel from "../models/comments.js";

const Schema = mongoose.Schema;

const booksSchema = Schema(
  {
    title: String,
    author: { type: Schema.ObjectId, ref: "Person" },
    url: String,
    customers: [{ type: Schema.ObjectId, ref: "Person" }],
    comments: [{ type: Schema.ObjectId, ref: "Comment" }],
    isbn: String,
  },
  { collection: "books" }
);
const BooksModel = mongoose.model("Book", booksSchema);

export default BooksModel;
