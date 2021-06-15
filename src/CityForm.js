import React from 'react';
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

import './CityForm.css';

class CityForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      city: '',
      displayName: '',
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
        displayName: displayName,
        cityLat,
        cityLon
      });
     console.log(this.state.cityLat);
    

    }
    catch(err) {
      console.log('err.message');
      this.setState({errCode: err.message});
    }
  }

  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="exploreInput">
            <Form.Label>{this.state.city}</Form.Label>
            <Form.Control type="text" placeholder="Enter a location" onChange={this.handleChange}/>
            <Form.Text className="text-muted">
      Look for places around your city!
          </Form.Text>
          </Form.Group>
          <Form.Group controlId="exploreButton">
          <Button variant="primary" type="submit" onClick={this.handleSubmit}>
            Submit
          </Button>
          </Form.Group>
        </Form>
      {this.state.errCode.length > 0 ?
        <Container>
          <Alert>{this.state.errCode}</Alert>
        </Container>
      :
        <Card variant="secondary">
        <h1>{this.state.displayName}</h1>
          <ul>
            <li>Latitude: {this.state.cityLat}</li>
            <li>Longitude: {this.state.cityLon}</li>
          </ul>
        </Card>
      }
    </div>
    )
  }
}

export default CityForm;

