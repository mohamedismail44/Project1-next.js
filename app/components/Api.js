"use client";
import React, { useEffect } from "react";
import { useState } from "react";

export const metadata = {
  title: "Api use client test",
};
export default function ApiUseClient() {
  const [Todo, setTodo] = useState([]);

  async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    setTodo(posts);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section className="container mx-auto p-4">
        <div className=" grid grid-cols-3 gap-2">
          {Todo.map((ele, index) => (
            <div key={index} className="   text-center bg-emerald-700  m-1 p-2">
              <h1 className="text-2xl font-semibold">{ele.title}</h1>
              <div>{ele.body}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
