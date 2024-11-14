import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Box, List, ListItem, ListItemText, Divider, CircularProgress } from '@mui/material';

const ListaEspecialistas = () => {
    const [especialistas, setEspecialistas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEspecialistas = async () => {
            try {
                const response = await axios.get('http://localhost:8080/especialistas');
                setEspecialistas(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error al obtener los especialistas:', error);
                setLoading(false);
            }
        };

        fetchEspecialistas();
    }, []);

    if (loading) {
        return (
            <Container maxWidth="md">
                <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress />
                </Box>
            </Container>
        );
    }

    return (
        <Container maxWidth="md">
            <Box sx={{ mt: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Lista de Especialistas
                </Typography>
                <List>
                    {especialistas.map((especialista, index) => (
                        <React.Fragment key={index}>
                            <ListItem alignItems="flex-start">
                                <ListItemText
                                    primary={especialista.nombre}
                                    secondary={
                                        <>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                Especialidad: {especialista.especialidad.nombre}
                                            </Typography>
                                            <br />
                                            Horarios: {especialista.horarios}
                                            <br />
                                            Ubicación: {especialista.ubicacion}
                                        </>
                                    }
                                />
                            </ListItem>
                            {index < especialistas.length - 1 && <Divider component="li" />}
                        </React.Fragment>
                    ))}
                </List>
            </Box>
        </Container>
    );
};

export default ListaEspecialistas;
