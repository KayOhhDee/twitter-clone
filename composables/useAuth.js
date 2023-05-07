import jwtDecode from "jwt-decode"

export default () => {
  const useAuthToken = () => useState('auth_token')
  const useAuthUser = () => useState('auth_user')
  const useAuthLoading = () => useState('auth_loading', () => true)

  const setToken = (token) => {
    useAuthToken().value = token
  }

  const setUser = (user) => {
    useAuthUser().value = user
  }

  const login = ({ username, password }) => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await $fetch('/api/auth/login', {
          method: 'POST',
          body: {
            username,
            password
          }
        })

        setToken(data.access_token)
        setUser(data.user)

        resolve(true)
      } catch (error) {
        reject(error)
      }
    })
  }

  const refreshToken = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await $fetch('/api/auth/refresh')
        setToken(data.access_token)
        resolve(true)
      } catch (error) {
        reject(error)
      }
    })
  }

  const getUser = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const data  = await useFetchApi('/api/auth/user')
        setUser(data.user)
        resolve(true)
      } catch (error) {
        reject(error)
      }
    })
  }

  const reRefreshAccessToken = () => {
    const authToken = useAuthToken()

    if(!authToken.value) return

    const decodedJwt = jwtDecode(authToken.value)

    const newRefreshTokenTime = decodedJwt.exp - 60000

    setTimeout(async () => {
      await refreshToken()
      reRefreshAccessToken()
    }, newRefreshTokenTime)
  }

  const initAuth = () => {
    return new Promise(async (resolve, reject) => {
      try {
        useAuthLoading().value = true
        await refreshToken()
        await getUser()
        reRefreshAccessToken()
        resolve(true)
      } catch (error) {
        reject(error)
      } finally {
        useAuthLoading().value = false
      }
    })
  }

  return { 
    login,  
    useAuthUser, 
    initAuth, 
    useAuthToken,
    useAuthLoading
  }
}