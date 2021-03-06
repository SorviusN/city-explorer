import React from 'react';
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import ListGroup from 'react-bootstrap/ListGroup';

import './CityForm.css';

class CityForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      city: '',
      errCode: ''
    };
  }

  handleChange = (e) => {
    this.setState({city: e.target.value})
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const key = process.env.REACT_APP_CITY_KEY;

      let URL = `https://us1.locationiq.com/v1/search.php?key=${key}&q=${this.state.city}&format=json`;

      const response = await axios.get(URL);

      const cityInfo = response.data[0];

      let cityLat = cityInfo.lat;
      let cityLon = cityInfo.lon;
      let displayName = cityInfo.display_name;

      this.setState({
        displayName,
        cityLat,
        cityLon
      });
    }
    catch(err) {
      this.setState({errCode: err.message});
    }
  }

  handleMap = () => {
    const key = process.env.REACT_APP_CITY_KEY;
    let mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${key}&center=${this.state.cityLat},${this.state.cityLon}&zoom=12`;
    return (
      <img className="MapImage" src={mapUrl} alt="Map"/>
    )
  }

  alertError = () => {
    return (
      <Alert variant='danger'>
        <Alert.Heading> Uh Oh, Something went wrong!</Alert.Heading>
        <p>{this.state.errCode}</p>
      </Alert>
    );
  }

  handleWeatherData = async () => {
    try{

    let weatherData = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/weather?lat=${this.state.cityLat}&lon=${this.state.cityLon}`);
      //using the parent function to set forecast to the object below.
      this.props.setForecast(weatherData.data); 
    }
    catch(err) {
      this.setState({errCode: err.message});
    }
  }

  handleMovies = async () => {
    try {
      let movieData = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/movie?city=${this.state.city}`);
      //setting the state of parent component App to the Mapped movies array which the server sent back.
      this.props.setMovies(movieData.data);
      console.log(movieData.data);
    }
    catch(err){
      this.setState({errCode: err.message});
    }
  }

  handleAll = async (e) => {
    await this.handleSubmit(e); // calling await makes it so that the other functions are will not run at the same time. We need to collect lat/long before continuing.
    this.handleWeatherData();
    this.handleMap();
    this.handleMovies();
  }

  render() {
    return (
      <div className="CityForm">
        <Form>
          <Form.Group controlId="exploreInput">
            <Form.Label>{this.state.city}</Form.Label>
            <Form.Control type="text" placeholder="Enter a location" onChange={this.handleChange}/>
            <Form.Text className="text-muted">
              Look for places around your city!
          </Form.Text>
          </Form.Group>
          <Form.Group controlId="exploreButton">
          <Button variant="primary" type="submit" onClick={this.handleAll}>
          Explore!
          </Button>
          </Form.Group>
        </Form>
        { this.state.city === '' ? 
          ''
        :
        this.handleMap()
        }
      {this.state.errCode.length > 0 ?
        <Container>
        {
          this.alertError()
        }
        </Container>
      :
        <Card variant="secondary" className="InfoName" style={{ width: '18rem' }}>
          <Card.Header>{this.state.displayName}</Card.Header>
          <ListGroup variant="flush" className="InfoList">
            <ListGroup.Item>Latitude - {this.state.cityLat}</ListGroup.Item>
            <ListGroup.Item>Longitude - {this.state.cityLon}</ListGroup.Item>
          </ListGroup>
        </Card>
      }
      <br />
    </div>
    )
  }
}

export default CityForm;

