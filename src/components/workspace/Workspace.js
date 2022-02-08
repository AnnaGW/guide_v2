import {GuideComponent} from '@core/GuideComponent';

export class Workspace extends GuideComponent {
  static tagName = 'main'
  static className = 'workspace'

  constructor($root) {
    super($root, {
      name: 'Workspace',
      listeners: ['click'] // виды событий для этого компонента
    })
  }

  toHTML() {
    return `

    `
  }
}
