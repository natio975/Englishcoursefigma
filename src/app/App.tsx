import { Hero } from './components/Hero';
import { ForWhom } from './components/ForWhom';
import { CourseProgram } from './components/CourseProgram';
import { WhySpecial } from './components/WhySpecial';
import { Requirements } from './components/Requirements';
import { CTA } from './components/CTA';
import { ImageSection } from './components/ImageSection';
import { Header } from './components/Header';

export default function App() {
  return (
    <div className="dark">
      <div className="min-h-screen bg-[#0a0e1a] text-white">
        {/* Header */}
        <Header />
        
        {/* Add padding to account for fixed header */}
        <div className="pt-20">
          {/* Main content */}
          <main>
            <Hero />
            <ImageSection />
            <ForWhom />
            <CourseProgram />
            <WhySpecial />
            <Requirements />
            <CTA />
          </main>
          
          {/* Footer */}
          <footer className="py-8 border-t border-gray-800">
            <div className="container mx-auto px-4 text-center text-gray-400">
              <p>© 2025 Курс «Английский для путешествий». Все права защищены.</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}