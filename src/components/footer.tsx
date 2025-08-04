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
  PHONE_NUMBER,
} from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="section bg-neutral-900 text-neutral-100">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 space-y-8">
            <div className="py-2">
              <h3 className="text-2xl font-bold mb-6 text-brand-400">{NAME}</h3>
            </div>
            <div className="py-2">
              <p className="text-neutral-300 leading-relaxed text-base mb-8">
                {PROFESSIONAL_DESCRIPTION}
              </p>
            </div>

            {/* Social Media */}
            <div className="py-4">
              <h4 className="text-lg font-semibold mb-6 text-neutral-200">
                Siga-nos
              </h4>
              <div className="flex space-x-6">
                <Link
                  href="https://instagram.com/draanapierin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-4 w-32 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 shadow-medium"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span className="font-medium">Instagram</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="py-2">
              <h4 className="text-lg font-semibold mb-6 text-neutral-200">
                Locais de Atendimento
              </h4>
            </div>
            <div className="space-y-8 text-neutral-300">
              <div className="py-2">
                <div className="font-medium text-neutral-200 mb-3">
                  {ORTOHAUER_NAME}
                </div>
                <div className="space-y-2">
                  <div className="text-sm py-1">
                    {ORTOHAUER_ADDRESS.split(' - ')[0]}
                  </div>
                  <div className="text-sm py-1 font-medium text-brand-400">
                    {ORTOHAUER_PHONE}
                  </div>
                </div>
              </div>
              <div className="py-2">
                <div className="font-medium text-neutral-200 mb-3">
                  {DAGOSTINI_NAME}
                </div>
                <div className="space-y-2">
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

          <div className="space-y-8">
            <div className="py-2">
              <h4 className="text-lg font-semibold mb-6 text-neutral-200">
                Tratamentos
              </h4>
            </div>
            <div className="space-y-4 text-neutral-300 text-sm">
              <div className="py-2 hover:text-brand-400 transition-colors cursor-pointer">
                Infiltração articular
              </div>
              <div className="py-2 hover:text-brand-400 transition-colors cursor-pointer">
                Bloqueio anestésico
              </div>
              <div className="py-2 hover:text-brand-400 transition-colors cursor-pointer">
                Terapia por Ondas de Choque
              </div>
              <div className="py-2 hover:text-brand-400 transition-colors cursor-pointer">
                Cirurgia de lesões tendíneas
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-700 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-neutral-400 text-sm py-2">
              © 2025 Dra. Ana Pierin. Todos os direitos reservados.
            </div>
            <div className="flex flex-wrap gap-8 py-2">
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
                href={`tel:${PHONE_NUMBER}`}
                className="text-neutral-400 hover:text-brand-400 transition-colors text-sm font-medium"
              >
                Emergência
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
