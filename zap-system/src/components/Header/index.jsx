import React, { useState } from 'react';
import { Container, Typography, CssBaseline } from '@material-ui/core';
import { MenuList, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './style.css'

export default function Header() {
    return (
        <Container id="container">
            <CssBaseline/>
            <Typography id="h1">Zap System</Typography>

            <MenuList class="menu">
                    <MenuItem >
                        <Link class="item" to="/">Mensagens</Link>
                    </MenuItem>                           
                    <MenuItem >
                        <Link class="item" to="/dashboardPage">Dashboards</Link>
                    </MenuItem>                         
                </MenuList>
        </Container>
    );
};