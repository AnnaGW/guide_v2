import './scss/index.scss'
import $ from 'jquery'
global.jQuery = $;
global.$ = $;

console.log('Test task from Infteh version 2 started')

$('.js-folder-create').on('click', () => console.log('jQuery is working'))
