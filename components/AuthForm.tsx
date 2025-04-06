import AuthLink from "@/atom/AuthLink";
import FormField from "@/atom/FormField";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { toast } from "sonner";

type AuthFormProps = {
  registration: boolean;
};
const AuthForm = ({ registration }: AuthFormProps) => {
  const router = useRouter();
  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    if (registration) {
        toast("Registered Successfully");
        router.push("/signin");
    } else {
        toast("Signin Successfully");
        router.push("/");
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col border-1 border-gray-500 rounded-2xl p-4 sm:p-10 bg-gradient-to-b from-neutral-900 to-black w-130">
        <div className="flex flex-col items-center pb-10">
          <div className="text-3xl pb-5">InterVox</div>
          <div className="text-2xl">Practice job interview with AI</div>
        </div>
        <form className="flex flex-col pb-5" onSubmit={handleClick}>
          {registration && (
            <FormField label="Name" placeHolder="Your name" type="text" />
          )}
          <FormField
            label="Email"
            placeHolder="Your email address"
            type="email"
          />
          <FormField
            label="Password"
            placeHolder="Enter your password"
            type="password"
          />
          <button
            className="bg-purple-300 rounded-4xl text-center p-2 text-black mt-4"
            type="submit"
          >
            {registration ? "Create an Account" : "Sign in"}
          </button>
        </form>
        {registration ? (
          <AuthLink
            text="Have an account already?"
            redirectLink="/signin"
            redirectText="Sign in"
          />
        ) : (
          <AuthLink
            text="No account yet?"
            redirectLink="/register"
            redirectText="Sign up"
          />
        )}
      </div>
    </div>
  );
};
export default AuthForm;
