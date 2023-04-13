import Component from '@glimmer/component';
import { action } from '@ember/object';
import { v4 as uuidv4 } from 'ember-uuid';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class SubmitFormComponent extends Component {
  @service store;

  @tracked accountId = '';
  @tracked amount = null;
  @tracked error;

  isValidUUID(uuid) {
    const uuidRegex =
      /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;
    return uuidRegex.test(uuid);
  }

  clearForm() {
    this.accountId = '';
    this.amount = '';
  }

  @action
  generateRandomUUID() {
    this.accountId = uuidv4();
  }

  @action
  async onSubmit() {
    const accountId = this.accountId;
    const amount = this.amount;

    if (!this.isValidUUID(accountId)) {
      this.error = 'Invalid account ID. Please enter a valid UUID.';
      this.clearForm();
      return;
    }

    // Create a new submitted-transaction record
    const submittedTransaction = this.store.createRecord('transaction', {
      account_id: accountId,
      amount: amount,
    });

    try {
      // Save the new submitted transaction to the server
      const response = await submittedTransaction.save();

      // Update the submitted transaction with the response data
      submittedTransaction.setProperties({
        id: response.id,
        created_at: response.created_at,
      });

      this.clearForm();
      this.error = '';
    } catch (error) {
      console.error(error);
      if (error.errors && error.errors.length > 0) {
        // Display the first error message in the array
        this.error = error.errors[0];
      }
    }
  }
}
