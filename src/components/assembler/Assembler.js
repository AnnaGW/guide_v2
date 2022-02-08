// класс - сборщик компонентов, для себя контейнер не создает
// использует аргумент selector - уже существующий элемент
// если нужна вложенность, создается еще инстанс для соотв контейнера
// каждый компонент для себя создает контейнер сам
import {agw} from '@core/dom'

import $ from 'jquery'
global.jQuery = $;
global.$ = $;

export class Assembler {
  constructor(selector, options) {
    this.$assemblerRoot = agw(selector) // куда положить, существующий эл-т
    this.components = options.components || []
    // что положить - классы компонентов
  }

  render() {
    this.components = this.components.map(
        (Compt) => {
          const $componentRoot = agw.create(Compt.tagName, Compt.className)
          const component = new Compt($componentRoot)
          $componentRoot.html(component.toHTML()) // !!!!!
          this.$assemblerRoot.append($componentRoot)
        }
    )
  }
}
