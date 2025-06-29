import '@/app/lib/fontawesome';
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer"

export const metadata = {
  title: "Rental App",
  description: "created by multidevs",
};

export default function layout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
