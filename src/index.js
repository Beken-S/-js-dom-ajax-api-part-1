function getNewPosition(element, pageX, pageY, offsetX, offsetY) {
    const { offsetWidth: elementWidth, offsetHeight: elementHeight } = element;
    const { scrollWidth, scrollHeight } = document.documentElement;
    const position = {
        top: pageY - offsetY,
        left: pageX - offsetX,
        bottom: pageY - offsetY + elementHeight,
        right: pageX - offsetX + elementWidth,
    };

    if (position.top < 0) {
        position.top = 0;
    }
    if (position.bottom > scrollHeight) {
        position.top = scrollHeight - elementHeight;
        position.bottom = position.top + elementHeight;
    }
    if (position.left < 0) {
        position.left = 0;
    }
    if (position.right > scrollWidth) {
        position.left = scrollWidth - elementWidth;
        position.right = position.left + elementWidth;
    }

    return position;
}

function moveBox(event) {
    const { box, offsetX, offsetY } = this;
    const { pageX, pageY } = event;
    const { top, left } = getNewPosition(box, pageX, pageY, offsetX, offsetY);

    this.box.style.setProperty('--top', `${top}px`);
    this.box.style.setProperty('--left', `${left}px`);
}

function isDropZone(element) {
    return element.nodeName !== 'HTML' && element.classList.contains('drop-zone');
}

function isDropZone2(element) {
    return element.nodeName !== 'HTML' && element.classList.contains('drop-zone_2');
}
