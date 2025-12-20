import { Globe, Sparkles } from 'lucide-react';

export function Hero() {
  const scrollToEnroll = () => {
    const enrollSection = document.getElementById('enroll');
    enrollSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-orange-500/10"></div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 mb-6">
            <Globe className="w-5 h-5 text-teal-400" />
            <span className="text-teal-400">Английский для путешествий</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-teal-400 via-orange-300 to-orange-400 bg-clip-text text-transparent">
            Курс «Английский для путешествий»
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Мечтаете свободно общаться за границей — от заказа кофе до поиска утраченного чемодана? 
            Этот курс научит вашего ребёнка реальному разговорному английскому, который пригодится 
            в отпуске, поездках и будущих путешествиях!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button
              onClick={scrollToEnroll}
              className="group relative inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-teal-500 to-orange-500 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/50 active:scale-95 w-full sm:w-auto justify-center"
            >
              <span>Записаться на курс</span>
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </button>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-orange-400">
            <Sparkles className="w-5 h-5 animate-pulse" />
            <span>Набор открыт!</span>
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
    </section>
  );
}