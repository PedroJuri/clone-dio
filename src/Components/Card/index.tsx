import {CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture} from './styles'
import {FiThumbsUp} from 'react-icons/fi'
import BackgroundImage from '../../Assets/background-image.png'
import React from 'react'

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src={BackgroundImage}/>
        <Content>
            <UserInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/73957555?v=4'/>
                <div>
                    <h4>Pedro Henrique</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeuto para curso de HTML e CSS</h4>
                <p>Projeto para curso de HTML e CSS no bootcamp dio do Global avanade...<strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #Javascript</h4>
                <p>
                    <FiThumbsUp/> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export {Card}