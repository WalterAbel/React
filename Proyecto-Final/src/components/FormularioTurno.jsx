import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Box, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const FormularioTurno = () => {
    const [pacienteId, setPacienteId] = useState('');
    const [medicoId, setMedicoId] = useState('');
    const [fechaHora, setFechaHora] = useState('');
    const [motivoConsulta, setMotivoConsulta] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [turnoGenerado, setTurnoGenerado] = useState(null);
    const [open, setOpen] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const fechaHoraFormateada = formatFechaHora(fechaHora);
        const nuevoTurno = {
            paciente: { id: pacienteId },
            medico: { id: parseInt(medicoId) }, // Asegurarse de que el ID del médico sea un número
            fechaHora: fechaHoraFormateada, // Usar la fecha y hora formateada
            motivoConsulta: motivoConsulta,
        };

        console.log('Datos enviados:', nuevoTurno);

        try {
            const response = await axios.post('http://localhost:8080/turnos', nuevoTurno, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setTurnoGenerado(response.data);
            setMensaje('Turno creado exitosamente');
            setOpen(true);
        } catch (error) {
            console.error('Error al crear el turno:', error);
            setMensaje('Error al crear el turno');
        }
    };

    const formatFechaHora = (fechaHora) => {
        const [date, time] = fechaHora.split('T');
        const [hours, minutes] = time.split(':');
        return `${date} ${hours}:${minutes}:00`;
    };

    const handleClose = () => {
        setOpen(false);
        resetForm();
    };

    const resetForm = () => {
        setPacienteId('');
        setMedicoId('');
        setFechaHora('');
        setMotivoConsulta('');
        setMensaje('');
        setTurnoGenerado(null);
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Crear Nuevo Turno
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="ID del Paciente"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={pacienteId}
                        onChange={(e) => setPacienteId(e.target.value)}
                        required
                    />
                    <TextField
                        label="ID del Médico"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={medicoId}
                        onChange={(e) => setMedicoId(e.target.value)}
                        required
                    />
                    <TextField
                        label="Fecha y Hora"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type="datetime-local"
                        value={fechaHora}
                        onChange={(e) => setFechaHora(e.target.value)}
                        required
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        label="Motivo de la Consulta"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={motivoConsulta}
                        onChange={(e) => setMotivoConsulta(e.target.value)}
                        required
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Crear Turno
                    </Button>
                </form>
                {mensaje && (
                    <Typography variant="body1" color="textSecondary" sx={{ mt: 2 }}>
                        {mensaje}
                    </Typography>
                )}
            </Box>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Turno Creado</DialogTitle>
                <DialogContent>
                    {turnoGenerado && (
                        <Box>
                            <Typography>ID del Paciente: {turnoGenerado.paciente.id}</Typography>
                            <Typography>ID del Médico: {turnoGenerado.medico.id}</Typography>
                            <Typography>Fecha y Hora: {turnoGenerado.fechaHora}</Typography>
                            <Typography>Motivo de la Consulta: {turnoGenerado.motivoConsulta}</Typography>
                        </Box>
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

export default FormularioTurno;

