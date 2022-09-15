blBackControl = false;
function getColor(blChange) {
    if (blChange)
    blBackControl = !blBackControl;
    if (blBackControl)
        return "#FFFFFF";
    else
        return "#F5F5F5";
}
