// pages/Register.tsx
import ReusableForm from '../../components/form/formWrapper';

const registerFields = [
  { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Enter your full name' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email' },
  { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter your password' },
  { name: 'confirmPassword', label: 'Confirm Password', type: 'password', placeholder: 'Confirm your password' },
];

export default function RegisterPage() {
  const handleRegister = (values: Record<string, any>) => {
    console.log('Registration submitted:', values);
    // Call your registration API here
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">Register</h1>
      <ReusableForm
        fields={registerFields}
        initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
        onSubmit={handleRegister}
      />
    </div>
  );
}

