import { HidatidosisPage } from './app.po';

describe('hidatidosis App', () => {
  let page: HidatidosisPage;

  beforeEach(() => {
    page = new HidatidosisPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
