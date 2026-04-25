"use client";

import { useMemo, useState } from 'react';

// ================== TIPOS ==================
type Variante = { nombre: string; precio: number };
type ProductoType = {
  id: string;
  nombre: string;
  descripcion: string;
  frase: string;
  imagen: string;
  ingredientes: string;
  variantes: Variante[];
};

// ================== PRODUCTOS ==================
const productos: ProductoType[] = [
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
    ingredientes: 'Harina leudante, maicena, huevo, margarina, azúcar, dulce de leche, coco rallado.',
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
    ingredientes: 'Harina 0000, levadura, leche, huevo, azúcar, manteca, esencia de vainilla, dulce de leche, membrillo, crema pastelera, coco rallado.',
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
    ingredientes: 'Harina 0000, manteca, sal, levadura fresca, extracto malta, azúcar negra, harina 000.',
  },
  {
    id: 'pan-cremona',
    nombre: 'Pan cremona',
    variantes: [{ nombre: 'Unidad', precio: 3500 }],
    descripcion: 'Pan clásico de panadería, crocante por fuera y suave por dentro.',
    frase: 'Simple, rico y bien tradicional.',
    imagen: '/productos/pan-cremona.jpg',
    ingredientes: 'Harina 0000, extracto de malta, grasa vacuna, sal, levadura y margarina hojaldre.',
  },
  {
  id: 'bizcochuelo',
  nombre: 'Bizcochuelo casero',
  variantes: [
    { nombre: 'Molde mediano (24cm)', precio: 7500 },
  ],
  descripcion: 'Bizcochuelo esponjoso y casero, ideal para cumpleaños, celebraciones o para acompañar el mate.',
  frase: 'Suave, alto y perfecto para rellenar o disfrutar solo.',
  imagen: '/productos/bizcochuelo.jpg',
  ingredientes: 'Harina leudante, huevos, azúcar, leche, esencia de vainilla y aceite.',
},
{
  id: 'bizcochitos-jamon-queso',
  nombre: 'Bizcochitos de jamón y queso',
  variantes: [
    { nombre: '100g', precio: 1300 },
    { nombre: '200g', precio: 2600 },
    { nombre: '300g', precio: 3500 },
  ],
  descripcion: 'Bizcochitos suaves y salados, rellenos con jamón y queso, ideales para picadas o meriendas.',
  frase: 'Chiquitos, calentitos y llenos de sabor.',
  imagen: '/productos/bizcochitos.jpg',
  ingredientes: 'Harina 0000, grasa, sal, levadura, jamón y queso.',
}
  /*{
    id: 'pan-molde-relleno',
    nombre: 'Pan de molde con relleno',
    variantes: [{ nombre: 'Unidad', precio: 7000 }],
    descripcion: 'Ideal para reuniones, picadas o para tener algo rico y práctico en casa. Molde de 25cm.',
    frase: 'Sabor casero que llena la mesa.',
    imagen: '/productos/budin-pan-salado.jpg',
    ingredientes: 'Harina 0000, sal, levadura, extracto de malta, manteca, azúcar, leche, agua, jamón, queso.',
  },*/
  {
    id: 'sopa-paraguaya',
    nombre: 'Sopa paraguaya',
    variantes: [
      { nombre: 'Porción', precio: 4500 },
      { nombre: 'Bandeja', precio: 8000 },
    ],
    descripcion: 'Tarta salada tradicional, suave y con mucho sabor. Molde mediano.',
    frase: 'Perfecta para acompañar cualquier comida.',
    imagen: '/productos/sopa-paraguaya.jpeg',
    ingredientes: 'Harina de maíz, leche, cebollas, huevos, queso, choclo, orégano, sal, pimienta.',
  },
  {
    id: 'torta-queso',
    nombre: 'Torta de queso',
    variantes: [
      { nombre: 'Porción', precio: 4500 },
      { nombre: 'Entera', precio: 8000 },
    ],
    descripcion: 'Torta suave y cremosa, ideal para los amantes del queso. Molde mediano.',
    frase: 'Un postre irresistible.',
    imagen: '/productos/torta-queso.jpg',
    ingredientes: 'Harina leudante, polvo de hornear, leche, manteca, sal, huevos y queso.',
  },
];

// ================== COMPONENTE ==================
export default function PanaderiaCarlitaWeb() {
  const whatsappNumero = '543794210853';

  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fecha, setFecha] = useState('');
  const [nota, setNota] = useState('');
  const [seleccion, setSeleccion] = useState<{ [key: string]: number }>({});
  const [carrito, setCarrito] = useState<{ nombre: string; precio: number; cantidad: number }[]>([]);
  const [toast, setToast] = useState<string | null>(null);

  const hoy = new Date();
  // Fecha mínima: mañana (porque los pedidos son para el día siguiente)
  const manana = new Date(hoy);
  manana.setDate(hoy.getDate() + 1);
  const fechaMinima = manana.toISOString().split('T')[0];

  // ================== TOAST ==================
  const mostrarToast = (mensaje: string) => {
    setToast(mensaje);
    setTimeout(() => setToast(null), 2500);
  };

  // ================== CARRITO ==================
  const agregarAlCarrito = (item: { nombre: string; precio: number }) => {
    const existe = carrito.find(c => c.nombre === item.nombre);
    if (existe) {
      setCarrito(carrito.map(c =>
        c.nombre === item.nombre ? { ...c, cantidad: c.cantidad + 1 } : c
      ));
    } else {
      setCarrito([...carrito, { nombre: item.nombre, precio: item.precio, cantidad: 1 }]);
    }
    mostrarToast(`✅ ${item.nombre} agregado`);
  };

  const cambiarCantidad = (i: number, delta: number) => {
    const item = carrito[i];
    if (item.cantidad + delta <= 0) {
      setCarrito(carrito.filter((_, j) => j !== i));
    } else {
      setCarrito(carrito.map((c, j) =>
        j === i ? { ...c, cantidad: c.cantidad + delta } : c
      ));
    }
  };

  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  // ================== WHATSAPP ==================
  const Whatsapp = useMemo(() => {
    const lineas = [
      'Hola! Quiero hacer un pedido 😊',
      '',
      '🧾 Pedido:',
      ...carrito.map(item => `• ${item.nombre} x${item.cantidad} - $${(item.precio * item.cantidad).toLocaleString('es-AR')}`),
      '',
      `📅 Fecha de entrega: ${fecha || '-'}`,
      `📝 Nota: ${nota || '-'}`,
      `👤 Nombre: ${nombre || '-'}`,
      `📞 Teléfono: ${telefono || '-'}`,
      '',
      `💰 Total: $${total.toLocaleString('es-AR')}`,
    ];
    return encodeURIComponent(lineas.join('\n'));
  }, [carrito, fecha, nota, nombre, telefono, total]);

  const puedeEnviar = nombre.trim() !== '' && telefono.trim() !== '' && fecha !== '' && carrito.length > 0;

  // ================== RENDER ==================
  return (
    <div className="min-h-screen bg-amber-50 text-stone-800">

      {/* TOAST */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-stone-900 text-white px-6 py-3 rounded-2xl shadow-lg text-base font-medium">
          {toast}
        </div>
      )}

      {/* HEADER */}
      <header className="bg-gradient-to-r from-amber-200 to-orange-100 shadow-sm">
        <div className="mx-auto max-w-4xl px-6 py-10">
          <div className="flex items-center gap-4">
            <img
              src="/productos/logo.jpg"
              alt="Panadería Carlita"
              className="w-40 h-40 object-contain drop-shadow-lg rounded-full"
            />
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-amber-800">
                Panadería artesanal
              </p>
              <h1 className="text-4xl md:text-5xl font-bold">Panadería Carlita</h1>
            </div>
          </div>

          <p className="mt-5 text-lg text-stone-700 max-w-xl">
            Hacemos todo a pedido, con dedicación y productos frescos 💛
          </p>

          {/* AVISO IMPORTANTE — visible para el cliente */}
          <div className="mt-4 bg-white border border-amber-300 rounded-2xl px-5 py-4 max-w-xl text-stone-700">
            <p className="font-semibold text-amber-800 text-base">📋 ¿Cómo funciona?</p>
            <p className="mt-1 text-base leading-relaxed">
              Elegís tus productos hoy, y los preparamos especialmente para vos.
              La entrega es <strong>al día siguiente o la fecha que elijas</strong>.
              Coordinamos por WhatsApp.
            </p>
          </div>
          {/* ANUNCIO ENVÍOS GRATIS */}
<div className="mt-3 bg-green-50 border border-green-300 rounded-2xl px-5 py-4 max-w-xl flex items-start gap-3">
  <span className="text-2xl">🚚</span>
  <div>
    <p className="font-semibold text-green-800 text-base">¡Envíos gratis este sábado 26/04!</p>
    <p className="mt-1 text-green-700 text-sm leading-relaxed">
      Por un día especial, todos los pedidos con entrega el <strong>sábado 25 de abril</strong> tienen envío sin costo. ¡Aprovechalo!
    </p>
  </div>
</div>

          <a
            href="#pedido"
            className="mt-6 inline-block rounded-2xl bg-stone-900 px-7 py-3 text-white text-lg shadow hover:scale-[1.02] transition"
          >
            Hacer mi pedido →
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-12 space-y-16">

        {/* PRODUCTOS */}
        <section id="productos">
          <h2 className="text-3xl font-bold mb-2">Nuestros productos</h2>
          <p className="text-stone-500 mb-8 text-base">
            Elegí lo que querés y seleccioná la cantidad. Después completás el formulario abajo.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {productos.map((producto) => {
              const varianteIndex = seleccion[producto.id] ?? 0;
              const varianteSeleccionada = producto.variantes[varianteIndex];

              return (
                <div
                  key={producto.id}
                  className="overflow-hidden rounded-3xl bg-white shadow-sm border border-amber-100 flex flex-col"
                >
                  <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    className="h-52 w-full object-cover"
                  />

                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-xl font-bold">{producto.nombre}</h3>
                    <p className="mt-1 text-stone-600 text-base">{producto.descripcion}</p>

                    {/* PRECIOS */}
                    <div className="mt-4 space-y-1">
                      {producto.variantes.map((v) => (
                        <div key={v.nombre} className="flex justify-between bg-amber-50 px-3 py-2 rounded-xl text-base">
                          <span>{v.nombre}</span>
                          <span className="font-semibold">${v.precio.toLocaleString('es-AR')}</span>
                        </div>
                      ))}
                    </div>

                    {/* SELECT */}
                    {producto.variantes.length > 1 && (
                      <div className="mt-4">
                        <label className="text-sm text-stone-500 block mb-1">Elegí la cantidad:</label>
                        <select
                          className="w-full border border-stone-300 rounded-xl px-3 py-2 text-base bg-white"
                          value={varianteIndex}
                          onChange={(e) =>
                            setSeleccion({ ...seleccion, [producto.id]: Number(e.target.value) })
                          }
                        >
                          {producto.variantes.map((v, i) => (
                            <option key={i} value={i}>
                              {v.nombre} — ${v.precio.toLocaleString('es-AR')}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}

                    {/* BOTÓN */}
                    <button
                      onClick={() =>
                        agregarAlCarrito({
                          nombre: `${producto.nombre} (${varianteSeleccionada.nombre})`,
                          precio: varianteSeleccionada.precio,
                        })
                      }
                      className="mt-auto pt-4 w-full bg-amber-500 hover:bg-amber-600 text-white text-lg font-semibold py-3 rounded-2xl transition"
                    >
                      + Agregar al pedido
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* FORMULARIO DE PEDIDO */}
        <section id="pedido" className="bg-white p-8 rounded-3xl shadow-sm border border-amber-100">
          <h2 className="text-3xl font-bold">Tu pedido</h2>
          <p className="text-stone-500 mt-1 text-base">
            Revisá lo que elegiste, completá tus datos y envianos el pedido por WhatsApp.
          </p>

          {/* CARRITO */}
          <div className="mt-6 space-y-3">
            {carrito.length === 0 ? (
              <div className="text-center py-8 text-stone-400 text-lg border-2 border-dashed border-stone-200 rounded-2xl">
                Todavía no agregaste productos.<br />
                <span className="text-base">Subí y elegí lo que querés 👆</span>
              </div>
            ) : (
              <>
                {carrito.map((item, i) => (
                  <div key={i} className="flex items-center justify-between bg-amber-50 px-4 py-3 rounded-2xl">
                    <div className="flex-1">
                      <p className="font-semibold text-base">{item.nombre}</p>
                      <p className="text-stone-500 text-sm">${item.precio.toLocaleString('es-AR')} c/u</p>
                    </div>

                    {/* Controles */}
                    <div className="flex items-center gap-3 mx-4">
                      <button
                        onClick={() => cambiarCantidad(i, -1)}
                        className="w-9 h-9 rounded-full bg-stone-200 hover:bg-red-100 text-stone-700 text-xl font-bold flex items-center justify-center"
                      >
                        −
                      </button>
                      <span className="text-lg font-bold w-5 text-center">{item.cantidad}</span>
                      <button
                        onClick={() => cambiarCantidad(i, +1)}
                        className="w-9 h-9 rounded-full bg-stone-200 hover:bg-amber-200 text-stone-700 text-xl font-bold flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>

                    <p className="text-base font-bold w-24 text-right">
                      ${(item.precio * item.cantidad).toLocaleString('es-AR')}
                    </p>
                  </div>
                ))}

                <div className="flex justify-between border-t-2 border-amber-200 pt-4 mt-2 text-xl font-bold">
                  <span>Total</span>
                  <span>${total.toLocaleString('es-AR')}</span>
                </div>
              </>
            )}
          </div>

          {/* DATOS PERSONALES */}
          <div className="mt-8 space-y-4">
            <h3 className="text-xl font-bold">Tus datos</h3>

            <div>
              <label className="block text-base font-medium mb-1">Tu nombre *</label>
              <input
                type="text"
                placeholder="Ej: María García"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="w-full border border-stone-300 rounded-2xl px-4 py-3 text-lg focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-base font-medium mb-1">Tu teléfono *</label>
              <input
                type="tel"
                placeholder="Ej: 3794 123456"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                className="w-full border border-stone-300 rounded-2xl px-4 py-3 text-lg focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-base font-medium mb-1">
                ¿Para qué fecha querés el pedido? *
              </label>
              <p className="text-stone-500 text-sm mb-2">
                Los pedidos se preparan a partir del día siguiente.
              </p>
              <input
                type="date"
                value={fecha}
                min={fechaMinima}
                onChange={(e) => setFecha(e.target.value)}
                className="w-full border border-stone-300 rounded-2xl px-4 py-3 text-lg focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-base font-medium mb-1">
                Alguna aclaración o nota (opcional)
              </label>
              <textarea
                placeholder= " Mandame tu direccion o pasamela al whatsapp"
                value={nota}
                onChange={(e) => setNota(e.target.value)}
                rows={3}
                className="w-full border border-stone-300 rounded-2xl px-4 py-3 text-lg focus:outline-none focus:border-amber-400 resize-none"
              />
            </div>
          </div>

          {/* BOTÓN ENVIAR */}
          <div className="mt-6">
            {!puedeEnviar && (
              <p className="text-stone-400 text-sm mb-3 text-center">
                Completá nombre, teléfono, fecha y al menos un producto para enviar.
              </p>
            )}
            <a
              href={puedeEnviar ? `https://wa.me/${whatsappNumero}?text=${Whatsapp}` : undefined}
              onClick={(e) => { if (!puedeEnviar) e.preventDefault(); }}
              className={`block text-center text-xl font-bold py-4 rounded-2xl transition ${
                puedeEnviar
                  ? 'bg-green-500 hover:bg-green-600 text-white shadow-lg'
                  : 'bg-stone-200 text-stone-400 cursor-not-allowed'
              }`}
            >
              📲 Enviar pedido por WhatsApp
            </a>
          </div>
        </section>

        {/* PIE */}
        <footer className="text-center text-stone-400 text-sm pb-6">
          Panadería Carlita · Hecho con 💛 · Corrientes, Argentina
        </footer>

      </main>
    </div>
  );
}

