import { toggle_class } from "./tools";
import $ from "jquery";

$(".workout-icon-container").click(function () {
    const icon = $(this).find(".workout-toggle-icon");
    const icon_el = this.querySelector(".workout-toggle-icon") as HTMLElement;
    if ($(icon).hasClass("workout-open")) {
        $(icon).attr("src", "https://iili.io/3OGwWcx.png");
        $(this).closest(".workout-inner").children(".caption-copy").hide();
    }
    else {
        $(icon).attr("src", "https://iili.io/3OGkdDN.png");
        $(this).closest(".workout-inner").children().show();
    }

    toggle_class(icon_el, "workout-open");
});