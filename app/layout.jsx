import './globals.css';
import { Urbanist } from 'next/font/google';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Deal from '@/components/Deal';

const urbanist = Urbanist({ 
  subsets: ['latin'], 
  weight: ["100", "200", "300", "400", "500", "600", '700', "800", "900"]
})

export const metadata = {
  title: 'Online Shopping App | Ixicom',
  description: 'Online Shopping App | Dixit Gogoi',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Deal />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
