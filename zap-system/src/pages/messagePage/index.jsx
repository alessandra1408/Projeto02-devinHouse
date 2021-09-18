import React, { Component } from 'react';
import Header from '../../components/Header';
import Form from './Form'
import { Container, Button, Typography, Box } from '@material-ui/core';
import './style.css'


class MessagePage extends Component{
    render(){
        return(
            <>
                <Container component="main" maxWidth="xm" id="body">
                    <Header />
                    <Container class="head">
                        <Box id="message">
                            <Typography> MessagePage </Typography>
                            <Box id="button">
                                <Button
                                variant="outlined"
                            
                                >Pesquisar</Button>
                                <Button
                                variant="contained"
                                style={{left:15}}
                                >Nova Mensagem</Button>
                            </Box>
                        </Box>
                    </Container>

                    <Container class="head">
                        <Form />
                    </Container>
                
                </Container>
            </>
        )
    }
}

export default MessagePage;