import {GuideComponent} from '@core/GuideComponent';

export class DeleteFile extends GuideComponent {
  static tagName = 'li'
  static className = ''

  constructor($root) {
    super($root, {
      name: 'DeleteFile',
      listeners: ['click'] // виды событий для этого компонента
    })
  }

  toHTML() {
    return `
      <button class="main-menu__item js-file-delete" disabled>
        Удалить файл
      </button>
    `
  }
}
