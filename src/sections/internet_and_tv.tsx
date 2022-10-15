import type {Component} from 'solid-js';
import {createSignal} from "solid-js";

interface CounterDateTime {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
}

const InternetAndTV: Component = () => {
    const getCounter = (): CounterDateTime => {
        const lastDate = new Date('2022-11-01 00:00:00');
        const now = new Date();
        const diff = lastDate.getTime() - now.getTime();
        const days = "--value:" + Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = "--value:" + Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = "--value:" + Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = "--value:" + Math.floor((diff % (1000 * 60)) / 1000);
        return {days, hours, minutes, seconds};
    }
    const [counter, setCounter] = createSignal<CounterDateTime>(getCounter());
    setInterval(() => setCounter(getCounter()), 1000);

    return (
        <section class="hero min-h-screen bg-base-200 flex-col flex" id="internetMasTV">
            <h2 class="text-4xl font-bold text-center mt-16">Internet más Television digital</h2>
            <div class="bg-base-200 my-16">

                <div class="grid grid-flow-col gap-5 text-center auto-cols-max">
                    <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span class="countdown font-mono text-5xl">
      <span style={counter().days} id="countDownDay"></span>
    </span>días
                    </div>
                    <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span class="countdown font-mono text-5xl">
      <span style={counter().hours} id="countDownHours"></span>
    </span>
                        horas
                    </div>
                    <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span class="countdown font-mono text-5xl">
      <span style={counter().minutes} id="countDownMinutes"></span>
    </span>
                        minutos
                    </div>
                    <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span class="countdown font-mono text-5xl">
      <span style={counter().seconds} id="countDownSeconds"></span>
    </span>
                        segundos
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InternetAndTV;
