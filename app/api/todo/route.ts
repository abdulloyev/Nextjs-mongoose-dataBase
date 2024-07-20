import Todo from "@/database/todo.model";
import { connectToDatabase } from "@/libs/mongoose";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  await connectToDatabase();
  const todos = await Todo.find();
  return await NextResponse.json({ todos });
}

export async function POST(req: Request) {
  const { text } = await req.json();
  await connectToDatabase();
  const todo = await Todo.create({ text });

  console.log(text);
  return NextResponse.json({ todo });
}
