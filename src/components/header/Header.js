import {GuideComponent} from '@core/GuideComponent';

export class Header extends GuideComponent {
  static tagName = 'header'
  static className = 'guide__header'

  constructor($root) {
    super($root, {
      name: 'Header',
      listeners: ['click'] // виды событий для этого компонента
    })
  }

  toHTML() {
    return `
    <div class="main-menu">
      <ul class="main-menu__list">
        <li>
          <button class="main-menu__item js-folder-create">
          Создать папку
        </button>
        </li>
        <li>
          <button class="main-menu__item js-folder-delete" disabled>
            Удалить папку
          </button>
        </li>
        <li>
          <input 
            class="visually-hidden" 
            type="file" 
            id="upload-file" 
            name="filename" 
            required 
            accept="application/json, text/plain, application/xml, text/xml">
          <label class="main-menu__upload js-file-upload" for="upload-file">
            Загрузить файл
          </label>
        </li>
        <li>
          <a 
            class="main-menu__download 
            main-menu__item--disabled js-file-download" 
            download>
              Скачать файл
          </a>
        </li>
        <li>
          <button class="main-menu__item js-file-delete" disabled>
            Удалить файл
          </button>
        </li>
        <li>
          <button class="main-menu__item js-rename" disabled>
            Переименовать
          </button>
        </li>
      </ul>
    </div>
    `
  }
}
