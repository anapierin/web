import { ServiceCard, ConditionCard, CTASection } from '@/components/common'

export default function Services() {
  const services = [
    {
      title: 'Infiltração articular guiada por ultrassonografia',
      description:
        'Procedimento minimamente invasivo para tratamento direto da dor articular com precisão e segurança.',
    },
    {
      title: 'Bloqueio anestésico em pontos gatilho de dor',
      description:
        'Técnica especializada para alívio imediato de dores musculares e pontos de tensão específicos.',
    },
    {
      title: 'Terapia por Ondas de Choque',
      description:
        'Tratamento não-invasivo que acelera a recuperação de lesões e promove a regeneração tecidual.',
    },
    {
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
    'Doenças da coluna vertebral',
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
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <div className="bg-gradient-to-br from-brand-50 via-white to-brand-100/50 rounded-3xl p-12 pt-16 lg:p-20 fade-in shadow-large border border-brand-100/50">
          <div className="text-center mb-16">
            <h3 className="heading-md text-text-primary mb-6">
              Quando procurar um ortopedista?
            </h3>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed text-pretty">
              Não se automedique nem ignore sintomas persistentes. O ortopedista
              é o profissional indicado para diagnosticar e tratar adequadamente
              as dores musculares ou articulares.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
            {conditions.map((condition, index) => (
              <ConditionCard key={index} title={condition} />
            ))}
          </div>

          <CTASection
            title="Pronto para cuidar da sua saúde?"
            subtitle="Agende sua consulta e receba o tratamento especializado que você merece."
            buttonText="Agendar Avaliação"
            buttonHref="#contact"
          />
        </div>
      </div>
    </section>
  )
}
