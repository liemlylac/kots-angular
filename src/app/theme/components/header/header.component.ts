import { Component, OnInit } from '@angular/core';
import { AuthService } from '@modules/auth/services/auth.service';
import { LoginLocalStorage } from '@modules/auth/services/login-storage';
import { LoginUser } from '@modules/auth/models/login.model';
import { Language, LanguageService } from '@theme/services/language.service';
import { faComment, faBell, faUser } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faComment = faComment;
  faBell = faBell;
  faUser = faUser;

  isLoggedIn: boolean;
  supportLanguages: Language[];
  currentLanguage: Language;
  headerToolTipOpenDelay = 700;
  headerToolTipCloseDelay = 150;

  notifications = [
    {
      link: '/user/profile',
      image: 'assets/images/logo48.png',
      content: 'You has been receive a new notification from system',
      time: '9 hours ago',
      read: false,
    },
    {
      link: '/user/profile',
      image: 'assets/images/logo48.png',
      content: 'You has been receive a new notification from system',
      time: '1 day ago',
      read: false,
    },
    {
      link: '/user/profile',
      image: 'assets/images/logo48.png',
      content: 'You has been receive a new notification from system',
      time: '2 days ago',
      read: false,
    },
  ];

  messages = [
    {
      chatI: '/user/profile',
      image: 'assets/images/logo48.png',
      group: 'High school group',
      content: 'Peter: Off into she bed long fat room.',
      time: '30 minutes ago',
      read: false,
    },
    {
      link: '/user/profile',
      image: 'assets/images/logo48.png',
      group: 'Jame',
      content: 'Jame: Early had add equal china quiet visit',
      time: '10 hours ago',
      read: true,
    },
    {
      link: '/user/profile',
      image: 'assets/images/logo48.png',
      group: 'Lena',
      content: 'You: Unfeeling agreeable suffering it on smallness',
      time: '1 day ago',
      read: true,
    },
    {
      link: '/user/profile',
      image: 'assets/images/logo48.png',
      group: 'Smith',
      content: 'You: Overcame breeding or my concerns',
      time: '1 day ago',
      read: true,
    },
    {
      link: '/user/profile',
      image: 'assets/images/logo48.png',
      group: 'John',
      content: 'John: Residence certainly elsewhere something',
      time: '1 day ago',
      read: true,
    },
  ];

  constructor(
    private readonly authService: AuthService,
    private readonly loginStorage: LoginLocalStorage,
    private readonly languageService: LanguageService,
  ) {
  }

  ngOnInit(): void {
    this.supportLanguages = this.languageService.getAllLanguages();
    this.currentLanguage = this.languageService.getCurrentLanguage();
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  logout(): void {
    this.authService.logout();
  }

  get loginUser(): LoginUser {
    return this.loginStorage.get();
  }

  onChangeLanguage(code: string): void {
    this.languageService.changeLanguage(code);
    this.currentLanguage = this.languageService.getCurrentLanguage();
  }

  getNotificationCount(): string | number {
    const unReadNotifies = this.notifications.filter(item => !item.read);
    return unReadNotifies.length > 99 ? '99+' : unReadNotifies.length;
  }

  getMessageCount(): string | number {
    const unReadMessages = this.messages.filter(item => !item.read);
    return unReadMessages.length > 99 ? '99+' : unReadMessages.length;
  }
}
