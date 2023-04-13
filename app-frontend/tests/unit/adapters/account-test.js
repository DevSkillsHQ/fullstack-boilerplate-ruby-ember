import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Adapter | account', function (hooks) {
  setupTest(hooks);

  test('urlForQueryRecord returns the correct URL', function (assert) {
    const adapter = this.owner.lookup('adapter:account');
    const query = { accountId: '123' };
    const expectedUrl = '/123';
    const actualUrl = adapter.urlForQueryRecord(query);

    assert.deepEqual(actualUrl, expectedUrl, 'The generated URL is correct');
  });
});
