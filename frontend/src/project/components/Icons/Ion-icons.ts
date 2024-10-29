
export const createIonIcons = () => {
    const ionScript = document.createElement("script");
    ionScript.src = "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js";
    ionScript.async = true;
    ionScript.defer = true;
    ionScript.type = "module";

    const ionModuleScript = document.createElement("script");
    ionModuleScript.setAttribute("nomodule", "");
    ionModuleScript.src = "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js";

    document.head.appendChild(ionScript);
    document.head.appendChild(ionModuleScript)
}