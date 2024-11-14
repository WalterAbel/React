import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FormularioTurno from './components/FormularioTurno.jsx';
import ListaEspecialistas from './components/ListaEspecialistas.jsx';
import DescargarReceta from './components/DescargarReceta.jsx';
import Footer from './components/Footer.jsx';
import { AppBar, Toolbar, Typography, Button, Container, Box, Grid2 } from '@mui/material'; 

const Inicio = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Bienvenido a la Gestión de Turnos Médicos AlMedin
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Su salud es nuestra prioridad
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          En nuestra clínica, ofrecemos una amplia gama de servicios médicos para garantizar su bienestar. Nuestro equipo de especialistas está aquí para brindarle la mejor atención posible.
        </Typography>
      </Box>
      <Grid2 container spacing={4}> {}
        <Grid2 item xs={12} sm={6}> {}
          <Box sx={{ textAlign: 'center' }}>
            <img src="/src/assets/medicos.jpeg" alt="Atención Médica" style={{ width: '80%', borderRadius: '8px' }} />
            <Typography variant="h6" sx={{ mt: 2 }}>
              Atención Médica Integral
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Ofrecemos consultas médicas generales y especializadas para todas las edades.
            </Typography>
          </Box>
        </Grid2>
        <Grid2 item xs={12} sm={6}> {}
          <Box sx={{ textAlign: 'center' }}>
            <img src="/src/assets/equipos.jpeg" alt="Equipos Modernos" style={{ width: '80%', borderRadius: '8px' }} />
            <Typography variant="h6" sx={{ mt: 2 }}>
              Equipos Modernos
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Contamos con tecnología de punta para diagnósticos precisos y tratamientos efectivos.
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Container>
  );
};

const App = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Gestión de Turnos Médicos
            </Typography>
            <Button color="inherit" component={Link} to="/">
              Inicio ❤️‍🩹
            </Button>
            <Button color="inherit" component={Link} to="/formulario">
              Formulario de Turno 📄
            </Button>
            <Button color="inherit" component={Link} to="/especialistas">
              Lista de Especialistas 👨‍⚕️
            </Button>
            <Button color="inherit" component={Link} to="/descargar">
              Descargar Receta ⏬
            </Button>
          </Toolbar>
        </AppBar>
        <Container sx={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/formulario" element={<FormularioTurno />} />
            <Route path="/especialistas" element={<ListaEspecialistas />} />
            <Route path="/descargar" element={<DescargarReceta />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </Box>
  );
};

export default App;
