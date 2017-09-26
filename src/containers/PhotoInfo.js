import React, { Component } from 'react';
import GetImageForm from '../components/GetImageForm'
import PhotoCard from '../components/PhotoCard'
import { fetchRoverImage } from '../services'
const API_KEY = "VZDkE7QqzCzs0gFW9CVtsxTgQRYE9PYz0WcAieWt";

export default class ContentWrapper extends Component {
  constructor() {
    super();

    this.state = {
      rover: "Curiosity",
      camera: "FHAZ",
      images: [],
      sol: "1000"
    }
  }



    handleChange = (evt) => {
      let inputName = evt.target.name
      this.setState({
        [inputName] : evt.target.value
      })
    }

    handleSubmit = (evt) => {
      evt.preventDefault();
      this.setState({images: []});
      let cam = this.state.camera;
      let rove = this.state.rover;
      let num = this.state.sol;
      let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`;
      fetchRoverImage(url).then((response) => {
        console.log('response: ', response.data.photos)
        this.setState({ images: response.data.photos })
      }
      )
    }

  componentDidMount() {



  }

  render() {
    return (
      <div className="wrapper">
        <GetImageForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <div className="row">
          {this.state.images.map((photoInfo) => {
            return (
              <PhotoCard
                key={photoInfo.id}
                photoInfo={photoInfo}
              />
            )
          })}
        </div>
      </div>
    )
  }
}
