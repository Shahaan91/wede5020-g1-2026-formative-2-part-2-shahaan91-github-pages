"use strict";

$(function () {
    const $search = $("#service-search-input");
    const $cards = $("#dynamic-service-list .service-card");
    const $count = $("#service-result-count");
    const $empty = $("#service-empty");

    // Filter the existing Part 2 service cards while the user types.
    function filterServices() {
        const query = $.trim($search.val()).toLowerCase();
        let visible = 0;

        $cards.each(function () {
            const $card = $(this);
            const searchable = ($card.text() + " " + ($card.data("search") || "")).toLowerCase();
            const matches = searchable.includes(query);
            $card.toggle(matches);
            if (matches) visible += 1;
        });

        $count.text(`${visible} service${visible === 1 ? "" : "s"} found`);
        $empty.prop("hidden", visible !== 0);
    }

    $search.on("input", filterServices);

    // The existing Ferrari gallery opens in a larger lightbox.
    const dialog = document.getElementById("gallery-lightbox");
    const $image = $("#lightbox-image");
    const $caption = $("#lightbox-caption");

    $(".gallery-button").on("click", function () {
        if (!dialog) return;
        $image.attr({
            src: $(this).data("lightbox-src"),
            alt: $(this).data("lightbox-alt")
        });
        $caption.text($(this).data("lightbox-caption"));
        dialog.showModal();
    });

    $("#gallery-lightbox .lightbox-close").on("click", function () {
        dialog?.close();
    });

    $(dialog).on("click", function (event) {
        if (event.target === dialog) dialog.close();
    });
});
