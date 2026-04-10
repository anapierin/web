import { NextResponse } from 'next/server'
import {
  NAME,
  CRM_PR_NUMBER,
  RQE_NUMBER,
  ORTOHAUER_NAME,
  ORTOHAUER_ADDRESS,
  ORTOHAUER_PHONE,
  DAGOSTINI_NAME,
  DAGOSTINI_ADDRESS,
  DAGOSTINI_PHONE,
  DOMAIN,
  INSTAGRAM_URL,
  EXPERIENCE_YEARS,
  PATIENTS_TREATED,
} from '@/lib/constants'

export const GET = () => {
  const content = `# ${NAME}

> Medica Ortopedista e Traumatologista especializada em tratamentos minimamente invasivos para dor, com foco em Ortopedia Esportiva. Atendimento em Curitiba e Lapa, Parana.

${NAME} possui mais de ${EXPERIENCE_YEARS} anos de experiencia e ja atendeu ${PATIENTS_TREATED} pacientes. Registrada no CRM/PR ${CRM_PR_NUMBER} com RQE ${RQE_NUMBER}.

## Tratamentos

- Infiltracao articular guiada por ultrassonografia
- Bloqueio anestesico em pontos gatilho de dor
- Terapia por Ondas de Choque
- Tratamento cirurgico de lesoes tendineas

## Condicoes Tratadas

- Check-up esportivo
- Dor ou trauma agudo
- Dor cronica
- Lesoes musculares
- Artroses e artrites
- Doencas da coluna vertebral

## Locais de Atendimento

- ${ORTOHAUER_NAME}: ${ORTOHAUER_ADDRESS} - Tel: ${ORTOHAUER_PHONE}
- ${DAGOSTINI_NAME}: ${DAGOSTINI_ADDRESS} - Tel: ${DAGOSTINI_PHONE}

## Links

- [Website](${DOMAIN}): Site oficial com informacoes e agendamento
- [Instagram](${INSTAGRAM_URL}): Conteudo sobre ortopedia e saude
- [Sitemap](${DOMAIN}/sitemap.xml): Mapa do site
`

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
