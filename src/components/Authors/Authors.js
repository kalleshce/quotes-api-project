import { Alert, AlertTitle, Box, Card, CardContent, CircularProgress, Container, Divider, Link, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAuthorsData } from "../../redux/actions/authorsDataActions";

const showSpinner = () => {
    return <Box>
        <CircularProgress />
    </Box>
}

const Authors = () => {
    const dispatch = useDispatch();

    const { isLoading, authorsData, error } = useSelector(state => state.authorsData)

    useEffect(() => {
        dispatch(getAllAuthorsData())
    }, [])

    const showError = () => {
        return <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {error}
        </Alert>
    }

    const showAuthors = (data) => {
        return data?.map((item, i) => {
          const  { name, description, bio, link } = item;
         return  <Card key={i} sx={{ mb: '6px' }}>
                <CardContent key={i}>
                    <Typography sx={{ fontSize: 26 }} color="darkgoldenrod">
                        {name}
                    </Typography>
                    <Divider />
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {description}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} variant="body1" component="div">
                        {bio}
                    </Typography>
                    <Box>
                        <Link href={link} sx={{ textDecoration: 'none' }}>Read More</Link>
                    </Box>
                </CardContent>
            </Card>
        }
        )
    }

    return (
        <Container>
            <Typography variant="h2" color='darkblue'>Authors</Typography>
            {isLoading && showSpinner()}
            {!isLoading && showAuthors(authorsData.results)}
            {error && showError()}
        </Container>
    )
}
export default Authors