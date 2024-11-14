import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 3, mt: 4 }}>
            <Container maxWidth="md">
                <Typography variant="body1" align="center">
                    &copy; {new Date().getFullYear()} Gestión de Turnos Médicos. Todos los derechos reservados.
                </Typography>
                <Typography variant="body2" align="center">
                    <Link href="#" color="inherit" underline="hover">
                        Política de Privacidad
                    </Link>
                    {' | '}
                    <Link href="#" color="inherit" underline="hover">
                        Términos de Servicio
                    </Link>
                    {' | '}
                    <Link href="#" color="inherit" underline="hover">
                        Contacto
                    </Link>
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
