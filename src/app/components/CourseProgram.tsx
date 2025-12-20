import { Plane, Hotel, UtensilsCrossed, MapPin, AlertCircle, Ticket, Heart, Presentation } from 'lucide-react';

export function CourseProgram() {
  const modules = [
    {
      icon: Plane,
      title: 'Аэропорт без стресса',
      description: 'Регистрация, паспортный контроль, вопросы на таможне — всё на английском.',
      result: 'Уверенность уже в первые часы за границей.'
    },
    {
      icon: Hotel,
      title: 'В отеле: заселение и помощь',
      description: 'Как попросить сменить номер, вызвать уборку или спросить про Wi-Fi.',
      result: 'Практика вежливых фраз и повседневной лексики.'
    },
    {
      icon: UtensilsCrossed,
      title: 'Кафе и рестораны',
      description: 'Заказ еды, вопросы про аллергены, счёт и чаевые.',
      result: 'Развитие гастрономического словаря и уверенности в общении.'
    },
    {
      icon: MapPin,
      title: 'На улице: ориентирование и просьбы',
      description: 'Как спросить дорогу, вызвать такси или найти аптеку.',
      result: 'Понимание устной речи и произношения в реальных ситуациях.'
    },
    {
      icon: AlertCircle,
      title: 'Экстренные случаи',
      description: 'Потеря вещей, болезнь, помощь полиции — всё это на английском.',
      result: 'Важные фразы, которые могут спасти отпуск.'
    },
    {
      icon: Ticket,
      title: 'Туризм и развлечения',
      description: 'Покупка билетов, экскурсии, общение с гидами, музеи и парки.',
      result: 'Погружение в культурный контекст через язык.'
    },
    {
      icon: Heart,
      title: 'Дружба в путешествиях',
      description: 'Как познакомиться с другими детьми или подростками за границей.',
      result: 'Игровая практика диалогов и неформального общения.'
    },
    {
      icon: Presentation,
      title: 'Дипломный проект: «Мой идеальный отпуск»',
      description: 'Ребёнок планирует воображаемое путешествие и представляет его на английском.',
      result: 'Развитие связной речи и творческого самовыражения.'
    }
  ];

  return (
    <section className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-500/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">
            📚 Программа курса
          </h2>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map((module, index) => {
              const Icon = module.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                    isEven
                      ? 'bg-teal-500/5 border-teal-500/20 hover:border-teal-500/40'
                      : 'bg-orange-500/5 border-orange-500/20 hover:border-orange-500/40'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl flex-shrink-0 ${
                      isEven ? 'bg-teal-500/10' : 'bg-orange-500/10'
                    }`}>
                      <Icon className={`w-6 h-6 ${
                        isEven ? 'text-teal-400' : 'text-orange-400'
                      }`} />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-xl mb-2 ${
                        isEven ? 'text-teal-300' : 'text-orange-300'
                      }`}>
                        {module.title}
                      </h3>
                      <p className="text-gray-300 mb-3">{module.description}</p>
                      <p className="text-sm text-gray-400">
                        👉 {module.result}
                      </p>
                    </div>
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