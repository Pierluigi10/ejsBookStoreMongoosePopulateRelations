import mongoose from "mongoose";

const Schema = mongoose.Schema;

const commentsSchema = Schema(
  {
    message: String,
    datetime: String,
    author: { type: Schema.ObjectId, ref: "Person" },
  },
  { collection: "comments" }
);
const CommentsModel = mongoose.model("Comment", commentsSchema);

export default CommentsModel;
