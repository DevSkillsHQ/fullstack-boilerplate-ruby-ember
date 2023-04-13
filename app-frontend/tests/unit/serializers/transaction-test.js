import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Serializer | transaction', function (hooks) {
  setupTest(hooks);

  test('serialize returns the correct JSON', function (assert) {
    const serializer = this.owner.lookup('serializer:transaction');
    const snapshot = {
      attr(key) {
        return this[key];
      },
      account_id: 1,
      amount: 100,
    };
    const expectedJson = {
      account_id: 1,
      amount: 100,
    };
    const actualJson = serializer.serialize(snapshot);

    assert.deepEqual(actualJson, expectedJson, 'The generated JSON is correct');
  });
});
