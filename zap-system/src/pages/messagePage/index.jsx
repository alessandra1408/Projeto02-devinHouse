import React, { Component } from 'react';
import Header from '../../components/Header';
import { Container } from '@material-ui/core';


class MessagePage extends Component{
    render(){
        return(
            <>
                <Container component="main" maxWidth={false}>
                    <Header />
                    <h1>
                        MessagePage
                    </h1>
                </Container>
            </>
        )
    }
}

export default MessagePage;