import { DOM } from '../../tools/dom.js';
import Compiler from './tool.js'

{
  const textArea = DOM.GE('.admin .text');

  const compileButton = DOM.GE('.admin .createPost');
  compileButton.addEventListener('click', () => new Compiler(textArea.value.split('\n')));
  compileButton.click();
}