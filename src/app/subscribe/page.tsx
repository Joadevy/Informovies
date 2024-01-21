import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import PlanCard from "./components/PlanCard";
import SignInButton from "./components/signInButton";

const page = async () => {
  const session = await getServerSession(authOptions);
  if (session) redirect("/");
  return (
    <div className="text-white gap-4 flex flex-col justify-center items-center min-h-screen pb-32">
      <header className="flex items-center flex-col gap-2">
        <h1 className="text-center text-3xl lg:text-5xl uppercase font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">
          Hey, join us today & be an Informovier!
        </h1>
        <p className="lg:text-md max-w-sm md:max-w-md lg:max-w-xl self-center text-white-smoke text-pretty">
          Unleash unlimited access to a vast library of information about movies
          and series. From blockbuster hits to timeless classics, we&apos;ve got
          it all. Start your cinematic journey with us now!
        </p>
      </header>

      <div className="flex gap-4 flex-wrap items-center justify-center">
        <PlanCard
          title="Informovier Free"
          price={0}
          duration="monthly"
          features={[
            "Explore films, series, and actors.",
            "Access to exclusive trailers.",
            "Get recommendations to view next.",
          ]}
        />
        <PlanCard
          title="Informovier +"
          price={10}
          duration="monthly"
          features={[
            "Explore films, series, and actors.",
            "Access to exclusive trailers.",
            "Get recommendations to view next.",
            "Mark your favorites and create your own list.",
            "Check your favorites from any device.",
          ]}
        />
      </div>

      <footer className="flex gap-2 text-slate-400">
        <h4>Already have an account?</h4>
        <SignInButton
          title="Sign In"
          className="underline hover:text-transparent hover:bg-clip-text bg-gradient-to-r hover:from-blue-600 hover:via-green-500 hover:to-indigo-400"
        ></SignInButton>
      </footer>
    </div>
  );
};

export default page;
