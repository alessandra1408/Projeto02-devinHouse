import React, { Component } from 'react';
import Header from '../../components/Header';
import { Container } from '@material-ui/core';


class DashboardPage extends Component{
    render(){
        return(
            <>
                <Container component="main" maxWidth={false}>
                    <Header />
                    <h1>
                        DashboardPage
                    </h1>
                </Container>
            </>
        )
    }
}

export default DashboardPage;