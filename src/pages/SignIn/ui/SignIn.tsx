import { LoginForm } from "@/features/LoginForm/ui/LoginForm";

const SignIn = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
};

export default SignIn;
