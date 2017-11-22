import { PgPage } from './app.po';

describe('pg App', () => {
  let page: PgPage;

  beforeEach(() => {
    page = new PgPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
