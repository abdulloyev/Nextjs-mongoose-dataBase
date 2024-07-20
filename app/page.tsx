"use client";

import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "@/actions/todo.action";

const Page = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    getTodos().then(data => console.log(data));
  }, []);

  const onHandlers = () => {
    createTodo(text).then(data => console.log(data));
  };

  const onUpdate = () => {
    updateTodo("669c0c4fa868f242bbbfa3a6", text).then(data =>
      console.log(data)
    );
  };

  const deleted = () => {
    deleteTodo("669c0c21870416570b69e9d8").then(data => console.log(data));
  };

  return (
    <div className="mt-20 flex flex-col items-center justify-center mx-52">
      <input
        type="text"
        className="form-control"
        placeholder="Luboy narsa yoz...."
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <div className="flex gap-2">
        <button onClick={onHandlers} className="btn btn-primary mt-2">
          Submit
        </button>
        <button onClick={onUpdate} className="btn btn-primary mt-2">
          Update
        </button>
        <button onClick={deleted} className="btn border mt-2">
          Deleted
        </button>
      </div>
    </div>
  );
};

export default Page;
