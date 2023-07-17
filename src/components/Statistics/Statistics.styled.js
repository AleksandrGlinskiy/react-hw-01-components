import styled from 'styled-components'
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i+= 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


export const Container = styled.section`
  background-color : gray;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  align-items: center;
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  padding: 50px;
`
export const Title = styled.h2 `
  text-transform: uppercase;
  text-align: center;
  max-width: 100%;
  padding: 50px;
  background-color: white;
  margin: 0;
  color: gray;
  font-weight: bold;

`

export const StatList = styled.ul `
  list-style: none;
  display: flex;
  margin: 0;
  justify-content: space-around;
  padding: 0;
  align-items: center;
`

export const Item = styled.li `
  display: flex;
  flex-direction: column;
  padding: 9px;
  align-items: center;
  border: 1px solid #bbbdc0;
  background-color: purple;
`
export const Label = styled.span `
  color: white;
  font-size: medium;
`

export const Percentage = styled.span `
  color: white;
  font-size: large;
  `