import { useRouter } from 'next/router';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useRouter();

  return (
    <>
      <Navbar />
      {children}
      {pathname === '/profile' ? null : <Footer />}
    </>
  );
}
