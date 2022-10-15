import type { Component } from 'solid-js';

const ContactSection: Component = () => {
    const submitForm = (e: SubmitEvent) => {
        e.preventDefault();
        const url = new URL('https://api.whatsapp.com/send');
        const data = new FormData(e.target as HTMLFormElement);
        const mensaje = `Formulario para contratar plan\n\nNombres:${data.get('name')}\n\nTeléfono: ${data.get('telephone')}\nCorreo: ${data.get('email')}\nMensaje: ${data.get('message')}`;
        url.searchParams.append('phone', '51939412296');
        url.searchParams.append('text', mensaje);
        window.open(url);

    }
    return (
        <section class="hero min-h-screen bg-base-200" id="contacto">
            <div class="hero-content flex-col lg:flex-row-reverse w-3/4">
                <div class="text-center lg:text-left">
                    <h1 class="text-5xl font-bold">Contratar Plan</h1>
                    <p class="py-6"> nosotros nos comunicaremos contigo.</p>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form class="card-body" onSubmit={submitForm}>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Teléfono de Contacto</span>
                            </label>
                            <input type="number" name="telephone" placeholder="Celular" class="input input-bordered"/>
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Nombres y Apellidos</span>
                            </label>
                            <input type="text" name="name" placeholder="Nombres y Apellidos" class="input input-bordered"/>
                        </div>
                        <div class="form-control">
                            <label class="label">
                        <span class="label-text">Correo Electrónico <span
                            class="font-extralight">(opcional)</span></span>
                            </label>
                            <input type="email" name="email" placeholder="Correo Electrónico" class="input input-bordered"/>
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Mensaje <span class="font-extralight">(opcional)</span></span>
                            </label>
                            <textarea name="message" placeholder="Mensaje" class="input input-bordered"
                                      rows="5"></textarea>
                        </div>
                        <div class="form-control mt-6">
                            <button type="submit" class="btn btn-primary">Contratar Plan</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
