import {DomListener} from '@core/DomListener';

export class GuideComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
  }

  // возвращает шаблон компонента
  toHTML() {
    return ''
  }
}
