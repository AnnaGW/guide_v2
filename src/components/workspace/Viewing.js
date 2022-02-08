import {GuideComponent} from '@core/GuideComponent';

export class Viewing extends GuideComponent {
  static tagName = 'div'
  static className = 'viewing'

  constructor($root) {
    super($root, {
      name: 'Viewing',
      listeners: ['click'] // виды событий для этого компонента
    })
  }

  toHTML() {
    return `
    <div class="viewing__bookmarks bookmarks">
      <ul class="bookmarks__list">
        <li class="bookmarks__item bookmarks__item--current" id="bookmark-1">
          <span>app.xaml</span>
          <button class="bookmark__close"></button>
        </li>
        <li class="bookmarks__item" id="bookmark-2">
          <span>app.cs</span>
          <button class="bookmark__close"></button>
        </li>
        <li class="bookmarks__item js-bookmarks__item--zero">
          <span>Имя файла</span>
        </li>
      </ul>
    </div>
    <div class="viewing__area text-area">
      <textarea 
        class="js-text-area--zero" name="name" rows="8" cols="80"
        disabled>
        Здесь будет отображаться содержимое файла
      </textarea>
    </div>
    <button class="viewing__button button" type="button" name="button" disabled>
      Сохранить
    </button>
    `
  }
}
