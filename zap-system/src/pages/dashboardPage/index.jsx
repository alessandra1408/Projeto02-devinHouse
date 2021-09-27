import React, { useState } from 'react';
import Header from '../../components/Header';
import { Container } from '@material-ui/core';


export default function DashboardPage(){
    return(
        <>
            <Container component="main" maxWidth={false}>
                <Header />
                <h1>
                    DashboardPage
                </h1>
            </Container>
        </>
    )
}
