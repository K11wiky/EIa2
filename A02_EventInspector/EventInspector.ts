// Eventlistener an das "load"-Event gehängt
window.addEventListener("load", handleLoad);

function handleLoad(_event: Event): void {
    // Variablen für body, divs und button deklariert und zugewiesen
    let body: HTMLElement = <HTMLElement>document.body;
    let div0: HTMLDivElement = <HTMLDivElement>document.querySelector("#div0");
    let div1: HTMLDivElement = <HTMLDivElement>document.querySelector("#div1");
    let button: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button");

    // Eventlistener für "mousemove" an das document gehängt
    document.addEventListener("mousemove", setInfoBox);

    // Eventlistener für "click" und "keyup" an document, body und die divs gehängt
    document.addEventListener("click", logInfo);
    document.addEventListener("keyup", logInfo);
    body.addEventListener("click", logInfo);
    body.addEventListener("keyup", logInfo);
    div0.addEventListener("click", logInfo);
    div0.addEventListener("keyup", logInfo);
    div1.addEventListener("click", logInfo);
    div1.addEventListener("keyup", logInfo);

    // Eventlistener für "click" an den button gehängt
    button.addEventListener("click", customEvent);

    // Eventlistener für das selbst definierte Event "petTheCat" an das document gehängt
    document.addEventListener("hungry", logInfo);
}

function setInfoBox(_event: MouseEvent): void {
    // Koordinaten des Mouse-Events, Target-Element und das span-Element werden deklariert und zugewiesen
    let x: number = _event.clientX;
    let y: number = _event.clientY;
    let target: EventTarget = _event.target;

    let span: HTMLSpanElement = <HTMLSpanElement>document.querySelector("span");
   
    // Offset für die Position des span-Elements wird definiert
    let offset: number = 10;

    // Position des span-Elements wird berechnet und zugewiesen
    span.style.left = (x + offset) + "px";
    span.style.top = (y + offset) + "px";

    // Inhalt des span-Elements wird definiert
    span.innerHTML = "x: " + x + "<br>" + "y: " + y + "<br>" + "target: " + target;
}

function logInfo(_event: Event): void {
    // Informationen des Events werden in der Konsole ausgegeben
    console.log(_event.type);
    console.log(_event.target);
    console.log(_event.currentTarget);
    console.log(_event);
}

function customEvent(_event: Event): void {
    // HTML-Button-Element und neues Custom-Event werden deklariert und zugewiesen
    let button: HTMLButtonElement = <HTMLButtonElement>_event.target;
    let newEvent: CustomEvent = new CustomEvent("hungry", { bubbles: true });

    // Das Custom-Event wird ausgelöst
    button.dispatchEvent(newEvent);
}
