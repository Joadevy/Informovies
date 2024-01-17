import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";

const page = async () => {
  const session = await getServerSession(authOptions);
  if (session) redirect("/subscription");
  return <div>Hey! Subscribe NOW!</div>;
};

export default page;
