import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 0 0 26px;
`;
const Content = styled.div`
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  img {
    inset: 0px;
    object-fit: cover;
    position: absolute;
    display: block;
    height: 100%;
    width: 100%;
    opacity: 1;
    top: 0;
    transition: opacity 500ms ease-in-out 0s;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 /72%) 0px 30px 22px -10px;
    transform: scale(1.04);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

const Section = ({ tittle, arrayMovie }) => {
  return (
    <Container>
      <h4>{tittle}</h4>
      <Content>
        {arrayMovie &&
          React.Children.toArray(
            arrayMovie.map((movie) => (
              <Wrap>
                {movie.id}
                <Link to={`/detail/${movie.id}`}>
                  <img src={movie.cardImg} alt={movie.title} />
                </Link>
              </Wrap>
            ))
          )}
      </Content>
    </Container>
  );
};

export default Section;