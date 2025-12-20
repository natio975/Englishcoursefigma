import { Monitor, Wifi, Calendar, DollarSign } from 'lucide-react';

export function Requirements() {
  const requirements = [
    {
      icon: Monitor,
      text: 'Стационарный компьютер или ноутбук с наушниками и микрофоном'
    },
    {
      icon: Wifi,
      text: 'Стабильный интернет и Zoom'
    }
  ];

  const schedule = [
    {
      day: 'Четверг, 15:00 (МСК)',
      group: 'группа 4–5 класс'
    },
    {
      day: 'Пятница, 15:30 (МСК)',
      group: 'группа 6–8 класс'
    }
  ];

  const pricing = [
    {
      title: 'Полный курс (10 уроков)',
      price: '12 000 руб'
    },
    {
      title: 'Абонемент',
      price: '1 300 руб / урок'
    }
  ];

  return (
    <section className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
            {/* Requirements */}
            <div className="p-8 rounded-2xl bg-teal-500/5 border border-teal-500/20 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-6">
                <Monitor className="w-6 h-6 text-teal-400" />
                <h3 className="text-2xl text-teal-300">Что потребуется</h3>
              </div>
              
              <div className="space-y-4">
                {requirements.map((req, index) => {
                  const Icon = req.icon;
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <Icon className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
                      <p className="text-gray-300">{req.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Schedule */}
            <div className="p-8 rounded-2xl bg-orange-500/5 border border-orange-500/20 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-6">
                <Calendar className="w-6 h-6 text-orange-400" />
                <h3 className="text-2xl text-orange-300">Расписание</h3>
              </div>
              
              <div className="space-y-4">
                {schedule.map((item, index) => (
                  <div key={index} className="p-4 rounded-xl bg-orange-500/10">
                    <p className="text-orange-300 mb-1">{item.day}</p>
                    <p className="text-sm text-gray-400">{item.group}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="p-8 rounded-2xl bg-teal-500/5 border border-teal-500/20 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-6">
                <DollarSign className="w-6 h-6 text-teal-400" />
                <h3 className="text-2xl text-teal-300">Стоимость</h3>
              </div>
              
              <div className="space-y-4">
                {pricing.map((item, index) => (
                  <div key={index} className="p-4 rounded-xl bg-teal-500/10">
                    <p className="text-gray-300 mb-1">{item.title}</p>
                    <p className="text-xl text-teal-400">{item.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}