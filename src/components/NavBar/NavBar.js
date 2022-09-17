import { Mail, Notifications } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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

  const [open, setOpen] = useState(false)
  return (
    <AppBar position='sticky'>
      <StyledToolBar>
        NavBar
        <Search><InputBase placeholder='  Search...' /></Search>
        <Icons sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar onClick={e => setOpen(true)} sx={{ width: 36, height: 36 }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTONw5I13--HHukh79TX6C1BautXsORAS0s8UC4m-fRA&s' />
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            onClose={e => setOpen(false)}
          >
              <MenuItem >Profile</MenuItem>
            <MenuItem >My account</MenuItem>
            <MenuItem >Logout</MenuItem>
          </Menu>
        </Icons>
      </StyledToolBar>

    </AppBar>
  )
}

export default NavBar