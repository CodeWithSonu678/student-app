import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="text-center mt-10 space-y-6">

      <h2 className="text-4xl font-bold">Welcome 🎉</h2>
      <p className="text-gray-400">
        Manage student data easily with modern UI
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10 px-4">

        <div 
          onClick={() => navigate("/add")}
          className="bg-gray-800 p-6 rounded-xl shadow cursor-pointer hover:scale-105 transition"
        >
          <h3 className="text-xl font-semibold mb-2">➕ Add Students</h3>
          <p className="text-gray-400">Quickly add student records</p>
        </div>

        <div 
          onClick={() => navigate("/students")}
          className="bg-gray-800 p-6 rounded-xl shadow cursor-pointer hover:scale-105 transition"
        >
          <h3 className="text-xl font-semibold mb-2">🔍 Search</h3>
          <p className="text-gray-400">Find students instantly</p>
        </div>

        <div 
          onClick={() => navigate("/students")}
          className="bg-gray-800 p-6 rounded-xl shadow cursor-pointer hover:scale-105 transition"
        >
          <h3 className="text-xl font-semibold mb-2">✏️ Edit & Delete</h3>
          <p className="text-gray-400">Manage data easily</p>
        </div>

      </div>

      <div className="mt-12 text-gray-400">
  <p>✔ Fast student management</p>
  <p>✔ Clean and responsive UI</p>
  <p>✔ Built using React & Tailwind</p>
</div>
    </div>
  );
}

export default Home;