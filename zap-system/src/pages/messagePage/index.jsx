import React, { useState } from 'react';
import Header from '../../components/Header';
import Form from '../../components/Form'
import { Container, Button, Typography, Box } from '@material-ui/core';
import { MenuList, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import '../MessagePage/style.css'


export default function MessagePage(){

    

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
                        
                        <div id="conteudo2">
                            <div>
                                <label htmlFor="gatilho">Gatilho</label>
                                <input type="text" placeholder="fez_pix" id="gatilho" />
                            </div>
                            <div>
                                <label htmlFor="canal">Canal</label>
                                <input type="text" placeholder="email" id="canal" />
                            </div>
                            <div>
                                <label htmlFor="timer">Timer</label>
                                <input type="text" placeholder="12:00" id="timer" />
                            </div>
                        </div>
                        
                        <div id="tabela">
                        <table style={{width:700}}>
                            <tr style={{height:30}}>
                                <th>Gatilho</th>
                                <th>Canal</th>
                                <th>Timer</th>
                                <th>Ações</th>
                            </tr>
                            <tr style={{height:50}} class="cinza">
                                <td>abertura_conta</td>
                                <td>sms</td>
                                <td>15:00</td>
                                <td style={{width:150}}><button>Ver Mensagem</button></td>
                            </tr>
                            <tr style={{height:50}}>
                                <td>fez_pix</td>
                                <td>sms</td>
                                <td>5:00</td>
                                <td style={{width:150}}><button>Ver Mensagem</button></td>
                            </tr>
                            <tr style={{height:50}} class="cinza">
                                <td>abertura_conta</td>
                                <td>whatsapp</td>
                                <td>73:00</td>
                                <td style={{width:150}}><button>Ver Mensagem</button></td>
                            </tr>
                            </table>
                        </div>
                    </Container>
                
                </Container>
            </>
        )
    }