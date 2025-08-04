import Link from 'next/link'
import {
  ORTOHAUER_NAME,
  ORTOHAUER_ADDRESS,
  ORTOHAUER_PHONE,
  ORTOHAUER_PHONE_NUMBER,
  DAGOSTINI_NAME,
  DAGOSTINI_ADDRESS,
  DAGOSTINI_PHONE,
  DAGOSTINI_PHONE_NUMBER,
  EXPERIENCE_YEARS,
} from '@/lib/constants'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="text-center mb-20 fade-in">
          <h2 className="heading-lg text-text-primary mb-8">
            Local e Agendamento
          </h2>
          <div className="w-20 h-1 bg-brand-600 mx-auto mb-8"></div>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Entre em contato para agendar sua consulta
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12 fade-in ">
            <div className="card space-y-8 p-8">
              <div className="flex items-start space-x-8">
                <div className="w-24 h-24 bg-brand-600 rounded-3xl flex items-center justify-center text-white flex-shrink-0 shadow-large">
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1 space-y-6">
                  <div className="py-2">
                    <h3 className="heading-sm text-text-primary mb-3">
                      {ORTOHAUER_NAME}
                    </h3>
                  </div>
                  <div className="py-1">
                    <p className="text-body leading-relaxed">
                      {ORTOHAUER_ADDRESS}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <Link
                      href={`tel:${ORTOHAUER_PHONE_NUMBER}`}
                      className="btn-primary text-sm whitespace-nowrap group flex gap-x-2 justify-center items-center"
                    >
                      <svg
                        className="w-4 h-4 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <span>{ORTOHAUER_PHONE}</span>
                    </Link>
                    <Link
                      href="#curitiba"
                      className="btn-secondary text-sm whitespace-nowrap"
                    >
                      <span>Agendar em Curitiba</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="card space-y-8 p-8">
              <div className="flex items-start space-x-8">
                <div className="w-24 h-24 bg-brand-500 rounded-3xl flex items-center justify-center text-white flex-shrink-0 shadow-large">
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1 space-y-6">
                  <div className="py-2">
                    <h3 className="heading-sm text-text-primary mb-3">
                      {DAGOSTINI_NAME}
                    </h3>
                  </div>
                  <div className="py-1">
                    <p className="text-body leading-relaxed">
                      {DAGOSTINI_ADDRESS}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <Link
                      href={`tel:${DAGOSTINI_PHONE_NUMBER}`}
                      className="btn-primary text-sm whitespace-nowrap group flex gap-x-2 justify-center items-center"
                    >
                      <svg
                        className="w-4 h-4 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <span>{DAGOSTINI_PHONE}</span>
                    </Link>
                    <Link
                      href="#lapa"
                      className="btn-secondary text-sm whitespace-nowrap"
                    >
                      <span>Agendar na Lapa</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="fade-in">
            <div className="bg-brand-50 rounded-2xl p-10 lg:p-12 h-full flex flex-col justify-center shadow-soft border border-brand-100">
              <div className="text-center space-y-8">
                <div className="w-24 h-24 bg-success-500 rounded-full flex items-center justify-center mx-auto shadow-medium">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>

                <div className="space-y-6">
                  <h3 className="heading-md text-text-primary">
                    Atendimento Humanizado
                  </h3>
                  <p className="text-body leading-relaxed">
                    Nossa prioridade é seu bem-estar. Oferecemos um atendimento
                    personalizado, com escuta atenciosa e tratamentos que
                    respeitam suas necessidades individuais.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-8 text-center pt-4">
                  <div className="space-y-3">
                    <div className="text-3xl font-bold text-brand-600">
                      {EXPERIENCE_YEARS}
                    </div>
                    <div className="text-sm text-text-muted font-medium">
                      Anos de experiência
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="text-3xl font-bold text-brand-600">
                      100%
                    </div>
                    <div className="text-sm text-text-muted font-medium">
                      Satisfação
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
