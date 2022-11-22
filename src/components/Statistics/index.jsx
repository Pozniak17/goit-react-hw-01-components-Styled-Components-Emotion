import { Box } from 'components/Box/Box';
import PropTypes from 'prop-types';

import getRandomHexColor from '../utils/RandomColors/RandomColors';
// import style from './style.module.css';
import { CardTitle, CardList, CardItem, CardSpan } from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <Box margin="100px auto" width={1} height="100%" boxShadow="standart">
      {title && <CardTitle>{title.toUpperCase()}</CardTitle>}

      <CardList>
        {stats.map(({ id, label, percentage }) => (
          <CardItem key={id} style={{ backgroundColor: getRandomHexColor() }}>
            <CardSpan>{label}</CardSpan>
            <CardSpan className="percentage">{percentage + '%'}</CardSpan>
          </CardItem>
        ))}
      </CardList>
    </Box>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};
