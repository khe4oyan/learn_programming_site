import { DOM } from '../../tools/dom.js';
import Compiler from './tool.js'

{
  const textArea = DOM.GE('.admin .text');
  const compileButton = DOM.GE('.admin .createPost');
  compileButton.addEventListener('click', () => {
    new Compiler(textArea.value.split('\n'))
  });

  const exampleButton = DOM.GE('.exampleButton');
  exampleButton.addEventListener('click', () => {
    DOM.GE('.postTitle').value = "Post Title";
    textArea.value = '# Header Text Example\n\n# Image example\n!android-ծրագրավորող-android-ծրագրավորում.webp\n\n# Paragraph example\n[Picsart Academy](https://picsartacademy.am/) web page\n\n# Video Example\n!https://www.youtube.com/embed/2KbukXH986U?si=ifbd7dhrm3qN4D_9\n\n# Number list example\n- line 1\n- line 2\n- line 3\n\n# Point list example\n* line 1\n* line 2\n* line 3';
    compileButton.click();
  });
}