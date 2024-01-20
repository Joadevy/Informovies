import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import PlanCard from "./components/PlanCard";

const page = async () => {
  const session = await getServerSession(authOptions);
  if (session) redirect("/subscription");
  return (
    <div className="text-white gap-4 flex flex-col justify-center items-center min-h-screen">
      <header className="flex items-center flex-col gap-2">
        <h1 className="text-center text-3xl lg:text-5xl uppercase font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">
          Hey, join us today & be a Informovier!
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
          features={["asd"]}
        />
        <PlanCard
          title="Informovier +"
          price={10}
          duration="monthly"
          features={["asd"]}
        />
        <PlanCard
          title="Informovier +"
          price={100}
          duration="yearly"
          features={["asd"]}
        />
      </div>
    </div>
  );
};

export default page;
