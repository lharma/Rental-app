import '@/lib/fontawesome';
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer"
import { DataProvider } from '../context/DataProvider';

export const metadata = {
  title: "RentX",
  description: "created by multidevs",
};

export default function layout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <DataProvider>
          <NavBar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </DataProvider>
      </body>
    </html>
  );
}