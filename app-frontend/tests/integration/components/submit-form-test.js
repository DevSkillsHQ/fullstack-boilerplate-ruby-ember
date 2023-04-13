import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | transaction-form', function (hooks) {
  setupRenderingTest(hooks);

  test('it should submit the form with valid inputs', async function (assert) {
    assert.expect(5);

    await render(hbs`
      <SubmitForm />
    `);

    assert.dom('[data-test-account-input]').exists();
    assert.dom('[data-test-amount-input]').exists();
    assert.dom('[data-test-submit-form]').exists();
    assert.dom('[data-test-generate-uuid]').exists();

    await fillIn('#account-id', '02f16f8b-1878-4139-841a-89164d3756fc');
    await fillIn('#amount', '100');
    await click('[data-test-submit-form]');

    assert.dom('[data-test-error]').doesNotExist();
  });

  test('it should not submit the form with invalid inputs', async function (assert) {
    assert.expect(5);

    await render(hbs`
      <SubmitForm />
    `);

    assert.dom('[data-test-account-input]').exists();
    assert.dom('[data-test-amount-input]').exists();
    assert.dom('[data-test-submit-form]').exists();
    assert.dom('[data-test-generate-uuid]').exists();

    await fillIn('#account-id', 'abc');
    await fillIn('#amount', '-10');
    await click('[data-test-submit-form]');

    assert.dom('[data-test-error]').hasText('Invalid account ID. Please enter a valid UUID.');
  });

  test('it should generate a UUID when button is clicked', async function (assert) {
    assert.expect(6);

    await render(hbs`
      <SubmitForm/>
    `);

    assert.dom('[data-test-account-input]').exists();
    assert.dom('[data-test-amount-input]').exists();
    assert.dom('[data-test-submit-form]').exists();
    assert.dom('[data-test-generate-uuid]').exists();
    assert.dom('[data-test-account-input]').hasNoText();

    await click('[data-test-generate-uuid]');

    assert.dom('[data-test-account-input]').hasAnyValue();
  });
});
