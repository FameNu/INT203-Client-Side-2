let switchSort = 1;

function sortGroupsSec(groups) {
    switchSort *= -1;
    groups.sort((a, b) => switchSort * (a.section - b.section));
}

export { sortGroupsSec };