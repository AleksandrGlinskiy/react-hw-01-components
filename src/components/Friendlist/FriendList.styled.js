import styled from "styled-components";

export const FriendListStyle = styled.ul`
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: large;
  font-weight: bold;
  border: 2px solid #aeb7c0;
  border-radius: 5px;
`

export const FriendItemStyle = styled.li `
  display: flex;
  align-items: center;
  padding: 20px;
  margin-top: 20px;
  width: 300px;
  box-shadow: 0px 7px 12px -5px #8c8e93;
`

export const StatusOnline = styled.span `
  width: 15px;
  height: 15px; 
  border-radius: 50%;
  background-color: green;
  margin-right: 15px;
  display: block;

`

export const StatusOffline = styled.span `
  width: 15px;
  height: 15px; 
  border-radius: 50%;
  background-color: red;
  margin-right: 15px;
  display: block;
`

export const Avatar = styled.img `
  border-radius: 5px;
  background-color: yellow;
  border: 1px solid black;
  width: 50px;
  margin-right: 20px;
`

export const FriendName = styled.p `
  font-size: x-large;
  font-weight: bold;
`