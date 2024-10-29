import html from "@/project/utils/define/html";
import { useTSElements } from "../../utils/hooks/useTSElements";
import { Modal } from "@/project/components/Modal/Modal";
import { styles } from "@/project/components/Modal/styles/tailwind";
import { Notification } from "@/project/components/Notification/Notification";
import { Navbar } from "@/project/components/Navbar/Navbar";

export default function Home(DOM: HTMLElement, title: string) {

    const { overlay, active } = styles.container

    document.title = `${title} | Home`;

    const ui = useTSElements(DOM, html`
    <div>
        ${Modal(DOM)}
        ${Notification(DOM)}
        <div class="overlay ${overlay} ${active}" data-overlay></div>
        ${Navbar(DOM)}
    </div>
    `);

    return ui;
}
