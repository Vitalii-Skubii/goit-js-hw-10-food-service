import menuTemplates from "../templates/menu-gallery.hbs";
import menuItems from "../menu.json";

const markup = menuTemplates(menuItems);

const galleryRef = document.querySelector(".js-menu");

galleryRef.insertAdjacentHTML('beforeend',markup);