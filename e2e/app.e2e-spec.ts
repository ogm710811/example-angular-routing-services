import { QuotesAppPage } from './app.po';

describe('quotes-app App', () => {
  let page: QuotesAppPage;

  beforeEach(() => {
    page = new QuotesAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
