import { Users } from 'lucide-react';

export function ForWhom() {
  const groups = [
    {
      title: 'Первая группа',
      grade: '4–5 класс',
      color: 'teal'
    },
    {
      title: 'Вторая группа',
      grade: '6–8 класс',
      color: 'orange'
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8 justify-center flex-wrap">
            <Users className="w-8 h-8 text-teal-400" />
            <h2 className="text-3xl md:text-4xl text-center bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">
              Для кого курс
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            {groups.map((group, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                  group.color === 'teal'
                    ? 'bg-teal-500/5 border-teal-500/20 hover:border-teal-500/40'
                    : 'bg-orange-500/5 border-orange-500/20 hover:border-orange-500/40'
                }`}
              >
                <div className="text-center">
                  <h3 className={`text-2xl mb-2 ${
                    group.color === 'teal' ? 'text-teal-400' : 'text-orange-400'
                  }`}>
                    {group.title}
                  </h3>
                  <p className="text-xl text-gray-300">{group.grade}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}