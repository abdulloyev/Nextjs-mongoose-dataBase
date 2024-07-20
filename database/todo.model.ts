import { Schema, model, models } from "mongoose";

const TodoSchema = new Schema(
  {
    text: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Todo = models.Todo || model("Todo", TodoSchema);
export default Todo;
