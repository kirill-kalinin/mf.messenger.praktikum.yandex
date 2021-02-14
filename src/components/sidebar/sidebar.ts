import Template from '../../../components/sidebar/sidebar.hbs.js';
import Block from '../../core/k-react/block.js';
import type { BlockProps, SidebarMenu } from '../../core/types.js';

export default class Sidebar extends Block {
  constructor(props: BlockProps = {}, className = 'fragment') {
    super('div', className, props);
  }

  render() {
    return Template;
  }
}

export const sidebarProfileMenuPreset: SidebarMenu = {
  parent: 'profile',
  typeIsMenu: true,
  menuItems: [
    { link: '../profile-edit-avatar/profile-edit-avatar.html', text: 'Изменить аватар' },
    { link: '../profile-edit-data/profile-edit-data.html', text: 'Изменить данные' },
    { link: '../profile-edit-password/profile-edit-password.html', text: 'Изменить пароль' },
    { link: '../login/login.html', text: 'Выйти' }
  ]
};

export const sidebarLoginPreset: BlockProps = {
  parent: 'login',
  typeIsPrompt: true,
  prompt: {
    question: 'Еще нет аккаунта?',
    link: {
      text: 'Создать новый!',
      href: '/pages/signin/signin.html'
    }
  }
}
