import $ from 'jquery';

import UIStatusManager from "./UIStatusManager";

export default class CommentFormManager extends UIStatusManager {
    constructor(selector, service, pubSub, maxWordValidator) {
        super(selector);
        this.service = service;
        this.pubSub = pubSub;
        this.maxWordValidator = maxWordValidator;
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
        const fields = this.element.find("input, textarea");
        let noError = true;
        for (let field of fields) {
            this.removeFieldError(field);
            if (field.checkValidity() == false) {
                this.setFieldError(field, field.validationMessage);
                if (noError) {
                    field.focus();
                    noError = false;
                }
            }
        }

        const errorFields = this.maxWordValidator.validate();
        for (let errorField of errorFields) {
            this.setFieldError(errorField, "Number of words excedeed. (120 max.)");
            if (noError) {
                field.focus();
                noError = false;
            }
        }

        if (noError === false) {
            this.setError();
        }

        return noError;
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
            this.resetForm();
            this.setLoaded();
        }, error => {
            console.error("Error sending comment, please try again.", error);
            this.setErrorHtml("Error sending comment, please try again.")
        });
        
    }

    removeFieldError(element) {
        $(element).removeClass("error");
        $(element).siblings("label").removeClass("error");
        $(element).siblings(".error-message").remove();
    }

    setFieldError(element, message) {
        $(element).addClass("error");
        $(element).siblings("label").addClass("error");
        const errorMsg = `<span class="error-message">${message}</span>`
        $(element).parent().append(errorMsg);
    }

    resetForm() {
        this.element[0].reset();
    }

    disableFormControls() {
        this.element.find("input, textarea, button").attr("disabled", true);
    }
    
    enableFormControls() {
        this.element.find("input, textarea, button").attr("disabled", false);
    }

    setLoading() {
        super.setLoading();
        this.disableFormControls();
    }

    setError() {
        super.setError();
        this.enableFormControls();
    }

    setLoaded() {
        super.setLoaded();
        this.enableFormControls();
    }
}