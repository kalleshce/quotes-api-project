import { Mail, Notifications } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, InputBase, styled, Toolbar } from '@mui/material'
import React from 'react'

const StyledToolBar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
})

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  width: '40%',
  borderRadius: '3px',
  padding: '2px'
}))
const Icons = styled(Box)(({ theme }) => ({
}))

const NavBar = () => {
  return (
    <AppBar position='sticky'>
      <StyledToolBar>
        NavBar
        <Search><InputBase placeholder='  Search...' /></Search>
        <Icons sx={{ display: 'flex', alignItems: 'centre', gap: '20px'}}>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar sx={{ width: 36, height: 36 }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTONw5I13--HHukh79TX6C1BautXsORAS0s8UC4m-fRA&s' />
        </Icons>
      </StyledToolBar>

    </AppBar>
  )
}

export default NavBar