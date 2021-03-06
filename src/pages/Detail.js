import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ButtonBackHome } from '../components/ButtonBackHome'

const API_KEY ="5fa1383f"

export class Detail extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }

        state = { movie: {} }

    _fetchMovie({ id }) {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        .then(res => res.json())
        .then(movie => {
            console.log({movie})
            this.setState({movie})
        })
    }

    componentDidMount () {
        console.log(this.props)
        const { movieId } = this.props.match.params
        this._fetchMovie({id: movieId})
    }

    _goBack() {
        window.history.back()
    }

    render() {
        const { Title, Poster, Actors, Metascore, Plot } = this.state.movie

        return(
            <div className="container is-fluid">
                
                <h1>{Title}</h1>
                <img src={Poster} alt={Title} />
                <h3>{Actors}</h3>
                <span>{Metascore}</span>
                <p>{Plot}</p>
                <ButtonBackHome />
               
            </div>
        )
    }
}