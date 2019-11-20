import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
  color: tomato;
`

class HelloWorld extends React.Component {
  render() {
    return <Title>Hello World!</Title>
  }
}

export default HelloWorld
