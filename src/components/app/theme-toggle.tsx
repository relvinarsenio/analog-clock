
"use client";

import { Moon, Sun } from 'lucide-react';
import { useThemeContext } from '@/contexts/theme-context';
import { useLocalization } from '@/contexts/localization-context';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export function ThemeToggle() {
  const { theme, toggleTheme } = useThemeContext();
  const { t } = useLocalization();

  const tooltipText = theme === 'light' ? t('theme.toggle.dark') : t('theme.toggle.light');

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={tooltipText}
            aria-pressed={theme === 'dark'} // Indicates if the dark mode is currently active
            className="rounded-full w-12 h-12 neumorphic-shadow-light hover:neumorphic-inset-shadow-light active:neumorphic-inset-shadow-light transition-all duration-200"
          >
            {theme === 'light' ? (
              <Moon className="h-6 w-6 text-accent-foreground" />
            ) : (
              <Sun className="h-6 w-6 text-accent-foreground" />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltipText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
