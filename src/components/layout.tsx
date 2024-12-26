import { ReactNode } from 'react';
import Navbar from './navbar';
import Footer from './footer';



type LayoutProps = {
  children: ReactNode; // Defining the type for children
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
