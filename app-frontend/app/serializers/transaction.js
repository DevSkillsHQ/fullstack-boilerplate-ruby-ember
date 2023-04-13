import JSONSerializer from '@ember-data/serializer/json';

export default class TransactionSerializer extends JSONSerializer {
  primaryKey = 'transaction_id';
  serialize(snapshot) {
    const json = {
      account_id: snapshot.attr('account_id'),
      amount: snapshot.attr('amount'),
    };
    return json;
  }
}
