'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  NAME,
  EXPERIENCE_YEARS,
  PATIENTS_TREATED,
  LOCATIONS_COUNT,
} from '@/lib/constants'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden pt-24 lg:pt-32"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-brand-100/50 -z-10"></div>

      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center min-h-[85vh]">
          {/* Content */}
          <div className="lg:col-span-7 space-y-12 fade-in">
            {/* Badge */}
            <div className="inline-flex">
              <div className="badge">
                <svg
                  className="w-4 h-4 text-success-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Consultas disponíveis
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="heading-xl text-balance">
                  <span className="text-text-primary">Dra. </span>
                  <span className="text-brand-600">
                    {NAME.replace('Dra. ', '')}
                  </span>
                </h1>

                <h2 className="text-2xl lg:text-3xl xl:text-4xl font-display font-semibold text-text-secondary">
                  Médica Ortopedista, com foco em Ortopedia Esportiva e dor e prescritora de Cannabis Medicinal
                </h2>
              </div>

              <div className="space-y-6 max-w-2xl">
                <p className="text-lg leading-relaxed text-text-primary font-medium">
                  Especialista em Ortopedia e Traumatologia oferecendo
                  tratamentos minimamente invasivos para o tratamento da dor.
                </p>

                <p className="text-body">
                  Cuidado especializado com excelência técnica, empatia e
                  acolhimento para melhorar sua qualidade de vida. Atendimento
                  humanizado e personalizado.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="#contact"
                className="btn-primary group whitespace-nowrap flex gap-x-2 justify-center items-center"
              >
                <svg
                  className="w-5 h-5 transition-transform group-hover:scale-110 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>Agendar Consulta</span>
              </Link>
              <Link
                href="#about"
                className="btn-secondary group whitespace-nowrap flex gap-x-2 justify-center items-center"
              >
                <svg
                  className="w-5 h-5 transition-transform group-hover:scale-110 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span>Conheça a Doutora</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-10 pt-12 border-t border-neutral-200">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-brand-600 mb-3">
                  {EXPERIENCE_YEARS}
                </div>
                <div className="text-sm lg:text-base text-text-muted font-medium leading-snug">
                  Anos de experiência
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-brand-600 mb-3">
                  {PATIENTS_TREATED}
                </div>
                <div className="text-sm lg:text-base text-text-muted font-medium leading-snug">
                  Pacientes atendidos
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-brand-600 mb-3">
                  {LOCATIONS_COUNT}
                </div>
                <div className="text-sm lg:text-base text-text-muted font-medium leading-snug">
                  Locais de atendimento
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-5 relative fade-in">
            <div className="relative">
              {/* Main image */}
              <div className="relative w-full aspect-[4/5] rounded-4xl overflow-hidden shadow-large">
                <Image
                  src="/shared/hero.JPEG"
                  alt="Dra. Ana Pierin - Ortopedista e Traumatologista em seu consultório"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />

                {/* Overlay card */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-medium border border-white/20">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-brand-600 flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-text-primary">
                          Dra. Ana Pierin
                        </div>
                        <div className="text-sm text-text-muted">
                          Ortopedista e Traumatologista
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-brand-200 rounded-2xl opacity-60 animate-float -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-300 rounded-full opacity-40 -z-10"></div>
              <div
                className="absolute top-1/4 -right-8 w-16 h-16 bg-success-200 rounded-2xl opacity-50 animate-float -z-10"
                style={{ animationDelay: '2s' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
