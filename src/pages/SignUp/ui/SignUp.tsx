import { RegForm } from "@/features/RegForm/ui/RegForm";

const SignUp = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <RegForm />
      </div>
    </div>
  );
};

export default SignUp;
