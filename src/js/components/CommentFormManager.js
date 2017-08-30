import $ from 'jquery';

import UIStatusManager from "./UIStatusManager";

export default class CommentFormManager extends UIStatusManager {
    constructor(selector, service) {
        super(selector);
        this.service = service;
        console.log("constructor", this.element);
    }

    init() {
        this.setupSubmitEventHandler();
    }

    setupSubmitEventHandler() {
        this.element.on("submit", () => {
            console.log("setupSubmitEventHandler");
            this.validateAndSend();
            return false;
        });
    }
    
    validateAndSend() {
        console.log("validateAndSend");
        if (this.isValid()) {
            this.send();
        }
    }
    
    isValid() {
        console.log("isValid");
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
        console.log("send");
        this.sendLoading();
        const comment = {
            article_id: this.element.find("#articleId").val(),
            author: this.element.find("#name").val(),
            email: this.element.find("email").val(),
            comment: this.element.find("comment").val()
        }
        console.log("sending comment", comment);
        this.service.save(comment, success => {
            console.log("comment saved", success);
            this.setLoaded();
        }, error => {
            console.error("Error sending comment", error);
            this.setErrorHtml("Error saving comment")
        });
        console.log("comment submitted");
    }
}