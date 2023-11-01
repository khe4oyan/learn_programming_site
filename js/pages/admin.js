import { DOM } from '../tools/dom.js';
import {DB, postTypes} from '../data/DB.js'

{
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

        const dataTypesList = DOM.CE('select', 'dataTypes', newData);
        dataTypesList.name = 'dataTypeList';
        // add option in to this dataTYpesList
        
        const inputData = DOM.CE('input', 'inputData', newData);
        inputData.placeholder = 'Enter data'

        const addButton = DOM.CE('button', 'addButton', newData);
        addButton.innerText = 'add';

        return newData;
    }


}