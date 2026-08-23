import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="border-b border-[#23232D] bg-[#08080C]/90 backdrop-blur sticky top-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo & Gold NEA Badge */}
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex flex-col leading-tight group">
            <span className="font-black text-xl tracking-wider text-white group-hover:tracking-widest transition-all duration-300">
              VELMORA <span className="text-[#E000FF]">GLOBAL</span>
            </span>
            <span className="text-xs font-mono font-black tracking-wider transition-all duration-300">
              <span className="text-[#E000FF] group-hover:text-white transition-colors">
                RECRUITMENT
              </span>{' '}
              <span className="text-white group-hover:text-[#E000FF] transition-colors">
                SOLUTIONS
              </span>
            </span>
          </Link>

          <span className="hidden sm:inline-flex items-center space-x-2 text-[11px] font-mono text-[#E2A900] font-bold tracking-wide pl-2 border-l border-[#23232D]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E2A900]"></span>
            <span>NEA LICENSED</span>
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8 font-mono text-xs uppercase text-white font-semibold">
          <Link 
            href="/" 
            className="hover:text-[#E000FF] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#E000FF] hover:after:w-full after:transition-all"
          >
            HOME
          </Link>
          <Link 
            href="/#about" 
            className="hover:text-[#E000FF] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#E000FF] hover:after:w-full after:transition-all"
          >
            ABOUT US
          </Link>
          <Link 
            href="/#services" 
            className="hover:text-[#E000FF] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#E000FF] hover:after:w-full after:transition-all"
          >
            SERVICES
          </Link>
          <Link 
            href="/#contact" 
            className="hover:text-[#E000FF] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#E000FF] hover:after:w-full after:transition-all"
          >
            CONTACT US
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3">
          <a
            href="https://wa.me/254715633999?text=Hello%20Velmora%20Global,%20I%20would%20like%20to%20request%20a%20callback."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block border border-[#E2A900] text-[#E2A900] hover:bg-[#E2A900] hover:text-black font-mono font-bold text-xs uppercase px-4 py-2 rounded transition-all"
          >
            REQUEST CALLBACK
          </a>

          <Link
            href="/submit"
            className="bg-[#E000FF] hover:bg-[#BF00FF] text-white font-mono font-bold text-xs uppercase px-4 py-2 rounded transition-all shadow-[0_0_15px_rgba(224,0,255,0.3)] hover:scale-105"
          >
            SUBMIT YOUR DOCUMENTS
          </Link>
        </div>

      </div>
    </nav>
  );
}











