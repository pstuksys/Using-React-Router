import React from 'react'
import { Route, Routes } from 'react-router'
const Welcome = () => {
    return (
        <section>
            <h1> Welcome to the page </h1>
            <Routes>
                <Route path='/welcome/user' />
                <Route />
            </Routes>
        </section>
    )
}

export default Welcome
