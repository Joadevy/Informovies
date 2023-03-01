import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-dark-blue">
      <h1 className="font-bold text-lg text-red">home page</h1>
    </main>
  );
}
