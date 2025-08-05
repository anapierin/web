import Link from 'next/link'
import { PHONE_NUMBER } from '@/lib/constants'

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

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400' : 'text-neutral-300'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <section className="section bg-neutral-50">
      <div className="container">
        <div className="text-center mb-16 fade-in">
          <h2 className="heading-lg text-text-primary mb-6">
            Opiniões de quem já passou por aqui
          </h2>
          <div className="w-20 h-1 bg-brand-600 mx-auto mb-6"></div>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Veja o que nossos pacientes falam sobre o atendimento e tratamento
            recebidos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card fade-in space-y-6">
              <div className="flex items-center">
                <div className="flex space-x-1">
                  {renderStars(testimonial.rating)}
                </div>
              </div>

              <blockquote className="text-lg text-text-primary leading-relaxed italic">
                &quot;{testimonial.text}&quot;
              </blockquote>

              <div className="flex items-center space-x-4 pt-2">
                <div className="w-14 h-14 bg-brand-600 rounded-full flex items-center justify-center shadow-medium border-2 border-black">
                  <span className="text-black font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-text-primary">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-text-muted">Paciente</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20 fade-in">
          <div className="bg-brand-50 rounded-2xl p-10 lg:p-16 shadow-soft border border-brand-100">
            <h3 className="heading-md text-text-primary mb-6">
              Pronto para começar seu tratamento?
            </h3>
            <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
              Agende sua consulta e descubra como podemos ajudar você a
              recuperar sua qualidade de vida.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="#contact" className="btn-primary">
                Agendar Consulta
              </Link>
              <Link href={`tel:${PHONE_NUMBER}`} className="btn-secondary">
                Ligar Agora
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
