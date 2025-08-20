
import NeumorphicClock from '@/components/app/neumorphic-clock';
import { DigitalTimeDisplay } from '@/components/app/digital-time-display';
import { ThemeToggle } from '@/components/app/theme-toggle';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Github } from 'lucide-react';
import { CopyrightYear } from '@/components/app/copyright-year';

export default function AnalogClockPage() {
  return (
    <main className="gradient-bg flex flex-col items-center min-h-screen p-4 text-foreground transition-colors duration-300 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-xl float-animation" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent/10 rounded-full blur-xl float-animation" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-primary/5 rounded-full blur-lg float-animation" style={{ animationDelay: '4s' }} />
      </div>

      <div className="absolute top-4 right-4 flex items-center space-x-4 z-10">
        <ThemeToggle />
        {/* Placeholder for language switcher if needed in future */}
        {/* <LanguageSwitcher /> */}
      </div>
      
      <div className="flex flex-col items-center justify-center flex-grow w-full z-10">
        <header className="mb-8 sm:mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-lg mb-2">
            Analog Clock
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground/80 font-light tracking-wide">
            An elegant neumorphic clock experience
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full"></div>
        </header>

        <div className="mb-8 sm:mb-12 clock-container rounded-3xl p-8">
          <NeumorphicClock />
        </div>

        <div className="mb-8 sm:mb-12 w-full max-w-md">
          <DigitalTimeDisplay />
        </div>
      </div>
      
      <footer className="w-full text-center text-xs sm:text-sm text-muted-foreground/60 py-4 mt-auto z-10">
        <p className="mb-2">&copy; <CopyrightYear /> Analog Clock. All rights reserved.</p>
        <Button variant="link" asChild className="modern-button text-primary-foreground hover:text-white text-xs sm:text-sm px-6 py-2 rounded-full">
          {/* Removed aria-label to fix label-content-name-mismatch */}
          <Link href="https://github.com/relvinarsenio/analog-clock" target="_blank" rel="noopener noreferrer">
            <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            View on GitHub
          </Link>
        </Button>
      </footer>
    </main>
  );
}
