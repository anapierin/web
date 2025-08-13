import Image from 'next/image'
import { CredentialCard, FeatureCard } from '@/components/common'

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-neutral-50">
      <div className="container">
        {/* Section Title - Centered, Full Width */}
        <div className="text-center mb-8 lg:mb-16 fade-in">
          <h2 className="heading-lg text-text-primary leading-tight mb-6">
            Quem é a Dra Ana Pierin?
          </h2>
          <div className="w-24 h-1.5 bg-brand-600 mx-auto"></div>
        </div>

        {/* Image and Credentials Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-20 lg:mb-24">
          {/* Image */}
          <div className="relative fade-in order-2 lg:order-1">
            <div className="relative w-full aspect-[2/3]  rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="/shared/about.JPEG"
                alt="Dra. Ana Pierin - Ortopedista e Traumatologista"
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={100}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-success-200 rounded-full opacity-60 -z-10"></div>
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-brand-300 rounded-full opacity-70 -z-10"></div>
          </div>

          {/* Content */}
          <div className="space-y-10 fade-in order-1 lg:order-2">
            {/* Credentials */}
            <div className="space-y-6">
              <div className="grid gap-6 sm:gap-8">
                <CredentialCard
                  icon={
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  }
                  title="Graduação em Medicina"
                  description="PUCPR (2018)"
                  colorScheme="brand"
                  variant="primary"
                />

                <CredentialCard
                  icon={
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  }
                  title="Residência em Ortopedia e Traumatologia"
                  description="Santa Casa de Curitiba (2021-2024)"
                  colorScheme="brand"
                  variant="secondary"
                />

                <CredentialCard
                  icon={
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  }
                  title="Especializações"
                  colorScheme="success"
                  variant="primary"
                  specialContent={
                    <div className="space-y-2">
                      <div className="text-md sm:text-lg text-brand-700 font-medium">
                        Pós Graduação em Nutrologia - USP Ribeirão Preto
                        (2020-2021)
                      </div>
                      <div className="text-md sm:text-lg text-brand-700 font-medium">
                        Pós Graduação em Medicina Esportiva - Uniguaçu
                        (2022-2023)
                      </div>
                      <div className="text-md sm:text-lg text-brand-700 font-medium">
                        Pós Graduação em Medicina Regenerativa - Cetrus SP
                        (2025)
                      </div>
                    </div>
                  }
                />
              </div>
            </div>
          </div>
        </div>

        {/* Quote */}
        <blockquote className="bg-brand-50 border-l-6 border-brand-600 pl-10 py-10 rounded-r-2xl shadow-soft">
          <p className="text-lg lg:text-xl italic text-text-primary leading-relaxed font-medium">
            &quot;Acredito que todo paciente merece um cuidado integral no seu
            atendimento, que deve ser feito a partir de uma escuta atenciosa e
            detalhada, e com foco no bem estar geral. Para isso utilizo técnicas
            avançadas no tratamento da dor e de doenças inflamatórias
            ortopédicas.&quot;
          </p>
        </blockquote>

        {/* Three Pillars - Full Width Section */}
        <div className="fade-in">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 pt-12">
            <FeatureCard
              icon={
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
              title="Diagnóstico Precoce"
              description="Melhores resultados através de avaliação detalhada"
              colorScheme="brand-primary"
            />

            <FeatureCard
              icon={
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
                    d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                  />
                </svg>
              }
              title="Tratamento Preciso"
              description="Abordagem especializada e baseada em evidências"
              colorScheme="brand-secondary"
            />

            <FeatureCard
              icon={
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
              }
              title="Alívio dos Sintomas"
              description="Retorno ao bem estar e qualidade de vida"
              colorScheme="success"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
