import $ from 'jquery';

import UIStatusManager from "./UIStatusManager";

export default class CommentFormManager extends UIStatusManager {
    constructor(selector, service, pubSub) {
        super(selector);
        this.service = service;
        this.pubSub = pubSub;
    }

    init() {
        this.setupSubmitEventHandler();
    }

    setupSubmitEventHandler() {
        this.element.on("submit", () => {
            this.validateAndSend();
            return false;
        });
    }
    
    validateAndSend() {
        if (this.isValid()) {
            this.send();
        }
    }
    
    isValid() {
        const inputs = this.element.find("input");
        for (let input of inputs) {
            if (input.checkValidity() == false) {
                const errorMessage = input.validationMessage;
                input.focus();
                console.warn("Validation failed", errorMessage);
                this.setErrorHtml(errorMessage);
                this.setError();
                return false;
            }
        }
        return true;
    }
    
    send() {
        this.setLoading();
        const comment = {
            article_id: this.element.find("#articleId").val(),
            author: this.element.find("#name").val(),
            email: this.element.find("#email").val(),
            comment: this.element.find("#comment").val()
        }
        
        this.service.save(comment, success => {
            this.pubSub.publish("new-comment", comment);
            this.setLoaded();
        }, error => {
            console.error("Error sending comment", error);
            this.setErrorHtml("Error saving comment")
        });
        
    }
}