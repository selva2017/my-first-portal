import { MyFirstPortalPage } from './app.po';

describe('my-first-portal App', () => {
  let page: MyFirstPortalPage;

  beforeEach(() => {
    page = new MyFirstPortalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
