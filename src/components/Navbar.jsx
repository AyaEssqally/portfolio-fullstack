import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { id: 'hero', label: 'Accueil' },
  { id: 'about', label: 'À propos' },
  { id: 'skills', label: 'Compétences' },
  { id: 'experience', label: 'Expériences' },
  { id: 'projects', label: 'Projets' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('hero');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const current = navItems
        .map((item) => ({ id: item.id, el: document.getElementById(item.id) }))
        .filter((s) => s.el)
        .reduce((closest, section) => {
          const rect = section.el.getBoundingClientRect();
          if (rect.top <= 100) return section;
          return closest;
        }, navItems[0] ? { id: navItems[0].id } : null);

      if (current) setActive(current.id);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-bg-soft/90 backdrop-blur-md">
      <nav className="section-container flex h-[60px] items-center justify-between">
        <button
          type="button"
          onClick={() => scrollTo('hero')}
          className="font-display text-lg font-bold text-primary"
        >
          AE.
        </button>

        <ul className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => scrollTo(item.id)}
                className={`text-sm font-medium transition-colors ${
                  active === item.id
                    ? 'text-primary underline decoration-primary decoration-2 underline-offset-4'
                    : 'text-text-muted hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="rounded-lg p-2 text-text-muted md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fermer' : 'Menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-card md:hidden">
          <ul className="section-container space-y-1 py-3">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => scrollTo(item.id)}
                  className={`w-full rounded-lg px-3 py-2.5 text-left text-sm ${
                    active === item.id ? 'bg-primary-soft text-primary' : 'text-text-muted'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
