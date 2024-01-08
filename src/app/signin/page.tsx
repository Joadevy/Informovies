"use client";
import { signIn } from "next-auth/react";
import React from "react";

const SignInPage = () => {
  return (
    <div className="text-white min-h-screen grid place-items-center">
      <div className="border p-4 shadow-lg border-gray-400 rounded-md">
        <header className="mb-2 text-center">
          <h1 className="text-2xl font-bold">Informovies</h1>
          <p>Sign In & enjoy the full experience!</p>
        </header>

        <div className="flex flex-col items-center gap-2">
          <button
            className=" bg-semi-dark-blue p-2 rounded-md hover:opacity-75 transition-opacity"
            onClick={async () =>
              await signIn("google", {
                redirect: true,
              })
            }
          >
            Sign In with Google
          </button>
          <p className="text-gray-400 italic text-center">
            Only email, name and avatar will be given to us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
