"use strict";

// Wait until the page and jQuery are ready before adding the interactive bits.
$(function () {
    $("html").addClass("js-enabled");

    // Reveal sections as they enter the viewport.
    const revealItems = document.querySelectorAll(".js-reveal");
    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries, revealObserver) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    $(entry.target).addClass("is-visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        revealItems.forEach((item) => observer.observe(item));
    } else {
        $(revealItems).addClass("is-visible");
    }

    // jQuery accordion used on the Services page.
    $(".accordion-trigger").on("click", function () {
        const $button = $(this);
        const panelId = $button.attr("aria-controls");
        const $panel = $("#" + panelId);
        const isOpen = $button.attr("aria-expanded") === "true";

        $button.attr("aria-expanded", String(!isOpen));
        $button.find("span").text(isOpen ? "+" : "−");

        if (isOpen) {
            $panel.stop(true, true).slideUp(180, function () {
                $panel.prop("hidden", true);
            });
        } else {
            $panel.prop("hidden", false).hide().stop(true, true).slideDown(180);
        }
    });
});
