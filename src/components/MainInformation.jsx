import { Stack, Typography } from '@mui/material'
import React from 'react'

function MainInformation (props) {
  const { userState } = props
  const { name, login, created_at } = userState
  const createdAt = new Date(created_at).toLocaleDateString()

  return (
    <>
      <Stack
        direction='row'
        sx={{ justifyContent: 'space-between', alignItems: 'center' }}
      >
        <Typography variant='h4'>{name}</Typography>
        <Typography variant='subtitle2'>{createdAt}</Typography>
      </Stack>
      <Typography variant='caption'>@{login}</Typography>
    </>
  )
}

export default MainInformation
