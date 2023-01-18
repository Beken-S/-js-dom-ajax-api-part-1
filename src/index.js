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

function appendBoxToDropZone(box, dropZone) {
    box.classList.remove('box_draggable');

    if (isDropZone2(dropZone)) {
        const { offsetTop: zoneTop, offsetLeft: zoneLeft } = dropZone;
        const boxTop = parseInt(box.style.getPropertyValue('--top'));
        const boxLeft = parseInt(box.style.getPropertyValue('--left'));

        box.style.setProperty('--top', `${boxTop - zoneTop}px`);
        box.style.setProperty('--left', `${boxLeft - zoneLeft}px`);
        box.classList.add('box_position_absolute');
    }

    dropZone.append(box);
    box.hidden = false;
}

function dropBox(event) {
    document.removeEventListener('pointerup', dropBoxListener);
    document.removeEventListener('pointermove', moveBoxListener);
    this.box.hidden = true;

    const { clientX, clientY } = event;
    const dropZone = document.elementFromPoint(clientX, clientY);

    if (dropZone != null && isDropZone(dropZone)) {
        appendBoxToDropZone(this.box, dropZone);
        return;
    }
    if (dropZone?.parentNode != null && isDropZone(dropZone.parentNode)) {
        appendBoxToDropZone(this.box, dropZone.parentNode);
        return;
    }

    this.box.remove();
}

function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padEnd(6, 0)}`;
}
