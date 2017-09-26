import React, { Component } from 'react';



export default class GetImageForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rover: "Curiosity",
      camera: "FHAZ",
      images: [],
      sol: "1000"
    }
  }


  render () {
    return (
      <form className="form-horizontal mx-auto camera-form">
        <fieldset>
          <legend>Choose your view...</legend>
          <div className="form-group">
            <label htmlFor="rover-select" className="col-lg-2 control-label">Rover</label>
            <div className="col-lg-10">
              <select className="form-control" name="rover" onChange={this.props.handleChange} value={this.state.value}>
                <option value="curiosity">Curiosity</option>
                <option value="opportunity">Opportunity</option>
                <option value="spirit">Spirit</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="camera-select" className="col-lg-2 control-label">Camera</label>
            <div className="col-lg-10">
              <select className="form-control" name="camera" onChange={this.props.handleChange}>
                <option value="fhaz">Front Hazard (FHAZ)</option>
                <option value="rhaz">Rear Hazard (RHAZ)</option>
                <option value="navcam">Navigation (NAVCAM)</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="sol" className="col-lg-2 control-label">Sol</label>
            <div className="col-lg-10">
              <input onChange={this.props.handleChange} max="2000" min="1000" type="text" className="form-control" name="sol" placeholder="1000-2000" value={this.state.value} />
            </div>
          </div>
          <div className="form-group col-lg-12 align-items-center">
            <div className="col-lg-3"></div>
            <button className="btn btn-lg btn-primary button mx-auto" type="submit" onClick={this.props.handleSubmit}>Submit!</button>
          </div>

        </fieldset>
      </form>
    )
  }
}
