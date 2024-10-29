import html from "@/project/utils/define/html";
import { useTSElements } from "@/project/utils/hooks/useTSElements";
import { styles } from "./styles/tailwind";
import { useTSSelector } from "@/project/utils/hooks/useTSSelector";
import { useTSEventSelectAll } from "@/project/utils/hooks/useTSAllElements";

export function Modal(DOM: HTMLElement) {
    const { main, visibility, closed, button, content, newsletter } = styles.modal;

    // Render modal UI
    const ui = useTSElements(
        DOM,
        html`
            <div class="modal ${main} ${visibility}" data-modal="" id="modal">
                <div class="modal-close-overlay" data-modal-overlay="" id="overlay"></div>
                <div class="modal-content ${content}">
                    <button class="modal-close-btn ${button} bg-salmon-pink hover:opacity-90" data-modal-close="" id="close-btn">
                        <i class="bx bx-x text-lg"></i>
                    </button>
                    <div class="newsletter-img ${closed}">
                        <img src="/newsletter.png" alt="newsletter image" width="400" height="400">
                    </div>
                    <div class='newsletter py-[50px] px-[30px] text-center'>
                        <form action="#">
                            <div class="newsletter-header mb-[20px]">
                                <h2 class="news-letter-title text-onyx text-fs-2 mb-2">Subscribe NewsLetter.</h2>
                                <p class="newsletter-desc text-sonic-silver text-fs-7 leading-[1.6]">
                                    Subscribe to <b>Anon</b> for updates on new products and discounts.
                                </p>
                            </div>
                            <input type="email" name="email" id="email" placeholder="Enter your email"
                                class="email-field border border-cultured rounded-radius-sm mb-[16px] py-[8px] px-[16px]" />
                            <button
                                class='btn-newsletter uppercase ${newsletter.button.style} hover:bg-salmon-pink'>Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        `
    );


    const modalClose = () => {
        console.log('Modal closed');
        useTSSelector<HTMLElement>('[data-modal]').classList.add(`${closed}`)
        useTSSelector<HTMLElement>('[data-modal-overlay]').classList.add(`${closed}`)
        useTSSelector<HTMLElement>('[data-overlay]').classList.add(`${closed}`)
    };

    // Add event listeners once UI is rendered
    useTSEventSelectAll(
        ['[data-modal-overlay]', '[data-modal-close]'],
        'click',
        (e) => {
            e.preventDefault();
            modalClose();
        }
    );

    return ui


}
