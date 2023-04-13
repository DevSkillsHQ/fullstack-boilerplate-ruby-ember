import Component from '@glimmer/component';

export default class TransactionsContainerComponent extends Component {
  transactions = this.args.transactions;

  get sortedTransactions() {
    return this.transactions.slice().reverse();
  }
}
