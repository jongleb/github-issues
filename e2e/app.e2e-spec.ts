import { GithubIssuesPage } from './app.po';

describe('github-issues App', function() {
  let page: GithubIssuesPage;

  beforeEach(() => {
    page = new GithubIssuesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
