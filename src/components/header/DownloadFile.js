import {GuideComponent} from '@core/GuideComponent';

export class DownloadFile extends GuideComponent {
  static tagName = 'li'
  static className = ''

  constructor($root) {
    super($root, {
      name: 'DownloadFile',
      listeners: ['click'] // виды событий для этого компонента
    })
  }

  toHTML() {
    return `
        <a 
          class="main-menu__download main-menu__item--disabled 
          js-file-download" 
          download>
            Скачать файл
        </a>
    `
  }
}
