import { useDispatch } from "react-redux";
import { login } from "./authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(login());
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Login
        </h2>

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Mock Login
        </button>
      </div>
    </div>
  );
};

export default Login;
