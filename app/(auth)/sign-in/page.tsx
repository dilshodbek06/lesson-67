"use client";

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const supabase = createClient();
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const { data } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      console.log(data);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card w-full max-w-[300px]">
      <div className="card-header text-lg bg-black text-white text-center font-medium">
        Sign In
      </div>
      <div className="card-body space-y-2">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="email..."
          className="form-control mb-3"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password..."
          className="form-control"
        />
      </div>
      <div className="card-footer">
        <button onClick={handleLogin} className="btn btn-dark w-full">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignInPage;
