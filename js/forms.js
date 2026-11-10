"use strict";

$(function () {
    function setError($field, message) {
        const id = $field.attr("id");
        $field.attr("aria-invalid", message ? "true" : "false");
        $("#" + id + "-error").text(message);
    }

    function getValidationMessage(field) {
        const value = $.trim(field.value);
        if (field.required && !value) return "This field is required.";
        if (field.validity.typeMismatch) return "Enter a valid email address.";
        if (field.validity.patternMismatch) return "Enter a valid phone number using numbers, spaces, +, brackets or hyphens.";
        if (field.validity.tooShort) return `Please enter at least ${field.minLength} characters.`;
        if (field.validity.tooLong) return `Please use no more than ${field.maxLength} characters.`;
        return "";
    }

    function validateForm($form) {
        let valid = true;
        $form.find("input, select, textarea").each(function () {
            if (this.name === "_honey") return;
            const message = getValidationMessage(this);
            setError($(this), message);
            if (message) valid = false;
        });
        return valid;
    }

    function wireLiveValidation($form) {
        $form.find("input, select, textarea").on("blur", function () {
            if (this.name !== "_honey") setError($(this), getValidationMessage(this));
        }).on("input change", function () {
            if ($(this).attr("aria-invalid") === "true") {
                setError($(this), getValidationMessage(this));
            }
        });
    }

    const $enquiryForm = $("#enquiry-form");
    if ($enquiryForm.length) {
        wireLiveValidation($enquiryForm);

        $("#message").on("input", function () {
            $("#message-count").text(this.value.length);
        });

        $enquiryForm.on("submit", function (event) {
            event.preventDefault();
            const $status = $("#enquiry-status");

            if (!validateForm($enquiryForm)) {
                $status.attr("class", "form-status error").text("Please correct the highlighted fields before processing the enquiry.");
                $enquiryForm.find('[aria-invalid="true"]').first().trigger("focus");
                return;
            }

            const service = $("#service").val();
            const timeline = $("#timeline").val();

            // These are demonstration ranges for the coursework, not published Meliora Media prices.
            const estimates = {
                "video-shoot": "Indicative range (demonstration only): R2,500 – R4,500",
                "editing": "Indicative range (demonstration only): R1,500 – R3,000",
                "voice-over": "Indicative range (demonstration only): R800 – R1,800",
                "full-package": "Indicative range (demonstration only): R4,500 – R7,500"
            };

            const availability = {
                "asap": "Priority scheduling requested. The earliest available slot would need to be confirmed directly.",
                "2-weeks": "A two-week target gives time for planning, subject to the location and production complexity.",
                "1-month": "A one-month window allows more flexibility for planning, filming and post-production.",
                "flexible": "A flexible timeline gives the widest range of scheduling options."
            };

            $("#response-service").text($("#service option:selected").text());
            $("#response-cost").text(estimates[service]);
            $("#response-availability").text(availability[timeline]);
            $("#response-note").text("This is an indicative planning response only. Final pricing and availability depend on the brief, location, shoot duration and deliverables and must be confirmed by Meliora Media.");

            $("#enquiry-response").prop("hidden", false).hide().slideDown(260, function () {
                $(this).find(".js-reveal").addClass("is-visible");
                this.scrollIntoView({ behavior: "smooth", block: "start" });
            });
            $status.attr("class", "form-status success").text("Enquiry validated and processed successfully. Your planning response is shown below.");
        });
    }

    const $contactForm = $("#contact-form");
    if ($contactForm.length) {
        wireLiveValidation($contactForm);

        $("#contact-message").on("input", function () {
            $("#contact-message-count").text(this.value.length);
        });

        $contactForm.on("submit", function (event) {
            event.preventDefault();
            const $status = $("#contact-status");

            if (!validateForm($contactForm)) {
                $status.attr("class", "form-status error").text("Please correct the highlighted fields before sending the message.");
                $contactForm.find('[aria-invalid="true"]').first().trigger("focus");
                return;
            }

            const name = $.trim($("#contact-name").val());
            const email = $.trim($("#contact-email").val());
            const type = $("#contact-type").val();
            const message = $.trim($("#contact-message").val());
            const subject = `Website contact: ${type} from ${name}`;
            const body = `Name: ${name}\nEmail: ${email}\nMessage type: ${type}\n\nMessage:\n${message}`;
            const mailto = `mailto:info@melioramedia.co.za?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            const $button = $contactForm.find('button[type="submit"]');

            $button.prop("disabled", true).text("Sending...");
            $status.attr("class", "form-status").text("Validation passed. Sending the message with jQuery AJAX...");

            $.ajax({
                url: "https://formsubmit.co/ajax/info@melioramedia.co.za",
                method: "POST",
                contentType: "application/json",
                dataType: "json",
                data: JSON.stringify({
                    name: name,
                    email: email,
                    "Message type": type,
                    message: message,
                    _replyto: email,
                    _subject: subject,
                    _template: "table"
                })
            }).done(function (data) {
                if (data.success === "true" || data.success === true) {
                    $status.attr("class", "form-status success").text("Message sent successfully. Meliora Media can reply to the email address you provided.");
                    $contactForm[0].reset();
                    $("#contact-message-count").text("0");
                } else {
                    $status.attr("class", "form-status error").html(`The email service did not accept the message. <a href="${mailto}">Open your email application instead</a>.`);
                }
            }).fail(function () {
                $status.attr("class", "form-status error").html(`The online email service is unavailable or still needs activation. <a href="${mailto}">Open your email application instead</a>.`);
            }).always(function () {
                $button.prop("disabled", false).text("Send Message");
            });
        });
    }
});
