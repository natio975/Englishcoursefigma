import { Globe } from 'lucide-react';

export function Header() {
  const scrollToEnroll = () => {
    const enrollSection = document.getElementById('enroll');
    enrollSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e1a]/80 backdrop-blur-lg border-b border-gray-800/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-gradient-to-br from-teal-500/20 to-orange-500/20">
              <Globe className="w-6 h-6 text-teal-400" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">
                Английский для путешествий
              </h1>
            </div>
            <div className="block sm:hidden">
              <h1 className="text-sm bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">
                Английский
              </h1>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToEnroll}
            className="hidden sm:flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-teal-500 to-orange-500 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/50"
          >
            Записаться
          </button>

          {/* Mobile CTA */}
          <button
            onClick={scrollToEnroll}
            className="sm:hidden px-4 py-2 rounded-full bg-gradient-to-r from-teal-500 to-orange-500 text-white transition-all duration-300 hover:scale-105 text-sm"
          >
            Записаться
          </button>
        </div>
      </div>
    </header>
  );
}