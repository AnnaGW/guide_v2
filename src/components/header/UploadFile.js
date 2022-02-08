import {GuideComponent} from '@core/GuideComponent';

export class UploadFile extends GuideComponent {
  static tagName = 'li'
  static className = ''

  constructor($root) {
    super($root, {
      name: 'UploadFile',
      listeners: ['click'] // виды событий для этого компонента
    })
  }

  toHTML() {
    return `
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
    `
  }
}
