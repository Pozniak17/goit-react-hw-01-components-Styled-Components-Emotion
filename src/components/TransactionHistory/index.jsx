import { Box } from 'components/Box/Box';
import PropTypes from 'prop-types';

import {
  // TableHistory,
  TableHead,
  TableTitle,
  TableData,
  TableRow,
} from './Transaction.styled';

const TransactionHistory = ({ items }) => {
  return (
    <Box
      bg="white"
      margin="100px auto"
      max-width="100%" // тут 400px
      height="100%"
      alignItems="center"
      boxShadow="standart"
      as="table"
    >
      <TableHead>
        <TableRow>
          <TableTitle>Type</TableTitle>
          <TableTitle>Amount</TableTitle>
          <TableTitle>Currency</TableTitle>
        </TableRow>
      </TableHead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TableRow key={id}>
            <TableData>{type}</TableData>
            <TableData>{amount} </TableData>
            <TableData>{currency} </TableData>
          </TableRow>
        ))}
      </tbody>
    </Box>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
