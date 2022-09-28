import PropTypes from 'prop-types';
// import style from './style.module.css';

import {
  TableHistory,
  TableHead,
  TableTitle,
  TableData,
  TableRow,
} from './Transaction.styled';

const TransactionHistory = ({ items }) => {
  return (
    <TableHistory>
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
    </TableHistory>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.number.isRequired,
    })
  ),
};
