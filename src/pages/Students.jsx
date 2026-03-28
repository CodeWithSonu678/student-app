import { useState } from "react";
import { motion } from "framer-motion";

function Students({ students, setStudents }) {
  const [search, setSearch] = useState("");
  const [editData, setEditData] = useState(null);

  // Delete
  const deleteStudent = (roll) => {
    setStudents(students.filter((s) => s.roll !== roll));
  };

  // Edit open
  const handleEdit = (student) => {
    setEditData(student);
  };

  // Update
  const handleUpdate = () => {
    const updated = students.map((s) =>
      s.roll === editData.roll ? editData : s
    );
    setStudents(updated);
    setEditData(null);
    alert("Student updated ✅");
  };

  // Search filter
  const filtered = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center">
      

      {/* 🔍 Search */}
      <input
        className="p-2 mb-4 w-full max-w-md rounded bg-gray-800 outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="🔍 Search student..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* ✏️ Edit Form */}
      {editData && (
        <div className="bg-gray-800 p-4 rounded mb-4 w-full max-w-md">
          <h3 className="mb-2 font-bold text-center">Edit Student</h3>

          {/* Name */}
          <input
            className="w-full p-2 mb-2 rounded bg-gray-700 outline-none"
            value={editData.name}
            onChange={(e) =>
              setEditData({ ...editData, name: e.target.value })
            }
          />

          {/* Roll (Disabled) */}
          <input
            className="w-full p-2 mb-2 rounded bg-gray-700 opacity-50 cursor-not-allowed"
            value={editData.roll}
            disabled
          />

          {/* Course */}
          <input
            className="w-full p-2 mb-2 rounded bg-gray-700 outline-none"
            value={editData.course}
            onChange={(e) =>
              setEditData({ ...editData, course: e.target.value })
            }
          />

          <button
            onClick={handleUpdate}
            className="w-full bg-green-500 hover:bg-green-600 p-2 rounded"
          >
            Update
          </button>
        </div>
      )}

      {/* ❗ Empty State */}
      {filtered.length === 0 && (
        <p className="text-gray-400 text-center">No students found</p>
      )}

      {/* 📋 Student List */}
      <div className="grid gap-4 w-full max-w-md">
        {filtered.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800 p-4 rounded-lg flex justify-between items-center shadow"
          >
            <div>
              <p className="font-bold text-lg">{s.name}</p>
              <p className="text-sm text-gray-400">
                Roll: {s.roll} | {s.course}
              </p>
            </div>

            <div className="space-x-2">
              <button
                onClick={() => handleEdit(s)}
                className="bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded text-sm"
              >
                Edit
              </button>

              <button
                onClick={() => deleteStudent(s.roll)}
                className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-sm"
              >
                Delete
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Students;