
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, AlertTriangle } from 'lucide-react';
import { useLocalization } from '@/contexts/localization-context';
import { CopyrightYear } from '@/components/app/copyright-year';

export default function NotFound() {
  const { t } = useLocalization();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-4">
      <Card className="w-full max-w-md neumorphic-shadow-light text-center">
        <CardHeader>
          <div className="mx-auto p-3 bg-destructive/10 rounded-full mb-4 inline-block neumorphic-inset-shadow-light">
            <AlertTriangle className="w-12 h-12 text-destructive" />
          </div>
          <CardTitle className="text-3xl font-bold text-primary">
            {t('notfound.title')}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground text-lg">
            {t('notfound.message')}
          </p>
          <Button asChild size="lg" className="neumorphic-shadow-light hover:neumorphic-inset-shadow-light active:neumorphic-inset-shadow-light transition-all duration-200">
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              {t('notfound.button.home')}
            </Link>
          </Button>
        </CardContent>
      </Card>
      <footer className="mt-8 text-xs text-muted-foreground">
        <p>&copy; <CopyrightYear /> Analog Clock. {t('app.name')}. All rights reserved.</p>
      </footer>
    </main>
  );
}
