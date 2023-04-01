"use client";
type Props = {
  date: string;
};

const ClientDate = ({ date }: Props) => {
  return (
    <>
      {new Date(date).toLocaleString(navigator.language, {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour12: true,
      })}
    </>
  );
};

export default ClientDate;
