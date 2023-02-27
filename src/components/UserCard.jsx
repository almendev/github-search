import { Avatar, Grid, Stack } from '@mui/material'
import Description from './Description'
import MainInformation from './MainInformation'

function UserCard (props) {
  const { userState } = props
  const { avatar_url } = userState

  return (
    <Grid
      container
      columns={{ xs: 1, sm: 12 }}
      sx={{ width: '100%', marginTop: '20px' }}
    >
      <Grid item xs={3}>
        <Avatar
          alt='Github user image'
          src={avatar_url}
          sx={{ width: '100%', height: 'auto', margin: '0 auto' }}
        />
      </Grid>
      <Grid
        item
        xs={9}
        paddingLeft={{ xs: 0, sm: 2 }}
      >
        <Stack>
          <MainInformation userState={userState} />
          <Description userState={userState} />
        </Stack>
      </Grid>
    </Grid>
  )
}

export default UserCard
