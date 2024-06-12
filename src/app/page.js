"use client";
import { goals } from "./data";

import { useState } from "react";

export default function Home() {
  const [goalSelection, setGoalSelection] = useState("");
  return (
    <main className="py-10 max-w-5xl mx-auto">
      <h1 className="text-center font-semibold text-3xl">
        Don't Be Left Behind ⏳
      </h1>
      <p className="mt-16 mb-5">
        Ok, first things first, select what is your goal:
      </p>
      <div className="grid grid-cols-3 gap-10">
        {goals.map((goal) => (
          <div
            className={`border-2 rounded-2xl  ${
              goalSelection == goal.value
                ? "border-green-600 bg-green-100"
                : "bg-slate-100"
            } py-5 px-3 flex flex-col items-center justify-center`}
            onClick={() => setGoalSelection(goal.value)}
            key={goal.value}
          >
            <div className="text-center">
              <p className="text-5xl">{goal.emoji}</p>
              <p className="font-medium my-3">{goal.title}</p>
              <p className="text-sm">{goal.summarizing}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-16 mb-5">
        Now select all of your ingredients around your zone you can buy or just
        you like the most for creating your ultimate diet to reach your GOAL 🎯
      </p>

      <div className="checkbox-group border w-fit">
        <label>Meat</label> <br />
        <label className="checkbox-label">
          <input type="checkbox" id="option1" />
          <span className="custom-checkbox"></span>
          Option 1
        </label>
        <br />
        <label className="checkbox-label">
          <input type="checkbox" id="option2" />
          <span className="custom-checkbox"></span>
          Option 2
        </label>
        <br />
        <label className="checkbox-label">
          <input type="checkbox" id="option3" />
          <span className="custom-checkbox"></span>
          Option 3
        </label>
      </div>
    </main>
  );
}
