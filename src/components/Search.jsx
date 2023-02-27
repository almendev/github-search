import { IconButton, Stack, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'

function Search (props) {
  const [inputValue, setInputValue] = useState('')

  const { setInputUser } = props

  const onChangeInputValue = (event) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setInputUser(inputValue)
    setInputValue('')
  }

  return (
    <Stack
      direction='row'
      sx={{
        width: { xs: '100%', sm: '80%' }
      }}
      component='form'
      onSubmit={handleSubmit}
    >
      <TextField
        id='outlined-basic'
        label='GitHub User'
        variant='outlined'
        placeholder='Octocat'
        value={inputValue}
        onChange={onChangeInputValue}
        sx={{
          width: '100%'
        }}
        InputProps={{
          endAdornment: (
            <IconButton type='submit'>
              <SearchIcon />
            </IconButton>
          )
        }}
      />
    </Stack>
  )
}

export default Search
