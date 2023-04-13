import Model, { attr } from '@ember-data/model';
import AccountAdapter from '../adapters/account';

export default class AccountModel extends Model {
  @attr('string') account_id;
  @attr('number') balance;

  static adapter = AccountAdapter;
}
