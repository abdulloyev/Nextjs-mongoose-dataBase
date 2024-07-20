"use server";

import Todo from "@/database/todo.model";
import { connectToDatabase } from "@/libs/mongoose";

export const getTodos = async () => {
  try {
    await connectToDatabase();
    const todos = await Todo.find();

    return JSON.parse(JSON.stringify(todos));
  } catch (err) {
    throw err;
  }
};

export const createTodo = async (text: string) => {
  try {
    await connectToDatabase();
    const todos = await Todo.create({ text });
    return JSON.parse(JSON.stringify(todos));
  } catch (err) {
    throw err;
  }
};

export const updateTodo = async (id: string, text: string) => {
  try {
    await connectToDatabase();
    const todo = await Todo.findByIdAndUpdate(id, { text }, { new: true });
    return JSON.parse(JSON.stringify(todo));
  } catch (err) {
    throw err;
  }
};

export const deleteTodo = async (id: string) => {
  try {
    await connectToDatabase();
    await Todo.findByIdAndDelete(id);
    return { message: "Todo deleted successfully" };
  } catch (err) {
    throw err;
  }
};
