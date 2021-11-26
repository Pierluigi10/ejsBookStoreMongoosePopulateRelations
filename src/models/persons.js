import mongoose from "mongoose";

const Schema = mongoose.Schema;

const personsSchema = Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
  },
  { collection: "persons" }
);
const PersonsModel = mongoose.model("Person", personsSchema);

export default PersonsModel;
