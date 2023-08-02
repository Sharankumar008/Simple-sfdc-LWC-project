import { LightningElement } from 'lwc';

export default class DemoFirst extends LightningElement {
    
    textValue;

    handleInputChange(event) {
        this.textValue = event.detail.value;
    }
}

