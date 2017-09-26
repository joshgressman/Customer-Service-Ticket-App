import { EvoTicketAppPage } from './app.po';

describe('evo-ticket-app App', () => {
  let page: EvoTicketAppPage;

  beforeEach(() => {
    page = new EvoTicketAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
