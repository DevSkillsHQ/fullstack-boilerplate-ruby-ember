import Model, { attr } from '@ember-data/model';

export default class TransactionModel extends Model {
  @attr('string') transaction_id;
  @attr('string') account_id;
  @attr('number') amount;
  @attr('date') created_at;
}
