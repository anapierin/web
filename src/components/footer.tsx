import Link from 'next/link'
import {
  NAME,
  PROFESSIONAL_DESCRIPTION,
  ORTOHAUER_NAME,
  ORTOHAUER_ADDRESS,
  ORTOHAUER_PHONE,
  DAGOSTINI_NAME,
  DAGOSTINI_ADDRESS,
  DAGOSTINI_PHONE,
  CRM_PR_NUMBER,
  RQE_NUMBER,
  INSTAGRAM_URL,
  FACEBOOK_URL,
  WHATSAPP_DOCTOR_URL,
  SITE_NAME,
} from '@/lib/constants'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-100 py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="md:col-span-2">
            <div className="py-2 flex items-center">
              <Image
                src="/shared/symbol-white-raw.png"
                alt={SITE_NAME}
                width={96}
                height={96}
                quality={100}
              />
              <h3 className="text-2xl font-medium text-brand-400">{NAME}</h3>
            </div>

            {/* Professional Credentials */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center gap-2 px-3 py-2 bg-neutral-800 rounded-full border border-neutral-700">
                <svg
                  className="w-4 h-4 text-brand-400"
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
                <span className="text-brand-400 font-medium text-sm">
                  CRM/PR {CRM_PR_NUMBER}
                </span>
              </div>
              <div className="w-1 h-1 bg-neutral-600 rounded-full"></div>
              <div className="flex items-center gap-2 px-3 py-2 bg-neutral-800 rounded-full border border-neutral-700">
                <svg
                  className="w-4 h-4 text-brand-400"
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
                <span className="text-brand-400 font-medium text-sm">
                  RQE {RQE_NUMBER}
                </span>
              </div>
            </div>

            <div className="py-2">
              <p className="text-neutral-300 leading-relaxed text-base mb-6">
                {PROFESSIONAL_DESCRIPTION}
              </p>
            </div>

            {/* Social Media */}
            <div className="py-4">
              <div className="flex gap-3 mt-1">
                <Link
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 shadow-medium"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z" />
                  </svg>
                  <span className="font-medium">Instagram</span>
                </Link>
                <Link
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-3 py-1 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-medium"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span className="font-medium">Facebook</span>
                </Link>
              </div>
            </div>
          </div>

          <div>
            <div className="mt-4 pb-2">
              <h4 className="text-lg font-semibold text-neutral-200">
                Locais de Atendimento
              </h4>
            </div>

            {/* Ortohauer */}
            <div className="text-neutral-300">
              <div className="py-1">
                <div className="font-medium text-neutral-200 mb-1">
                  {ORTOHAUER_NAME}
                </div>
                <div className="space-y-1">
                  <div className="text-sm py-1">
                    {ORTOHAUER_ADDRESS.split(' - ')[0]}
                  </div>
                  <div className="text-sm py-1 font-medium text-brand-400">
                    {ORTOHAUER_PHONE}
                  </div>
                </div>
              </div>

              {/* Dagostini */}
              <div className="py-1">
                <div className="font-medium text-neutral-200 mb-1">
                  {DAGOSTINI_NAME}
                </div>
                <div className="space-y-1">
                  <div className="text-sm py-1">
                    {DAGOSTINI_ADDRESS.split(' - ')[0]}
                  </div>
                  <div className="text-sm py-1 font-medium text-brand-400">
                    {DAGOSTINI_PHONE}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="mt-4 pb-2">
              <h4 className="text-lg font-semibold text-neutral-200">
                Tratamentos
              </h4>
            </div>
            <div className=" text-neutral-300 text-sm">
              <div className="py-1">Infiltração articular</div>
              <div className="py-1">Bloqueio anestésico</div>
              <div className="py-1">Terapia por Ondas de Choque</div>
              <div className="py-1">Cirurgia de lesões tendíneas</div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-neutral-400 text-sm py-2">
              © 2025 Dra. Ana Pierin. Todos os direitos reservados.
            </div>
            <div className="flex flex-wrap gap-6 py-2">
              <Link
                href="#about"
                className="text-neutral-400 hover:text-brand-400 transition-colors text-sm font-medium"
              >
                Sobre
              </Link>
              <Link
                href="#services"
                className="text-neutral-400 hover:text-brand-400 transition-colors text-sm font-medium"
              >
                Tratamentos
              </Link>
              <Link
                href="#contact"
                className="text-neutral-400 hover:text-brand-400 transition-colors text-sm font-medium"
              >
                Contato
              </Link>
              <Link
                href={WHATSAPP_DOCTOR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-brand-400 transition-colors text-sm font-medium"
              >
                WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
