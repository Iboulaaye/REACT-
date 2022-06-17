import React from 'react';
import './App.css';
import {Button, Alert, Form, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar, Row, Col,CardImg} from 'react-bootstrap';



function App() {
  return ( 
      <div>
      <Navbar bg="primary" variant="dark" className='hdr'>
        <Container >
          <Row >
            <Navbar.Brand href="#home" className='fnav'> ACCEUIL </Navbar.Brand>
          </Row>
          <Row >
            <Nav className="me-auto">
              <Nav.Link href="#ajout" id="navstyle"> Ajouter </Nav.Link>
              <Nav.Link href="#recherche" id="navstyle"> Recherche </Nav.Link>
              <Nav.Link href="#contact" id="navstyle"> Contact </Nav.Link>
            </Nav>
          </Row>
        </Container>
      </Navbar>
      <p id ='p1'>
        Bienvevue sur la plateforme de demande de d'aide de la fondation servir le Sénégal. <br/> 
        Merci de renseigner les informations demandées afin que votre demande soit prise en compte. <br/>  
        N'oubliez pas le motif de votre demande ainsi que les documents demandées pour une bon traitement de votre dossier. <br/> 
      </p>
      <Form class="row g-3" id='fr'>
        <div class='img'>
          <Card.Img src='https://tabaski.coalition-bby.com/img/fondation.png' size = '1000px' /> 
        </div>
        <div class='info'> 
          <div class="col-md-6">
            <Form.Label class="infow"> Prénom </Form.Label>
            <Form.Control type='text' aria-label="Prénom"/>
          </div>
          <div class="col-md-6">
            <Form.Label>Nom</Form.Label>
            <Form.Control type='text'  aria-label="Nom"/>
          </div>
          <div class="col-md-6">
            <Form.Label> Numéro CIN </Form.Label>
            <Form.Control  placeholder="NIN" aria-label="Numéro CIN"/>
          </div>
          <div class="col-md-6">
            <Form.Label> Date de naissance </Form.Label>
            <Form.Control type='date' placeholder="JJ/MM/AAAA" aria-label="Date de naissance"/>
          </div>
          <div class="col-md-6">
            <Form.Label> Téléphone </Form.Label>
            <Form.Control type='text'  aria-label="Telephone"/>
          </div>
          <div class="col-md-6">
            <Form.Label> Adresse </Form.Label>
            <Form.Control type='text'  aria-label="Adresse"/>
          </div>
          <div class="col-md-6">
            <Form.Label> Motif </Form.Label>
            <Form.Control type='text'  aria-label="Motif"/>
          </div>
          <Button variant="primary" type="submit" class="btn">
            Submit
          </Button>
        </div>
    </Form>
    </div>
  );
}

export default App;
