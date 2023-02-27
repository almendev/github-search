import { Typography, Stack } from '@mui/material'
import PaperInformation from './PaperInformation'
import LocationInformation from './LocationInformation'

function Description (props) {
  const { userState } = props
  const { bio } = userState
  return (
    <>
      <Stack sx={{ minHeight: '50px', justifyContent: 'center', marginTop: '20px' }}>
        <Typography variant='body1'>
          {bio ?? 'This user doesn´t have a bio on his/her profile'}
        </Typography>
      </Stack>
      <PaperInformation userState={userState} />
      <LocationInformation userState={userState} />
    </>
  )
}

export default Description
