import { ServiceCard, ConditionCard, CTASection } from '@/components/common'

export default function Services() {
  // FIXME: Icon colors are not being applied
  const services = [
    {
      // icon: (
      //   <svg
      //     className="w-8 h-8 text-primary"
      //     fill="none"
      //     stroke="currentColor"
      //     viewBox="0 0 24 24"
      //   >
      //     <path
      //       strokeLinecap="round"
      //       strokeLinejoin="round"
      //       strokeWidth={2}
      //       d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
      //     />
      //   </svg>
      // ),
      title: 'Infiltração articular guiada por ultrassonografia',
      description:
        'Procedimento minimamente invasivo para tratamento direto da dor articular com precisão e segurança.',
    },
    {
      // icon: (
      //   <svg
      //     className="w-8 h-8"
      //     fill="none"
      //     stroke="currentColor"
      //     viewBox="0 0 24 24"
      //   >
      //     <path
      //       strokeLinecap="round"
      //       strokeLinejoin="round"
      //       strokeWidth={2}
      //       d="M13 10V3L4 14h7v7l9-11h-7z"
      //     />
      //   </svg>
      // ),
      title: 'Bloqueio anestésico em pontos gatilho de dor',
      description:
        'Técnica especializada para alívio imediato de dores musculares e pontos de tensão específicos.',
    },
    {
      // icon: (
      //   <svg
      //     className="w-8 h-8"
      //     fill="none"
      //     stroke="currentColor"
      //     viewBox="0 0 24 24"
      //   >
      //     <path
      //       strokeLinecap="round"
      //       strokeLinejoin="round"
      //       strokeWidth={2}
      //       d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      //     />
      //   </svg>
      // ),
      title: 'Terapia por Ondas de Choque',
      description:
        'Tratamento não-invasivo que acelera a recuperação de lesões e promove a regeneração tecidual.',
    },
    {
      // icon: (
      //   <svg
      //     className="w-8 h-8"
      //     fill="none"
      //     stroke="currentColor"
      //     viewBox="0 0 24 24"
      //   >
      //     <path
      //       strokeLinecap="round"
      //       strokeLinejoin="round"
      //       strokeWidth={2}
      //       d="M7.5 14.25v-3.375A2.625 2.625 0 0110.125 8.25h3.75A2.625 2.625 0 0116.5 10.875v3.375M7.5 14.25l-1.875 1.875A1.875 1.875 0 004.5 17.25h15a1.875 1.875 0 00-1.125-1.125L16.5 14.25"
      //     />
      //   </svg>
      // ),
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
        <div className="text-center mb-16 fade-in">
          <h2 className="heading-lg text-text-primary mb-6">
            Tratamentos Especializados
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Todos os tratamentos são realizados com equipamentos modernos,
            priorizando sua segurança, conforto e os melhores resultados
            clínicos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              // icon={service.icon}
              // icon={<></>}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <div className="bg-gradient-to-br from-brand-50 via-white to-brand-100/50 rounded-3xl p-12 lg:p-20 fade-in shadow-large border border-brand-100/50">
          <div className="text-center mb-16">
            <h3 className="heading-md text-text-primary mb-6">
              Quando procurar um ortopedista?
            </h3>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Não se automedique nem ignore sintomas persistentes. O ortopedista
              é o profissional indicado para diagnosticar e tratar adequadamente
              as dores musculares ou articulares.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
            {conditions.map((condition, index) => {
              const icons = [
                <svg
                  key={condition}
                  className="w-6 h-6"
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
                </svg>,
                <svg
                  key={condition}
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>,
                <svg
                  key={condition}
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>,
                <svg
                  key={condition}
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>,
                <svg
                  key={condition}
                  className="w-6 h-6"
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
                </svg>,
              ]

              const colors = [
                'brand',
                'brand-secondary',
                'success',
                'brand',
                'success',
              ]

              return (
                <ConditionCard
                  key={index}
                  icon={icons[index]}
                  title={condition}
                  colorScheme={
                    colors[index] as 'brand' | 'brand-secondary' | 'success'
                  }
                />
              )
            })}
          </div>

          <CTASection
            title="Pronto para cuidar da sua saúde?"
            subtitle="Agende sua consulta e receba o tratamento especializado que você merece."
            buttonText="Agendar Avaliação"
            buttonHref="#contact"
            // icon={
            //   <svg
            //     className="w-8 h-8 lg:w-10 lg:h-10"
            //     fill="none"
            //     stroke="currentColor"
            //     viewBox="0 0 24 24"
            //   >
            //     <path
            //       strokeLinecap="round"
            //       strokeLinejoin="round"
            //       strokeWidth={2}
            //       d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            //     />
            //   </svg>
            // }
          />
        </div>
      </div>
    </section>
  )
}
