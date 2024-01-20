import Link from "next/link";

const page = () => {
  return (
    <div className="text-white flex gap-2">
      404 not found, you may want to return?{" "}
      <Link href={"/"}>
        <p className=" underline">Click here</p>
      </Link>
    </div>
  );
};

export default page;
