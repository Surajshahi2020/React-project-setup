// pages/Register.tsx
import ReusableForm from "../../components/form/formWrapper";
import { useNavigate } from "react-router-dom";

const registerFields = [
  { name: "name", label: "Full Name", type: "text" },
  { name: "email", label: "Email", type: "email" },
  { name: "password", label: "Password", type: "password" },
  { name: "confirmPassword", label: "Confirm Password", type: "password" },
];

export default function RegisterPage() {
  const navigate = useNavigate();

  const handleRegister = (values: Record<string, any>) => {
    // Store credentials ONLY for testing
    localStorage.setItem(
      "registeredUser",
      JSON.stringify({
        id: "1",
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );

    console.log("User registered:", values);
    navigate("/login");
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">Register</h1>
      <ReusableForm
        fields={registerFields}
        initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
        onSubmit={handleRegister}
      />
    </div>
  );
}
