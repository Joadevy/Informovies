import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";
import SignInButton from "./signInButton";

//border-semi-dark-blue

type Iprops = {
  title: string;
  //   description: string;
  price: number;
  duration: "monthly" | "yearly";
  features: string[];
};

const PlanCard = ({ title, duration, price, features }: Iprops) => {
  return (
    <div className="border border-grayish-blue p-6 rounded-md w-96 h-72 relative">
      <header className="mb-1">
        <h2 className="text-center text-xl lg:text-2xl">{title}</h2>

        <div className="flex items-center justify-center gap-1">
          <p className="text-3xl text-white-smoke font-bold">${price}</p>
          <p className="text-slate-400">
            / {duration === "monthly" ? "Month" : "Yearly"}
          </p>
        </div>
      </header>

      <Separator />

      <div className="mt-3 flex flex-col gap-2">
        {features.map((feature, index) => (
          <p key={index} className="text-slate-400">
            <span className="text-green-300">✔</span>
            {feature}
          </p>
        ))}
      </div>

      <footer>
        <SignInButton
          title="Join now!"
          className="border bg-red border-grayish-blue px-4 py-1 rounded-xl absolute bottom-2 left-1/2 transform -translate-x-1/2 hover:opacity-80 transition-opacity"
        />
      </footer>
    </div>
  );
};

export default PlanCard;
