import React, { useState } from 'react';
import { Typography, TextField, Container, Grid, Box } from '@material-ui/core';
import './style.css'

export default function Form(){
        return(
            <>
             
                <div id="Inputs">
                    
                    <div>
                        <label htmlFor="">Gatilho</label>
                        <input type="text" />
                    </div>
                     
                    <div>
                        <label htmlFor="">Canal</label>
                        <input type="text" />
                    </div>

                    <div>
                        <label htmlFor="">Timer</label>
                        <input type="text" />
                    </div>
                    
                </div>

                <div id="table">
                    <table width="600" border="1px">
                            <tr class="bold">
                                <td width="250" height="30">Gatilho</td>
                                <td width="113">Canal</td>
                                <td width="140">Tempo</td>
                                <td width="250">Ações</td>
                            </tr>
                            <tr>
                                <td height="50">abertura_conta</td>
                                <td>sms</td>
                                <td>15:00</td>
                                <td><button>Ver mensagem</button></td>
                            </tr>
                            <tr>
                                <td height="50">fez_pix</td>
                                <td>sms</td>
                                <td>5:00</td>
                                <td><button>Ver mensagem</button></td>
                            </tr>
                            <tr>
                                <td height="50">whatsapp</td>
                                <td>sms</td>
                                <td>73:00</td>
                                <td><button>Ver mensagem</button></td>
                            </tr>
                        </table>

                    </div>
                
            </>
        )
}