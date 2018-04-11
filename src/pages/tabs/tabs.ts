import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'HomePage';
  tab2Root = 'ForumPage';
  tab3Root = 'NewsListPage';
  tab4Root = 'ContactListPage';
  tab5Root = 'MyPage';

  constructor() { }
}
