import { HomeworkPage } from './app.po';

describe('homework App', () => {
  let page: HomeworkPage;

  beforeEach(() => {
    page = new HomeworkPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
