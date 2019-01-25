import React, { Fragment, Component } from "react";
import FontAwesomeIcon from "./FontAwesomeIcon";
import StyledHeader from "./StyledHeader";
import StyledHeaderTitle from "./StyledHeaderTitle";
import StyledHorizontalScroll from "./StyledHorizontalScroll";
import Movie from "./Movie";
import StyledFooter from "./StyledFooter";
import StyledLargeBtn from "./StyledLargeBtn";
import StyledLoader from "./StyledLoader";
import StyledMovieLink from "./StyledMovieLink";

class Movies extends Component {
  componentDidMount() {
    this.props.getMovies();
  }
  render() {
    return (
      <Fragment>
        <StyledHeader>
          <FontAwesomeIcon icon="bars" text="help" />
          <StyledHeaderTitle>The Movie Recommender</StyledHeaderTitle>
          <FontAwesomeIcon icon="search" />
        </StyledHeader>
        {/* the list of movies */}
        <StyledHorizontalScroll>
          {this.props.loading ? (
            <StyledLoader />
          ) : (
            this.props.movies.map(movie => (
              <StyledMovieLink href={`/movies/${movie.id}`} key={movie.id}>
                <Movie
                  key={movie.id}
                  name={movie.name}
                  poster={movie.poster}
                  duration={movie.duration}
                  year={movie.year}
                />
              </StyledMovieLink>
            ))
          )}
        </StyledHorizontalScroll>
        <StyledFooter>
          <StyledLargeBtn>Get Recommended Movies</StyledLargeBtn>
        </StyledFooter>
      </Fragment>
    );
  }
}

export default Movies;
