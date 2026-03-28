import { motion } from "framer-motion";

function StudentList({ students, deleteStudent, handleEdit }) {
  return (
    <div className="grid gap-4">
      {students.length === 0 && (
        <p className="text-gray-400 text-center">No students found</p>
      )}

      {students.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 p-4 rounded-xl flex justify-between items-center shadow"
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
  );
}

export default StudentList;