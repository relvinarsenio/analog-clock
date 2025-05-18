
import NeumorphicClock from '@/components/app/neumorphic-clock';
import { DigitalTimeDisplay } from '@/components/app/digital-time-display';
import { ThemeToggle } from '@/components/app/theme-toggle';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Github } from 'lucide-react';
import { CopyrightYear } from '@/components/app/copyright-year';

export default function AnalogClockPage() {
  return (
    <main className="flex flex-col items-center min-h-screen p-4 bg-background text-foreground transition-colors duration-300">
      <div className="absolute top-4 right-4 flex items-center space-x-4 z-10">
        <ThemeToggle />
        {/* Placeholder for language switcher if needed in future */}
        {/* <LanguageSwitcher /> */}
      </div>
      
      <div className="flex flex-col items-center justify-center flex-grow w-full">
        <header className="mb-4 sm:mb-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary drop-shadow-md">
            Analog Clock
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground mt-1 sm:mt-2">
            An elegant neumorphic clock experience.
          </p>
        </header>

        <div className="mb-4 sm:mb-6">
          <NeumorphicClock />
        </div>

        <div className="mb-4 sm:mb-6 w-full max-w-xs sm:max-w-sm">
          <DigitalTimeDisplay />
        </div>
      </div>
      
      <footer className="w-full text-center text-xs sm:text-sm text-muted-foreground py-2 mt-auto">
        <p>&copy; <CopyrightYear /> Analog Clock. All rights reserved.</p>
        <Button variant="link" asChild className="mt-1 text-muted-foreground hover:text-primary text-xs sm:text-sm">
          {/* Removed aria-label to fix label-content-name-mismatch */}
          <Link href="https://github.com/relvinarsenio/analog-clock" target="_blank" rel="noopener noreferrer">
            <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
            View on GitHub
          </Link>
        </Button>
      </footer>
    </main>
  );
}
