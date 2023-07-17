import PropTypes from 'prop-types';
import {
  Container,
  Item,
  Label,
  Percentage,
  StatList,
  Title,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(item => (
          <Item key={item.id}>
            <Label>{item.label}</Label>
            <Percentage>{item.percentage}%</Percentage>
          </Item>
        ))}
      </StatList>
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
  label: PropTypes.number,
  percentage: PropTypes.number,
};
