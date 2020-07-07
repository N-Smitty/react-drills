import React, { Component } from "react";
import axios from "axios";

class Details extends Component {
    constructor() {
        super();

    this.state = {
        item: {}
    };
    }

    componentDidMount() {
        axios
        .get(
        `https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums
        ${
            this.props.match.params.id
        }`
        )
        .then(response => {
        this.setState({ item: response.data });
        });
    }

    render() {
        return (
        <div>
        <h2>{this.state.item.title}</h2>
        <img width="200" src={this.state.item.image} />
        <h4>{`Price: $${this.state.item.album}.00`}</h4>
        </div>
    );
    }
}

export default Details;