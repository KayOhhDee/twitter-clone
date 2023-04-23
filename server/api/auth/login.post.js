import bcrypt from 'bcrypt'
import { createRefreshToken } from '~/server/db/refreshTokens'
import { getUserByUsername } from '~/server/db/users'
import { userTransformer } from '~/server/transformers/user'
import { generateTokens, sendRefreshToken } from '~/server/utils/auth'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const { username, password } = body

  if (!username || !password) {
    return sendError(event, createError({
      statusCode: 400,
      statusMessage: 'Invalid Params'
    }))
  }

  const user = await getUserByUsername(username)

  if (!user) {
    return sendError(event, createError({
      statusCode: 400,
      statusMessage: 'Username or password is invalid'
    }))
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password)

  if (!isPasswordMatch) {
    return sendError(event, createError({
      statusCode: 400,
      statusMessage: 'Username or password is invalid'
    }))
  }

  const { accessToken, refreshToken } = generateTokens(user)

  await createRefreshToken({
    token: refreshToken,
    userId: user.id
  })

  sendRefreshToken(event, refreshToken)

  return {
    access_token: accessToken,
    user: userTransformer(user)
  }
})

