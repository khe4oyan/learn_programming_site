import { DOM } from '../../tools/dom.js';
import Compiler from './tool.js'

{
  const textArea = DOM.GE('.admin .text');
  // textArea.addEventListener('input', () => {
  //   new Compiler(textArea.value.split('\n'));
  // });

  const compileButton = DOM.GE('.admin .createPost');
  compileButton.addEventListener('click', () => new Compiler(textArea.value.split('\n')));
  compileButton.click();
}