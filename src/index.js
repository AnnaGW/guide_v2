import {Assembler} from '@/components/assembler/Assembler';
import {CreateFolder} from '@/components/header/CreateFolder';
import {DeleteFolder} from '@/components/header/DeleteFolder';
import {UploadFile} from '@/components/header/UploadFile';
import {DownloadFile} from '@/components/header/DownloadFile';
import {DeleteFile} from '@/components/header/DeleteFile';
import {Rename} from '@/components/header/Rename';
import {Tree} from '@/components/workspace/Tree';
import {Viewing} from '@/components/workspace/Viewing';
// import {SaveFile} from '@/components/workspace/SaveFile';

import './scss/index.scss'
import $ from 'jquery'
global.jQuery = $;
global.$ = $;

console.log('Test task from Infteh version 2 started')


const menu = new Assembler('.main-menu__list', {
  components: [
    CreateFolder,
    DeleteFolder,
    UploadFile,
    DownloadFile,
    DeleteFile,
    Rename
  ]
})

menu.render();

const workspace = new Assembler('.workspace', {
  components: [
    Tree,
    Viewing
  ]
})

workspace.render()

$('.js-folder-create').on('click', () => console.log('jQuery is working'))
