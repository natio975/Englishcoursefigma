import { Sparkles, Target, Gamepad, TrendingUp } from 'lucide-react';

export function WhySpecial() {
  const features = [
    {
      icon: Target,
      text: 'Акцент на практическую, живую речь, а не на грамматику ради грамматики.'
    },
    {
      icon: Globe,
      text: 'Все ситуации — из реальной жизни путешественника.'
    },
    {
      icon: Gamepad,
      text: 'Интерактивные задания: ролевые игры, аудиоситуации, мини-квесты.'
    },
    {
      icon: TrendingUp,
      text: 'Ребёнок выходит на уровень A2–B1 (Pre-Intermediate) за курс.'
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-12 justify-center">
            <Sparkles className="w-8 h-8 text-orange-400" />
            <h2 className="text-3xl md:text-4xl text-center bg-gradient-to-r from-orange-400 to-teal-400 bg-clip-text text-transparent">
              Почему этот курс особенный?
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                    isEven
                      ? 'bg-orange-500/5 border-orange-500/20 hover:border-orange-500/40'
                      : 'bg-teal-500/5 border-teal-500/20 hover:border-teal-500/40'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl flex-shrink-0 ${
                      isEven ? 'bg-orange-500/10' : 'bg-teal-500/10'
                    }`}>
                      <Icon className={`w-6 h-6 ${
                        isEven ? 'text-orange-400' : 'text-teal-400'
                      }`} />
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed">{feature.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Globe({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
      <path d="M2 12h20"/>
    </svg>
  );
}