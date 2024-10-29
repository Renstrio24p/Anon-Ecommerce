import { socialLinkTags } from "@/project/constants/LinkTags";
import html from "@/project/utils/define/html";
import { useTSElements } from "@/project/utils/hooks/useTSElements";

export function Navbar(DOM: HTMLElement) {

    const socials = socialLinkTags.map(({ name, icon, url }, i) => (
        html`
                <li name=${name} key=${i}>
                    <a href="${url}" class="social-link">
                        <i class="bx ${icon}"></i>
                    </a>
                </li>
            `
    ))

    const ui = useTSElements(DOM, html`

        <header>
            <div class="header-top">
                <div class="container">
        
                    <!-- social links -->
                    <ul class="header-social-container">
                        ${socials.join('')}
                    </ul>
        
                    <!-- header alert news -->
        
                    <p>
                        <b>Free Shipping</b>
                        This Week Order Over - $55
                    </p>
        
                </div>
            </div>
        </header>

    `)

    return ui

}