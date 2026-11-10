"use strict";

$(function () {
    // Build one featured-project summary with jQuery so the page contains dynamically loaded content.
    const featuredProject = {
        title: "Craving-Co Father's Day Special",
        description: "A campaign example combining offer-led copy, product imagery, strong price visibility and delivery details in one social advertisement.",
        link: "#advertisements"
    };

    $("#featured-project")
        .append($("<h2>", { id: "featured-project-heading", class: "section-title", text: featuredProject.title }))
        .append($("<p>", { class: "section-intro", text: featuredProject.description }))
        .append($("<a>", { class: "text-link", href: featuredProject.link, text: "View the advertisement" }));

    const $items = $(".portfolio-item");
    const $count = $("#portfolio-count");

    // Filter advertisements, videos and photos without reloading the page.
    $(".filter-button").on("click", function () {
        const filter = $(this).data("filter");
        let visible = 0;

        $(".filter-button").removeClass("is-active").attr("aria-pressed", "false");
        $(this).addClass("is-active").attr("aria-pressed", "true");

        $items.each(function () {
            const $item = $(this);
            const show = filter === "all" || $item.data("category") === filter;
            $item.toggle(show);
            if (show) visible += 1;
        });

        $count.text(`${visible} portfolio item${visible === 1 ? "" : "s"} shown`);
    });

    // Images use the same simple lightbox idea as the Services gallery.
    const dialog = document.getElementById("portfolio-lightbox");
    const $image = $("#portfolio-lightbox-image");
    const $caption = $("#portfolio-lightbox-caption");

    $(".portfolio-image-button").on("click", function () {
        if (!dialog) return;
        $image.attr({
            src: $(this).data("lightbox-src"),
            alt: $(this).data("lightbox-alt")
        });
        $caption.text($(this).data("lightbox-caption"));
        dialog.showModal();
    });

    $("#portfolio-lightbox .lightbox-close").on("click", function () {
        dialog?.close();
    });

    $(dialog).on("click", function (event) {
        if (event.target === dialog) dialog.close();
    });
});
