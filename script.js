'use strict';

const T = {
  es: {
    nav_obra:'obra', nav_artista:'artista', nav_contacto:'contacto',
    mob_obra:'Obra', mob_artista:'Artista', mob_contacto:'Contacto',
    cat_all:'Todo', cat_pintura:'Pinturas', cat_dibujo:'Dibujo', cat_grabado:'Grabado', cat_escultura:'Escultura',
    avail_all:'Todos', avail_green:'Disponible', avail_yellow:'Para exhibir', avail_red:'No disponible',
    label_green:'Disponible', label_yellow:'Disponible para exhibir', label_red:'No disponible',
    series_calacas:'Esta serie describe los sucesos cotidianos a través del pensar de las calaveras, donde cada calavera canta un poema.',
    series_resantes:'Toda esta serie cuenta con un precio de adquisición completa de $85,000 MXN.',
    empty:'No hay obras en esta selección.',
    artista_role:'Artista visual, escritor y escultor',
    artista_bio1:'Miguel Costemalle Carrandi es un artista visual y escritor mexicano cuya práctica se desarrolla entre México y Europa. Desde temprana edad exploró distintas disciplinas tales como la literatura, fotografía, música y pintura, movido más por la necesidad de expresar emociones que por una intención profesional. Con el tiempo, encontró su voz al unir la palabra y la imagen, haciendo de la literatura y el arte un solo lenguaje.',
    artista_bio2:'Su trabajo nace de una mirada romántica y poética que dialoga con lo contemporáneo sin perder carga emocional. Convencido de que el valor sentimental se ha diluido en muchas prácticas actuales, integra texto en sus pinturas como un gesto de resistencia: un recordatorio de cómo se siente.',
    artista_bio3:'En su desarrollo reciente, su práctica ha evolucionado hacia una exploración más amplia de la materialidad y el espacio, incorporando escultura e instalación. Ha trabajado con materiales como acero, bronce y superficies intervenidas, llevando su lenguaje a formatos de mayor escala y dimensión física.',
    artista_bio4:'Paralelamente, ha consolidado una presencia activa en contextos expositivos y colaborativos, construyendo un cuerpo de obra que mantiene coherencia entre lo íntimo y lo estructural. Actualmente, su trabajo se orienta hacia la expansión de su lenguaje visual y literario, con interés en proyectos de mayor alcance internacional, sin desprenderse de su eje central: la emoción como materia.',
    formacion:'Formación', formacion_content:'B.A. in Visual Arts and Painting<br>NABA — Nuova Accademia di Belle Arti, Milán',
    especialidad:'Especialidad', especialidad_content:'Pintura, instalación y escultura en acero oxidado, cemento, lino y madera.',
    lineas:'Líneas de investigación', lineas_content:'Color, materia, memoria y deseo.',
    exposiciones:'Exposiciones recientes',
    exp_list:'<li>El Arte del Gran Premio, Ciudad de México (2025)</li><li>Exposición individual, Ciudad de México (2024)</li><li>Exposición individual, Milán (2024)</li>',
    idiomas:'Idiomas', idiomas_content:'Español, inglés, italiano, francés.',
    footer_contacto:'Contacto', footer_ubicacion:'Ubicación', footer_redes:'Redes', footer_ciudad:'Ciudad de México / Milán',
  },
  en: {
    nav_obra:'works', nav_artista:'artist', nav_contacto:'contact',
    mob_obra:'Works', mob_artista:'Artist', mob_contacto:'Contact',
    cat_all:'All', cat_pintura:'Paintings', cat_dibujo:'Drawing', cat_grabado:'Printmaking', cat_escultura:'Sculpture',
    avail_all:'All', avail_green:'Available', avail_yellow:'For exhibition', avail_red:'Not available',
    label_green:'Available', label_yellow:'Available for exhibition', label_red:'Not available',
    series_calacas:'This series describes everyday events through the thoughts of skulls, where each skull sings a poem.',
    series_resantes:'This entire series is available for full acquisition at $85,000 MXN.',
    empty:'No works found for this selection.',
    artista_role:'Visual artist, writer and sculptor',
    artista_bio1:'Miguel Costemalle Carrandi is a Mexican visual artist and writer whose practice unfolds between Mexico and Europe. From an early age he explored different disciplines such as literature, photography, music and painting, driven more by the need to express emotions than by professional ambition. Over time, he found his voice in uniting word and image, making literature and art a single language.',
    artista_bio2:'His work stems from a romantic and poetic perspective that engages with the contemporary without losing emotional weight. Convinced that sentimental value has been diluted in many current practices, he integrates text into his paintings as a gesture of resistance: a reminder of how it feels.',
    artista_bio3:'In his recent development, his practice has evolved toward a broader exploration of materiality and space, incorporating sculpture and installation. He has worked with materials such as steel, bronze and intervened surfaces, bringing his language to larger scale and physical dimension.',
    artista_bio4:'In parallel, he has built an active presence in exhibition and collaborative contexts, developing a body of work that maintains coherence between the intimate and the structural. Currently, his work moves toward the expansion of his visual and literary language, with interest in broader international projects, without departing from its central axis: emotion as matter.',
    formacion:'Education', formacion_content:'B.A. in Visual Arts and Painting<br>NABA — Nuova Accademia di Belle Arti, Milan',
    especialidad:'Specialty', especialidad_content:'Painting, installation and sculpture in oxidized steel, cement, linen and wood.',
    lineas:'Research areas', lineas_content:'Color, matter, memory and desire.',
    exposiciones:'Recent exhibitions',
    exp_list:'<li>El Arte del Gran Premio, Mexico City (2025)</li><li>Solo exhibition, Mexico City (2024)</li><li>Solo exhibition, Milan (2024)</li>',
    idiomas:'Languages', idiomas_content:'Spanish, English, Italian, French.',
    footer_contacto:'Contact', footer_ubicacion:'Location', footer_redes:'Social', footer_ciudad:'Mexico City / Milan',
  }
};

const SERIES_KEYS = {
  'La caída al bailar de las calacas': 'series_calacas',
  'Resantes': 'series_resantes',
};

let gLang = localStorage.getItem('lang') || 'es';

const IMG = f => f;

let OBRAS = [

   {
    id: 'pared-maria-1', tipo: 'pintura',
    title: '"PARED MARIA 1"', dim: '30×24 cm',
    tecnica: 'Óleo sobre lino',
    year: '2026', price: null, avail: 'yellow',
    serie: 'Pared Maria',
    img: IMG('PARED MARIA 1.jpg')
  },
  {
    id: 'pared-maria-2', tipo: 'pintura',
    title: '"PARED MARIA 2"', dim: '30×24 cm',
    tecnica: 'Óleo sobre lino',
    year: '2026', price: null, avail: 'yellow',
    serie: 'Pared Maria',
    img: IMG('PARED MARIA 2.jpg')
  },
  {
    id: 'pared-maria-3', tipo: 'pintura',
    title: '"PARED MARIA 3"', dim: '30×24 cm',
    tecnica: 'Óleo sobre lino',
    year: '2026', price: null, avail: 'yellow',
    serie: 'Pared Maria',
    img: IMG('PARED MARIA 3.jpg')
  },
  {
    id: 'me-das-mi-domingo', tipo: 'pintura',
    title: '"¿ME DAS MI DOMINGO? 1"', dim: '197×192 cm',
    tecnica: 'Óleo sobre lino',
    year: '2026', price: null, avail: 'yellow',
    serie: null,
    img: IMG('ME DAS MI DOMINGO 1.jpg')
  },
  {
    id: 'me-das-mi-domingo-2', tipo: 'pintura',
    title: '"¿ME DAS MI DOMINGO? 2"', dim: '197×192 cm',
    tecnica: 'Óleo sobre lino',
    year: '2026', price: null, avail: 'green',
    serie: null,
    img: IMG('ME DAS MI DOMINGO 2.jpg')
  },
  {
    id: 'me-das-mi-domingo-3', tipo: 'pintura',
    title: '"¿ME DAS MI DOMINGO? 3"', dim: '197×192 cm',
    tecnica: 'Óleo sobre lino',
    year: '2026', price: null, avail: 'green',
    serie: null,
    img: IMG('ME DAS MI DOMINGO 3.jpg')
  },
  {
    id: 'ekta-calaca-27', tipo: 'pintura',
    title: 'EKTA CALACA 27', dim: '35×178 cm',
    tecnica: 'Óleo, acuarelas, plumones de acrílico, pasteles de óleo y pintura acrílica sobre lienzo',
    year: '2023', price: null, avail: 'red',
    serie: 'La caída al bailar de las calacas',
    img: IMG('EKTA CALACA 27.jpg')
  },
  {
    id: 'fer-calaca-24', tipo: 'pintura',
    title: '"FER" CALACA 24', dim: '179×60 cm',
    tecnica: 'Óleo, acuarelas, plumones de acrílico y pintura acrílica sobre lino',
    year: '2023', price: null, avail: 'red',
    serie: 'La caída al bailar de las calacas',
    img: IMG('FER CALACA 24.jpg')
  },
  {
    id: 'calacazul-2-olvera', tipo: 'pintura',
    title: 'CALACAZUL 2 "OLVERA"', dim: '120×150 cm',
    tecnica: 'Acrílico y pasteles de óleo sobre lino',
    year: '2024', price: null, avail: 'green',
    serie: 'La caída al bailar de las calacas',
    img: IMG('CALACAZUL 2 OLVERA.jpg')
  },
  {
    id: 'mural-ekta-calaca-25', tipo: 'pintura',
    title: 'MURAL "EKTA" CALACA 25', dim: '220×345 cm',
    tecnica: 'Plumones sobre papel, pintura para pared, plumones acrílicos, pasteles de óleo y pintura acrílica sobre muro',
    year: '2024', price: null, avail: 'red',
    serie: 'La caída al bailar de las calacas',
    img: IMG('MURAL EKTA CALACA 25.jpg')
  },
  {
    id: 'ekta-4-calaca-26', tipo: 'pintura',
    title: '"EKTA 4" CALACA 26', dim: '155×80 cm',
    tecnica: 'Óleo, acuarelas, arena, plumones de acrílico y pintura acrílica sobre lino',
    year: '2024', price: null, avail: 'green',
    serie: 'La caída al bailar de las calacas',
    img: IMG('EKTA 4 CALACA 26.jpg')
  },
  {
    id: 'lou', tipo: 'pintura',
    title: '"LOU"', dim: '200×300 cm',
    tecnica: 'Acrílico y óleo sobre lino',
    year: '2024', price: '170,000 MXN', avail: 'green',
    serie: null,
    img: IMG('LOU.jpg')
  },
  {
    id: '7-en-guerra', tipo: 'pintura',
    title: '"7 EN GUERRA"', dim: '216×250 cm',
    tecnica: 'Acrílico y óleo sobre lino',
    year: '2024', price: null, avail: 'red',
    serie: null,
    img: IMG('7 EN GUERRA.jpg')
  },
  {
    id: 'umbral', tipo: 'pintura',
    title: '"UMBRAL"', dim: '130×245 cm',
    tecnica: 'Óleos sobre hoja de concreto',
    year: '2025', price: '50,000 MXN', avail: 'green',
    serie: 'Resantes',
    img: IMG('UMBRAL.jpg')
  },
  {
    id: 'el-hombre', tipo: 'pintura',
    title: '"El hombre"', dim: '130×135 cm',
    tecnica: 'Acrílico sobre hoja de cemento',
    year: '2025', price: '30,000 MXN', avail: 'green',
    nota: 'Precio si se compra toda la serie (El hombre + La mujer + El altar): $85,000 MXN',
    serie: 'Resantes',
    img: IMG('El hombre.jpg')
  },
  {
    id: 'la-mujer', tipo: 'pintura',
    title: '"La mujer"', dim: '130×135 cm',
    tecnica: 'Acrílico sobre hoja de cemento',
    year: '2025', price: '30,000 MXN', avail: 'green',
    nota: 'Precio si se compra toda la serie (El hombre + La mujer + El altar): $85,000 MXN',
    serie: 'Resantes',
    img: IMG('La mujer.jpg')
  },
  {
    id: 'el-altar', tipo: 'pintura',
    title: '"El altar"', dim: '130×135 cm',
    tecnica: 'Acrílico sobre hoja de cemento',
    year: '2025', price: '30,000 MXN', avail: 'green',
    nota: 'Precio si se compra toda la serie (El hombre + La mujer + El altar): $85,000 MXN',
    serie: 'Resantes',
    img: IMG('El altar.jpg')
  },
  {
    id: 'mutilado-1', tipo: 'pintura',
    title: '"Mutilado 1"', dim: '30×30 cm',
    tecnica: 'Acrílico sobre cemento',
    year: '2025', price: '15,000 MXN', avail: 'green',
    nota: 'Precio si se compra toda la serie (Mutilado 1–4 + La cabeza): $65,000 MXN',
    serie: 'Resantes',
    img: IMG('Mutilado 1.jpg')
  },
  {
    id: 'mutilado-2', tipo: 'pintura',
    title: '"Mutilado 2"', dim: '30×30 cm',
    tecnica: 'Acrílico sobre cemento',
    year: '2025', price: '15,000 MXN', avail: 'green',
    nota: 'Precio si se compra toda la serie (Mutilado 1–4 + La cabeza): $65,000 MXN',
    serie: 'Resantes',
    img: IMG('Mutilado 2.jpg')
  },
  {
    id: 'la-cabeza', tipo: 'pintura',
    title: '"La cabeza"', dim: '30×30 cm',
    tecnica: 'Acrílico sobre cemento',
    year: '2025', price: '15,000 MXN', avail: 'green',
    nota: 'Precio si se compra toda la serie (Mutilado 1–4 + La cabeza): $65,000 MXN',
    serie: 'Resantes',
    img: IMG('La cabeza.jpg')
  },
  {
    id: 'mutilado-3', tipo: 'pintura',
    title: '"Mutilado 3"', dim: '30×30 cm',
    tecnica: 'Acrílico sobre cemento',
    year: '2025', price: '15,000 MXN', avail: 'green',
    nota: 'Precio si se compra toda la serie (Mutilado 1–4 + La cabeza): $65,000 MXN',
    serie: 'Resantes',
    img: IMG('Mutilado 3.jpg')
  },
  {
    id: 'mutilado-4', tipo: 'pintura',
    title: '"Mutilado 4"', dim: '30×30 cm',
    tecnica: 'Acrílico sobre cemento',
    year: '2025', price: '15,000 MXN', avail: 'green',
    nota: 'Precio si se compra toda la serie (Mutilado 1–4 + La cabeza): $65,000 MXN',
    serie: 'Resantes',
    img: IMG('Mutilado 4.jpg')
  },

  {
    id: 'paredes', tipo: 'dibujo',
    title: '"PAREDES"', dim: '60×70 cm',
    tecnica: 'Carbón sobre papel de algodón',
    year: '2026', price: null, avail: 'green',
    serie: 'Carbones',
    img: IMG('PAREDES.jpg')
  },
  {
    id: 'callejon', tipo: 'dibujo',
    title: '"CALLEJON"', dim: '60×70 cm',
    tecnica: 'Carbón sobre papel de algodón',
    year: '2026', price: null, avail: 'green',
    serie: 'Carbones',
    img: IMG('CALLEJON.jpg')
  },
  {
    id: 'ventanas', tipo: 'dibujo',
    title: '"VENTANAS"', dim: '60×70 cm',
    tecnica: 'Carbón sobre papel de algodón',
    year: '2026', price: null, avail: 'green',
    serie: 'Carbones',
    img: IMG('VENTANAS.jpg')
  },
  {
    id: 'esquina', tipo: 'dibujo',
    title: '"ESQUINA"', dim: '60×70 cm',
    tecnica: 'Carbón sobre papel de algodón',
    year: '2026', price: null, avail: 'green',
    serie: 'Carbones',
    img: IMG('ESQUINA.jpg')
  },
  {
    id: 'desde-un-balcon', tipo: 'dibujo',
    title: '"DESDE UN BALCÓN"', dim: '60×70 cm',
    tecnica: 'Carbón sobre papel de algodón',
    year: '2026', price: null, avail: 'green',
    serie: 'Carbones',
    img: IMG('DESDE UN BALCON.jpg')
  },
  {
    id: 'esquina-2', tipo: 'dibujo',
    title: '"ESQUINA 2"', dim: '60×70 cm',
    tecnica: 'Carbón sobre papel de algodón',
    year: '2026', price: null, avail: 'green',
    serie: 'Carbones',
    img: IMG('ESQUINA 2.jpg')
  },
  {
    id: 'maria-carbon', tipo: 'dibujo',
    title: '"MARIA"', dim: '60×70 cm',
    tecnica: 'Carbón sobre papel de algodón',
    year: '2026', price: null, avail: 'green',
    serie: 'Carbones',
    img: IMG('MARIA.jpg')
  },
  {
    id: 'vista-carro-helado', tipo: 'dibujo',
    title: '"VISTA DESDE CARRO DE HELADO"', dim: '60×70 cm',
    tecnica: 'Carbón sobre papel de algodón',
    year: '2026', price: null, avail: 'green',
    serie: 'Carbones',
    img: IMG('VISTA DESDE CARRO DE HELADO.jpg')
  },
  {
    id: 'nino-lloron', tipo: 'dibujo',
    title: '"NIÑO LLORON"', dim: '60×70 cm',
    tecnica: 'Carbón sobre papel de algodón',
    year: '2026', price: null, avail: 'green',
    serie: 'Carbones',
    img: IMG('NIÑO LLORON.jpg')
  },
  {
    id: 'en-construccion', tipo: 'dibujo',
    title: '"EN CONSTRUCCIÓN"', dim: '60×70 cm',
    tecnica: 'Carbón sobre papel de algodón',
    year: '2026', price: null, avail: 'green',
    serie: 'Carbones',
    img: IMG('EN CONSTRUCCION.jpg')
  },
  {
    id: 'jardin', tipo: 'dibujo',
    title: '"JARDÍN"', dim: '60×70 cm',
    tecnica: 'Carbón sobre papel de algodón',
    year: '2026', price: null, avail: 'green',
    serie: 'Carbones',
    img: IMG('JARDIN.jpg')
  },
  {
    id: 'cama', tipo: 'dibujo',
    title: '"CAMA"', dim: '60×70 cm',
    tecnica: 'Carbón sobre papel de algodón',
    year: '2026', price: null, avail: 'green',
    serie: 'Carbones',
    img: IMG('CAMA.jpg')
  },

  {
    id: 'murcielagos-grabado', tipo: 'grabado',
    title: '"MURCIÉLAGOS"', dim: '60×70 cm',
    tecnica: 'Grabado sobre hoja de algodón',
    year: '2025', price: null, avail: 'green',
    serie: 'Murciélagos',
    img: IMG('MURCIÉLAGOS 1.jpg')
  },
  {
    id: 'solo-los-muertos', tipo: 'grabado',
    title: '"solo los muertos pueden juzgar"', dim: '60×70 cm',
    tecnica: 'Grabado',
    year: '2025', price: '7,000 MXN', avail: 'green',
    serie: 'Murciélagos',
    img: IMG('solo los muertos pueden juzgar.jpg')
  },
  {
    id: 'murcielago-icniuhyotl-s', tipo: 'grabado',
    title: '"MURCIÉLAGO Icnīuhyōtl"', dim: '8.5×8.5 cm',
    tecnica: 'Grabado',
    year: '2026', price: null, avail: 'green',
    serie: 'Murciélagos',
    img: IMG('MURCIÉLAGO Icniuhyotl pequeño.jpg')
  },
  {
    id: 'murcielago-icniuhyotl-l', tipo: 'grabado',
    title: '"MURCIÉLAGO Icnīuhyōtl"', dim: '24×17.5 cm',
    tecnica: 'Grabado',
    year: '2026', price: null, avail: 'green',
    serie: 'Murciélagos',
    img: IMG('MURCIÉLAGO Icniuhyotl.jpg')
  },

  {
    id: 'instalacion-murcielagos', tipo: 'escultura',
    title: 'INSTALACIÓN MURCIÉLAGOS', dim: 'Variable',
    tecnica: 'Escultura e instalación',
    year: '2024',
    price: 'desde $18,000 MXN por pieza',
    nota: 'Con cúpula: desde $30,000 MXN el par hasta $190,000 MXN por ocho piezas.',
    avail: 'green',
    serie: 'Murciélagos',
    img: IMG('INSTALACIÓN MURCIÉLAGOS 5.jpg'),
    imgs: [
      'INSTALACIÓN MURCIÉLAGOS 1.jpg','INSTALACIÓN MURCIÉLAGOS 2.jpg',
      'INSTALACIÓN MURCIÉLAGOS 3.jpg','INSTALACIÓN MURCIÉLAGOS 4.jpg',
      'INSTALACIÓN MURCIÉLAGOS 5.jpg','INSTALACIÓN MURCIÉLAGOS 6.jpg',
      'INSTALACIÓN MURCIÉLAGOS 7.jpg','INSTALACIÓN MURCIÉLAGOS 8.jpg',
      'INSTALACIÓN MURCIÉLAGOS 9.jpg','INSTALACIÓN MURCIÉLAGOS 10.jpg',
      'INSTALACIÓN MURCIÉLAGOS 11.jpg','INSTALACIÓN MURCIÉLAGOS 12.jpg',
      'INSTALACIÓN MURCIÉLAGOS 13.jpg'
    ]
  },

];

let gCat   = 'all';
let gAvail = 'all';
let gView  = 'grid';
let gIdx   = 0;
let gSub   = 0;

function getFiltered() {
  return OBRAS.filter(o =>
    (gCat   === 'all' || o.tipo  === gCat) &&
    (gAvail === 'all' || o.avail === gAvail)
  );
}

const slideView    = document.getElementById('slide-view');
const gridView     = document.getElementById('grid-view');
const obraEmpty    = document.getElementById('obra-empty');
const obraGrid     = document.getElementById('obra-grid');
const slideImgWrap = document.getElementById('slide-img-wrap');
const slideCounter = document.getElementById('slide-counter');
const slideTitle   = document.getElementById('slide-title');
const slideMeta    = document.getElementById('slide-meta');
const slideDef     = document.getElementById('slide-def');
const slidePrice   = document.getElementById('slide-price');
const slideNota    = document.getElementById('slide-nota');
const slideAvail   = document.getElementById('slide-avail');
const slideSubNav  = document.getElementById('slide-sub-nav');
const slideSubCtr  = document.getElementById('slide-sub-counter');
const lbOverlay    = document.getElementById('lb-overlay');
const lbImg        = document.getElementById('lb-img');
const lbClose      = document.getElementById('lb-close');

function renderSlide() {
  const list = getFiltered();

  slideView.style.display  = 'none';
  gridView.style.display   = 'none';
  obraEmpty.style.display  = 'none';

  if (!list.length) {
    obraEmpty.style.display = 'flex';
    return;
  }

  slideView.style.display = 'flex';
  gIdx = Math.min(gIdx, list.length - 1);

  const obra = list[gIdx];
  const imgs = obra.imgs || (obra.img ? [obra.img] : []);
  gSub = Math.min(gSub, Math.max(imgs.length - 1, 0));

  const prev = slideImgWrap.querySelector('img');
  if (prev) {
    prev.style.opacity = '0';
    setTimeout(() => prev.remove(), 350);
  }
  if (imgs[gSub]) {
    const img = document.createElement('img');
    img.alt = obra.title;
    img.style.opacity = '0';
    slideImgWrap.appendChild(img);
    img.onload = () => { img.style.opacity = '1'; };
    img.src = encodeURI(imgs[gSub]);
  }

  slideCounter.textContent = `${gIdx + 1} / ${list.length}`;

  slideTitle.textContent = obra.title;

  let meta = '';
  if (obra.serie) meta += `<span>${obra.serie}</span>`;
  meta += `<span>${obra.dim}</span>`;
  meta += `<span>${obra.tecnica}</span>`;
  meta += `<span>${obra.year}</span>`;
  slideMeta.innerHTML = meta;

  const serieKey = obra.serie && SERIES_KEYS[obra.serie];
  const def = serieKey ? T[gLang][serieKey] : '';
  slideDef.textContent = def;
  slideDef.style.display = def ? '' : 'none';

  slidePrice.textContent = obra.price || '';
  slidePrice.style.display = obra.price ? '' : 'none';

  slideNota.textContent = obra.nota || '';
  slideNota.style.display = obra.nota ? '' : 'none';

  slideAvail.innerHTML =
    `<span class="avail-dot dot-${obra.avail}"></span>${T[gLang]['label_' + obra.avail]}`;

  if (imgs.length > 1) {
    slideSubNav.style.display = 'flex';
    slideSubCtr.textContent = `${gSub + 1} / ${imgs.length}`;
  } else {
    slideSubNav.style.display = 'none';
  }
}

const lazyObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const img = entry.target;
    const src = img.dataset.src;
    if (!src) return;
    img.src = src;
    img.removeAttribute('data-src');
    lazyObserver.unobserve(img);
  });
}, { rootMargin: '300px 0px' });

function thumbSrc(filename) {

  return 'thumbs/' + encodeURI(filename);
}

function renderGrid() {
  const list = getFiltered();

  slideView.style.display  = 'none';
  gridView.style.display   = 'none';
  obraEmpty.style.display  = 'none';

  if (!list.length) {
    obraEmpty.style.display = 'flex';
    return;
  }

  gridView.style.display = 'block';
  obraGrid.innerHTML = '';

  list.forEach((obra, i) => {
    const item = document.createElement('div');
    item.className = 'grid-item';

    const wrap = document.createElement('div');
    wrap.className = 'grid-img-wrap';

    if (obra.img) {
      const img = document.createElement('img');
      img.alt = obra.title;

      img.dataset.src = thumbSrc(obra.img);

      img.onerror = function() {
        if (this.src !== encodeURI(obra.img)) {
          this.onerror = null;
          this.src = encodeURI(obra.img);
        }
      };
      lazyObserver.observe(img);
      wrap.appendChild(img);
    }

    const dot = document.createElement('span');
    dot.className = `grid-dot dot-${obra.avail}`;
    wrap.appendChild(dot);

    const cap = document.createElement('div');
    cap.className = 'grid-caption';
    cap.innerHTML =
      `<span class="grid-title">${obra.title}</span>` +
      `<span class="grid-dims">${obra.dim}</span>`;

    item.append(wrap, cap);
    item.addEventListener('click', () => {
      gIdx = i; gSub = 0;
      setView('slide');
    });
    obraGrid.appendChild(item);
  });
}

function applyLang() {
  const t = T[gLang];
  document.documentElement.lang = gLang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = t[el.dataset.i18n];
    if (v !== undefined) el.textContent = v;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const v = t[el.dataset.i18nHtml];
    if (v !== undefined) el.innerHTML = v;
  });
  document.querySelectorAll('.lang-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.lang === gLang)
  );
  if (gView === 'slide') renderSlide();
}

function openLightbox(src) {
  lbImg.src = src;
  lbOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lbOverlay.classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => { lbImg.src = ''; }, 300);
}

function setView(v) {
  gView = v;
  document.querySelectorAll('.view-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.view === v)
  );
  if (controlsSecondary) { controlsSecondary.classList.remove('open'); mobileFilterBtn.classList.remove('active'); }
  if (v === 'slide') { window.scrollTo({ top: 0, behavior: 'instant' }); renderSlide(); }
  else renderGrid();
}

function goObra(delta) {
  const list = getFiltered();
  if (!list.length) return;
  gIdx = (gIdx + delta + list.length) % list.length;
  gSub = 0;
  renderSlide();
}

function goSub(delta) {
  const list = getFiltered();
  if (!list.length) return;
  const obra = list[gIdx];
  const imgs = obra.imgs || (obra.img ? [obra.img] : []);
  gSub = (gSub + delta + imgs.length) % imgs.length;
  renderSlide();
}

(function () {
  const btn = document.getElementById('hamburger');
  const nav = document.getElementById('mobile-nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.classList.toggle('open', open);
  });
  nav.querySelectorAll('.mobile-nav-link').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('open');
      btn.classList.remove('open');
    });
  });
})();

document.getElementById('cat-nav').addEventListener('click', e => {
  const btn = e.target.closest('.cat-btn');
  if (!btn) return;
  gCat = btn.dataset.cat;
  gIdx = 0; gSub = 0;
  document.querySelectorAll('.cat-btn').forEach(b =>
    b.classList.toggle('active', b === btn)
  );
  setView('grid');
});

function handleAvailClick(e) {
  const btn = e.target.closest('.avail-btn');
  if (!btn) return;
  gAvail = btn.dataset.avail;
  gIdx = 0; gSub = 0;
  document.querySelectorAll('.avail-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.avail === gAvail)
  );
  if (gView === 'slide') renderSlide();
  else renderGrid();
}
document.getElementById('avail-filter').addEventListener('click', handleAvailClick);
document.getElementById('avail-filter-mobile').addEventListener('click', handleAvailClick);

function handleViewToggle(e) {
  const btn = e.target.closest('.view-btn');
  if (!btn) return;
  setView(btn.dataset.view);
}
document.getElementById('view-toggle').addEventListener('click', handleViewToggle);
document.getElementById('view-toggle-mobile').addEventListener('click', handleViewToggle);

const mobileFilterBtn = document.getElementById('mobile-filter-btn');
const controlsSecondary = document.getElementById('controls-secondary');
mobileFilterBtn.addEventListener('click', () => {
  const open = controlsSecondary.classList.toggle('open');
  mobileFilterBtn.classList.toggle('active', open);
});

document.getElementById('slide-prev-obra').addEventListener('click', () => goObra(-1));
document.getElementById('slide-next-obra').addEventListener('click', () => goObra(1));
document.getElementById('slide-sub-prev').addEventListener('click', () => goSub(-1));
document.getElementById('slide-sub-next').addEventListener('click', () => goSub(1));

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeLightbox(); return; }
  if (gView !== 'slide') return;
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') goObra(1);
  if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   goObra(-1);
});

slideImgWrap.addEventListener('click', () => {
  const img = slideImgWrap.querySelector('img');
  if (img && img.src) openLightbox(img.src);
});
lbOverlay.addEventListener('click', closeLightbox);
lbClose.addEventListener('click', e => { e.stopPropagation(); closeLightbox(); });

document.getElementById('lang-toggle').addEventListener('click', e => {
  const btn = e.target.closest('.lang-btn');
  if (!btn) return;
  gLang = btn.dataset.lang;
  localStorage.setItem('lang', gLang);
  applyLang();
});

let _tx = 0, _ty = 0;
slideView.addEventListener('touchstart', e => {
  _tx = e.touches[0].clientX;
  _ty = e.touches[0].clientY;
}, { passive: true });
slideView.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - _tx;
  const dy = e.changedTouches[0].clientY - _ty;
  if (Math.abs(dy) > Math.abs(dx)) return;
  if (dx > window.innerWidth * 0.55) { setView('grid'); return; }
  if (Math.abs(dx) > 48) goObra(dx < 0 ? 1 : -1);
}, { passive: true });

applyLang();
fetch('obras.json?v=' + Date.now())
  .then(r => r.json())
  .then(data => { OBRAS = data; renderGrid(); })
  .catch(() => renderGrid());