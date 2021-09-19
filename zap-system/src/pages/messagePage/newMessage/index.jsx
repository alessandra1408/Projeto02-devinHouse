import React, { Component } from 'react';
import Header from '../../../components/Header';
import { Container, Button, Typography, Box } from '@material-ui/core';
import '../NewMessage/style.css'


class NewMessage extends Component{
    render(){
        return(
            <>
                <Container component="main" maxWidth="xm">
                    <Header />

                    <form>
                        
                            <label htmlFor="">Gatilho</label>
                            <input type="text" placeholder="fez_pix"/>

                            <label htmlFor="">Canal</label>
                            <input type="text" placeholder="email"/>
                       
                            <label htmlFor="">Timer</label>
                            <input type="text" placeholder="12:00"/>
                        
                    </form>
                    
                </Container>

            </>
        )
    }
}

export default NewMessage;