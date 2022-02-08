// не нужен пока

import {GuideComponent} from '@core/GuideComponent';

export class SaveFile extends GuideComponent {
  static tagName = 'div'
  static className = 'viewing'

  constructor($root) {
    super($root, {
      name: 'SaveFile',
      listeners: ['click'] // виды событий для этого компонента
    })
  }

  toHTML() {
    return `
    <button class="viewing__button button" type="button" name="button" disabled>
      Сохранить
    </button>
    `
  }
}
