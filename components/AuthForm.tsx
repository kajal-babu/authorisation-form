import { useRouter } from "next/navigation";

type AuthFormProps = {
    registration : boolean
}
const AuthForm = ({registration}:AuthFormProps) =>{
const router = useRouter();
  const handleClick = () => {
    router.push("/register");
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col border-1 border-gray-500 rounded-2xl p-10 bg-gradient-to-b from-neutral-900 to-black w-130">
        <div className="flex flex-col items-center pb-10">
          <div className="text-3xl pb-5">InterVox</div>
          <div className="text-2xl">Practice job interview with AI</div>
        </div>
       <div>
       <form className="flex flex-col pb-5">
          <label>Email</label>
          <input
            type="text" placeholder="Your email address"
            className="bg-gray-700 border border-gray-500 outline-none  rounded-4xl w-full p-2"
          />
          <label>Password</label>
          <input
            type="text" placeholder="Enter your password"
            className="bg-gray-700 border border-gray-500 outline-none rounded-4xl w-full p-2"
          />
        </form>
       </div>
       <div className="bg-purple-300 rounded-4xl text-center p-2 text-black">
       <button onClick={handleClick}>Sign in</button>
       </div>
       <p className="pt-5 text-center">No account yet? <strong className="cursor-pointer" onClick={handleClick}>Sign up</strong></p>
      </div>
    </div>
  );
}
export default AuthForm