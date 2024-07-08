import { useState } from "react";
import PropTypes from "prop-types";

const TaskForm = ({ onAdd }) => {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      onAdd(taskName);
      setTaskName("");
    }
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="flex border border-1 relative p-2 rounded-md bg-[#17181f]"
      >
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Add new task..."
          className="block w-full p-2 text-white rounded-lg bg-transparent text-xs focus:text-white focus:border-none focus:outline-none"
        />
        <button
          type="submit"
          className="text-[#FFB200] font-bold border border-[#FFB200] py-1 px-4 mx-2 rounded-lg hover:bg-[#FFB200] hover:text-white absolute z-50 right-0 transition"
        >
          +
        </button>
      </form>
    </div>
  );
};

TaskForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default TaskForm;
