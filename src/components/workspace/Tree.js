import {GuideComponent} from '@core/GuideComponent';

export class Tree extends GuideComponent {
  static tagName = 'div'
  static className = 'tree'

  constructor($root) {
    super($root, {
      name: 'Tree',
      listeners: ['click'] // виды событий для этого компонента
    })
  }

  toHTML() {
    return `
    <ul class="tree__list list">
      <li>
        <p id="folder-1" class="tree__folders-atom tree__folders-atom--opened">
          Project 1
        </p>
        <ul id="sublist-1" class="tree__sublist">
          <li>
            <p 
              id="folder-1-1" 
              class="tree__folders-atom tree__folders-atom--closed">
                assets
            </p>
          </li>
          <li>
            <p 
              id="folder-1-2" 
              class="tree__folders-atom tree__folders-atom--empty">
                components
            </p>
          </li>
          <li>
            <p id="file-1" class="tree__files-atom">
              <span 
                style="background-image: url('../images/json-ico.png')">
              </span>
              package.json
            </p>
            <p class="tree__files-description to-delete"></p>
          </li>
          <li>
            <p id="file-2" class="tree__files-atom">
              <span 
                style="background-image: url('../images/json-ico.png')">
              </span>
              package-lock.json
            </p>
            <p class="tree__files-description to-delete"></p>
          </li>
          <li>
            <p id="file-3" class="tree__files-atom">
              <span 
                style="background-image: url('../images/xaml-ico.png')">
              </span>
              app.xaml
            </p>
            <p class="tree__files-description to-delete"></p>
          </li>
          <li>
            <p id="file-4" class="tree__files-atom">
              <span 
                style="background-image: url('../images/cs-ico.png')">
              </span>
              app.cs
            </p>
            <p class="tree__files-description to-delete"></p>
          </li>
        </ul>
      </li>
      <li>
        <p id="folder-2" class="tree__folders-atom tree__folders-atom--empty">
          Project 2
        </p>
      </li>
    </ul>
    `
  }
}
