'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  NAME,
  EXPERIENCE_YEARS,
  PATIENTS_TREATED,
  LOCATIONS_COUNT,
} from '@/lib/constants'
import { StatCard } from '@/components/common'

export default function Hero() {
  return (
    <section
      id="hero"
      className="section min-h-screen flex items-center relative overflow-hidden mt-12 lg:mt-0"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-brand-100/50 -z-10"></div>

      <div className="container">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-4 md:gap-12 lg:gap-16 lg:items-center min-h-[70vh]">
          {/* Content - First part (Badge + Headlines) */}
          <div className="lg:col-span-7 lg:order-1 fade-in">
            {/* Badge */}
            <div className="inline-flex mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-neutral-100 border border-neutral-200 text-neutral-700">
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
            <div className="space-y-6 mb-8">
              <h1 className="heading-xl text-balance">
                <span className="text-text-primary">Dra. </span>
                <span className="text-brand-600">
                  {NAME.replace('Dra. ', '')}
                </span>
              </h1>

              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-display font-semibold text-text-secondary">
                Médica Ortopedista, com foco em Ortopedia Esportiva
                <br />e dor e prescritora de Cannabis Medicinal
              </h2>
            </div>
          </div>

          {/* Image - Shows after headline on mobile, sidebar on desktop */}
          <div className="lg:col-span-5 lg:order-2 relative fade-in">
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
              </div>

              {/* Verification Badge - Outside image container */}
              <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg border-3 border-white z-20">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            {/* Floating elements - Hidden on mobile for cleaner look */}
            <div className="hidden lg:block absolute -top-4 -left-4 w-20 h-20 bg-brand-200 rounded-2xl opacity-60 animate-float -z-10"></div>
            <div className="hidden lg:block absolute -bottom-6 -right-6 w-32 h-32 bg-brand-300 rounded-full opacity-40 -z-10"></div>
            <div
              className="hidden lg:block absolute top-1/4 -right-8 w-16 h-16 bg-success-200 rounded-2xl opacity-50 animate-float -z-10"
              style={{ animationDelay: '2s' }}
            ></div>
          </div>
        </div>

        {/* Content - Second part (Description + Buttons + Stats) */}
        <div className="lg:col-span-7 lg:order-1 space-y-8 fade-in flex flex-col items-center justify-center pt-10 w-full">
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 pt-8 border-t border-neutral-200 w-full">
            <StatCard value={EXPERIENCE_YEARS} label="Anos de experiência" />
            <StatCard value={PATIENTS_TREATED} label="Pacientes atendidos" />
            <StatCard value={LOCATIONS_COUNT} label="Locais de atendimento" />
          </div>

          {/* Description */}
          <div className="pt-12 max-w-4xl">
            <p className="text-xl lg:text-2xl w-full">
              Cuidado especializado com excelência técnica, empatia e
              acolhimento para melhorar sua qualidade de vida. Atendimento
              humanizado e personalizado.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 ">
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
                className="w-5 h-5 transition-transform group-hover:scale-110 flex-shrink-0 "
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
        </div>
      </div>
    </section>
  )
}
