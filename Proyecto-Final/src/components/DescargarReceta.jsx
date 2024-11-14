import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Box, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const DescargarReceta = () => {
    const [idPaciente, setIdPaciente] = useState('');
    const [idReceta, setIdReceta] = useState('');
    const [receta, setReceta] = useState(null);
    const [mensaje, setMensaje] = useState('');
    const [open, setOpen] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`http://localhost:8080/${idPaciente}/${idReceta}`);
            setReceta(response.data);
            setMensaje('Receta encontrada');
            setOpen(true);
        } catch (error) {
            console.error('Error al obtener la receta:', error);
            setMensaje('No se encontró la receta');
            setOpen(true);
        }
    };

    const handleClose = () => {
        setOpen(false);
        resetForm();
    };

    const resetForm = () => {
        setIdPaciente('');
        setIdReceta('');
        setReceta(null);
        setMensaje('');
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Descargar Receta Medica
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="ID del Paciente"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={idPaciente}
                        onChange={(e) => setIdPaciente(e.target.value)}
                        required
                    />
                    <TextField
                        label="ID de la Receta"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={idReceta}
                        onChange={(e) => setIdReceta(e.target.value)}
                        required
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Descargar Receta
                    </Button>
                </form>
                {mensaje && (
                    <Typography variant="body1" color="textSecondary" sx={{ mt: 2 }}>
                        {mensaje}
                    </Typography>
                )}
            </Box>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Receta</DialogTitle>
                <DialogContent>
                    {receta ? (
                        <Box>
                            <Typography>ID del Paciente: {receta.turno.paciente.id}</Typography>
                            <Typography>Nombre del Paciente: {receta.turno.paciente.nombre}</Typography>
                            <Typography>ID del Médico: {receta.turno.medico.id}</Typography>
                            <Typography>Nombre del Médico: {receta.turno.medico.nombre}</Typography>
                            <Typography>Fecha de Emisión: {receta.fechaEmision}</Typography>
                            <Typography>Detalles: {receta.detalles}</Typography>
                        </Box>
                    ) : (
                        <Typography>No se encontró la receta</Typography>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cerrar
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default DescargarReceta;