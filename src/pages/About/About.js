import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { useState } from "react";
import '../../App.css';
import '../../styles/home.css';
import NavBar from '../components/NavBar';
import Earth_Background from '../../img/Earth_Background.mp4';
import about from '../../img/about.png';

export default function About({items}) {
 
  const [search, setSearch] = useState("");
  const [photos, setPhotos] = useState(items);


      return (
       <>
          <div className="Home">
          <video class="Video_Background" autoPlay loop muted>
              <source src={Earth_Background} type="video/mp4"/>
          </video>
          <Home> 
          <NavBar />
            <Body>
              <h1 class="TitleHome">Halo Ibu Ester</h1>
              <p class="PHome">
                  Inilah muka-muka kami!
              </p>
            </Body>
            <Jumbotron>
              <img class="foto_about" src={about}></img>
            </Jumbotron>
          </Home>
          </div>
          </>
        );
    }

const Home = styled.div`
  width: 100vw;
  height: 100vh;
  color: white;
`;

const Body = styled.div`
 margin-top: 50px;
 margin-right:100px;
`;

const Jumbotron = styled.div`
margin-top:2%;
`;
