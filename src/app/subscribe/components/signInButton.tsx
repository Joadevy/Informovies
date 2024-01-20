"use client";

import { signIn } from "next-auth/react";

type Iprops = {
  title: string;
  className?: string;
};

const SignInButton = ({ title, className }: Iprops) => {
  return (
    <button
      className={className}
      onClick={async () =>
        await signIn("google", {
          redirect: true,
        })
      }
    >
      {title}
    </button>
  );
};

export default SignInButton;
