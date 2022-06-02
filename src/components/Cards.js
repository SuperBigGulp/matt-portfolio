import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import ModalProject from './ModalProject';



function Cards() {

  const [modalShow1, setModalShow1] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);
  const [modalShow3, setModalShow3] = React.useState(false);
  const [modalShow4, setModalShow4] = React.useState(false);
  const [modalShow5, setModalShow5] = React.useState(false);

  return (
    <>
      <div className='cards'>
        <h1>Projects</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem onClick={() => setModalShow1(true)} src='images/Entangled.png' text='Entangled' path='/'/>
              <ModalProject 
                show={modalShow1} 
                onHide={() => setModalShow1(false)}
                showlive="true"
                showgit="true"
                livepath='https://p2-studios.itch.io/entangled'
                livegit='https://github.com/p2-Studios/Entangled'
                title='Entangled'
                src='images/Entangled.png'
                body='A short 2D physics puzzle platforming game worked on by myself and 8 other students. 
                Using Unity, GitHub, and Trello; I and my teammates worked hard over a term and ended up winning the students&#39;
                 choice award for the best game! My role was one the team was programmer, although I assisted in some art here 
                 and there. In addition to programming, I also worked on designing levels/mechanics and play-testing with volunteers. 
                 This game is currently published on itch.io and free to play, although we also have a steam release planned sometime soon!'
                >
                </ModalProject>
              <CardItem onClick={() => setModalShow2(true)} src='images/Saskcycle.png' text='SaskCycle' path='/'/>
              <ModalProject 
                show={modalShow2} 
                onHide={() => setModalShow2(false)}
                showlive="true"
                showgit="true"
                livepath='https://saskcycle.herokuapp.com/'
                livegit='https://git.cs.usask.ca/lkp821/saskcycle'
                title='SaskCycle'
                src='images/Saskcycle.png'
                body='A Web app designed to help accommodate people without a reliable form of transport to participate in free recycling solutions; 
                providing user login, posting, edits, sorting, and map transport solutions. This project was designed and developed by myself and a 
                team of four other students for a 300-level software engineering course. For the project itself, we utilized java, spring framework, 
                Vaadin, MongoDB, and the Google Maps API. Over the term, we practiced agile methodology in planning and breaking up the work of the project; 
                an executed development over two two-week sprints'
                ></ModalProject>
            </ul>  
            <ul className='cards__items'>
                <CardItem onClick={() => setModalShow3(true)} src='images/DarkestDepths.png' text='Darkest Depths' path='/'/>
                <ModalProject 
                  show={modalShow3} 
                  onHide={() => setModalShow3(false)}
                  showlive="true"
                  showgit="true"
                  livegit='https://github.com/teddy2021/CMPT306GROUP12PROJECT'
                  title='Darkest Depths'
                  src='images/DarkestDepths.png'
                  body='A simple procedural rogue-lite game worked on with three other students for a game mechanics class. 
                  The game was developed with the Unity engine. I worked on both programming/design and an assortment of art assets.'
                  ></ModalProject>
                <CardItem onClick={() => setModalShow4(true)} src='images/firebase.png' text='Simple firebase webapp' path='/'/>
                <ModalProject 
                  show={modalShow4} 
                  onHide={() => setModalShow4(false)}
                  showlive="true"
                  livepath='https://cmpt353-project-be498.web.app/'
                  title='Simple firebase webapp'
                  src='images/firebase.png'
                  body='A basic app developed for a full stack web class. 
                  For the project, I was tasked with developing a simple volunteer-based web app using a newly learned technology. 
                  For the chosen tech I chose to utilize Firebase and their associated real-time database. 
                  The app was developed over a short two-week sprint.'
                  ></ModalProject>
              <CardItem onClick={() => setModalShow5(true)} src='images/react.png' text='This Website!' path='/'/>
                <ModalProject 
                  show={modalShow5} 
                  onHide={() => setModalShow5(false)}
                  showgit="true"
                  livegit='https://github.com/SuperBigGulp/matt-portfolio'
                  title='React Portfolio Page!'
                  src='images/react.png'
                  body='Built with react, I made this single-page portfolio site to better organize and present myself to potential employers like you! 
                  While I learned a little bit about react during my education, this project also served as a learning endeavor in furthering my ability with react. 
                  I utilized some react-bootstrap components and tsParticles for my landing page section.'
                  ></ModalProject>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards