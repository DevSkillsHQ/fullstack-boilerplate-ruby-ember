import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class TransactionTileComponent extends Component {
  @service store;

  get amount() {
    return this.args.transaction.amount;
  }

  get accountId() {
    return this.args.transaction.account_id;
  }

  get account() {
    return this.store.findRecord('account', this.args.transaction.account_id);
  }

  get isDeposit() {
    return this.amount > 0;
  }

  get transactionType() {
    return this.isDeposit ? 'Deposit' : 'Withdrawal';
  }

  get isFirstTransaction() {
    const transactions = this.args.sortedTransactions.filter(
      (t) => t.account_id === this.accountId
    );
    if (transactions.length === 0) {
      return false;
    }
    transactions.sort((a, b) => b.createdAt - a.createdAt);
    return transactions[0].id === this.args.transaction.id;
  }
}
