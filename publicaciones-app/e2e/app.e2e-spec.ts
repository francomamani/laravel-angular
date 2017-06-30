import { PublicacionesAppPage } from './app.po';

describe('publicaciones-app App', () => {
  let page: PublicacionesAppPage;

  beforeEach(() => {
    page = new PublicacionesAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
