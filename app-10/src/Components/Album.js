import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Products extends Component {
    constructor() {
    super();

    this.state = {
        album: []
    };
    }

    componentDidMount() {
        axios.get("https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums").then(response => {
        this.setState({ albums: response.data });
    });
    }

    render() {
        let albums = this.state.album.map((product, index) => {
        if (album.image) {
        return (
            <Link key={index} to={`/details/${album.id}`}>
            <img width="200" src={album.image} />
            </Link>
        );
    }
        });

    return (
        <div>
            <h1>Albums</h1>
            {album}
        </div>
    );
    }
}

export default album;