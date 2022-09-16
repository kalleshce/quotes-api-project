import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllRandomQuote } from '../../redux/actions/randomQuoteAction';


const GetRandomQuote = () => {

    const dispatch = useDispatch();

    const { isLoading, randomQuote, error } = useSelector(state => state.randomQuote)

    
    useEffect(() => {
        dispatch(getAllRandomQuote())
    }, [])

    console.log(randomQuote)

    return (
        <div>{randomQuote.content}</div>
    )
}

export default GetRandomQuote