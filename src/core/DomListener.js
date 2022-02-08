// import {capitalize} from '@core/utils'

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('No $root provided for DomListener')
    }
    this.$root = $root // передаем аргументы в контекст, чтобы они были
    this.listeners = listeners // доступны внутри описываемых функций.
  }
}
