export function ImageSection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Image 1 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-orange-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <img
                src="https://images.unsplash.com/photo-1531329818183-bba7e80bfecd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwbGFuZSUyMHN1bnNldHxlbnwxfHx8fDE3NjYxMzI5NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Путешествие"
                className="relative rounded-2xl w-full h-64 md:h-80 object-cover border border-teal-500/20"
              />
            </div>
            
            {/* Image 2 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-teal-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <img
                src="https://images.unsplash.com/photo-1540151812223-c30b3fab58e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5ndWFnZSUyMGxlYXJuaW5nJTIwa2lkc3xlbnwxfHx8fDE3NjYxMzI5NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Обучение"
                className="relative rounded-2xl w-full h-64 md:h-80 object-cover border border-orange-500/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}