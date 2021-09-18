import React, { Component } from 'react';
import { Typography, TextField, Container, Grid, Box } from '@material-ui/core';
import './style.css'

class Form extends Component{
    render(){
        return(
            <>
             
                <div id="Inputs">
                    
                    <div>
                        <label htmlFor="">xxxxx</label>
                        <input type="text" />
                    </div>
                     
                    
                    <div>
                        <label htmlFor="">xxxxx</label>
                        <input type="text" />
                    </div>

                    <div>
                        <label htmlFor="">xxxxx</label>
                        <input type="text" />
                    </div>
                    
                </div>
                

            </>
        )
    }
}

export default Form;