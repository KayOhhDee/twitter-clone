export default (url, options = {}) => {
  const { useAuthToken } = useAuth()
  const authToken = useAuthToken().value

  return $fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${authToken}`
    }
  })
}