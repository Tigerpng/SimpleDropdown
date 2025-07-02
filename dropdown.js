function toggleDropdown(event) {
    let dropdown_trigger = event.target;
    let dropdownNumber = dropdown_trigger.dataset.dropdownNumber;
    const dropdownSearchArgument = `[data-dropdown-menu-number="${dropdownNumber}"]`;
    let dropdownMenu = document.querySelector(dropdownSearchArgument);

    console.log(dropdownMenu.classList.contains("dropdown-show"));
    if (dropdownMenu.classList.contains("dropdown-show")) {
        dropdownMenu.classList.remove("dropdown-show");
    }
    else {
        dropdownMenu.classList.add("dropdown-show");
    }
};

function closeDropdownMenus(event) {
    let cur_element = event.target;
    if (cur_element.dataset.dropdownMenuNumber == null && cur_element.dataset.dropdownNumber == null) {
        console.log("HIDE")
        let menus = document.querySelectorAll(".dropdown-show");
        menus.forEach((element) => element.classList.remove("dropdown-show"))
    }
};

function addDropdownListeners() {
    let dropdown_triggers = document.querySelectorAll(".dropdown-trigger");
    console.log(dropdown_triggers);
    for (let i = 0; i < dropdown_triggers.length; i++) {
        dropdown_triggers[i].addEventListener("click", function(event){toggleDropdown(event)})
    };
};

window.addEventListener("DOMContentLoaded", () => {
        document.addEventListener("click", function(event) {closeDropdownMenus(event)});
        addDropdownListeners();
});
