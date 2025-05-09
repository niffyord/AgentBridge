import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-t from-navy/80 to-navy/10 text-surface pt-12 pb-6 px-4 border-t border-white/10 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-end justify-between gap-8">
        {/* Logo and tagline */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <Image src="/AgentBridge.png" alt="AgentBridge logo" width={110} height={40} className="mb-2" />
          <p className="text-sm text-slate-light/70 max-w-xs text-center md:text-left">
            Empowering Nigerian businesses with bespoke AI agents for real-world impact.
          </p>
        </div>
        {/* Links */}
        <div className="flex flex-col items-center gap-3">
      
          <div className="flex gap-4 mt-2">
            <a href="mailto:hello@agentbridge.ai" className="hover:text-accent transition-colors" aria-label="Email">
              <Mail className="h-5 w-5" strokeWidth={2.2} />
            </a>
            <a href="https://twitter.com/agentbridgeai" target="_blank" rel="noopener" className="hover:text-accent transition-colors" aria-label="Twitter">
              <Twitter className="h-5 w-5" strokeWidth={2.2} />
            </a>
            <a href="https://linkedin.com/company/agentbridge" target="_blank" rel="noopener" className="hover:text-accent transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" strokeWidth={2.2} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 text-xs text-center text-slate-light/60">
        &copy; {new Date().getFullYear()} AgentBridge. All rights reserved.
      </div>
    </footer>
  );
}
