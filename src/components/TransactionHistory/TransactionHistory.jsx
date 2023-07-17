import PropTypes from 'prop-types';
import { TableBody, TableD, TableHead, TableRow, TableTh, Title, TransactionHistoryStyle } from './TransactionHistory.styled';


export const TransactionHistory = ({items}) => {
  return (
    <TransactionHistoryStyle>
      <TableHead>
        <Title>
          <TableTh>Type</TableTh>
          <TableTh>Amount</TableTh>
          <TableTh>Currency</TableTh>
        </Title>
      </TableHead>
      <TableBody>

      {items.map(({ type, amount, currency, id }) => (
          <TableRow key={id}>
            <TableD>{type}</TableD>
            <TableD>{amount}</TableD>
            <TableD>{currency}</TableD>
          </TableRow>
        ))}

      </TableBody>
    </TransactionHistoryStyle>
  );
};


TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }))
  
}