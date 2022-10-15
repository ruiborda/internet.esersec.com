import type { Component } from 'solid-js';
import uripa from '../assets/images/uripa.webp';
const HeroSection: Component = () => {
    return (
        <>
            <div class="navbar bg-base-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabIndex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M4 6h16M4 12h8m-8 6h16"/>
                            </svg>
                        </label>
                        <ul tabIndex="0"
                            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a href="#planes">Planes</a></li>
                            <li><a href="#internetMasTV">Internet más Televisión</a></li>
                            <li><a href="#contacto">Contacto</a></li>
                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-xl" href="/">ESERSEC</a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        <li><a href="#planes">Planes</a></li>
                        <li><a href="#internetMasTV">Internet más Televisión</a></li>
                        <li><a href="#contacto">Contacto</a></li>
                    </ul>
                </div>
                <div class="navbar-end">
                    <a class="btn btn-ghost"
                       href="https://api.whatsapp.com/send?phone=51939412296&text=Te%20contacto%20desde%20internet.esersec.com">
                        <svg xmlns="http://www.w3.org/2000/svg" class="text-green-600 w-10 h-10" viewBox="0 0 448 512"
                             fill="currentColor">
                            <path
                                d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                        </svg>
                    </a>
                </div>
            </div>
            <div class="hero min-h-screen" style={"background-image: url("+uripa+");"}>
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold">ESERSEC S.A.C.</h1>
                        <p class="mb-5">Contamos con mas de 5 años de experiencia trabajando en tecnología y ofrecemos
                            una gran variedad
                            de servicios en el rubro. </p>
                        <a class="btn btn-primary" href="#planes">Ver Planes</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;
