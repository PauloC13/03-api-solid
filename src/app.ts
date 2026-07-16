import fastify from 'fastify'
import { PrismaClient } from '@/prisma/generated/prisma/client'

export const app = fastify()

const prisma = new PrismaClient()

prisma.user.create({
  data: {
    name: 'Paulo',
    email: 'paulo@teste',
  },
})
