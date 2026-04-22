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
      ingredientes: 'Harina leudante, maicena, huevo, margarina, azucar, dulce de leche, coco rayado.',
     
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
      ingredientes: 'Harina 0000, levadura, leche, huevo, azucar, manteca, esencia de vainilla, dulce de leche, membrillo, crema pastelera,coco rallado.',
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
      ingredientes: 'Harina 0000, manteca, sal, levadura fresca, extracto malta, azucar negra, harina 000.',
    },
   /* {
  id: 'rosca-dulce',
  nombre: 'Rosca dulce',
  variantes: [
    { nombre: 'Unidad', precio: 9500 }
  ],
  descripcion: 'Rosca esponjosa y dulce, ideal para compartir en familia.',
  frase: 'Un clásico de fechas especiales.',
  imagen: '/productos/rozca.jpeg',
  ingredientes: 'Harina 0000, manteca, huevos, leche, esencia de vainilla, miel, agua de azahar, ralladura de naranja, sal, azucar, maicena, cereza, dulce de leche.',
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
    { nombre: 'Unidad', precio: 4500 }
  ],
  descripcion: 'Pan saludable hecho a base de lentejas, sin harina, ideal para una alimentación más liviana. Molde 25cm',
  frase: 'Rico, nutritivo y apto para todos.',
  imagen: '/productos/pan-lenteja.jpeg',
  ingredientes: 'Lentejas, huevos, condimentos naturales.',
},*/{
  id: 'pan-cremona',
  nombre: 'Pan cremona',
  variantes: [
    { nombre: 'Unidad', precio: 3500 },
  ],
  descripcion: 'Pan clásico de panadería, crocante por fuera y suave por dentro, ideal para acompañar el mate.',
  frase: 'Simple, rico y bien tradicional.',
  imagen: '/productos/pan-cremona.jpg',
  ingredientes: 'Harina 0000, estracto de malta, grasa vacuna, sal, levadura y margarina hojaldre.',
},
    {
      id: 'Pan de molde con relleno',
      nombre: 'Pan de molde con relleno',
      variantes: [{ nombre: 'Unidad', precio: 7000 }],
      descripcion: 'Ideal para reuniones, picadas o para tener algo rico y práctico en casa. Molde de 25cm',
      frase: 'Sabor casero que llena la mesa.',
      imagen: '/productos/budin-pan-salado.jpg',
      ingredientes: 'Harina 0000, sal, levadura, extracto de malta, manteca, azucar, leche, agua, jamon, queso.',
    },
    {
  id: 'sopa-paraguaya',
  nombre: 'Sopa paraguaya',
  variantes: [
    { nombre: 'Porción', precio: 4500 },
    { nombre: 'Bandeja', precio: 8000 }
  ],
  descripcion: 'Tarta salada tradicional, suave y con mucho sabor. Molde mediano',
  frase: 'Perfecta para acompañar cualquier comida.',
  imagen: '/productos/sopa-paraguaya.jpeg',
  ingredientes: 'Harina de maíz, leche, cebollas, huevos, queso, choclo, oregano, sal, pimienta.',
},
{
  id: 'torta-queso',
  nombre: 'Torta de queso',
  variantes: [
    { nombre: 'Porción', precio: 4500 },
    { nombre: 'Entera', precio: 8000 }
  ],
  descripcion: 'Torta suave y cremosa, ideal para los amantes del queso. Molde mediano',
  frase: 'Un postre irresistible.',
  imagen: '/productos/torta-queso.jpg' ,
  ingredientes: 'Harina leudante, polvo de hornear, leche, manteca, sal, huevos y queso.',
},
/*{
  id: 'masa-filo-pollo',
  nombre: 'Masa filo rellena de pollo',
  descripcion: 'Crujientes bocados de masa filo rellenos de pollo, ideales para compartir 🤤',
  imagen: '/productos/masa-filo-pollo.jpeg',
  variantes: [
    { nombre: 'Media docena', precio: 6000 },
    { nombre: 'Docena', precio: 11000 },
  ],
},*/
  ];
  // 
type Producto = {
  nombre: string;
  variantes: { nombre: string; precio: number }[];
};
  // ================== ESTADOS ==================
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fecha, setFecha] = useState('');
  const [nota, setNota] = useState('');
  const [seleccion, setSeleccion] = useState<{[key: string]: number}>({});

  // 🧾 CARRITO (UNA SOLA VEZ)
  const [carrito, setCarrito] = useState<{
    nombre: string;
    precio: number;
    cantidad: number;
  }[]>([]);

  // ================== FECHA ==================
  const hoy = new Date();
  const fechaMinima = hoy.toISOString().split('T')[0];

  // ================== AGREGAR ==================
  const agregarAlCarrito = (producto: any) => {
    const existe = carrito.find(item => item.nombre === producto.nombre);

    if (existe) {
      setCarrito(carrito.map(item =>
        item.nombre === producto.nombre
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      ));
    } else {
      setCarrito([
        ...carrito,
        {
          nombre: producto.nombre,
          precio: producto.variantes[0].precio,
          cantidad: 1,
        },
      ]);
    }
  };

  // ================== ELIMINAR ==================
  const eliminarProducto = (index: number) => {
    setCarrito(carrito.filter((_, i) => i !== index));
  };

  // ================== TOTAL ==================
  const total = carrito.reduce((acc, item) => {
    return acc + item.precio * item.cantidad;
  }, 0);

  // ================== WHATSAPP ==================
  const Whatsapp = useMemo(() => {
    const lineas = [
      'Hola! Quiero hacer un pedido 😊',
      '',
      '🧾 Pedido:',
      ...carrito.map(item => `• ${item.nombre} x${item.cantidad} - $${item.precio}`),
      '',
      `📅 Fecha: ${fecha || '-'}`,
      '',
      `📝 Nota: ${nota || '-'}`,
      '',
      `👤 Nombre: ${nombre || '-'}`,
      `📞 Teléfono: ${telefono || '-'}`,
      '',
      `💰 Total: $${total.toLocaleString('es-AR')}`,
    ];

    return encodeURIComponent(lineas.join('\n'));
  }, [carrito, fecha, nota, nombre, telefono, total]);
return (
    <div className="min-h-screen bg-amber-50 text-stone-800">

  <header className="bg-gradient-to-r from-amber-200 to-orange-100 shadow-sm">
    <div className="mx-auto max-w-6xl px-6 py-10">

      <div className="flex items-center gap-4">
        <img 
          src="/productos/logo.jpg" 
          alt="Panadería Carlita" 
          className="w-20 h-20 object-contain drop-shadow-lg"
        />

        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-800">
            Panadería artesanal
          </p>
          <h1 className="text-3xl md:text-5xl font-bold">
            Panadería Carlita
          </h1>
        </div>
      </div>

      <p className="mt-4 max-w-2xl text-base md:text-lg text-stone-700">
        Panadería digital, hecha en casa con dedicación. 
        Cada producto se prepara especialmente para vos 💛 
        Realizá tu pedido por WhatsApp y coordinamos la entrega.
      </p>

      <p className="text-stone-600 mt-2">
        Trabajamos por pedidos y realizamos entregas dentro de la franja horaria.
      </p>

      <a
        href="#pedido"
        className="mt-6 inline-block rounded-2xl bg-stone-900 px-6 py-3 text-white shadow hover:scale-[1.02] transition"
      >
        Hacer pedido
      </a>

    </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-12">

  {/* PRODUCTOS */}
  <section id="productos">
    <div className="mb-8">
      <h2 className="text-3xl font-bold">Nuestros productos</h2>
      <p className="mt-2 text-stone-600">
        Cada producto puede llevar imagen, frase corta e ingredientes.
      </p>
    </div>

  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
  {productos.map((producto) => (
    <div
      key={producto.id}
      className="overflow-hidden rounded-3xl bg-white shadow-sm border border-amber-100"
    >
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="h-56 w-full object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-semibold">{producto.nombre}</h3>
        <p className="mt-2 text-stone-600">{producto.descripcion}</p>
        <p className="mt-3 text-sm italic text-amber-800">
          “{producto.frase}”
        </p>

        {/* LISTA DE VARIANTES */}
        <div className="mt-4 space-y-2 text-sm text-stone-700">
          {producto.variantes.map((variante) => (
            <div
              key={variante.nombre}
              className="flex justify-between bg-amber-50 px-3 py-2 rounded-xl"
            >
              <span>{variante.nombre}</span>
              <span className="font-semibold">
                ${variante.precio.toLocaleString('es-AR')}
              </span>
            </div>
          ))}
        </div>

        {/* SELECT (FUERA del map de variantes) */}
        <select
          className="w-full mt-3 border rounded-xl px-3 py-2"
          value={seleccion[producto.id] ?? 0}
          onChange={(e) =>
            setSeleccion({
              ...seleccion,
              [producto.id]: Number(e.target.value),
            })
          }
        >
          {producto.variantes.map((v, i) => (
            <option key={i} value={i}>
              {v.nombre} - ${v.precio.toLocaleString('es-AR')}
            </option>
          ))}
        </select>

        {/* BOTÓN */}
        <button
          onClick={() => {
            const variante =
              producto.variantes[seleccion[producto.id] ?? 0];

            agregarAlCarrito({
              nombre: `${producto.nombre} (${variante.nombre})`,
              precio: variante.precio,
            });
          }}
          className="mt-3 w-full bg-amber-500 text-white py-2 rounded-xl"
        >
          Agregar al pedido
        </button>
      </div>
    </div>
  ))}
</div>
  </section>

  {/* PEDIDO */}
  <section id="pedido" className="mt-16 bg-white p-8 rounded-3xl shadow-sm">

    <h2 className="text-3xl font-bold">Formulario de pedido</h2>

    {/* CARRITO */}
    <div className="mt-6">
      {carrito.map((item, i) => (
        <div key={i} className="flex justify-between bg-amber-50 p-2 rounded mt-2">
          <span>{item.nombre} x{item.cantidad}</span>
          

...

<select
  className="w-full mt-3 border rounded-xl px-3 py-2"
  value={seleccion[producto.id] ?? 0}
  onChange={(e) =>
    setSeleccion({
      ...seleccion,
      [producto.id]: Number(e.target.value),
    })
  }
>
  {producto.variantes.map((v, i) => (
    <option key={i} value={i}>
      {v.nombre} - ${v.precio.toLocaleString('es-AR')}
    </option>
  ))}
</select>

<button
  onClick={() => {
    const varianteIndex = seleccion[producto.id] ?? 0;
    const variante = producto.variantes[varianteIndex];

    agregarAlCarrito({
      nombre: `${producto.nombre} (${variante.nombre})`,
      variantes: [{ nombre: variante.nombre, precio: variante.precio }],
    });
  }}
  className="mt-3 w-full bg-amber-500 text-white py-2 rounded-xl"
>
  Agregar al pedido
</button>
        </div>
      ))}
    </div>

    {/* DATOS */}
    <input value={nombre} onChange={(e) => setNombre(e.target.value)} />
    <input value={telefono} onChange={(e) => setTelefono(e.target.value)} />

    <a href={`https://wa.me/${whatsappNumero}?text=${Whatsapp}`}>
      Enviar pedido
    </a>

  </section>

</main>
    </div>
  );
}
