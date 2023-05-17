import css from './transaction.module.css';
import PropTypes from 'prop-types'


export const Transaction = ({transactions}) => {
  return <table className={css.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {transactions.map(({id, type , amount, currency}) => {
      return <tr key = {id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
    })}
  </tbody>
</table>
}

Transaction.propTypes = {
  transactions:PropTypes.arrayOf(
    PropTypes.exact({
        id: PropTypes.string,
        type: PropTypes.string,
        amount: PropTypes.string,
        currency:PropTypes.string.isRequired,
    }))
};