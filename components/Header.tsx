import React from 'react';
import Link from 'next/link';

export const Header: React.FC = () => {
  return (
    <header className="bg-backLight w-full">
      <div className="flex justify-between items-center px-3 py-6 max-w-[1400px] mx-auto space-x-2 md:space-x-10">
        <Link href={'#'}>
          <a className="text-4xl font-thin tracking-wide visited:no-underline">
            <span className="text-secondary">L</span>
            <span className="text-cta">M</span>
            <span className="text-red-500">A</span>
            <span className="text-teal-300">O</span>
          </a>
        </Link>

        <ul className="hidden md:flex space-x-24">
          <li className="headerLink activeHeaderLink">Home</li>
          <li className="headerLink">Banks</li>
          <li className="headerLink">Boardroom</li>
          <li className="headerLink">Bonds</li>
          <li className="headerLink">Regulations</li>
        </ul>

        <button className="bg-cta px-4 py-2 rounded-lg border-separator border-2 hover:bg-darkCta transition-colors ease-in-out duration-300">
          Connect Wallet
        </button>
      </div>
    </header>
  );
};
