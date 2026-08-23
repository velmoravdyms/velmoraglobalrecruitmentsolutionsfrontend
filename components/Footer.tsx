



import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-[#23232D] bg-[#08080C] text-[#9E9EB3] py-8 px-6 font-mono text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Holdings Link & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <Link 
            href="https://velmoragrouphub.com" 
            className="text-white hover:text-[#E000FF] transition-colors font-bold flex items-center space-x-1"
          >
            <span>← BACK TO HOLDINGS GROUP</span>
          </Link>
          <span className="hidden sm:inline text-[#23232D]">|</span>
          <span className="text-[#9E9EB3]">
            © 2026 VELMORA GLOBAL RECRUITMENT SOLUTIONS. ALL RIGHTS RESERVED.
          </span>
        </div>

        {/* Security & System Info */}
        <div className="flex items-center space-x-3">
          <span className="inline-flex items-center space-x-1.5 bg-[#111116] border border-[#23232D] px-2.5 py-1 rounded text-[10px] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a] animate-pulse"></span>
            <span>SYSTEM SECURE CONNECTED</span>
          </span>
          <span className="text-[10px] text-slate-500 border border-[#23232D] px-2 py-1 rounded">
            VGRS-v2.0.4
          </span>
        </div>

      </div>
    </footer>
  );
}