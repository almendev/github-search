import { Container, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import Search from './components/Search'
import UserCard from './components/UserCard'
import { getGitHubUser } from './services/users'

function App () {
  const [inputUser, setInputUser] = useState('octocat')
  const [userState, setUserState] = useState(inputUser)
  const [notFound, setNotFound] = useState(false)

  const gettinUser = async (user) => {
    const userResponse = await getGitHubUser(user)

    if (inputUser === 'octocat') {
      const defaultUser = JSON.stringify(userResponse)
      window.localStorage.setItem('octocat', defaultUser)
    }

    if (userResponse.message === 'Not Found') {
      const { octocat } = window.localStorage
      setUserState(JSON.parse(octocat))
      setNotFound(true)
    } else {
      setUserState(userResponse)
      setNotFound(false)
    }
  }

  useEffect(() => {
    gettinUser(inputUser)
  }, [inputUser])

  return (
    <Container
      sx={{
        background: 'whitesmoke',
        width: { xs: '95vw', sm: '80vw' },
        height: 'auto',
        padding: '30px',
        borderRadius: '16px',
        marginTop: { xs: '10px', sm: '40px' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Search inputUser={inputUser} setInputUser={setInputUser} />
      {notFound && <Typography sx={{ color: 'red' }}>User Not Found</Typography>}
      <UserCard userState={userState} />
    </Container>
  )
}

export default App
