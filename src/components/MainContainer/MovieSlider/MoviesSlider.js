/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MoviesBox = styled.div`
  .Category {
    white-space: nowrap;
    max-width: 1320px;
    padding: 12px 0 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 60px;
    line-height: 30px;

    @media ${(props) => props.theme.mobile} {
      padding-top: 0px;
    }
  }

  .Category p {
    color: #292a32;
    font-size: 22px;
    font-weight: 900;
    letter-spacing: -0.4px;
    line-height: 30px;

    @media ${(props) => props.theme.mobile} {
      font-size: 25px;
    }
  }
`;

const MoviesSlider = styled.div`
  position: relative;
  transform: translate3d(0px, 0px, 0px);
  margin: 0px -8px;

  li {
    list-style: none;
  }
  img {
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
  }

  a {
    position: relative;
    display: inline-block;
    text-decoration: none;
    margin: 0px 8px;
  }

  .RankNumber {
    position: absolute;
    top: 6px;
    left: 6px;
    width: 28px;
    height: 28px;
    line-height: 27px;
    background-color: rgba(0, 0, 0, 0.77);
    color: rgb(255, 255, 255);
    font-weight: 700;
    letter-spacing: normal;
    text-align: center;
    border-radius: 4px;
    opacity: 1;
    transition: opacity 300ms ease 0s;
  }

  .Movie,
  img {
    border-radius: 5px;
  }

  .MovieInfo {
    font-size: 12px;
    text-align: left;
    width: calc(100% - 10px);
    margin: 5px 10px 0 0;
  }

  .MovieInfo p {
    color: #292a32;
    margin: 0;
    font-size: 14px;
    font-weight: 400;
  }

  .MovieInfo__name {
    font-size: 16px !important;
    font-weight: bold !important;
  }

  .MovieInfo__average {
    color: #555765;
  }

  .slick-prev:before,
  .slick-next:before {
    position: absolute;
    left: 0px;
    top: -100%;
    color: black;
  }

  .slick-slider {
    display: flex;
    justify-content: center;

    .slick-prev.slick-disabled:before,
    .slick-next.slick-disabled:before {
      display: none;
    }
  }
`;

function MoviesSliderContainer() {
  const { movies, mobileSearch } = useSelector((state) => ({
    movies: state.reducer.movies,
    mobileSearch: state.reducer.mobileSearch,
  }));

  const settings = {
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
    ],
  };

  let movie = movies.slice().sort((a, b) => b.grade - a.grade);
  const USA = movies.filter((contrys) => contrys.contry === "미국");
  let usa = USA.slice().sort((a, b) => b.grade - a.grade);
  const KOREA = movies.filter((contrys) => contrys.contry === "한국");
  let korea = KOREA.slice().sort((a, b) => b.grade - a.grade);
  const JAPAN = movies.filter((contrys) => contrys.contry === "일본");
  let japan = JAPAN.slice().sort((a, b) => b.grade - a.grade);

  return (
    <>
      <MoviesBox>
        <div
          className="Category"
          style={{ marginTop: mobileSearch ? "68px" : "" }}
        >
          <p>총 평점 순위</p>
        </div>
        <MoviesSlider>
          <div>
            <Slider {...settings}>
              {movie.map((movie, rank) => (
                <div key={movie.id}>
                  <li>
                    <Link to={`/movieinfo${movie.id}`}>
                      <div className="Movie">
                        <img src={movie.movie_photo} alt=""></img>
                        <div className="RankNumber">{rank + 1}</div>
                      </div>
                      <div className="MovieInfo">
                        <p className="MovieInfo__name">{movie.movie_name}</p>
                        <p className="MovieInfo__from">{movie.since}</p>
                        <p className="MovieInfo__average">
                          평균★ {movie.grade}
                        </p>
                      </div>
                    </Link>
                  </li>
                </div>
              ))}
              <a href="#!"></a>
            </Slider>
          </div>
        </MoviesSlider>
      </MoviesBox>
      <MoviesBox>
        <div className="Category">
          <p>한국영화 순위</p>
        </div>
        <MoviesSlider>
          <div>
            <Slider {...settings}>
              {korea.map((movie, rank) => (
                <div key={movie.id}>
                  <li>
                    <Link to={`/movieinfo${movie.id}`}>
                      <div className="Movie">
                        <img src={movie.movie_photo} alt=""></img>
                        <div className="RankNumber">{rank + 1}</div>
                      </div>
                      <div className="MovieInfo">
                        <p className="MovieInfo__name">{movie.movie_name}</p>
                        <p className="MovieInfo__from">{movie.since}</p>
                        <p className="MovieInfo__average">
                          평균★ {movie.grade}
                        </p>
                      </div>
                    </Link>
                  </li>
                </div>
              ))}

              <a href="#!"></a>
            </Slider>
          </div>
        </MoviesSlider>
      </MoviesBox>
      <MoviesBox>
        <div className="Category">
          <p>미국영화 순위</p>
        </div>
        <MoviesSlider>
          <div>
            <Slider {...settings}>
              {usa.map((movie, rank) => (
                <div key={movie.id}>
                  <li>
                    <Link to={`/movieinfo${movie.id}`}>
                      <div className="Movie">
                        <img src={movie.movie_photo} alt=""></img>
                        <div className="RankNumber">{rank + 1}</div>
                      </div>
                      <div className="MovieInfo">
                        <p className="MovieInfo__name">{movie.movie_name}</p>
                        <p className="MovieInfo__from">{movie.since}</p>
                        <p className="MovieInfo__average">
                          평균★ {movie.grade}
                        </p>
                      </div>
                    </Link>
                  </li>
                </div>
              ))}
              <a href="#!"></a>
            </Slider>
          </div>
        </MoviesSlider>
      </MoviesBox>
      <MoviesBox>
        <div className="Category">
          <p>일본영화 순위</p>
        </div>
        <MoviesSlider>
          <div>
            <Slider {...settings}>
              {japan.map((movie, rank) => (
                <div key={movie.id}>
                  <li>
                    <Link to={`/movieinfo${movie.id}`}>
                      <div className="Movie">
                        <img src={movie.movie_photo} alt=""></img>
                        <div className="RankNumber">{rank + 1}</div>
                      </div>
                      <div className="MovieInfo">
                        <p className="MovieInfo__name">{movie.movie_name}</p>
                        <p className="MovieInfo__from">{movie.since}</p>
                        <p className="MovieInfo__average">
                          평균★ {movie.grade}
                        </p>
                      </div>
                    </Link>
                  </li>
                </div>
              ))}
              <a href="#!"></a>
            </Slider>
          </div>
        </MoviesSlider>
      </MoviesBox>
    </>
  );
}

export default MoviesSliderContainer;
