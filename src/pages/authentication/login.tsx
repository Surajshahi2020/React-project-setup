import ReusableForm from '../../components/form/formWrapper';

const loginFields = [
  { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email' },
  { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter your password' },
];

export default function LoginPage() {
  const handleLogin = (values: Record<string, any>) => {
    console.log('Login submitted:', values);
    // You can send this to an API
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">Login</h1>
      <ReusableForm
        fields={loginFields}
        initialValues={{ email: '', password: '' }}
        onSubmit={handleLogin}
      />
    </div>
  );
}
