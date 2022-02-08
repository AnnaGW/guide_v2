import {GuideComponent} from '@core/GuideComponent';

export class Rename extends GuideComponent {
  static tagName = 'li'
  static className = ''

  constructor($root) {
    super($root, {
      name: 'Rename',
      listeners: ['click'] // виды событий для этого компонента
    })
  }

  toHTML() {
    return `
        <button class="main-menu__item js-rename" disabled>
          Переименовать
        </button>
    `
  }
}
