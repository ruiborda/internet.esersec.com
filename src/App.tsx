import type {Component} from 'solid-js';
import Section1 from "./sections/hero";
import Section2 from "./sections/contact";
import PlanSection from "./sections/planes";
import Internet_and_tv from "./sections/internet_and_tv";
import ContactSection from "./sections/contact";
import HeroSection from "./sections/hero";

const App: Component = () => {
    return (
        <>
            <HeroSection/>
            <div class="divider"></div>
            <PlanSection/>
            <div class="divider"></div>
            <ContactSection/>
            <div class={"divider"}></div>
            <Internet_and_tv/>
        </>
    );
};

export default App;
