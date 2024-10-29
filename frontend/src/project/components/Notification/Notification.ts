import html from "@/project/utils/define/html";
import { useTSElements } from "@/project/utils/hooks/useTSElements";
import { toast } from "./styles/tailwind";
import { useTSEventSelectAll } from "@/project/utils/hooks/useTSAllElements";

export function Notification(DOM: HTMLElement) {

    const { notification, closed } = toast

    const ui = useTSElements(
        DOM,
        html`
            <div class='notification-toast ${notification} animate-slideInOut' data-toast="">
            
                <div class="toast-banner w-[70px] h-[70px] border border-cultured rounded-radius-sm">
                    <img src="/products/jewellery-1.jpg" class='w-full h-full object-contain object-center' alt="Rose gold earrings"
                        width='80' height="80">
                </div>
            
                <div class="toast-detail w-[calc(100% - 85px) pr-3]">
                    <p class="toast-message text-fs-10 text-sonic-silver mb-2">
                        Someone in new just bought
                    </p>
            
                    <p class="toast-title text-fs-7 font-weight-500 text-onyx">
                        Rose Gold Earrings
                    </p>
            
                    <p class="toast-meta text-fs-10 text-sonic-silver">
                        <time datetime="PT1M">2 mins</time> ago
                    </p>
                </div>
            
                <button class="toast-close-btn absolute right-2 top-2 text-gray-600" data-toast-close="">
                    <i class="bx bx-x text-lg cursor-pointer"></i>
                </button>
            
            </div>
        `)

    useTSEventSelectAll(['[data-toast-close]'], 'click', () => {
        DOM.querySelector('[data-toast]')?.classList.add(closed)
    })


    return ui
}