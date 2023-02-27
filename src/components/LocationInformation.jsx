import { Grid, Stack, Typography, Link } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import TwitterIcon from '@mui/icons-material/Twitter'
import LanguageIcon from '@mui/icons-material/Language'
import BusinessIcon from '@mui/icons-material/Business'

function LocationInformation (props) {
  const { userState } = props
  const { location, twitter_username, blog, company } = userState
  console.log(userState)
  return (
    <>
      <Grid
        container
        spacing={2}
        columns={{ xs: 1, sm: 12 }}
        sx={{ marginTop: '20px' }}
      >
        <Grid item xs={6}>
          <Stack direction='row' spacing={2}>
            <LocationOnIcon />
            <Typography>
              {location}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack direction='row' spacing={2}>
            <TwitterIcon />
            <Typography>
              {twitter_username ? `@${twitter_username}` : 'Not Available'}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack direction='row' spacing={2}>
            <LanguageIcon />
            {blog === undefined || blog === null || blog === ''
              ? <Typography>Not Avaliable</Typography>
              : <Link href={blog} target='_blank' rel='noreferrer'><Typography>{blog}</Typography></Link>}
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack direction='row' spacing={2}>
            <BusinessIcon />
            <Typography>
              {company ?? 'Not Available'}
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </>
  )
}

export default LocationInformation
