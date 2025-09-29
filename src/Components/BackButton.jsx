// src/components/BackButton.jsx
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="fixed top-25 left-6 z-50 flex items-center gap-2 
                 bg-white shadow-md rounded-full px-3 py-2 
                 text-gray-800 hover:bg-gray-100 
                 transition-all duration-300 
                 md:hidden" // 🚀 md se upar hide rahega
    >
      <ArrowLeft className="w-5 h-5" />
      <span className="text-sm font-medium"></span>
    </button>
  );
};

export default BackButton;
