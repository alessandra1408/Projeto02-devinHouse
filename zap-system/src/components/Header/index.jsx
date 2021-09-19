import React, { Component } from 'react';
import { Container, Typography, CssBaseline } from '@material-ui/core';
import { MenuList, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './style.css'

class Header extends Component {
    render(){
        return (
            <Container id="container">
                <CssBaseline/>
                <Typography id="h1">Zap System</Typography>

                <MenuList class="menu">
                        <MenuItem >
                            <Link class="item" to="/messagepage">Mensagens</Link>
                        </MenuItem>                           
                        <MenuItem >
                            <Link class="item" to="/dashboardPage">Dashboards</Link>
                        </MenuItem>                         
                    </MenuList>
            </Container>
        );
    }
};

export default Header;