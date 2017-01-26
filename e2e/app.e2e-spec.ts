import { Task4Page } from './app.po';

describe('task4 App', function() {
  let page: Task4Page;

  beforeEach(() => {
    page = new Task4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
