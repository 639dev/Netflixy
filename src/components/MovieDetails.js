import React from "react";
import StyledHeader from "./StyledHeader";
import FontAwesomeIcon from "./FontAwesomeIcon";
import StyledHeaderLink from "./StyledHeaderLink";

const MovieDetails = () => {
  return (
    <StyledHeader>
      <StyledHeaderLink href="/">
        <FontAwesomeIcon icon="chevron-left" text="Go back" />
      </StyledHeaderLink>
    </StyledHeader>
  );
};

export default MovieDetails;
