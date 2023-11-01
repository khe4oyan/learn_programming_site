import { DOM } from '../tools/dom.js';
import {DB, postTypes} from '../data/DB.js'

{
    const preview = [];

    const createPreview = (previewData) => {
        // switch case previewData.type, create element and return it
        const elem = DOM.CE('div');
        elem.innerText = 'previewData';

        return elem;
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
                id: Math.random() + '|' + new Date().getTime(),
                content: inputData.value,
                type: dataTypesList.value,
            };

            preview.push(post);
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