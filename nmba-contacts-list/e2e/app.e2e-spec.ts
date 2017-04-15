import { NmbaContactsListPage } from './app.po';

describe('nmba-contacts-list App', () => {
  let page: NmbaContactsListPage;

  beforeEach(() => {
    page = new NmbaContactsListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
