import { module, test } from 'qunit';

import { setupTest } from 'app-frontend/tests/helpers';

module('Unit | Model | transaction', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('transaction', {});
    assert.ok(model);
  });
});
