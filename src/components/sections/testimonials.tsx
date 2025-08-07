import { WHATSAPP_DOCTOR_URL } from '@/lib/constants'
import { TestimonialCard, CTASection } from '@/components/common'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Claudia G.',
      text: 'A Dra Ana é uma graça, muito simpática e explicou direitinho… Agora só começar o tratamento e ver os resultados',
      rating: 5,
    },
    {
      name: 'João O.',
      text: 'Iniciando um tratamento, passando pela primeira consulta Dra.Ana Helena Pierin MT atenciosa. acolhimento nota 10',
      rating: 5,
    },
    {
      name: 'Kaluana C.',
      text: 'Dra. Ana uma excelente profissional, muito prestativa também!',
      rating: 5,
    },
    {
      name: 'Bernadette I.',
      text: 'Excelente atendimento, irei começar meu tratamento, recomendo de olhos fechados',
      rating: 5,
    },
  ]

  return (
    <section className="section bg-neutral-50">
      <div className="container">
        <div className="text-center mb-16 fade-in">
          <h2 className="heading-lg text-text-primary mb-6">
            Opiniões de quem já passou por aqui
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Veja o que nossos pacientes falam sobre o atendimento e tratamento
            recebidos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              text={testimonial.text}
              rating={testimonial.rating}
            />
          ))}
        </div>

        <div className="mt-16 sm:mt-20 fade-in">
          <CTASection
            title="Pronto para começar seu tratamento?"
            subtitle="Agende sua consulta e descubra como podemos ajudar você a recuperar sua qualidade de vida."
            buttonText="Agendar Consulta"
            buttonHref="#contact"
            secondaryButtonText="Ligar Agora"
            secondaryButtonHref={WHATSAPP_DOCTOR_URL}
          />
        </div>
      </div>
    </section>
  )
}
