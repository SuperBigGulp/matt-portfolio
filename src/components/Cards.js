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
                body='With a team of 8 other students, I helped design and developed a
                short puzzle platforming game. My role on the team consisted of
                programmer, game/level designer, and tester. Using unity, GitHub,
                and Trello; I and my teammates worked hard over the course of a
                term and ended up winning the students choice award for the best
                game. We have a steam release coming in May!'
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
                body='With a team of 4 other students, I helped design and develop a web
                app called SaskCycle that aimed to help assist in various methods of
                recycling. The project was built in java and utilized the Spring
                framework, Vaadin GUI, MongoDB, and the Google Maps API.'
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
                  body='A simple unity game developed with three other students for a class in university.'
                  ></ModalProject>
                <CardItem onClick={() => setModalShow4(true)} src='images/firebase.png' text='Simple firebase webapp' path='/'/>
                <ModalProject 
                  show={modalShow4} 
                  onHide={() => setModalShow4(false)}
                  showlive="true"
                  livepath='https://cmpt353-project-be498.web.app/'
                  title='Simple firebase webapp'
                  src='images/firebase.png'
                  body='In a 2 week sprint, I was tasked with exploring a new web technology
                  and implementing a simple volunteer service web app. My chosen
                  technology was ﬁrebase which I used to implement a simple front-
                  end and backend structure. '
                  ></ModalProject>
              <CardItem onClick={() => setModalShow5(true)} src='images/react.png' text='This Website!' path='/'/>
                <ModalProject 
                  show={modalShow5} 
                  onHide={() => setModalShow5(false)}
                  showgit="true"
                  livegit='https://github.com/SuperBigGulp/matt-portfolio'
                  title='React Portfolio Page!'
                  src='images/react.png'
                  body='Built with react, I made this single page portfolio site to better organize and present myself to potential employers like you!
                  While I learned a little bit of react during my education, this project also served as a learning endevour in furthing my ability with react'
                  ></ModalProject>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards