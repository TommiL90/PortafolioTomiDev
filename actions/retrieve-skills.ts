import { prisma } from '@/lib/prisma'
import { Language } from '@prisma/client'

export const retrieveSkills = async (language: Language) => {
  const data = await prisma.tech.findMany({
    where: {
      language,
      AND: {
        description: {
          not: '',
        },
      },
    },
  })

  return data
}
