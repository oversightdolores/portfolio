// src/app/about/page.tsx
export default function About() {
  return (
    <main className="flex-1 px-4 sm:px-10 md:px-20 lg:px-40 py-16 pt-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        <div className="lg:col-span-3">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Sobre Mí
          </h1>
          <div className="space-y-6 text-[var(--secondary-text-color)] text-lg leading-relaxed">
            <p>
              Soy Nicolás, un desarrollador full stack con una pasión por crear
              aplicaciones móviles innovadoras y de alto rendimiento. Mi
              experiencia abarca el desarrollo de audio rooms interactivas, la
              integración de herramientas de inteligencia artificial para
              mejorar la experiencia del usuario, y la implementación de
              sistemas de moderación automática para garantizar entornos seguros
              y positivos.
            </p>
            <p>
              Me considero una persona proactiva y curiosa, con un ojo agudo
              para el detalle y un amor especial por el diseño de interfaces de
              usuario (UI) que sean tanto atractivas como funcionales. Siempre
              estoy buscando aprender y explorar nuevas tecnologías para
              mejorar mis habilidades y ofrecer soluciones de vanguardia.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
  {["Proactivo", "UI Lover", "Detallista", "Curioso"].map((tag) => (
    <span
      key={tag}
      className="bg-neutral-100 text-black text-xs font-medium px-3 py-1.5 rounded-full shadow"
    >
      {tag}
    </span>
  ))}
</div>

        </div>
        <div className="lg:col-span-2 w-full lg:sticky lg:top-24">
          <div className="aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 ease-in-out">
            <img
              alt="Foto profesional de Nicolás"
              className="w-full h-full object-cover object-center"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBI2ik5dN6S4dFMUdCD4g5bapGJIYxa_Gs-nb0PjabwBsIlg3XwlVdWGv7SIjLG1Izhac9FCTehCd6Bk5tVXvM1wjQiS3dMZFZDEVx_AcwU0ar-XHIbKXo3XqV3V5QxDd9iujfHxnQoNqdeu-tckEQFjHEaS_0dZtcarDAuCVmyXFVPFZxXTI900SjqHMhtmHAAvka8GOtJrJ3LtknPQWN3Xgn6G_X_zl-8DcUtM5n1BUVzs2Q4zcKvBSsXIrJ0a2I76LDrp319sOjV"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
