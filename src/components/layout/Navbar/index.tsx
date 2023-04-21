import { useState } from 'react';
import Link from 'next/link';
import Toggle from '@/components/layout/Navbar/Toggle';
import Button from '@/components/common/Button';
import LoginModal from '@/components/common/LoginModal';
import Logo from '/public/icons/logo.svg';

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header>
        <nav className="mx-auto flex h-72 w-full max-w-[128rem] items-center justify-between bg-white px-20">
          <Link href="/" className="py-24">
            <Logo role="img" aria-label="Coding mates logo" />
          </Link>
          <ul className="flex items-center">
            <li className="mr-60 flex">
              {/* toggle */}
              <Toggle />
            </li>
            <li className="mr-28">
              {/* Create Project */}
              <Link href="/create">
                <Button paddingX="px-12" paddingY="py-8">
                  Create a Project
                </Button>
              </Link>
            </li>
            <li>
              {/* Sign Up */}
              <Button
                aria-haspopup="dialog"
                type="ghost"
                paddingX="px-12"
                paddingY="py-8"
                onClick={() => setIsModalOpen(true)}
              >
                Sign Up
              </Button>
            </li>
          </ul>
        </nav>
      </header>
      <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} isClose={true} />
    </>
  );
}
