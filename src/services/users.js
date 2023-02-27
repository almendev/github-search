import { API_URL } from '../constants'

export const getGitHubUser = async (user) => {
  const res = await fetch(`${API_URL}${user}`)
  const data = await res.json()
  return data
}
