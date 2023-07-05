
describe('As a user I want to view home page ', () => {
  it('User view home page', async () => {
    await $('#et_name').setValue("zia");
    await $('#et_weight').setValue("44");
    await $('#et_height').setValue("158");
    await $('#rb_female').click();
    await $('#bt_next').click();
    await $('#rb_rest').click();
    await $('#bt_finish').click();

  });

});