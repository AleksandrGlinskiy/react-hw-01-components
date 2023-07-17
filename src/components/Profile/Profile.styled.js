import styled from 'styled-components';

export const Container = styled.div`
  background-color: gray;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  align-items: center;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  padding: 50px;
`;
export const Description = styled.div`
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 250px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 100px;
  background-color: brown;
`;
export const Name = styled.p`
  font-weight: bold;
  margin-top: 50px;
  margin-bottom: 0;
`;
export const Tag = styled.p`
  margin-top: 10px;
  color: #aeb7c0;
  margin-bottom: 0;
`;
export const Stats = styled.ul`
  display: flex;
  list-style: none;
  max-width: 100%;
  padding: 25px;
  height: 60px;
  margin: 0;
  background-color: green;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  justify-content: center;
  width: calc((100%-3px) / 3);
`;

export const Label = styled.span`
  color: #aeb7c0;
`;
export const Quantity = styled.span`
  margin-top: 3px;
  font-weight: bold;
`;
