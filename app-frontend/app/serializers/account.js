import JSONSerializer from './application';

export default class AccountSerializer extends JSONSerializer {
  primaryKey = 'account_id';
}
