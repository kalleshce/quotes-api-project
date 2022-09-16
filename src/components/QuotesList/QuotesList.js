import { Button, Card, CardContent, Chip, Container, ListItem, ListItemText, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { getAllQuotesList } from "../../redux/actions/quotesListActions";
const QuotesList = () => {
  const dispatch = useDispatch();

  const { isLoading, quotesListData, error } = useSelector(state => state.quotesList)

  useEffect(() => {
    dispatch(getAllQuotesList())
  }, [])

  const showQuotes = (data) => {
    return data?.map((item, i) =>
      <ListItem>
        <ListItemText primary={item.content}></ListItemText>
        <Stack direction="row" spacing={1}>
          <Chip label={'Mr ' + item.author} variant="outlined" />
        </Stack>
      </ListItem>
    )
  }

  console.log(quotesListData)

  return (
    <Container>
      <Link to='/random'>
        <Button variant="contained">GET RANDOM QUOTE</Button>
      </Link>
      {showQuotes(quotesListData.results)}
    </Container>
  )
}
export default QuotesList
