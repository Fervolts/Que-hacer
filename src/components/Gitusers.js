import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Card from "react-bootstrap/Card";
import '../styles/Gitusers.css';
var Fervp = 'https://github.com/Fervolts';
var Killu = 'https://github.com/JustKillu';
function App() {
    var [avatarURL, setAvatarURL] = useState();
    var [githubUsername, setGitHubUsername] = useState();
    var [avURL, setAvURL] = useState();
    var [gitUsername, setGitUsername] = useState();
  
useEffect(() => {
    fetch("https://api.github.com/users/Fervolts")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setAvURL(result.avatar_url);
          setGitUsername(result.login);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  useEffect(() => {
    fetch("https://api.github.com/users/JustKillu")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setAvatarURL(result.avatar_url);
          setGitHubUsername(result.login);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  return (
    
    <div className="center-text">
    <Container >
     
    <div className="row" class="Containercards">

     
      <Card onClick={() => window.open(Killu, '_blank')} className='customCard'>
        <Card.Img className="avatar" src={avatarURL} />
        <Card.Body>
          <Card.Title>{githubUsername}</Card.Title>
        </Card.Body>
         
      </Card>
      
   
    <Card onClick={() => window.open(Fervp, '_blank')} className='customCard'>
      <Card.Img className="avatar" src={avURL} />
      <Card.Body>
        <Card.Title>{gitUsername}</Card.Title> 
      </Card.Body>
      
    </Card>
  </div>
  </Container>
  </div>
  );

  
}

export default App;