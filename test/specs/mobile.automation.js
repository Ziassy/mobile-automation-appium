const { expect } = require('chai');
const HomePage = require('../pageobjects/home.page')

describe('As a user I want to view home page ', () => {

  const name = 'zia'
  const weight = '44'
  const heigh = '158'

  it('User view home page', async () => {
    await HomePage.openDashboard(name, weight, heigh)

    const pageTitle = await $('#tv_header_desc');
    const menuHome = await $('#navigation_home');
    expect(await pageTitle.isDisplayed()).to.be.true;
    expect(await pageTitle.getText()).to.equal('Ready to some calories today?');
    expect(await menuHome.isDisplayed()).to.be.true;

  });

});