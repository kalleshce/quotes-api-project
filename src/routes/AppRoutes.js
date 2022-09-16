import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Authors from '../components/Authors/Authors'
import GetRandomQuote from '../components/GetRandomQuote/GetRandomQuote'
import QuotesList from '../components/QuotesList/QuotesList'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={QuotesList} />
                <Route path='/random' exact component={GetRandomQuote} />
                <Route path='/authors' exact component={Authors} />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRoutes;