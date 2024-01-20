import React from "react";

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
    <div className="border border-grayish-blue p-6 rounded-md">
      <header>
        <h2 className="text-center">{title}</h2>

        <div className="flex items-center justify-center gap-1">
          <p className="text-3xl text-white-smoke font-bold">${price}</p>
          <p className="text-slate-400">
            / {duration === "monthly" ? "Month" : "Yearly"}
          </p>
        </div>

        <div className="mt-5 flex flex-col gap-2">
          {features.map((feature, index) => (
            <p key={index} className="text-slate-400">
              <span className="text-green-300">✔</span>
              {feature}
            </p>
          ))}
        </div>
      </header>
    </div>
  );
};

export default PlanCard;
