import { Component } from '@angular/core';

import { HomePage } from '../home/index/index';
import { ForumPage } from '../forum/forum';
import { NewsListPage } from '../news/news-list/news-list';
import { ContactPage } from '../contact/contact';
import { MyPage } from '../my/my';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ForumPage;
  tab3Root = NewsListPage;
  tab4Root = ContactPage;
  tab5Root = MyPage;

  constructor() {

  }
}
