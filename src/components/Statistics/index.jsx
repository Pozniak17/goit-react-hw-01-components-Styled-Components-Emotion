import PropTypes from 'prop-types';

import getRandomHexColor from '../utils/RandomColors';
// import style from './style.module.css';
import {
  StatisticsCard,
  CardTitle,
  CardList,
  CardItem,
  CardSpan,
} from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <StatisticsCard>
      {title && <CardTitle>{title.toUpperCase()}</CardTitle>}

      <CardList>
        {stats.map(({ id, label, percentage }) => (
          <CardItem key={id} style={{ backgroundColor: getRandomHexColor() }}>
            <CardSpan>{label}</CardSpan>
            <CardSpan className="percentage">{percentage + '%'}</CardSpan>
          </CardItem>
        ))}
      </CardList>
    </StatisticsCard>
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
