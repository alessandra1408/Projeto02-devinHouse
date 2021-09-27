import React, { createElement, useState } from 'react';
import Header from '../Header';
import { Container, Button, Typography, Box, MenuList, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './style.css'


export default function NewMessage() {
    const [gatilho, setGatiho] = useState("");
    const [canal, setCanal] = useState("");
    const [timer, setTimer] = useState("");
    const [mensagem, setMensagem] = useState("");

    const imprimi = () => {
        console.log("Gatilho: " + gatilho)
    }

    const enviar = (event) => {
        event.preventDefault()
        console.log("Gatilho: " + gatilho,
         "Canal: " + canal,
        "Timer: " + timer,
        "Mensagem: " + mensagem)
        
        var valores = {
            Gatilho: gatilho,
            Canal: canal,
            Timer: timer,
            Mensagem: mensagem
        }

        let array = React.createElement('div')
        array = valores

        localStorage.setItem("Nova Mensagem: ", JSON.stringify(array))
    }

        return(
            <>
                <Container component="main" maxWidth="xm">
                    <Header />

                    <Container class="head">
                        <Box id="message">
                            <Typography> Mensagens </Typography>
                            <Box id="button">
                                <MenuList class="menu">
                                    <MenuItem >
                                        <Link class="item" to="/">Voltar</Link>
                                    </MenuItem>                            
                                    <MenuItem >
                                        <Link class="item" to="/newmessagepage" onClick={enviar}>Cadastrar</Link>
                                    </MenuItem>                         
                                </MenuList>
                            </Box>
                        </Box>
                    </Container>

                    <div id="forms">
                        <form onSubmit={enviar}>
                        
                                <div id="conteudo">
                                    <div>
                                        <label htmlFor="gatilho">Gatilho</label>
                                        <input type="text" placeholder="fez_pix" id="gatilho" value={gatilho} onChange={(evento) => setGatiho(evento.target.value)}/>
                                    </div>
                                    <div>
                                        <label htmlFor="canal">Canal</label>
                                        <input type="text" placeholder="email" id="canal" value={canal}  onChange={(evento) => setCanal(evento.target.value)}/>
                                    </div>
                                    <div>
                                        <label htmlFor="timer">Timer</label>
                                        <input type="text" placeholder="12:00" id="timer" value={timer}onChange={(evento) => setTimer(evento.target.value)}/>
                                    </div>
                                </div>
                                <label htmlFor="areaDeTexto">Mensagem:</label>
                                <div id="divAreaDeTexto">
                                    
                                    <textarea name="" id="areaDeTexto" cols="81" rows="10" placeholder="Sou uma mensagem de teste :)" value={mensagem} onChange={(evento) => setMensagem(evento.target.value)}></textarea>
                                </div>
                        
                        
                        </form>
                    </div>
                    
                </Container>

         </>
      )
}
