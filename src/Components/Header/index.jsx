import React from 'react'
import logo from '../../Assets/logo-dio.png'
import { Button } from '../Button'
import { Container, Row, Input, BuscarInputContainer, Menu, MenuRight, Wrapper } from './styles'

const Header = () => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt='logo DIO'/>
                <BuscarInputContainer>
                    <Input placeholder='Buscar...'/>
                </BuscarInputContainer>
                <Menu>LiveCode</Menu>
                <Menu>Global</Menu>
            </Row>
            <Row>
                <MenuRight href="#">Home</MenuRight>
                <Button title="Entrar"/>
                <Button title="Cadastrar"/>
            </Row>
        </Container>
    </Wrapper>
  )
}

export {Header}