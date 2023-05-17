import PropTypes from 'prop-types'
import css from './statistics.module.css'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({title, stats}) => {
    return <section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}
  
    <ul className={css.statList}>
      {stats.map((list => 
      <li className={css.item} key={list.id} 
      style={{backgroundColor: `${getRandomHexColor()}`}}>
      <span className="label">{list.label}</span>
      <span className="percentage">{list.percentage}%</span>
    </li>))}
    </ul>
  </section>
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number
    }),
  ).isRequired 
}