import PropTypes from "prop-types";

const TaskList = ({ name, done, onToggle, onDelete }) => {
  return (
    <div
      className={`flex w-[100%] items-center border border-gray-400 py-2 px-4 mb-2 rounded-md ${
        done ? "bg-gray-800" : "bg-gray-700"
      }`}
    >
      <input
        type="checkbox"
        className="w-4 h-4 text-[#FFB200] bg-gray-100 border-gray-300 rounded focus:ring-[#FFB200] focus:ring-2 checked:bg-[#FFB200] checked:border-[#FFB200]"
        checked={done}
        onChange={onToggle}
      />
      <p
        className={`ml-2 flex-1 text-sm text-white ${
          done ? "line-through" : ""
        }`}
      >
        {name}
      </p>
      <button
        className="text-[#FFB200] font-bold border border-[#FFB200] py-1 px-4 rounded-lg hover:bg-[#FFB200] hover:text-white"
        onClick={onDelete}
      >
        Delete
      </button>
    </div>
  );
};

TaskList.propTypes = {
  name: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TaskList;
