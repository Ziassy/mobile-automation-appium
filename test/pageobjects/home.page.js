const Page = require('./page');

class HomePage extends Page {
  txt_name = '#et_name';
  txt_weight = '#et_weight';
  txt_height = '#et_height';
  select_female = '#rb_female';
  btn_next = '#bt_next';
  select_activity = '#rb_rest';
  btn_finish = '#bt_finish';

  get inputName () {
    return $(this.txt_name);
  }

  get inputWeight () {
    return $(this.txt_weight);
  }

  get inputHeight () {
    return $(this.txt_height);
  }

  get selectGender () {
    return $(this.select_female);
  }

  get clickButtonSubmit () {
    return $(this.btn_next);
  }

  get selectActivity () {
    return $(this.select_activity);
  }

  get clickButtonFinish () {
    return $(this.btn_finish);
  }

  async openDashboard (name, weight, height) {
    await this.inputName.setValue(name);
    await this.inputWeight.setValue(weight);
    await this.inputHeight.setValue(height);
    await this.selectGender.click();
    await this.clickButtonSubmit.click();
    await this.selectActivity.click();
    await this.clickButtonFinish.click();
  }

  open () {
    return super.open();
  }
}

module.exports = new HomePage();
