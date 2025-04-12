import { Route } from 'react-router-dom';
import HomePage from './Home/home-page';
import Services from './Servicios/services_section';
import AboutMe from './SobreMi/aboutMe_section';

import Testimonials from './Testimonios/testimonials_section';
import Contact from './Contacto/contact_section';
import Layout from './layout';

const WebRoutes = (
  <Route path='/' element={<Layout />}>
    {/* Rutas hijas */}
    <Route index element={<HomePage />} />  
    <Route path="servicios" element={<Services />} />
    <Route path="sobre-mi" element={<AboutMe />} />
    <Route path="testimonios" element={<Testimonials />} />
    <Route path="contacto" element={<Contact />} />
  </Route>
);

export default WebRoutes;