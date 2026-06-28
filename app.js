// ===== DATOS INICIALES =====
const defaultData = {
    events: [
        {
            id: 1,
            emoji: '🎃',
            title: 'Noche de Calabazas Malditas',
            description: 'Un recorrido por el bosque encantado donde las calabazas cobran vida. ¡Cuidado con las que te siguen!',
            date: '31 Oct 2026',
            time: '20:00',
            location: '🌲 Bosque Tenebroso',
            category: 'recorrido',
            image: 'https://images.unsplash.com/photo-1509557965875-b88c97052f0e?w=400'
        },
        {
            id: 2,
            emoji: '👻',
            title: 'Casa de los Espíritus',
            description: 'Entra si te atreves... una mansión abandonada donde los fantasmas de antaño aún deambulan por los pasillos.',
            date: '31 Oct 2026',
            time: '22:00',
            location: '🏚️ Mansión Blackwood',
            category: 'atracción',
            image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400'
        },
        {
            id: 3,
            emoji: '🧟',
            title: 'Invasión Zombie',
            description: 'Los muertos han despertado y solo los valientes sobrevivirán. ¿Tienes lo necesario para escapar?',
            date: '1 Nov 2026',
            time: '21:00',
            location: '🧟 Zona de Cuarentena',
            category: 'experiencia',
            image: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=400'
        },
        {
            id: 4,
            emoji: '🦇',
            title: 'Vuelo Nocturno de Murciélagos',
            description: 'Observa miles de murciélagos surcando el cielo al anochecer en un espectáculo único.',
            date: '1 Nov 2026',
            time: '19:30',
            location: '🌙 Cueva Oscura',
            category: 'espectáculo',
            image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400'
        },
        {
            id: 5,
            emoji: '🔪',
            title: 'El Laboratorio del Dr. Muerte',
            description: 'Experimentos fallidos, criaturas híbridas y un científico loco que no quiere que salgas.',
            date: '2 Nov 2026',
            time: '23:00',
            location: '🧪 Laboratorio Subterráneo',
            category: 'atracción',
            image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400'
        },
        {
            id: 6,
            emoji: '🩸',
            title: 'Baile de Sangre',
            description: 'La fiesta más macabra del festival. Música oscura, efectos especiales y sorpresas que te dejarán helado.',
            date: '2 Nov 2026',
            time: '00:00',
            location: '🎪 Carpa Principal',
            category: 'fiesta',
            image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400'
        }
    ],
    shorts: [
        {
            id: 1,
            emoji: '📹',
            title: 'El Espejo Maldito',
            director: 'Ana Vampírica',
            duration: '12 min',
            year: 2025,
            genre: 'Sobrenatural',
            description: 'Un espejo antiguo que muestra el futuro... pero solo las muertes.',
            image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400'
        },
        {
            id: 2,
            emoji: '🎬',
            title: 'Última Llamada',
            director: 'Carlos Terror',
            duration: '8 min',
            year: 2025,
            genre: 'Thriller',
            description: 'Una llamada telefónica desde el más allá en la cabina más solitaria del mundo.',
            image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400'
        },
        {
            id: 3,
            emoji: '📽️',
            title: 'La Muñeca',
            director: 'Lucía Oscura',
            duration: '15 min',
            year: 2024,
            genre: 'Terror Psicológico',
            description: 'Una muñeca que aparece en diferentes lugares de la casa cada noche.',
            image: 'https://images.unsplash.com/photo-1509557965875-b88c97052f0e?w=400'
        },
        {
            id: 4,
            emoji: '🎥',
            title: 'Cementerio Digital',
            director: 'Pedro Siniestro',
            duration: '10 min',
            year: 2025,
            genre: 'Tecnológico',
            description: 'Cuando los muertos empiezan a enviar mensajes desde sus perfiles de redes sociales.',
            image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400'
        }
    ],
    movies: [
        {
            id: 1,
            emoji: '🎞️',
            title: 'La Noche Eterna',
            director: 'Guillermo del Toro',
            year: 2025,
            duration: '118 min',
            genre: 'Terror Gótico',
            rating: '⭐⭐⭐⭐⭐',
            description: 'Un pueblo atrapado en una noche sin fin donde las sombras cobran vida.',
            image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400'
        },
        {
            id: 2,
            emoji: '🍿',
            title: 'El Último Exorcismo',
            director: 'James Wan',
            year: 2025,
            duration: '102 min',
            genre: 'Exorcismo',
            rating: '⭐⭐⭐⭐',
            description: 'El exorcista más famoso del mundo se enfrenta a su posesión más peligrosa.',
            image: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=400'
        },
        {
            id: 3,
            emoji: '🎬',
            title: 'Criaturas de la Niebla',
            director: 'Jordan Peele',
            year: 2025,
            duration: '95 min',
            genre: 'Terror Científico',
            rating: '⭐⭐⭐⭐⭐',
            description: 'Una niebla tóxica transforma a los habitantes de una ciudad en monstruos.',
            image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400'
        },
        {
            id: 4,
            emoji: '📽️',
            title: 'El Hotel Abandonado',
            director: 'Mike Flanagan',
            year: 2024,
            duration: '125 min',
            genre: 'Terror Psicológico',
            rating: '⭐⭐⭐⭐',
            description: 'Un grupo de youtubers se adentra en el hotel más embrujado de Europa.',
            image: 'https://images.unsplash.com/photo-1509557965875-b88c97052f0e?w=400'
        }
    ],
    geekShock: {
        intro: {
            title: '🧠 Geek Shock Cinema',
            description: 'Una sección especial dedicada al cine de terror geek, sci-fi y cult. Descubre proyecciones únicas, maratones temáticos y experiencias inmersivas que fusionan tecnología y terror.'
        },
        items: [
            {
                id: 1,
                emoji: '🤖',
                title: 'Maratón Cyberpunk',
                description: 'Tres días de proyecciones ininterrumpidas de los mejores films cyberpunk.',
                date: '31 Oct 2026',
                time: '18:00',
                location: '🎮 Sala VR',
                category: 'maratón',
                image: 'https://images.unsplash.com/photo-1535378437327-b71494669e9d?w=400',
                badge: 'Imperdible'
            },
            {
                id: 2,
                emoji: '👾',
                title: 'Terror Retro Arcade',
                description: 'Proyección de películas de terror de los 80 y 90 en una arcade vintage.',
                date: '1 Nov 2026',
                time: '16:00',
                location: '🕹️ Sala Retro',
                category: 'retro',
                image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400',
                badge: 'Nostalgia'
            }
        ]
    },
    artists: [
        {
            id: 1,
            emoji: '🧛',
            name: 'Vladimir el Conde',
            genre: 'Dark Synthwave',
            description: 'El legendario vampiro que ha estado tocando desde 1897. Su música te hipnotizará.',
            image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400'
        },
        {
            id: 2,
            emoji: '💀',
            name: 'DJ Calavera',
            genre: 'Terror Bass',
            description: 'Mezclas que harán vibrar hasta los huesos. Literalmente.',
            image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400'
        },
        {
            id: 3,
            emoji: '👻',
            name: 'Phantom Voices',
            genre: 'Ambient Horror',
            description: 'Sonidos etéreos que parecen venir de otra dimensión. No escuches solo de noche.',
            image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400'
        },
        {
            id: 4,
            emoji: '🧟',
            name: 'Los No-Muertos',
            genre: 'Zombie Rock',
            description: 'La banda que nunca deja de tocar... porque ya están muertos.',
            image: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=400'
        }
    ],
    guests: [
        {
            id: 1,
            emoji: '🧛',
            name: 'Bela Lugosi Jr.',
            role: 'Actor Legendario',
            description: 'Heredero del legado del Drácula más famoso del cine. Presentará su nuevo documental.',
            image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400'
        },
        {
            id: 2,
            emoji: '👻',
            name: 'Shirley Jackson II',
            role: 'Escritora de Terror',
            description: 'Nieta de la legendaria Shirley Jackson. Firmará ejemplares de su nueva novela.',
            image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400'
        },
        {
            id: 3,
            emoji: '💀',
            name: 'Tom Savini',
            role: 'Maquillista FX',
            description: 'El maestro de los efectos especiales de terror. Taller en vivo de maquillaje de zombies.',
            image: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=400'
        },
        {
            id: 4,
            emoji: '🎤',
            name: 'Elvira',
            role: 'Reina del Terror',
            description: 'La icónica presentadora de películas de terror. Conducirá la gala de clausura.',
            image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400'
        }
    ],
    jury: [
        {
            id: 1,
            emoji: '🧑‍⚖️',
            name: 'Prof. Drácula Van Helsing',
            role: 'Presidente del Jurado',
            specialty: 'Cine de Terror Clásico',
            description: 'Historiador del cine de terror con más de 40 años de experiencia. Ha escrito 15 libros sobre el género.',
            image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400'
        },
        {
            id: 2,
            emoji: '👩‍⚖️',
            name: 'Dra. Morticia Raven',
            role: 'Jurado Principal',
            specialty: 'Terror Psicológico',
            description: 'Psicóloga forense especializada en el análisis del terror en el cine contemporáneo.',
            image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400'
        },
        {
            id: 3,
            emoji: '🧑‍⚖️',
            name: 'Sr. Edgar Poe III',
            role: 'Jurado Principal',
            specialty: 'Guión y Narrativa',
            description: 'Bisnieto del maestro Edgar Allan Poe. Experto en guiones de terror y narrativa gótica.',
            image: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=400'
        },
        {
            id: 4,
            emoji: '👩‍⚖️',
            name: 'Sra. Mary Shelley II',
            role: 'Jurado Principal',
            specialty: 'Efectos Especiales',
            description: 'Especialista en efectos especiales y maquillaje prostético para cine de terror.',
            image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400'
        },
        {
            id: 5,
            emoji: '🧑‍⚖️',
            name: 'Lord Bram Stoker Jr.',
            role: 'Jurado Principal',
            specialty: 'Dirección y Producción',
            description: 'Productor ejecutivo con más de 50 películas de terror en su filmografía.',
            image: 'https://images.unsplash.com/photo-1509557965875-b88c97052f0e?w=400'
        }
    ],
    gallery: [
        { id: 1, emoji: '🎃', title: 'Calabazas Malditas', image: 'https://images.unsplash.com/photo-1509557965875-b88c97052f0e?w=400' },
        { id: 2, emoji: '👻', title: 'Fantasma en el Espejo', image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400' },
        { id: 3, emoji: '🧟', title: 'Horda Zombie', image: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=400' },
        { id: 4, emoji: '🦇', title: 'Murciélagos al Anochecer', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400' },
        { id: 5, emoji: '💀', title: 'El Cementerio', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400' },
        { id: 6, emoji: '🔪', title: 'La Masacre', image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400' },
        { id: 7, emoji: '🩸', title: 'Noche de Sangre', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400' },
        { id: 8, emoji: '🕷️', title: 'Telaraña Gigante', image: 'https://images.unsplash.com/photo-1509557965875-b88c97052f0e?w=400' }
    ],
    awards: [
        {
            id: 1,
            emoji: '🏆',
            category: 'Mejor Película de Terror',
            winner: 'La Noche Eterna',
            description: 'Premio a la mejor película de terror del año.',
            year: 2025
        },
        {
            id: 2,
            emoji: '🥇',
            category: 'Mejor Cortometraje',
            winner: 'El Espejo Maldito',
            description: 'Reconocimiento al mejor corto de terror del festival.',
            year: 2025
        },
        {
            id: 3,
            emoji: '🎭',
            category: 'Mejor Maquillaje FX',
            winner: 'Tom Savini',
            description: 'Al maestro de los efectos especiales más impactantes.',
            year: 2025
        },
        {
            id: 4,
            emoji: '📖',
            category: 'Mejor Guión',
            winner: 'Shirley Jackson II',
            description: 'Al guión más original y aterrador del festival.',
            year: 2025
        },
        {
            id: 5,
            emoji: '🎵',
            category: 'Mejor Banda Sonora',
            winner: 'Vladimir el Conde',
            description: 'A la música más inquietante y memorable.',
            year: 2025
        },
        {
            id: 6,
            emoji: '👻',
            category: 'Premio del Público',
            winner: 'Invasión Zombie',
            description: 'Elegido por los asistentes como la experiencia más terrorífica.',
            year: 2025
        }
    ],
    news: [
        {
            id: 1,
            emoji: '📰',
            title: 'Guillermo del Toro confirmado como invitado especial',
            excerpt: 'El aclamado director mexicano presentará su nueva película en exclusiva mundial.',
            date: '15 Jun 2026',
            tag: 'Invitados',
            image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400'
        },
        {
            id: 2,
            emoji: '🎟️',
            title: 'Las entradas VIP se agotan en 3 minutos',
            excerpt: 'El Pase Señor de la Oscuridad se vendió en tiempo récord. Quedan pocas unidades de otros pases.',
            date: '10 Jun 2026',
            tag: 'Entradas',
            image: 'https://images.unsplash.com/photo-1509557965875-b88c97052f0e?w=400'
        },
        {
            id: 3,
            emoji: '🎬',
            title: 'Se anuncian los cortos seleccionados para 2026',
            excerpt: 'Más de 500 cortometrajes se presentaron, solo 12 fueron seleccionados para la competición oficial.',
            date: '5 Jun 2026',
            tag: 'Cortos',
            image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400'
        },
        {
            id: 4,
            emoji: '🏆',
            title: 'Nueva categoría: Premio al Mejor Cosplay',
            excerpt: 'Este año se estrena un premio especial para los disfraces más terroríficos del festival.',
            date: '1 Jun 2026',
            tag: 'Premios',
            image: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=400'
        }
    ],
    info: [
        {
            id: 1,
            emoji: '📍',
            title: 'Cómo Llegar',
            description: 'El festival se celebra en el Cementerio Viejo de Transilvania. Hay autobuses especiales desde Bucarest cada hora. También disponemos de parking para 500 vehículos embrujados.'
        },
        {
            id: 2,
            emoji: '🍽️',
            title: 'Gastronomía Terrorífica',
            description: 'Más de 20 food trucks con comida temática: hamburguesas de sangre, ojos de caramelo, sopa de calavera y mucho más. Opciones veganas disponibles (sangre de remolacha).'
        },
        {
            id: 3,
            emoji: '🏨',
            title: 'Alojamiento',
            description: 'Camping incluido con todas las entradas. También disponemos de cabañas embrujadas y el Hotel Transilvania a 5 minutos con tarifa especial para asistentes.'
        },
        {
            id: 4,
            emoji: '♿',
            title: 'Accesibilidad',
            description: 'Todas las zonas son accesibles para sillas de ruedas. Personal de apoyo disponible. Subtítulos en todas las proyecciones. Zona de descanso para personas con ansiedad.'
        },
        {
            id: 5,
            emoji: '🎭',
            title: 'Cosplay y Disfraces',
            description: '¡Ven disfrazado y gana premios! Concurso diario de cosplay a las 22:00. Zona de maquillaje profesional gratuita. Tienda de disfraces en la entrada principal.'
        },
        {
            id: 6,
            emoji: '📜',
            title: 'Normas del Festival',
            description: 'Prohibido entrar sin disfraz mínimo (máscara o maquillaje). No se permite comida ni bebida externa. Menores de 16 años solo con acompañante adulto. Respeto a los actores y escenografía.'
        }
    ],
    tickets: [
        {
            id: 1,
            emoji: '🎫',
            name: 'Pase del Miedo',
            description: 'Acceso a 3 atracciones principales del festival.',
            price: 25,
            features: ['3 Atracciones', 'Mapa del festival', 'Pulsera especial'],
            badge: 'Popular'
        },
        {
            id: 2,
            emoji: '💀',
            name: 'Pase Terror Total',
            description: 'Acceso ilimitado a TODAS las atracciones y espectáculos.',
            price: 45,
            features: ['Acceso ilimitado', 'Cola preferente', 'Camiseta exclusiva', 'Foto con monstruos'],
            badge: 'Mejor valor'
        },
        {
            id: 3,
            emoji: '👑',
            name: 'Pase Señor de la Oscuridad',
            description: 'La experiencia definitiva. Todo incluido con beneficios VIP.',
            price: 80,
            features: ['Todo ilimitado', 'Zona VIP', 'Cena con monstruos', 'Merchandising completo', 'Acceso backstage'],
            badge: 'VIP'
        }
    ],
    program: [
        {
            id: 1,
            day: '31 de Octubre',
            emoji: '🎃',
            items: [
                { time: '18:00', name: 'Apertura de Puertas', location: 'Entrada Principal' },
                { time: '19:00', name: 'Ceremonia de Apertura', location: 'Carpa Principal' },
                { time: '20:00', name: 'Noche de Calabazas Malditas', location: '🌲 Bosque Tenebroso' },
                { time: '21:00', name: 'Proyección: La Noche Eterna', location: '🎬 Cine al Aire Libre' },
                { time: '22:00', name: 'Casa de los Espíritus', location: '🏚️ Mansión Blackwood' },
                { time: '23:00', name: 'Concierto: Vladimir el Conde', location: '🎪 Carpa Principal' },
                { time: '00:00', name: 'Baile de Disfraces', location: '🎪 Carpa Principal' }
            ]
        },
        {
            id: 2,
            day: '1 de Noviembre',
            emoji: '👻',
            items: [
                { time: '10:00', name: 'Taller de Maquillaje FX', location: '🎨 Zona Creativa' },
                { time: '12:00', name: 'Concurso de Cortos', location: '🎬 Cine al Aire Libre' },
                { time: '14:00', name: 'Comida Terrorífica', location: '🍽️ Zona Gastronómica' },
                { time: '16:00', name: 'Charla: Historia del Terror', location: '📚 Sala de Conferencias' },
                { time: '19:30', name: 'Vuelo Nocturno de Murciélagos', location: '🌙 Cueva Oscura' },
                { time: '21:00', name: 'Invasión Zombie', location: '🧟 Zona de Cuarentena' },
                { time: '23:00', name: 'Concierto: DJ Calavera', location: '🎪 Carpa Principal' }
            ]
        },
        {
            id: 3,
            day: '2 de Noviembre',
            emoji: '💀',
            items: [
                { time: '11:00', name: 'Firma de Libros', location: '📚 Sala de Conferencias' },
                { time: '13:00', name: 'Proyección: El Último Exorcismo', location: '🎬 Cine al Aire Libre' },
                { time: '15:00', name: 'Taller de Efectos Especiales', location: '🎨 Zona Creativa' },
                { time: '18:00', name: 'Desfile de Disfraces', location: '📍 Calle Principal' },
                { time: '20:00', name: 'Premios BaiDeFest 2026', location: '🎪 Carpa Principal' },
                { time: '22:00', name: 'Concierto Final: Los No-Muertos', location: '🎪 Carpa Principal' },
                { time: '23:00', name: 'El Laboratorio del Dr. Muerte', location: '🧪 Laboratorio Subterráneo' },
                { time: '00:00', name: 'Baile de Sangre & Clausura', location: '🎪 Carpa Principal' }
            ]
        }
    ]
};

// ===== LOCAL STORAGE =====
let __appData = null;

function getData() {
    if (__appData) return __appData;
    try {
        const stored = localStorage.getItem('baidefest_data');
        if (stored) {
            __appData = JSON.parse(stored);
            // Asegurar que geekShock existe
            if (!__appData.geekShock) {
                __appData.geekShock = defaultData.geekShock;
                saveData(__appData);
            }
            return __appData;
        }
    } catch (e) {
        console.warn('localStorage no disponible');
    }
    __appData = JSON.parse(JSON.stringify(defaultData));
    saveData(__appData);
    return __appData;
}

function saveData(data) {
    __appData = data;
    try {
        localStorage.setItem('baidefest_data', JSON.stringify(data));
    } catch (e) {
        console.warn('No se pudo guardar en localStorage');
    }
}

// ===== PARTICLES =====
function createParticles() {
    const container = document.getElementById('particles-container');
    if (!container) return;
    container.innerHTML = '';
    const emojis = ['👻', '🎃', '💀', '🧟', '🦇', '🕷️', '🕸️', '🪦', '🔪', '🩸'];
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.fontSize = (Math.random() * 1 + 0.8) + 'rem';
        container.appendChild(particle);
    }
}

// ===== COUNTDOWN =====
function updateCountdown() {
    const festivalDate = new Date('2026-10-31T20:00:00');
    const now = new Date();
    const diff = festivalDate - now;

    if (diff <= 0) {
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');
        if (daysEl) daysEl.textContent = '00';
        if (hoursEl) hoursEl.textContent = '00';
        if (minutesEl) minutesEl.textContent = '00';
        if (secondsEl) secondsEl.textContent = '00';
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
}

// ===== RENDER PROGRAM =====
function renderProgram() {
    const container = document.getElementById('program-timeline');
    if (!container) return;
    const data = getData();

    container.innerHTML = data.program.map(day => `
        <div class="program-day">
            <div class="program-day-title">${day.emoji} ${day.day}</div>
            ${day.items.map(item => `
                <div class="program-item">
                    <div class="program-time">⏰ ${item.time}</div>
                    <div class="program-name">${item.name}</div>
                    <div class="program-location">📍 ${item.location}</div>
                </div>
            `).join('')}
        </div>
    `).join('');
}

// ===== RENDER EVENTS =====
function renderEvents() {
    const grid = document.getElementById('events-grid');
    if (!grid) return;
    const data = getData();

    grid.innerHTML = data.events.map(event => `
        <div class="card" onclick="showDetail('event', ${event.id})">
            <img src="${event.image}" alt="${event.title}" class="card-image" loading="lazy" onerror="handleImageError(this)">
            <div class="card-content">
                <span class="card-emoji">${event.emoji}</span>
                <h3 class="card-title">${event.title}</h3>
                <p class="card-description">${event.description}</p>
                <div class="card-meta">
                    <span>📅 ${event.date}</span>
                    <span>⏰ ${event.time}</span>
                    <span>📍 ${event.location}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// ===== RENDER SHORTS =====
function renderShorts() {
    const grid = document.getElementById('shorts-grid');
    if (!grid) return;
    const data = getData();

    grid.innerHTML = data.shorts.map(short => `
        <div class="card" onclick="showDetail('short', ${short.id})">
            <img src="${short.image}" alt="${short.title}" class="card-image" loading="lazy" onerror="handleImageError(this)">
            <div class="card-content">
                <span class="card-emoji">${short.emoji}</span>
                <h3 class="card-title">${short.title}</h3>
                <p class="card-description">${short.description}</p>
                <div class="card-meta">
                    <span>🎬 ${short.director}</span>
                    <span>⏱️ ${short.duration}</span>
                    <span>📅 ${short.year}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// ===== RENDER MOVIES =====
function renderMovies() {
    const grid = document.getElementById('movies-grid');
    if (!grid) return;
    const data = getData();

    grid.innerHTML = data.movies.map(movie => `
        <div class="card" onclick="showDetail('movie', ${movie.id})">
            <img src="${movie.image}" alt="${movie.title}" class="card-image" loading="lazy" onerror="handleImageError(this)">
            <div class="card-content">
                <span class="card-emoji">${movie.emoji}</span>
                <h3 class="card-title">${movie.title}</h3>
                <p class="card-description">${movie.description}</p>
                <div class="card-meta">
                    <span>🎬 ${movie.director}</span>
                    <span>⏱️ ${movie.duration}</span>
                    <span>📅 ${movie.year}</span>
                </div>
                <div style="margin-top:0.5rem; color:var(--accent-yellow); font-size:1.1rem">${movie.rating}</div>
            </div>
        </div>
    `).join('');
}

// ===== RENDER ARTISTS =====
function renderArtists() {
    const grid = document.getElementById('artists-grid');
    if (!grid) return;
    const data = getData();

    grid.innerHTML = data.artists.map(artist => `
        <div class="card" onclick="showDetail('artist', ${artist.id})">
            <img src="${artist.image}" alt="${artist.name}" class="card-image" loading="lazy" onerror="handleImageError(this)">
            <div class="card-content">
                <span class="card-emoji">${artist.emoji}</span>
                <h3 class="card-title">${artist.name}</h3>
                <p class="card-description">${artist.description}</p>
                <div class="card-meta">
                    <span>🎵 ${artist.genre}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// ===== RENDER GUESTS =====
function renderGuests() {
    const grid = document.getElementById('guests-grid');
    if (!grid) return;
    const data = getData();

    grid.innerHTML = data.guests.map(guest => `
        <div class="card" onclick="showDetail('guest', ${guest.id})">
            <img src="${guest.image}" alt="${guest.name}" class="card-image" loading="lazy" onerror="handleImageError(this)">
            <div class="card-content">
                <span class="card-emoji">${guest.emoji}</span>
                <h3 class="card-title">${guest.name}</h3>
                <p class="card-description">${guest.description}</p>
                <div class="card-meta">
                    <span>🎤 ${guest.role}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// ===== RENDER JURY =====
function renderJury() {
    const grid = document.getElementById('jury-grid');
    if (!grid) return;
    const data = getData();

    grid.innerHTML = data.jury.map(member => `
        <div class="card" onclick="showDetail('jury', ${member.id})">
            <img src="${member.image}" alt="${member.name}" class="card-image" loading="lazy" onerror="handleImageError(this)">
            <div class="card-content">
                <span class="card-emoji">${member.emoji}</span>
                <h3 class="card-title">${member.name}</h3>
                <p class="card-description">${member.description}</p>
                <div class="card-meta">
                    <span>⚖️ ${member.role}</span>
                    <span>🎓 ${member.specialty}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// ===== RENDER GALLERY =====
function renderGallery() {
    const grid = document.getElementById('gallery-grid');
    if (!grid) return;
    const data = getData();

    grid.innerHTML = data.gallery.map(item => `
        <div class="gallery-item" onclick="showDetail('gallery', ${item.id})">
            <img src="${item.image}" alt="${item.title}" loading="lazy" onerror="handleImageError(this)">
            <div class="gallery-overlay">
                <span style="font-size:1.5rem">${item.emoji}</span>
                <div class="gallery-title">${item.title}</div>
            </div>
        </div>
    `).join('');
}

// ===== RENDER AWARDS =====
function renderAwards() {
    const grid = document.getElementById('awards-grid');
    if (!grid) return;
    const data = getData();

    grid.innerHTML = data.awards.map(award => `
        <div class="award-card" onclick="showDetail('award', ${award.id})">
            <div class="award-trophy">${award.emoji}</div>
            <div class="award-category">${award.category}</div>
            <div class="award-winner">${award.winner}</div>
            <div class="award-description">${award.description}</div>
        </div>
    `).join('');
}

// ===== RENDER NEWS =====
function renderNews() {
    const grid = document.getElementById('news-grid');
    if (!grid) return;
    const data = getData();

    grid.innerHTML = data.news.map(item => `
        <div class="news-card" onclick="showDetail('news', ${item.id})">
            <img src="${item.image}" alt="${item.title}" class="news-image" loading="lazy" onerror="handleImageError(this)">
            <div class="news-content">
                <div class="news-date">📅 ${item.date}</div>
                <h3 class="news-title">${item.title}</h3>
                <p class="news-excerpt">${item.excerpt}</p>
                <span class="news-tag">${item.tag}</span>
            </div>
        </div>
    `).join('');
}

// ===== RENDER INFO =====
function renderInfo() {
    const grid = document.getElementById('info-grid');
    if (!grid) return;
    const data = getData();

    grid.innerHTML = data.info.map(item => `
        <div class="info-card">
            <div class="info-icon">${item.emoji}</div>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        </div>
    `).join('');
}

// ===== RENDER TICKETS =====
function renderTickets() {
    const grid = document.getElementById('tickets-grid');
    if (!grid) return;
    const data = getData();

    grid.innerHTML = data.tickets.map(ticket => `
        <div class="card" onclick="showDetail('ticket', ${ticket.id})">
            <div class="card-content" style="text-align:center; padding:2rem">
                <span class="card-emoji" style="font-size:3rem">${ticket.emoji}</span>
                <h3 class="card-title">${ticket.name}</h3>
                <p class="card-description">${ticket.description}</p>
                <div class="card-price">${ticket.price}€</div>
                <ul style="list-style:none; padding:0; margin:1rem 0; text-align:left; color:var(--text-dim); font-size:0.9rem">
                    ${ticket.features.map(f => `<li>✓ ${f}</li>`).join('')}
                </ul>
                ${ticket.badge ? `<span class="card-badge">${ticket.badge}</span>` : ''}
                <button class="btn btn-primary" style="margin-top:1rem; width:100%">🛒 Comprar</button>
            </div>
        </div>
    `).join('');
}

// ===== RENDER GEEK SHOCK =====
function renderGeekShock() {
    const intro = document.getElementById('geek-shock-intro');
    const grid = document.getElementById('geek-shock-grid');
    if (!grid) return;
    const data = getData();
    const gs = data.geekShock || defaultData.geekShock;

    if (intro) {
        intro.innerHTML = `
            <h3>${gs.intro.title}</h3>
            <p>${gs.intro.description}</p>
        `;
    }

    grid.innerHTML = gs.items.map(item => `
        <div class="geek-shock-card" onclick="showGeekShockDetail(${item.id})">
            <img src="${item.image}" alt="${item.title}" class="card-image" loading="lazy" onerror="handleImageError(this)">
            <div class="card-content">
                <span class="card-emoji">${item.emoji}</span>
                <h3 class="card-title">${item.title}</h3>
                <p class="card-description">${item.description}</p>
                <div class="card-meta">
                    <span>📅 ${item.date}</span>
                    <span>⏰ ${item.time}</span>
                    <span>📍 ${item.location}</span>
                </div>
                ${item.badge ? `<span class="card-badge">${item.badge}</span>` : ''}
            </div>
        </div>
    `).join('');
}

// ===== SHOW GEEK SHOCK DETAIL =====
function showGeekShockDetail(id) {
    const data = getData();
    const gs = data.geekShock || defaultData.geekShock;
    const item = gs.items.find(i => i.id === id);
    if (!item) return;

    const modal = document.getElementById('detail-modal');
    const body = document.getElementById('modal-body');
    if (!modal || !body) return;

    body.innerHTML = `
        <span style="font-size:3rem; display:block; text-align:center; margin-bottom:1rem">${item.emoji}</span>
        <h3 style="font-family:'Creepster',cursive; color:var(--accent-blue); font-size:1.8rem; text-align:center; margin-bottom:1rem">${item.title}</h3>
        <img src="${item.image}" style="width:100%; border-radius:12px; margin-bottom:1rem" onerror="handleImageError(this)" alt="${item.title}">
        <p>${item.description}</p>
        <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:1rem; margin-top:1.5rem; text-align:center">
            <div style="background:var(--bg-darker); padding:1rem; border-radius:10px">
                <div style="font-size:1.5rem">📅</div>
                <div style="color:var(--text-dim); font-size:0.85rem">Fecha</div>
                <div style="color:var(--accent-blue); font-weight:bold">${item.date}</div>
            </div>
            <div style="background:var(--bg-darker); padding:1rem; border-radius:10px">
                <div style="font-size:1.5rem">⏰</div>
                <div style="color:var(--text-dim); font-size:0.85rem">Hora</div>
                <div style="color:var(--accent-blue); font-weight:bold">${item.time}</div>
            </div>
            <div style="background:var(--bg-darker); padding:1rem; border-radius:10px">
                <div style="font-size:1.5rem">📍</div>
                <div style="color:var(--text-dim); font-size:0.85rem">Lugar</div>
                <div style="color:var(--accent-blue); font-weight:bold">${item.location}</div>
            </div>
        </div>
        ${item.badge ? `<div style="text-align:center; margin-top:1rem"><span style="background:var(--accent-blue); color:#000; padding:0.3rem 1rem; border-radius:20px; font-size:0.9rem">${item.badge}</span></div>` : ''}
    `;
    modal.classList.add('active');
}

// ===== SHOW DETAIL MODAL =====
function showDetail(type, id) {
    const data = getData();
    const modal = document.getElementById('detail-modal');
    const body = document.getElementById('modal-body');
    if (!modal || !body) return;

    let item, html;

    switch(type) {
        case 'event':
            item = data.events.find(e => e.id === id);
            if (!item) return;
            html = `
                <span style="font-size:3rem; display:block; text-align:center; margin-bottom:1rem">${item.emoji}</span>
                <h3 style="font-family:'Creepster',cursive; color:var(--primary); font-size:1.8rem; text-align:center; margin-bottom:1rem">${item.title}</h3>
                <img src="${item.image}" style="width:100%; border-radius:12px; margin-bottom:1rem" onerror="handleImageError(this)" alt="${item.title}">
                <p>${item.description}</p>
                <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:1rem; margin-top:1.5rem; text-align:center">
                    <div style="background:var(--bg-darker); padding:1rem; border-radius:10px">
                        <div style="font-size:1.5rem">📅</div>
                        <div style="color:var(--text-dim); font-size:0.85rem">Fecha</div>
                        <div style="color:var(--primary); font-weight:bold">${item.date}</div>
                    </div>
                    <div style="background:var(--bg-darker); padding:1rem; border-radius:10px">
                        <div style="font-size:1.5rem">⏰</div>
                        <div style="color:var(--text-dim); font-size:0.85rem">Hora</div>
                        <div style="color:var(--primary); font-weight:bold">${item.time}</div>
                    </div>
                    <div style="background:var(--bg-darker); padding:1rem; border-radius:10px">
                        <div style="font-size:1.5rem">📍</div>
                        <div style="color:var(--text-dim); font-size:0.85rem">Lugar</div>
                        <div style="color:var(--primary); font-weight:bold">${item.location}</div>
                    </div>
                </div>
            `;
            break;
        case 'short':
            item = data.shorts.find(s => s.id === id);
            if (!item) return;
            html = `
                <span style="font-size:3rem; display:block; text-align:center; margin-bottom:1rem">${item.emoji}</span>
                <h3 style="font-family:'Creepster',cursive; color:var(--primary); font-size:1.8rem; text-align:center; margin-bottom:1rem">${item.title}</h3>
                <img src="${item.image}" style="width:100%; border-radius:12px; margin-bottom:1rem" onerror="handleImageError(this)" alt="${item.title}">
                <p>${item.description}</p>
                <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:1rem; margin-top:1.5rem; text-align:center">
                    <div style="background:var(--bg-darker); padding:1rem; border-radius:10px">
                        <div style="font-size:1.5rem">🎬</div>
                        <div style="color:var(--text-dim); font-size:0.85rem">Director</div>
                        <div style="color:var(--primary); font-weight:bold">${item.director}</div>
                    </div>
                    <div style="background:var(--bg-darker); padding:1rem; border-radius:10px">
                        <div style="font-size:1.5rem">⏱️</div>
                        <div style="color:var(--text-dim); font-size:0.85rem">Duración</div>
                        <div style="color:var(--primary); font-weight:bold">${item.duration}</div>
                    </div>
                    <div style="background:var(--bg-darker); padding:1rem; border-radius:10px">
                        <div style="font-size:1.5rem">📅</div>
                        <div style="color:var(--text-dim); font-size:0.85rem">Año</div>
                        <div style="color:var(--primary); font-weight:bold">${item.year}</div>
                    </div>
                </div>
                <div style="text-align:center; margin-top:1rem; color:var(--secondary); font-size:1.1rem">🎭 ${item.genre}</div>
            `;
            break;
        case 'movie':
            item = data.movies.find(m => m.id === id);
            if (!item) return;
            html = `
                <span style="font-size:3rem; display:block; text-align:center; margin-bottom:1rem">${item.emoji}</span>
                <h3 style="font-family:'Creepster',cursive; color:var(--primary); font-size:1.8rem; text-align:center; margin-bottom:1rem">${item.title}</h3>
                <img src="${item.image}" style="width:100%; border-radius:12px; margin-bottom:1rem" onerror="handleImageError(this)" alt="${item.title}">
                <p>${item.description}</p>
                <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:1rem; margin-top:1.5rem; text-align:center">
                    <div style="background:var(--bg-darker); padding:1rem; border-radius:10px">
                        <div style="font-size:1.5rem">🎬</div>
                        <div style="color:var(--text-dim); font-size:0.85rem">Director</div>
                        <div style="color:var(--primary); font-weight:bold">${item.director}</div>
                    </div>
                    <div style="background:var(--bg-darker); padding:1rem; border-radius:10px">
                        <div style="font-size:1.5rem">⏱️</div>
                        <div style="color:var(--text-dim); font-size:0.85rem">Duración</div>
                        <div style="color:var(--primary); font-weight:bold">${item.duration}</div>
                    </div>
                    <div style="background:var(--bg-darker); padding:1rem; border-radius:10px">
                        <div style="font-size:1.5rem">📅</div>
                        <div style="color:var(--text-dim); font-size:0.85rem">Año</div>
                        <div style="color:var(--primary); font-weight:bold">${item.year}</div>
                    </div>
                </div>
                <div style="text-align:center; margin-top:1rem; color:var(--accent-yellow); font-size:1.3rem">${item.rating}</div>
                <div style="text-align:center; color:var(--secondary); font-size:1.1rem">🎭 ${item.genre}</div>
            `;
            break;
        case 'artist':
            item = data.artists.find(a => a.id === id);
            if (!item) return;
            html = `
                <span style="font-size:3rem; display:block; text-align:center; margin-bottom:1rem">${item.emoji}</span>
                <h3 style="font-family:'Creepster',cursive; color:var(--primary); font-size:1.8rem; text-align:center; margin-bottom:1rem">${item.name}</h3>
                <img src="${item.image}" style="width:100%; border-radius:12px; margin-bottom:1rem" onerror="handleImageError(this)" alt="${item.name}">
                <p style="text-align:center; color:var(--secondary); font-size:1.1rem; margin-bottom:1rem">🎵 ${item.genre}</p>
                <p>${item.description}</p>
            `;
            break;
        case 'guest':
            item = data.guests.find(g => g.id === id);
            if (!item) return;
            html = `
                <span style="font-size:3rem; display:block; text-align:center; margin-bottom:1rem">${item.emoji}</span>
                <h3 style="font-family:'Creepster',cursive; color:var(--primary); font-size:1.8rem; text-align:center; margin-bottom:1rem">${item.name}</h3>
                <img src="${item.image}" style="width:100%; border-radius:12px; margin-bottom:1rem" onerror="handleImageError(this)" alt="${item.name}">
                <p style="text-align:center; color:var(--secondary); font-size:1.1rem; margin-bottom:1rem">🎤 ${item.role}</p>
                <p>${item.description}</p>
            `;
            break;
        case 'jury':
            item = data.jury.find(j => j.id === id);
            if (!item) return;
            html = `
                <span style="font-size:3rem; display:block; text-align:center; margin-bottom:1rem">${item.emoji}</span>
                <h3 style="font-family:'Creepster',cursive; color:var(--primary); font-size:1.8rem; text-align:center; margin-bottom:1rem">${item.name}</h3>
                <img src="${item.image}" style="width:100%; border-radius:12px; margin-bottom:1rem" onerror="handleImageError(this)" alt="${item.name}">
                <p style="text-align:center; color:var(--secondary); font-size:1.1rem; margin-bottom:0.5rem">⚖️ ${item.role}</p>
                <p style="text-align:center; color:var(--accent-yellow); font-size:1rem; margin-bottom:1rem">🎓 Especialidad: ${item.specialty}</p>
                <p>${item.description}</p>
            `;
            break;
        case 'gallery':
            item = data.gallery.find(g => g.id === id);
            if (!item) return;
            html = `
                <span style="font-size:3rem; display:block; text-align:center; margin-bottom:1rem">${item.emoji}</span>
                <h3 style="font-family:'Creepster',cursive; color:var(--primary); font-size:1.8rem; text-align:center; margin-bottom:1rem">${item.title}</h3>
                <img src="${item.image}" style="width:100%; border-radius:12px" onerror="handleImageError(this)" alt="${item.title}">
            `;
            break;
        case 'award':
            item = data.awards.find(a => a.id === id);
            if (!item) return;
            html = `
                <span style="font-size:4rem; display:block; text-align:center; margin-bottom:1rem">${item.emoji}</span>
                <h3 style="font-family:'Creepster',cursive; color:var(--accent-yellow); font-size:1.8rem; text-align:center; margin-bottom:1rem">${item.category}</h3>
                <div style="text-align:center; font-size:1.5rem; color:var(--primary); font-weight:bold; margin-bottom:1rem">🏅 ${item.winner}</div>
                <p style="text-align:center">${item.description}</p>
                <div style="text-align:center; margin-top:1rem; color:var(--text-dim)">📅 Año: ${item.year}</div>
            `;
            break;
        case 'news':
            item = data.news.find(n => n.id === id);
            if (!item) return;
            html = `
                <img src="${item.image}" style="width:100%; border-radius:12px; margin-bottom:1rem" onerror="handleImageError(this)" alt="${item.title}">
                <span style="font-size:2rem; display:block; text-align:center; margin-bottom:0.5rem">${item.emoji}</span>
                <h3 style="font-family:'Creepster',cursive; color:var(--primary); font-size:1.6rem; text-align:center; margin-bottom:1rem">${item.title}</h3>
                <div style="text-align:center; color:var(--accent-yellow); margin-bottom:1rem">📅 ${item.date} | 🏷️ ${item.tag}</div>
                <p>${item.excerpt}</p>
            `;
            break;
        case 'ticket':
            item = data.tickets.find(t => t.id === id);
            if (!item) return;
            html = `
                <span style="font-size:3rem; display:block; text-align:center; margin-bottom:1rem">${item.emoji}</span>
                <h3 style="font-family:'Creepster',cursive; color:var(--primary); font-size:1.8rem; text-align:center; margin-bottom:1rem">${item.name}</h3>
                <p>${item.description}</p>
                <div style="font-family:'Nosifer',cursive; font-size:2rem; color:var(--secondary); text-align:center; margin:1rem 0">${item.price}€</div>
                <ul style="list-style:none; padding:0; margin:1rem 0">
                    ${item.features.map(f => `<li style="padding:0.5rem; background:var(--bg-darker); margin:0.3rem 0; border-radius:8px">✓ ${f}</li>`).join('')}
                </ul>
                <button class="btn btn-primary" style="width:100%; margin-top:1rem">🛒 Comprar Ahora</button>
            `;
            break;
    }

    body.innerHTML = html;
    modal.classList.add('active');
}

// ===== CLOSE MODAL =====
document.addEventListener('click', (e) => {
    const modal = document.getElementById('detail-modal');
    if (!modal) return;
    if (e.target === modal || e.target.classList.contains('modal-close')) {
        modal.classList.remove('active');
    }
});

// ===== MOBILE MENU =====
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});

// ===== SCROLL EFFECTS =====
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(0, 0, 0, 0.98)';
            navbar.style.boxShadow = '0 5px 30px rgba(255,0,0,0.3)';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }
});

// ===== CONTACT FORM =====
function handleContact(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const btn = e.target.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = '⏳ Enviando...';
    btn.disabled = true;

    setTimeout(() => {
        btn.textContent = '✅ ¡Mensaje Enviado!';
        btn.style.background = 'linear-gradient(135deg, #00cc44, #009933)';
        e.target.reset();

        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
            btn.disabled = false;
        }, 3000);
    }, 1500);
}

// ===== IMAGE ERROR HANDLER =====
function handleImageError(img) {
    img.onerror = null;
    img.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200"><rect width="400" height="200" fill="%230a0a0a"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ff0000" font-family="Creepster" font-size="24">🎃 Imagen no disponible</text></svg>';
}

// ===== SINCRONIZACIÓN ENTRE PESTAÑAS =====
function setupSync() {
    window.addEventListener('storage', (e) => {
        if (e.key === 'baidefest_data') {
            __appData = null;
            renderAll();
        }
    });

    if (typeof BroadcastChannel !== 'undefined') {
        const channel = new BroadcastChannel('baidefest_sync');
        channel.onmessage = () => {
            __appData = null;
            renderAll();
        };
    }
}

// ===== RENDER ALL =====
function renderAll() {
    renderProgram();
    renderEvents();
    renderShorts();
    renderMovies();
    renderArtists();
    renderGuests();
    renderJury();
    renderGallery();
    renderAwards();
    renderNews();
    renderInfo();
    renderTickets();
    renderGeekShock();
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    setupSync();
    renderAll();
    updateCountdown();
    setInterval(updateCountdown, 1000);
});
