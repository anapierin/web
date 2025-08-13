import {
  ORTOHAUER_NAME,
  ORTOHAUER_ADDRESS,
  ORTOHAUER_PHONE,
  ORTOHAUER_PHONE_NUMBER,
  DAGOSTINI_NAME,
  DAGOSTINI_ADDRESS,
  DAGOSTINI_PHONE,
  DAGOSTINI_PHONE_NUMBER,
  WHATSAPP_ORTOHAUER_URL,
  WHATSAPP_DAGOSTINI_URL,
  EXPERIENCE_YEARS,
} from '@/lib/constants'
import { LocationCard, StatCard } from '@/components/common'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="text-center mb-16 fade-in">
          <h2 className="heading-lg text-text-primary mb-6">
            Local e Agendamento
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Entre em contato para agendar sua consulta
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          <div className="space-y-6 sm:space-y-8 fade-in">
            <LocationCard
              name={ORTOHAUER_NAME}
              address={ORTOHAUER_ADDRESS}
              phoneNumber={ORTOHAUER_PHONE_NUMBER}
              phoneDisplay={ORTOHAUER_PHONE}
              whatsappUrl={WHATSAPP_ORTOHAUER_URL}
              scheduleHref="#curitiba"
              scheduleText="Agendar em Curitiba"
              colorScheme="brand"
            />

            <LocationCard
              name={DAGOSTINI_NAME}
              address={DAGOSTINI_ADDRESS}
              phoneNumber={DAGOSTINI_PHONE_NUMBER}
              phoneDisplay={DAGOSTINI_PHONE}
              whatsappUrl={WHATSAPP_DAGOSTINI_URL}
              scheduleHref="#lapa"
              scheduleText="Agendar na Lapa"
              colorScheme="brand-secondary"
            />
          </div>

          <div className="fade-in">
            <div className="bg-brand-50 rounded-2xl p-10 lg:p-12 h-full flex flex-col justify-center shadow-soft border border-brand-100">
              <div className="text-center">
                <div className="w-24 h-24 bg-success-500 rounded-full flex items-center justify-center mx-auto shadow-medium">
                  <svg
                    className="w-12 h-12 text-black"
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
                  <h3 className="heading-lg text-text-primary">
                    Atendimento Humanizado
                  </h3>
                  <p className="text-body leading-relaxed">
                    Nossa prioridade é seu bem-estar. Oferecemos um atendimento
                    personalizado, com escuta atenciosa e tratamentos que
                    respeitam suas necessidades individuais.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 sm:gap-8 text-center pt-4">
                  <StatCard
                    value={EXPERIENCE_YEARS}
                    label="Anos de experiência"
                    className="text-center"
                  />
                  <StatCard
                    value="100%"
                    label="Satisfação"
                    className="text-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
