// пока выводит все элементы хедера
// потом будет прототипом для каждого пункта меню
import {GuideComponent} from '@core/GuideComponent';

export class HeaderItem extends GuideComponent {
  static tagName = 'li'
  static className = ''

  constructor($root) {
    super($root, {
      name: 'HeaderItem',
      listeners: ['click'] // виды событий для этого компонента
    })
  }

  toHTML() {
    return `
      <button class="main-menu__item js-folder-create">Создать папку</button>
    `
  }
}
