import { Paper, Stack, Typography } from '@mui/material'

function PaperInformation (props) {
  const { userState } = props
  const { public_repos, followers, following } = userState
  return (
    <Paper
      elevation={3}
      sx={{
        padding: '16px',
        marginTop: '20px'
      }}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        sx={{ justifyContent: 'space-evenly' }}
      >
        <Stack sx={{ alignItems: 'center' }}>
          <Typography variant='h5'>Repos</Typography>
          <Typography variant='h6'>{public_repos}</Typography>
        </Stack>
        <Stack sx={{ alignItems: 'center' }}>
          <Typography variant='h5'>Followers</Typography>
          <Typography variant='h6'>{followers}</Typography>
        </Stack>
        <Stack sx={{ alignItems: 'center' }}>
          <Typography variant='h5'>Following</Typography>
          <Typography variant='h6'>{following}</Typography>
        </Stack>
      </Stack>
    </Paper>
  )
}

export default PaperInformation
