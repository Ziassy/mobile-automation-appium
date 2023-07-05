const { expect } = require('chai');

describe('As a user I want to view home page ', () => {
  it('User view home page', async () => {
    await $('#et_name').setValue("zia");
    await $('#et_weight').setValue("44");
    await $('#et_height').setValue("158");
    await $('#rb_female').click();
    await $('#bt_next').click();
    await $('#rb_rest').click();
    await $('#bt_finish').click();

    const pageTitle = await $('#tv_header_desc');
    const menuHome = await $('#navigation_home');
    expect(await pageTitle.isDisplayed()).to.be.true;
    expect(await pageTitle.getText()).to.equal('Ready to some calories today?');
    expect(await menuHome.isDisplayed()).to.be.true;

  });

});