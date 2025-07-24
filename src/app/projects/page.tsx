// src/app/projects/page.tsx
'use client'

const proyectos = [
  {
    titulo: 'La Hoguera',
    descripcion:
      'Aplicación móvil para gestionar eventos y comunidades. Desarrollada con React Native y Firebase.',
    imagen:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDBRKMMwHXpehddPTi2jQxV727BA-pJ01FgPjelSXltPixCKESRNgnaCWKyMgMhyZNrkettiDQsD6QAdnhJcQSMWYzy3Wry15-HELTlLgs4fu3cw84IlggM82WH7KPVW-RqBsTxzPG9vzJRmDUUCUz1AKohMxz8OLCnfffWGjQXnpO2sHDrNTkZXFm7apUrXyWVFKj4ysLK957mMT433vZz5OfwlF79XJ5lpW4bKKBRICEJy6Ky1ktRMFua08wRsgG9PVqin_Tpskb9',
  },
  {
    titulo: 'Turnos Farmacias',
    descripcion:
      'Aplicación móvil para consultar turnos de farmacias. Creada con React Native y una API REST.',
    imagen:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuArZw05vqEkLEn5J5mMY_gFWtnTrqSzz2F54lJiuqP78ZU5DiEenSnk4tyTVG93_dGB60tZl5qSs0avPko6uJyYotyu6jkjxVXGQV-cBAghtavv6MeRTikz3R_iOWoGNu0xP4-cD0RpgccC8jai-PbUkheQYFpjZN1pS38va1muo4Fqwq3KCAANtqEbxhADharu810xlrbk484pFLSt0FwfmJoylvRmjSxG1OmBl0crB26uDTMMpKN3L-a33NA1W5RTeA2V9RT3H2D8',
  },
  {
    titulo: 'Portfolio',
    descripcion:
      'Sitio web personal para mostrar proyectos y habilidades. Construido con Next.js y Tailwind CSS.',
    imagen:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC90gnVAZZpQj-7tei3efX4Uy3OXehYxIKkELbkL_DgUNJ4kqlNeDVHBvAJ9PLsyeeIoAK1jBQAGaur4ah7nAp4oneUcqZNtjy9JuLei6Ap6DszvRCg2m-OWSuzXJs92jlUrtkLu2Sh0omsH3nsyYfR4EF0WRnB_vjObi3SN9rvMHhAnxc9TVNzMdZ7xVNsPuIAgJNhDpiBZ_JKFLm8uzMOxCIL4Ah9DY6RqzpeqCtz7iOpV_yZZ974ppxG-dS8pgXYa6tf-cCMbzSt',
  },
]

export default function Projects() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[var(--background-color)] text-[var(--text-primary)]">
      <div className="w-full max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-[var(--text-primary)]">
          Proyectos Destacados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectos.map((proyecto) => (
            <div
              key={proyecto.titulo}
              className="bg-[var(--card-background-color)] rounded-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-2xl hover:shadow-[var(--primary-color)]/20"
            >
              <div className="relative">
                <img
                  alt={`Captura de pantalla de ${proyecto.titulo}`}
                  className="w-full h-56 object-cover"
                  src={proyecto.imagen}
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-[var(--text-primary)]">
                  {proyecto.titulo}
                </h3>
                <p className="text-[var(--text-secondary)] mb-4 text-base">
                  {proyecto.descripcion}
                </p>
                <a
                  className="inline-flex items-center text-[var(--primary-color)] font-semibold hover:text-white transition-colors duration-300"
                  href="#"
                >
                  Ver Proyecto
                  <span className="material-icons-outlined ml-1">arrow_forward</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
