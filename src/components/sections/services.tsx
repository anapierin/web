import Link from 'next/link'

export default function Services() {
  const services = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
      title: 'Infiltração articular guiada por ultrassonografia',
      description:
        'Procedimento minimamente invasivo para tratamento direto da dor articular com precisão e segurança.',
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: 'Bloqueio anestésico em pontos gatilho de dor',
      description:
        'Técnica especializada para alívio imediato de dores musculares e pontos de tensão específicos.',
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      title: 'Terapia por Ondas de Choque',
      description:
        'Tratamento não-invasivo que acelera a recuperação de lesões e promove a regeneração tecidual.',
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7.5 14.25v-3.375A2.625 2.625 0 0110.125 8.25h3.75A2.625 2.625 0 0116.5 10.875v3.375M7.5 14.25l-1.875 1.875A1.875 1.875 0 004.5 17.25h15a1.875 1.875 0 00-1.125-1.125L16.5 14.25"
          />
        </svg>
      ),
      title: 'Tratamento cirúrgico de lesões tendíneas',
      description:
        'Cirurgias especializadas para restauração da função e mobilidade com técnicas modernas e minimamente invasivas.',
    },
  ]

  const conditions = [
    'Check-up esportivo',
    'Dor ou trauma agudo',
    'Dor crônica',
    'Lesões musculares',
    'Artroses/artrites',
  ]

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="text-center mb-20 fade-in">
          <h2 className="heading-lg text-text-primary mb-8">
            Tratamentos Especializados
          </h2>
          <div className="w-20 h-1 bg-brand-600 mx-auto mb-8"></div>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Todos os tratamentos são realizados com equipamentos modernos,
            priorizando sua segurança, conforto e os melhores resultados
            clínicos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-20">
          {services.map((service, index) => (
            <div key={index} className="card fade-in group">
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 bg-brand-600 rounded-2xl flex items-center justify-center text-white group-hover:bg-brand-500 transition-colors duration-300 flex-shrink-0 shadow-medium">
                  <div className="w-10 h-10">{service.icon}</div>
                </div>
                <div className="flex-1 space-y-4">
                  <h3 className="heading-sm text-text-primary group-hover:text-brand-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-body leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-brand-50 rounded-2xl p-10 lg:p-16 fade-in shadow-soft">
          <div className="text-center mb-12">
            <h3 className="heading-md text-text-primary mb-6">
              Quando procurar um ortopedista?
            </h3>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Não se automedique nem ignore sintomas persistentes. O ortopedista
              é o profissional indicado para diagnosticar e tratar adequadamente
              as dores musculares ou articulares.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {conditions.map((condition, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 flex items-center space-x-4 shadow-medium border border-brand-100 hover:border-brand-200 transition-colors"
              >
                <div className="w-4 h-4 bg-brand-600 rounded-full flex-shrink-0"></div>
                <span className="text-text-primary font-medium">
                  {condition}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="#contact" className="btn-primary">
              Agendar Avaliação
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
