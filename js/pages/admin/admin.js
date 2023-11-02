import { DOM } from '../../tools/dom.js';
import {DB, postTypes} from '../../data/DB.js'
import Tool from './tool.js'

{
    const previewDataArray = [];

    const previewPush = (data) => {
        preview.push(data);

        const previewDOM = DOM.GE('.preview');
        previewDOM.innerHTML = '';
        for (let i = 0; i < preview.length; ++i) {
            previewDOM.appendChild(Tool.createPreview(preview[i], postTypes));
        }
    }

    const createNewData = () => {
        const newData = DOM.CE('div', 'newData');
        const closeButton = DOM.CE('button', 'closeButton', newData);
        closeButton.innerText = 'x';
        closeButton.addEventListener('click', () => {
            newData.remove();
        });

        const dataTypesList = DOM.CE('select', 'dataTypes', newData);
        dataTypesList.name = 'dataTypeList';

        {
            const option = DOM.CE('option', null, dataTypesList);
            option.hidden=true;
            option.innerText = "(select data type)";
            
            const typeList = Object.keys(postTypes);
            for (let i = 0; i < typeList.length; ++i) {
                const option = DOM.CE('option', null, dataTypesList);
                option.value = postTypes[typeList[i]];
                option.innerText = postTypes[typeList[i]];
            }
        }
        
        const inputData = DOM.CE('input', 'inputData', newData);
        inputData.placeholder = 'Enter data'

        const addButton = DOM.CE('button', 'addButton', newData);
        addButton.innerText = 'add';
        addButton.addEventListener('click', () => {
            const post = {
                id: Math.random() + '/' + new Date().getTime(),
                content: inputData.value,
                type: dataTypesList.value,
            };

            previewPush(post);
            newData.remove();
        });

        DOM.GE('.inputs').appendChild(newData);
    }

    const postTitle = DOM.CE('input', 'postTitle');
    postTitle.placeholder = 'Post title';
    DOM.GE('.admin .container').prepend(postTitle);

    const createPostButton = DOM.GE('.createPost');
    const createDataType = DOM.GE('.createDataType');
    createDataType.addEventListener('click', () => {
        createNewData();
    });
}