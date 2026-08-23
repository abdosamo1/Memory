/**
 * Toggles a CSS class on an element.
 * @param element - The target HTML element.
 * @param className - The class to toggle.
 */
export function toggleClass(element: HTMLElement, className: string): void {
    if (element.classList.contains(className)) {
        element.classList.remove(className);
    } else {
        element.classList.add(className);
    }
}

/**
 * switch between 2 classes
 */
export function switchClasses(element: HTMLElement, class1: string, class2: string): void {
    element.classList.remove(class1);
    element.classList.add(class2);
}