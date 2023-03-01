import "./globals.css";
import Nav from "@/components/Nav";

export const metadata = {
  title: "movies app",
  description: "Find all your movies and get information abut them!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-dark-blue relative mt-20 sm:mt-24 lg:mt-0 lg:ml-32">
        <Nav />
        {children}
      </body>
    </html>
  );
}
