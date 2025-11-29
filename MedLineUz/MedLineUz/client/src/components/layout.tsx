import React from 'react';
import { Link } from 'wouter';
import { useLanguage } from '@/lib/i18n';
import { Search, Globe, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { t, language, setLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="bg-primary text-primary-foreground p-1.5 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cross"><path d="M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z"/></svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground font-serif">Niobilim</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link href="/topic/health-topics" className="hover:text-primary transition-colors">{t.healthTopics}</Link>
            <Link href="/topic/drugs" className="hover:text-primary transition-colors">{t.drugsSupplements}</Link>
            <Link href="/topic/tests" className="hover:text-primary transition-colors">{t.medicalTests}</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Globe className="h-4 w-4" />
                  <span className="uppercase">{language}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage('uz')}>
                  O'zbekcha
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('en')}>
                  English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link href="/topic/health-topics" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">{t.healthTopics}</Link>
                  <Link href="/topic/drugs" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">{t.drugsSupplements}</Link>
                  <Link href="/topic/tests" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">{t.medicalTests}</Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 border-t py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <span className="text-lg font-bold font-serif">Niobilim</span>
              <p className="text-sm text-muted-foreground">
                {t.footerDisclaimer}
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">{t.healthTopics}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Yurak</a></li>
                <li><a href="#" className="hover:text-primary">O'pka</a></li>
                <li><a href="#" className="hover:text-primary">Miya</a></li>
              </ul>
            </div>
            <div>
               <h3 className="font-semibold mb-4">{t.aboutMedline}</h3>
               <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Biz haqimizda</a></li>
                <li><a href="#" className="hover:text-primary">Aloqa</a></li>
                <li><a href="#" className="hover:text-primary">Maxfiylik siyosati</a></li>
              </ul>
            </div>
            <div className="md:col-span-1">
               <h3 className="font-semibold mb-4">Ijtimoiy tarmoqlar</h3>
               {/* Social icons placeholder */}
               <div className="flex gap-4">
                 <div className="w-8 h-8 bg-muted rounded-full"></div>
                 <div className="w-8 h-8 bg-muted rounded-full"></div>
                 <div className="w-8 h-8 bg-muted rounded-full"></div>
               </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Niobilim. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};
