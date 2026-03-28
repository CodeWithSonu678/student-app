import { useState } from "react";

function AddStudent({ addStudent }) {
  const [data, setData] = useState({
    name: "",
    roll: "",
    course: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.name || !data.roll || !data.course) return;

    addStudent(data);
    setData({ name: "", roll: "", course: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-md space-y-4"
    >
      <h2 className="text-xl font-bold text-center">Add Student</h2>

      <input
        className="w-full p-2 rounded bg-gray-700 outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Name"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />

      <input
        className="w-full p-2 rounded bg-gray-700 outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Roll Number"
        value={data.roll}
        onChange={(e) => setData({ ...data, roll: e.target.value })}
      />

      <input
        className="w-full p-2 rounded bg-gray-700 outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Course"
        value={data.course}
        onChange={(e) => setData({ ...data, course: e.target.value })}
      />

      <button className="w-full bg-blue-500 hover:bg-blue-600 p-2 rounded font-semibold transition">
        Add Student
      </button>
    </form>
  );
}

export default AddStudent;