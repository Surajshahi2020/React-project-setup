// pages/Login.tsx
import ReusableForm from "../../components/form/formWrapper";
import { useAuthStore } from "../../stores/auth";
import { useNavigate } from "react-router-dom";


export default function LoginPage() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const storedUser = JSON.parse(
    localStorage.getItem("registeredUser") || "null"
  );

  const handleLogin = (values: Record<string, any>) => {
    if (
      values.email === storedUser?.email &&
      values.password === storedUser?.password
    ) {
      // fake token
      const fakeToken = "demo-token-123";

      login(fakeToken, {
        id: storedUser.id,
        name: storedUser.name,
      });
      console.log("Login success");
      navigate("/dashboard");

    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">Login</h1>
      <ReusableForm
        fields={[
          { name: "email", label: "Email", type: "email" },
          { name: "password", label: "Password", type: "password" },
        ]}
        initialValues={{
          email: storedUser?.email || "",
          password: "",
        }}
        onSubmit={handleLogin}
      />
    </div>
  );
}
