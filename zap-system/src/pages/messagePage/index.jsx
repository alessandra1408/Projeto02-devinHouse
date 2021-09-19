import React, { Component } from 'react';
import Header from '../../components/Header';
import Form from './Form'
import { Container, Button, Typography, Box } from '@material-ui/core';
import { MenuList, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
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
                                <MenuList class="menu">
                                    <MenuItem >
                                        <Link class="item" to="/searchpage">Pesquisar</Link>
                                    </MenuItem>                            
                                    <MenuItem >
                                        <Link class="item" to="/newmessagepage">Nova Mensagem</Link>
                                    </MenuItem>                         
                                </MenuList>
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