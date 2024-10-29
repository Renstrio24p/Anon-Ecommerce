// Importing dependencies
import { createIonIcons } from './components/Icons/Ion-icons';
import { Router } from './routes/Router';
import { useTSComponent } from './utils/hooks/useTSComponent';
import { useTSElements } from './utils/hooks/useTSElements';
import { useTSMetaData } from './utils/hooks/useTSMetaData';
import 'boxicons/css/boxicons.min.css';

// Main Start function
export default function Start(DOM: HTMLElement) {
    // Set up metadata
    useTSMetaData({
        name: 'Anon E-commerce',
        description: 'Anon E-commerce is a modern and secure e-commerce platform.',
        author: 'Waren Gador'
    });

    const title = 'Anon E-commerce';

    // Render UI elements
    const ui = useTSElements(
        DOM,
        /*html*/ `
        <div>
            <main class='w-full' id='router'></main>
        </div>
        `
    );

    // Initialize router component
    useTSComponent('router', DOM, Router, title);

    createIonIcons();

    return ui;
}
