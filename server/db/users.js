import { prisma } from ".";
import bycrpt from 'bcrypt'

export const createUser = (userData) => {
  const _userData = {
    ...userData,
    password: bycrpt.hashSync(userData.password, 10)
  }

  return prisma.user.create({
    data: _userData
  })
}

export const getUserByUsername = (username) => {
  return prisma.user.findUnique({
    where: {
      username
    }
  })
}

export const getUserById = (userId) => {
  return prisma.user.findUnique({
    where: {
      id: userId
    }
  })
}