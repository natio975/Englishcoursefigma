import { UserPlus, ArrowRight, Check } from 'lucide-react';

export function CTA() {
  const benefits = [
    'Группы маленькие — максимум 6 детей',
    'Каждый получит персональное внимание',
    'Места ограничены!'
  ];

  const handleEnroll = () => {
    // Здесь можно добавить функционал записи на курс
    alert('Форма записи откроется в ближайшее время! Свяжитесь с нами для регистрации.');
  };

  return (
    <section id="enroll" className="py-16 md:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-orange-500/10 to-teal-500/10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block p-4 rounded-full bg-gradient-to-br from-teal-500/20 to-orange-500/20 mb-6">
              <UserPlus className="w-12 h-12 text-teal-400" />
            </div>
            
            <h2 className="text-3xl md:text-5xl mb-6 bg-gradient-to-r from-teal-400 via-orange-300 to-orange-400 bg-clip-text text-transparent">
              Набор открыт!
            </h2>
            
            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center justify-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-teal-400 flex-shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
            
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Запишитесь сейчас — и следующее путешествие станет первым, 
              где ваш ребёнок заговорит по-английски без страха!
            </p>
            
            <button
              onClick={handleEnroll}
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-teal-500 to-orange-500 text-white text-lg md:text-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/50 active:scale-95 w-full sm:w-auto justify-center"
            >
              <span>Записаться на курс</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 to-orange-400 opacity-0 group-hover:opacity-100 blur transition-opacity -z-10"></div>
            </button>
          </div>
          
          {/* Additional info */}
          <div className="mt-16 p-6 rounded-2xl bg-gradient-to-br from-teal-500/5 to-orange-500/5 border border-teal-500/20 backdrop-blur-sm">
            <p className="text-center text-gray-300 leading-relaxed">
              <span className="text-teal-400">📢</span> Группы формируются быстро! 
              Не упустите возможность дать вашему ребёнку навыки, которые пригодятся на всю жизнь.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}