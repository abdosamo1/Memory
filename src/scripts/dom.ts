/**
 * Toggles a CSS class on an element.
 * @param element - The target HTML element.
 * @param className - The class to toggle.
 * @returns void
 */
export function toggleClass(element: HTMLElement, className: string): void {
    if (element.classList.contains(className)) {
        element.classList.remove(className);
    } else {
        element.classList.add(className);
    }
}
