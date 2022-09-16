import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUserData } from '../../redux/actions/userProfileActions';

const UserProfile = () => {

  const dispatch = useDispatch();

  const { isLoading, userProfileData, error } = useSelector(state => state.userProfile)

  useEffect(() => {
    dispatch(getAllUserData())
  }, [])

  console.log(userProfileData.results)

  const showProfile = (data) => {
    return data?.map((item, i) => <Card key={i}>
      <CardMedia
      width="50"
        component="img"
        height="500"
        image={item.picture.large} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {item.name.first + ' ' + item.name.last}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
    )
  }

  return (
    <Container>
      <Grid xs={2}>
      {showProfile(userProfileData.results)}
      </Grid>
    </Container>
  )
}

export default UserProfile