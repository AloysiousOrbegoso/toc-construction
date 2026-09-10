import { useState } from "react";

import initialChecklist from "../../../../data/adminData/safetyChecklist";

import { CheckIcon } from "../../../ui/admin-icons/AdminIcons";

function SafetyChecklist() {
  const [items, setItems] = useState(initialChecklist);

  function toggleItem(id) {
    const updated = items.map((item) => {
      if (item.id === id) {
        return { ...item, done: !item.done };
      }
      return item;
    });

    setItems(updated);
  }

  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <p className="mb-4 text-lg font-bold text-black">Safety Checklist</p>

      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              className={
                "flex h-4 w-4 items-center justify-center border " +
                (item.done
                  ? "border-blue-700 bg-blue-700 text-white"
                  : "border-black")
              }
            >
              {item.done && <CheckIcon />}
            </button>

            <span
              className={
                "text-sm " +
                (item.done ? "text-gray-400 line-through" : "text-black")
              }
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SafetyChecklist;
