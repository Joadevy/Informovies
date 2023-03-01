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
      <body className="bg-dark-blue">
        <Nav />
        {children}
      </body>
    </html>
  );
}
