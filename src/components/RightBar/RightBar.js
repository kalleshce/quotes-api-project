import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const RightBar = () => {
  return (
    <Box bgcolor='#f2f2f2' flex={2} p={2} sx={{ display: { xs: "none", sm: 'block' } }}>
      <Box position='fixed' alignItems='center' width={300}>
        <Typography variant='h6' fontWeight='200' m='5px 0'>Online Friends</Typography>
        <AvatarGroup max={4}>
          <Avatar alt='jhon' src='https://www.beyoung.in/api/cache/catalog/r/e/relax_navy_blue_men_model_400x400.jpg'></Avatar>
          <Avatar alt='jhon' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDgIUmUrzA8xm4q34vk1tvw0zSJ609m66h-Q&usqp=CAU'></Avatar>
          <Avatar alt='jhon' src='https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'></Avatar>
          <Avatar alt='jhon' src='https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80'></Avatar>
          <Avatar alt='jhon' src='https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80'></Avatar>
        </AvatarGroup>
        <Typography variant='h6' fontWeight='300' m='5px 0'>Latest Photos</Typography>
        <ImageList cols={3} rowHeight={100} gap={3}>
          <ImageListItem> <img
            src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'
          />
          </ImageListItem>
          <ImageListItem> <img
            src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'
          />
          </ImageListItem>
          <ImageListItem> <img
            src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'
          />
          </ImageListItem>
          <ImageListItem> <img
            src='https://images.unsplash.com/photo-1522770179533-24471fcdba45'
          />
          </ImageListItem>
        </ImageList>
        <Typography variant='h6' fontWeight='300' m='5px 0'>Latest Coversations</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default RightBar