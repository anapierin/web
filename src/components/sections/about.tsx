import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-neutral-50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-24 lg:gap-32 items-center">
          {/* Image */}
          <div className="relative fade-in order-2 lg:order-1">
            <div className="relative w-full aspect-[3/4] lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/shared/ana-01.JPEG"
                alt="Dra. Ana Pierin - Ortopedista e Traumatologista"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-success-200 rounded-full opacity-60 -z-10"></div>
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-brand-300 rounded-full opacity-70 -z-10"></div>
          </div>
          
          {/* Content */}
          <div className="space-y-16 fade-in order-1 lg:order-2">
            <div className="space-y-8">
              <h2 className="heading-lg text-text-primary leading-tight">
                Quem é a Dra Ana Pierin?
              </h2>
              <div className="w-24 h-1.5 bg-brand-600"></div>
            </div>
            
            <div className="space-y-12">
              {/* Credentials */}
              <div className="space-y-8">
                <div className="grid gap-6">
                  <div className="bg-white rounded-2xl p-8 border-l-4 border-brand-600 shadow-medium">
                    <h3 className="heading-sm text-text-primary mb-3">Graduação em Medicina</h3>
                    <p className="text-body">PUCPR (2018)</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 border-l-4 border-brand-500 shadow-medium">
                    <h3 className="heading-sm text-text-primary mb-3">Residência em Ortopedia e Traumatologia</h3>
                    <p className="text-body">Santa Casa de Curitiba (2021-2024)</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 border-l-4 border-success-500 shadow-medium">
                    <h3 className="heading-sm text-text-primary mb-3">Especializações</h3>
                    <div className="space-y-3 text-body">
                      <p>• Pós Graduação em Nutrologia - USP Ribeirão Preto (2020-2021)</p>
                      <p>• Pós Graduação em Medicina Esportiva - Uniguaçu (2022-2023)</p>
                      <p>• Pós Graduação em Medicina Regenerativa - Cetrus SP (2025)</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Quote */}
              <blockquote className="bg-brand-50 border-l-6 border-brand-600 pl-10 py-10 rounded-r-2xl shadow-soft">
                <p className="text-lg lg:text-xl italic text-text-primary leading-relaxed font-medium">
                  "Acredito que todo paciente merece um cuidado integral no seu atendimento, que deve ser feito a partir de uma escuta atenciosa e detalhada, e com foco no bem estar geral. Para isso utilizo técnicas avançadas no tratamento da dor e de doenças inflamatórias ortopédicas."
                </p>
              </blockquote>
            </div>
            
            {/* Three pillars */}
            <div className="grid sm:grid-cols-3 gap-10 pt-12">
              <div className="text-center group">
                <div className="w-24 h-24 bg-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300 shadow-medium">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="heading-sm text-text-primary mb-4">Diagnóstico Precoce</h3>
                <p className="text-body leading-relaxed">Melhores resultados através de avaliação detalhada</p>
              </div>
              
              <div className="text-center group">
                <div className="w-24 h-24 bg-brand-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300 shadow-medium">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="heading-sm text-text-primary mb-4">Tratamento Preciso</h3>
                <p className="text-body leading-relaxed">Abordagem especializada e baseada em evidências</p>
              </div>
              
              <div className="text-center group">
                <div className="w-24 h-24 bg-success-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300 shadow-medium">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l1.414 1.414a1 1 0 01.293.707V13M15 10h-1.586a1 1 0 00-.707.293l-1.414 1.414a1 1 0 00-.293.707V13" />
                  </svg>
                </div>
                <h3 className="heading-sm text-text-primary mb-4">Alívio dos Sintomas</h3>
                <p className="text-body leading-relaxed">Retorno ao bem estar e qualidade de vida</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
