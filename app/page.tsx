"use client";

import { useMemo, useState } from 'react';

export default function PanaderiaCarlitaWeb() {
  const whatsappNumero = '543794210853';

  const productos = [
    {
      id: 'alfajores-maicena',
      nombre: 'Alfajores de maicena',
      variantes: [
        { nombre: 'Media docena', precio: 3500 },
        { nombre: 'Docena', precio: 6000 },
      ],
      descripcion: 'Suaves, rellenos y bien caseros, ideales para acompañar el mate o regalar.',
      frase: 'Un clásico dulce que siempre queda bien.',
      imagen: '/productos/alfajores.jpg',
      ingredientes: 'Pendiente de agregar ingredientes.',
    },
    {
      id: 'facturas-surtidas',
      nombre: 'Facturas surtidas',
      variantes: [
        { nombre: 'Media docena', precio: 3000 },
        { nombre: 'Docena', precio: 5000 },
      ],
      descripcion: 'Variedad de facturas artesanales para desayunos, meriendas y reuniones.',
      frase: 'Perfectas para compartir en familia.',
      imagen: '/productos/facturas.jpeg',
      ingredientes: 'Pendiente de agregar ingredientes.',
    },
    {
      id: 'cara-sucia',
      nombre: 'Cara sucia',
      variantes: [
        { nombre: 'Media docena', precio: 3000 },
        { nombre: 'Docena', precio: 5000 },
      ],
      descripcion: 'Masa suave y dulce, con ese sabor tradicional de panadería de barrio.',
      frase: 'La compañera ideal para unos buenos mates.',
      imagen: '/productos/caras-sucias.jpg',
      ingredientes: 'Pendiente de agregar ingredientes.',
    },
    {
  id: 'rosca-dulce',
  nombre: 'Rosca dulce',
  variantes: [
    { nombre: 'Unidad', precio: 5000 }
  ],
  descripcion: 'Rosca esponjosa y dulce, ideal para compartir en familia.',
  frase: 'Un clásico de fechas especiales.',
  imagen: '/productos/rozca.jpeg',
  ingredientes: 'Pendiente de agregar ingredientes.',
},
    {
      id: 'pan-casero-trenzado',
      nombre: 'Pan casero trenzado',
      variantes: [
        { nombre: 'Clásico', precio: 1500 },
        { nombre: 'Con relleno de queso o salame', precio: 2000 },
      ],
      descripcion: 'Pan artesanal trenzado, tierno y con sabor bien casero.',
      frase: 'Recién horneado, rico y rendidor.',
      imagen: '/productos/pan-trenzado.jpg',
      ingredientes: 'Pendiente de agregar ingredientes.',
    },
    {
  id: 'pan-lenteja',
  nombre: 'Pan de lenteja',
  variantes: [
    { nombre: 'Unidad', precio: 1500 }
  ],
  descripcion: 'Pan saludable hecho a base de lentejas, sin harina, ideal para una alimentación más liviana.',
  frase: 'Rico, nutritivo y apto para todos.',
  imagen: '/productos/pan-lenteja.jpeg',
  ingredientes: 'Lentejas, huevos, condimentos naturales.',
},
    {
      id: 'budin-pan-salado',
      nombre: 'Budín de pan salado',
      variantes: [{ nombre: 'Unidad', precio: 7000 }],
      descripcion: 'Ideal para reuniones, picadas o para tener algo rico y práctico en casa.',
      frase: 'Sabor casero que llena la mesa.',
      imagen: '/productos/budin-pan-salado.jpg',
      ingredientes: 'Pendiente de agregar ingredientes.',
    },
    {
  id: 'sopa-paraguaya',
  nombre: 'Sopa paraguaya',
  variantes: [
    { nombre: 'Porción', precio: 2500 },
    { nombre: 'Bandeja', precio: 6000 }
  ],
  descripcion: 'Tarta salada tradicional, suave y con mucho sabor.',
  frase: 'Perfecta para acompañar cualquier comida.',
  imagen: '/productos/sopa-paraguaya.jpeg',
  ingredientes: 'Pendiente de agregar ingredientes.',
},
{
  id: 'torta-queso',
  nombre: 'Torta de queso',
  variantes: [
    { nombre: 'Porción', precio: 3000 },
    { nombre: 'Entera', precio: 8000 }
  ],
  descripcion: 'Torta suave y cremosa, ideal para los amantes del queso.',
  frase: 'Un postre irresistible.',
  imagen: '/productos/torta-queso.jpg',
  ingredientes: 'Pendiente de agregar ingredientes.',
},
  ];

  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [productoId, setProductoId] = useState(productos[0].id);
  const [varianteNombre, setVarianteNombre] = useState(productos[0].variantes[0].nombre);
  const [cantidad, setCantidad] = useState(1);
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [nota, setNota] = useState('');

  const productoSeleccionado = useMemo(
    () => productos.find((p) => p.id === productoId) || productos[0],
    [productoId]
  );

  const varianteSeleccionada = useMemo(
    () => productoSeleccionado.variantes.find((v) => v.nombre === varianteNombre) || productoSeleccionado.variantes[0],
    [productoSeleccionado, varianteNombre]
  );

  const total = (varianteSeleccionada?.precio || 0) * Number(cantidad || 0);

  const mensajeWhatsapp = useMemo(() => {
    const lineas = [
      'Hola, quiero hacer un pedido en Panadería Carlita.',
      '',
      `Nombre: ${nombre || '-'} `,
      `Teléfono: ${telefono || '-'} `,
      `Producto: ${productoSeleccionado.nombre}`,
      `Variante: ${varianteSeleccionada.nombre}`,
      `Cantidad: ${cantidad}`,
      `Fecha deseada: ${fecha || '-'} `,
      `Hora aproximada: ${hora || '-'} `,
      
      `Nota adicional: ${nota || '-'} `,
      '',
      `Total estimado: $${total.toLocaleString('es-AR')}`,
    ];

    return encodeURIComponent(lineas.join('\n'));
  }, [nombre, telefono, productoSeleccionado, varianteSeleccionada, cantidad, fecha, hora, nota, total]);

  return (
    <div className="min-h-screen bg-amber-50 text-stone-800">
      <header className="bg-gradient-to-r from-amber-200 to-orange-100 shadow-sm">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-800">Panadería artesanal</p>
          <h1 className="mt-3 text-4xl font-bold md:text-6xl">Panadería Carlita</h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg text-stone-700">
            Elegí tus productos, seleccioná fecha y hora aproximada, agregá una nota y enviá tu pedido directo por WhatsApp.
          </p>
          <div className="mt-6 flex justify-start gap-3 text-sm text-stone-700 ml-4">
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">9:30 a 12:30</span>
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">18:00 a 22:00</span>
          </div>
          <a
            href="#pedido"
            className="mt-6 inline-block rounded-2xl bg-stone-900 px-6 py-3 text-white shadow hover:scale-[1.02] transition"
          >
            Hacer pedido
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-12">
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold">Nuestros productos</h2>
            <p className="mt-2 text-stone-600">Cada producto puede llevar imagen, frase corta e ingredientes.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {productos.map((producto) => (
              <div key={producto.id} className="overflow-hidden rounded-3xl bg-white shadow-sm border border-amber-100">
                <img src={producto.imagen} alt={producto.nombre} className="h-56 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{producto.nombre}</h3>
                  <p className="mt-2 text-stone-600">{producto.descripcion}</p>
                  <p className="mt-3 text-sm font-medium italic text-amber-800">“{producto.frase}”</p>

                  <div className="mt-4 space-y-2 text-sm text-stone-700">
                    {producto.variantes.map((variante) => (
                      <div key={variante.nombre} className="flex items-center justify-between rounded-xl bg-amber-50 px-3 py-2">
                        <span>{variante.nombre}</span>
                        <span className="font-semibold">${variante.precio.toLocaleString('es-AR')}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-2xl bg-stone-50 p-4 text-sm text-stone-600">
                    <p className="font-semibold text-stone-800">Ingredientes</p>
                    <p className="mt-1">{producto.ingredientes}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="pedido" className="mt-16 rounded-3xl bg-white p-8 shadow-sm border border-amber-100">
          <h2 className="text-3xl font-bold">Formulario de pedido</h2>
          <p className="mt-2 text-stone-600">
            Completás los datos y el pedido sale armado directo a WhatsApp.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium">Nombre</label>
              <input value={nombre} onChange={(e) => setNombre(e.target.value)} className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none" placeholder="Ej: María" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Teléfono</label>
              <input value={telefono} onChange={(e) => setTelefono(e.target.value)} className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none" placeholder="Ej: 379..." />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Producto</label>
              <select
                value={productoId}
                onChange={(e) => {
                  const nuevo = productos.find((p) => p.id === e.target.value);
                  setProductoId(e.target.value);
                  setVarianteNombre(nuevo?.variantes[0]?.nombre || '');
                }}
                className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none"
              >
                {productos.map((producto) => (
                  <option key={producto.id} value={producto.id}>
                    {producto.nombre}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Presentación</label>
              <select
                value={varianteNombre}
                onChange={(e) => setVarianteNombre(e.target.value)}
                className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none"
              >
                {productoSeleccionado.variantes.map((variante) => (
                  <option key={variante.nombre} value={variante.nombre}>
                    {variante.nombre} - ${variante.precio.toLocaleString('es-AR')}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Cantidad</label>
              <input
                type="number"
                min="1"
                value={cantidad}
                onChange={(e) => setCantidad(Number(e.target.value))}
                className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Fecha deseada</label>
              <input value={fecha} onChange={(e) => setFecha(e.target.value)} type="date" className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Hora aproximada</label>
              <input value={hora} onChange={(e) => setHora(e.target.value)} type="time" className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none" />
            </div>
          </div>

          <div className="mt-6">
            <label className="mb-2 block text-sm font-medium">Nota adicional</label>
            <textarea
              value={nota}
              onChange={(e) => setNota(e.target.value)}
              className="min-h-[120px] w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none"
              placeholder="Ej: Tocar timbre, retirar después de las 18:30, con menos coco, etc."
            />
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-amber-50 p-5 text-stone-700">
              <p className="font-semibold">WhatsApp de pedidos</p>
              <p className="mt-2">3794210853</p>
            </div>
            <div className="rounded-2xl bg-stone-900 p-5 text-white">
              <p className="font-semibold">Total estimado</p>
              <p className="mt-2 text-2xl font-bold">${total.toLocaleString('es-AR')}</p>
            </div>
          </div>

          <a
            href={`https://wa.me/${whatsappNumero}?text=${mensajeWhatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block rounded-2xl bg-green-600 px-6 py-3 font-medium text-white shadow hover:scale-[1.02] transition"
          >
            Enviar pedido por WhatsApp
          </a>
        </section>
      </main>
    </div>
  );
}
