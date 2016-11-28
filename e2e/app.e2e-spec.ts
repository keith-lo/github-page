import { GithubPagePage } from './app.po';

describe('github-page App', function() {
  let page: GithubPagePage;

  beforeEach(() => {
    page = new GithubPagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
