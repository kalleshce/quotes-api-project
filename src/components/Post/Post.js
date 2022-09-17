import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share';
import React from 'react'
import { Favorite, FavoriteBorder } from '@mui/icons-material';

const Post = () => {
  return (
    <Box flex={4}>
        <Card >
          <CardHeader
            avatar={
              <Avatar aria-label="recipe">
              </Avatar>
            }
            title="Mushroom and Chorizo Paella"
            subheader="Wed - 3:48pm"
          />
          <CardMedia
            component="img"
            height="300"
            image='https://cdn.pixabay.com/photo/2022/03/02/12/42/paneer-7043101_1280.jpg'
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="WindowText">
              This impressive paella is a perfect party dish and a fun meal to cook
              together with your guests. Add 1 cup of frozen peas along with the mussels,
              if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite color='error' />} />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
    </Box >
  )
}

export default Post