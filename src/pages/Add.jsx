import { useState } from "react";
import { motion } from "framer-motion";

function Add({ students, setStudents }) {
  const [data, setData] = useState({
    name: "",
    roll: "",
    course: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudents([...students, data]);
    setData({ name: "", roll: "", course: "" });
  };

  return (
    <div className="flex justify-center">
      <motion.form
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-gray-800 p-6 rounded-xl shadow-lg w-80 space-y-4"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-bold text-center">Add Student</h2>

        <input
          className="w-full p-2 rounded bg-gray-700"
          placeholder="Name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />

        <input
          className="w-full p-2 rounded bg-gray-700"
          placeholder="Roll"
          value={data.roll}
          onChange={(e) => setData({ ...data, roll: e.target.value })}
        />

        <input
          className="w-full p-2 rounded bg-gray-700"
          placeholder="Course"
          value={data.course}
          onChange={(e) => setData({ ...data, course: e.target.value })}
        />

        <button className="w-full bg-blue-500 hover:bg-blue-600 p-2 rounded">
          Add Student
        </button>
      </motion.form>
    </div>
  );
}

export default Add;