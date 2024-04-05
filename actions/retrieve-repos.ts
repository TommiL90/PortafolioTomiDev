import { prisma } from '@/lib/prisma'
import { Language } from '@prisma/client'

export const retrieveRepos = async (language: Language) => {
  const data = await prisma.project.findMany({
    where: {
      language,
    },
    include: {
      techs: {
        select: {
          name: true,
        },
      },
      images: {
        select: {
          url: true,
        },
      },
    },
  })

  return data
}
