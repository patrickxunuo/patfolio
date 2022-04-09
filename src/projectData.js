import Calculator from "./img/calculator.png";
import Website from "./img/website.png";
import Accumulator from "./img/accumulator.png";
import Cityview from "./img/cityviewer.png";

export const items = [
    {
        id: "a",
        title: 'Calculator',
        src: Calculator,
        url: 'https://codepen.io/patrickxunuo/full/eYvQEZB',
        description: "This calculator is a widget that can do simple calculations. The design focuses on minimalism. The purpose of this widget is to demonstrate the simplicity of using flex layout.",
        source: '',
    },
    {
        id: "b",
        title: 'Old Portfolio',
        src: Website,
        url: 'https://patrickxunuo.github.io/',
        description: "This is my old personal website. It is written in React and it includes some interesting animations using Framer-motion. Feel free to click on somewhere on the website.",
        source: 'https://github.com/patrickxunuo/patrickxunuo.github.io',
    },
    {
        id: "c",
        title: 'Time Accumulator',
        src: Accumulator,
        url: 'https://timecounter-3e1ea.web.app/',
        description: "This is a time accumulator that can manage the total time that you contribute separately to a single task. Simply create a task and start using the app. It is originally designed to keep track of one of my part-time job but sadly I have never really started that job.",
        source: 'https://github.com/patrickxunuo/accumulator',
    },
    {
        id: "d",
        title: 'City Viewer',
        src: Cityview,
        url: 'https://codepen.io/patrickxunuo/full/abWNvBG',
        description: "This is a city viewer. Type in city names in the input box and go. You can see images of the designated city is shown on the background. Also, there are more images of that city are loaded at the bottom.",
        source: '',
    }
];

export const openSpring = { type: "spring", stiffness: 200, damping: 30 };
