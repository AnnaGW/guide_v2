import {GuideComponent} from '@core/GuideComponent';

export class DeleteFolder extends GuideComponent {
  static tagName = 'li'
  static className = ''

  constructor($root) {
    super($root, {
      name: 'DeleteFolder',
      listeners: ['click'] // виды событий для этого компонента
    })
  }

  toHTML() {
    return `
      <button class="main-menu__item js-folder-delete" disabled>
        Удалить папку
      </button>
    `
  }
}
