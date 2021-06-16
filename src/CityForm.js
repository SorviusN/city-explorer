import React from 'react';
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Image from 'react-bootstrap/Image';
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

      let displayName = cityInfo.display_name;

      let cityLat = cityInfo.lat;
      let cityLon = cityInfo.lon;

      this.setState({
        displayName,
        cityLat,
        cityLon
      });

     console.log(this.state.cityLat);

    }
    catch(err) {
      this.setState({errCode: err.message});
    }
  }

  handleWeatherData = async () => {
    try{
    let weatherData = await axios.get(`http://localhost:3001/weather?lat=${this.state.cityLat}&lon=${this.state.cityLon}&searchQuery=${this.state.displayName}`);

    let forecastArray = [
      {
        date: weatherData.data.data[0].valid_date,
        description: `low of ${weatherData.data.data[0].low_temp}, high of ${weatherData.data.data[0].high_temp} with ${weatherData.data.data[0].weather.description}`
      },
      {
        date: weatherData.data.data[1].valid_date,
        description: `low of ${weatherData.data.data[1].low_temp}, high of ${weatherData.data.data[1].high_temp} with ${weatherData.data.data[1].weather.description}`
      },
      {
        date: weatherData.data.data[2].valid_date,
        description: `low of ${weatherData.data.data[2].low_temp}, high of ${weatherData.data.data[2].high_temp} with ${weatherData.data.data[2].weather.description}`
      }
    ];
    this.props.setFirstForecast([forecastArray[0].date, forecastArray[0].description]);
    this.props.setSecondForecast([forecastArray[1].date, forecastArray[1].description]);
    this.props.setThirdForecast([forecastArray[2].date, forecastArray[2].description]);

    console.log(forecastArray[0]);
    //using the parent function to set forecast to the object above.
    }
    catch(err) {
      this.setState({errCode: err.message});
    }
  }

  handleMap = () => {
    const key = process.env.REACT_APP_CITY_KEY;
    let mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${key}&center=${this.state.cityLat},${this.state.cityLon}&zoom=14`;
    return (
      <Image src={mapUrl} className="mapImage" rounded/>
    )
  }

  AlertDismissibleExample = () => {
      return (
        <Alert variant='danger'>
          <Alert.Heading> Uh Oh, Something went wrong!</Alert.Heading>
          <p>{this.state.errCode}</p>
        </Alert>
      );
  }

  handleAll = async (e) => {
    await this.handleSubmit(e); // calling await makes it so that the other functions are will not run at the same time. We need to collect lat/long before continuing.
    this.handleWeatherData();
    this.handleMap();
  }

  render() {
    return (
      <>
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
      {this.state.errCode.length > 0 ?
        <Container>
        {
          this.AlertDismissibleExample()
        }
        </Container>
      :
        <Card variant="secondary" style={{ width: '18rem' }}>
          <Card.Header>{this.state.displayName}</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>Latitude - {this.state.cityLat}</ListGroup.Item>
            <ListGroup.Item>Longitude - {this.state.cityLon}</ListGroup.Item>
          </ListGroup>
        </Card>
      }
      <br />
      <h1>Map</h1>
      <Card variant="primary">
        { this.state.city === '' ? 
        console.log('no map')
        :
        this.handleMap()
        }
      </Card>
    </>
    )
  }
}

export default CityForm;

