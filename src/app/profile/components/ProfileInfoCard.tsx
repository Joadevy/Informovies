import React from "react";

type Iprops = {
  title: string;
  description: string;
};

const ProfileInfoCard = ({ title, description }: Iprops) => {
  return (
    <div className=" bg-semi-dark-blue border-grayish-blue py-2 rounded-md shadow-xl flex flex-col items-center justify-center gap-1">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProfileInfoCard;
