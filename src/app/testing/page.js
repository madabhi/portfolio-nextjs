// pages/login.js
'use client';
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      // Redirect to home page if already authenticated
      router.replace("/");
    }
  }, [status, router]);

  const handleLogin = async () => {
    await signIn("credentials", {
      // Provide credentials here, e.g., username, password
      username: "exampleUsername",
      password: "examplePassword",
      redirect: false, // Set to true to enable redirect after login
    });

    router.replace("/");
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
