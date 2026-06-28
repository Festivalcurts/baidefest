// ===== CONFIG =====
const ADMIN_PASSWORD = 'terror';
let currentSection = 'events';
let editingId = null;
let deleteId = null;
let isLoggedIn = false;
let appData = null;
let currentUploadField = null;
let uploadedImageData = {};

// ===== SCHEMAS =====
const schemas = {
    events: {
        title: 'Eventos',
        emoji: '\ud83c\udfad',
        fields: [
            { key: 'emoji', label: 'Emoticono', type: 'text', placeholder: '\ud83c\udf83' },
            { key: 'title', label: 'Titulo', type: 'text', placeholder: 'Nombre del evento' },
            { key: 'description', label: 'Descripcion', type: 'textarea', placeholder: 'Describe el evento...' },
            { key: 'date', label: 'Fecha', type: 'text', placeholder: '31 Oct 2026' },
            { key: 'time', label: 'Hora', type: 'text', placeholder: '20:00' },
            { key: 'location', label: 'Ubicacion', type: 'text', placeholder: 'Bosque Tenebroso' },
            { key: 'category', label: 'Categoria', type: 'select', options: ['recorrido', 'atraccion', 'experiencia', 'espectaculo', 'fiesta'] },
            { key: 'image', label: 'Imagen', type: 'image', placeholder: 'https://...' }
        ]
    },
    shorts: {
        title: 'Cortos',
        emoji: '\ud83c\udfac',
        fields: [
            { key: 'emoji', label: 'Emoticono', type: 'text', placeholder: '\ud83d\udcf9' },
            { key: 'title', label: 'Titulo', type: 'text', placeholder: 'Nombre del corto' },
            { key: 'director', label: 'Director', type: 'text', placeholder: 'Nombre del director' },
            { key: 'duration', label: 'Duracion', type: 'text', placeholder: '12 min' },
            { key: 'year', label: 'Ano', type: 'number', placeholder: '2025' },
            { key: 'genre', label: 'Genero', type: 'text', placeholder: 'Sobrenatural' },
            { key: 'description', label: 'Descripcion', type: 'textarea', placeholder: 'Describe el corto...' },
            { key: 'image', label: 'Imagen', type: 'image', placeholder: 'https://...' }
        ]
    },
    movies: {
        title: 'Peliculas',
        emoji: '\ud83c\udf9e\ufe0f',
        fields: [
            { key: 'emoji', label: 'Emoticono', type: 'text', placeholder: '\ud83c\udf9e\ufe0f' },
            { key: 'title', label: 'Titulo', type: 'text', placeholder: 'Nombre de la pelicula' },
            { key: 'director', label: 'Director', type: 'text', placeholder: 'Nombre del director' },
            { key: 'year', label: 'Ano', type: 'number', placeholder: '2025' },
            { key: 'duration', label: 'Duracion', type: 'text', placeholder: '118 min' },
            { key: 'genre', label: 'Genero', type: 'text', placeholder: 'Terror Gotico' },
            { key: 'rating', label: 'Valoracion', type: 'text', placeholder: '\u2b50\u2b50\u2b50\u2b50\u2b50' },
            { key: 'description', label: 'Descripcion', type: 'textarea', placeholder: 'Describe la pelicula...' },
            { key: 'image', label: 'Imagen', type: 'image', placeholder: 'https://...' }
        ]
    },
    geekShock: {
        title: 'Geek Shock Cinema',
        emoji: '\ud83e\udde0',
        fields: [
            { key: 'emoji', label: 'Emoticono', type: 'text', placeholder: '\ud83e\udd16' },
            { key: 'title', label: 'Titulo', type: 'text', placeholder: 'Nombre del evento' },
            { key: 'description', label: 'Descripcion', type: 'textarea', placeholder: 'Describe el evento...' },
            { key: 'date', label: 'Fecha', type: 'text', placeholder: '31 Oct 2026' },
            { key: 'time', label: 'Hora', type: 'text', placeholder: '20:00' },
            { key: 'location', label: 'Ubicacion', type: 'text', placeholder: 'Sala VR' },
            { key: 'category', label: 'Categoria', type: 'text', placeholder: 'maraton' },
            { key: 'badge', label: 'Badge', type: 'text', placeholder: 'Imperdible' },
            { key: 'image', label: 'Imagen', type: 'image', placeholder: 'https://...' }
        ]
    },
    artists: {
        title: 'Artistas',
        emoji: '\ud83e\udddb',
        fields: [
            { key: 'emoji', label: 'Emoticono', type: 'text', placeholder: '\ud83e\udddb' },
            { key: 'name', label: 'Nombre', type: 'text', placeholder: 'Nombre del artista' },
            { key: 'genre', label: 'Genero', type: 'text', placeholder: 'Dark Synthwave' },
            { key: 'description', label: 'Descripcion', type: 'textarea', placeholder: 'Describe al artista...' },
            { key: 'image', label: 'Imagen', type: 'image', placeholder: 'https://...' }
        ]
    },
    guests: {
        title: 'Invitados',
        emoji: '\ud83c\udfa4',
        fields: [
            { key: 'emoji', label: 'Emoticono', type: 'text', placeholder: '\ud83e\udddb' },
            { key: 'name', label: 'Nombre', type: 'text', placeholder: 'Nombre del invitado' },
            { key: 'role', label: 'Rol', type: 'text', placeholder: 'Actor Legendario' },
            { key: 'description', label: 'Descripcion', type: 'textarea', placeholder: 'Describe al invitado...' },
            { key: 'image', label: 'Imagen', type: 'image', placeholder: 'https://...' }
        ]
    },
    jury: {
        title: 'Jurado',
        emoji: '\u2696\ufe0f',
        fields: [
            { key: 'emoji', label: 'Emoticono', type: 'text', placeholder: '\ud83e\uddd1\u200d\u2696\ufe0f' },
            { key: 'name', label: 'Nombre', type: 'text', placeholder: 'Nombre del jurado' },
            { key: 'role', label: 'Rol', type: 'text', placeholder: 'Presidente del Jurado' },
            { key: 'specialty', label: 'Especialidad', type: 'text', placeholder: 'Cine de Terror' },
            { key: 'description', label: 'Descripcion', type: 'textarea', placeholder: 'Describe al miembro del jurado...' },
            { key: 'image', label: 'Imagen', type: 'image', placeholder: 'https://...' }
        ]
    },
    gallery: {
        title: 'Galeria',
        emoji: '\ud83d\udcf8',
        fields: [
            { key: 'emoji', label: 'Emoticono', type: 'text', placeholder: '\ud83c\udf83' },
            { key: 'title', label: 'Titulo', type: 'text', placeholder: 'Titulo de la imagen' },
            { key: 'image', label: 'Imagen', type: 'image', placeholder: 'https://...' }
        ]
    },
    awards: {
        title: 'Premios',
        emoji: '\ud83c\udfc6',
        fields: [
            { key: 'emoji', label: 'Emoticono', type: 'text', placeholder: '\ud83c\udfc6' },
            { key: 'category', label: 'Categoria', type: 'text', placeholder: 'Mejor Pelicula' },
            { key: 'winner', label: 'Ganador', type: 'text', placeholder: 'Nombre del ganador' },
            { key: 'description', label: 'Descripcion', type: 'textarea', placeholder: 'Describe el premio...' },
            { key: 'year', label: 'Ano', type: 'number', placeholder: '2025' }
        ]
    },
    news: {
        title: 'Noticias',
        emoji: '\ud83d\udcf0',
        fields: [
            { key: 'emoji', label: 'Emoticono', type: 'text', placeholder: '\ud83d\udcf0' },
            { key: 'title', label: 'Titulo', type: 'text', placeholder: 'Titulo de la noticia' },
            { key: 'excerpt', label: 'Extracto', type: 'textarea', placeholder: 'Resumen de la noticia...' },
            { key: 'date', label: 'Fecha', type: 'text', placeholder: '15 Jun 2026' },
            { key: 'tag', label: 'Etiqueta', type: 'text', placeholder: 'Invitados' },
            { key: 'image', label: 'Imagen', type: 'image', placeholder: 'https://...' }
        ]
    },
    info: {
        title: 'Informacion',
        emoji: '\u2139\ufe0f',
        fields: [
            { key: 'emoji', label: 'Emoticono', type: 'text', placeholder: '\ud83d\udccd' },
            { key: 'title', label: 'Titulo', type: 'text', placeholder: 'Como Llegar' },
            { key: 'description', label: 'Descripcion', type: 'textarea', placeholder: 'Describe la informacion...' }
        ]
    },
    tickets: {
        title: 'Entradas',
        emoji: '\ud83c\udfab',
        fields: [
            { key: 'emoji', label: 'Emoticono', type: 'text', placeholder: '\ud83c\udfab' },
            { key: 'name', label: 'Nombre', type: 'text', placeholder: 'Pase del Miedo' },
            { key: 'description', label: 'Descripcion', type: 'textarea', placeholder: 'Describe la entrada...' },
            { key: 'price', label: 'Precio (EUR)', type: 'number', placeholder: '25' },
            { key: 'features', label: 'Caracteristicas (separadas por coma)', type: 'textarea', placeholder: '3 Atracciones, Mapa, Pulsera' },
            { key: 'badge', label: 'Badge', type: 'text', placeholder: 'Popular / VIP' }
        ]
    },
    program: {
        title: 'Programa',
        emoji: '\ud83d\udccb',
        fields: [
            { key: 'day', label: 'Dia', type: 'text', placeholder: '31 de Octubre' },
            { key: 'emoji', label: 'Emoticono del dia', type: 'text', placeholder: '\ud83c\udf83' },
            { key: 'items', label: 'Actividades (JSON)', type: 'textarea', placeholder: '[{"time":"20:00","name":"Evento","location":"Lugar"}]' }
        ]
    }
};

// ===== DEFAULT DATA =====
function getDefaultData() {
    return {
        events: [
            { id: 1, emoji: '\ud83c\udf83', title: 'Noche de Calabazas Malditas', description: 'Un recorrido por el bosque encantado donde las calabazas cobran vida.', date: '31 Oct 2026', time: '20:00', location: 'Bosque Tenebroso', category: 'recorrido', image: 'https://images.unsplash.com/photo-1509557965875-b88c97052f0e?w=400' },
            { id: 2, emoji: '\ud83d\udc7b', title: 'Casa de los Espiritus', description: 'Una mansion abandonada donde los fantasmas aun deambulan.', date: '31 Oct 2026', time: '22:00', location: 'Mansion Blackwood', category: 'atraccion', image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400' },
            { id: 3, emoji: '\ud83e\udddf', title: 'Invasion Zombie', description: 'Los muertos han despertado. Sobreviviras?', date: '1 Nov 2026', time: '21:00', location: 'Zona de Cuarentena', category: 'experiencia', image: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=400' },
            { id: 4, emoji: '\ud83e\udd87', title: 'Vuelo Nocturno de Murcielagos', description: 'Miles de murcielagos surcando el cielo.', date: '1 Nov 2026', time: '19:30', location: 'Cueva Oscura', category: 'espectaculo', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400' },
            { id: 5, emoji: '\ud83d\udd2a', title: 'El Laboratorio del Dr. Muerte', description: 'Experimentos fallidos y criaturas hibridas.', date: '2 Nov 2026', time: '23:00', location: 'Laboratorio Subterraneo', category: 'atraccion', image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400' },
            { id: 6, emoji: '\ud83e\ude78', title: 'Baile de Sangre', description: 'La fiesta mas macabra del festival.', date: '2 Nov 2026', time: '00:00', location: 'Carpa Principal', category: 'fiesta', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400' }
        ],
        shorts: [
            { id: 1, emoji: '\ud83d\udcf9', title: 'El Espejo Maldito', director: 'Ana Vampirica', duration: '12 min', year: 2025, genre: 'Sobrenatural', description: 'Un espejo antiguo que muestra el futuro...', image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400' },
            { id: 2, emoji: '\ud83c\udfac', title: 'Ultima Llamada', director: 'Carlos Terror', duration: '8 min', year: 2025, genre: 'Thriller', description: 'Una llamada desde el mas alla.', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400' }
        ],
        movies: [
            { id: 1, emoji: '\ud83c\udf9e\ufe0f', title: 'La Noche Eterna', director: 'Guillermo del Toro', year: 2025, duration: '118 min', genre: 'Terror Gotico', rating: '\u2b50\u2b50\u2b50\u2b50\u2b50', description: 'Un pueblo atrapado en una noche sin fin.', image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400' },
            { id: 2, emoji: '\ud83c\udfc7', title: 'El Ultimo Exorcismo', director: 'James Wan', year: 2025, duration: '102 min', genre: 'Exorcismo', rating: '\u2b50\u2b50\u2b50\u2b50', description: 'El exorcista mas famoso del mundo.', image: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=400' }
        ],
        geekShock: {
            intro: { title: '\ud83e\udde0 Geek Shock Cinema', description: 'Seccion dedicada al cine de terror geek, sci-fi y cult.' },
            items: [
                { id: 1, emoji: '\ud83e\udd16', title: 'Maraton Cyberpunk', description: 'Tres dias de proyecciones ininterrumpidas.', date: '31 Oct 2026', time: '18:00', location: 'Sala VR', category: 'maraton', badge: 'Imperdible', image: 'https://images.unsplash.com/photo-1535378437327-b71494669e9d?w=400' },
                { id: 2, emoji: '\ud83d\udc7e', title: 'Terror Retro Arcade', description: 'Proyeccion de peliculas de terror de los 80 y 90.', date: '1 Nov 2026', time: '16:00', location: 'Sala Retro', category: 'retro', badge: 'Nostalgia', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400' }
            ]
        },
        artists: [
            { id: 1, emoji: '\ud83e\udddb', name: 'Vladimir el Conde', genre: 'Dark Synthwave', description: 'El legendario vampiro que toca desde 1897.', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400' },
            { id: 2, emoji: '\ud83d\udc80', name: 'DJ Calavera', genre: 'Terror Bass', description: 'Mezclas que haran vibrar hasta los huesos.', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400' },
            { id: 3, emoji: '\ud83d\udc7b', name: 'Phantom Voices', genre: 'Ambient Horror', description: 'Sonidos etereos de otra dimension.', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400' },
            { id: 4, emoji: '\ud83e\udddf', name: 'Los No-Muertos', genre: 'Zombie Rock', description: 'La banda que nunca deja de tocar.', image: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=400' }
        ],
        guests: [
            { id: 1, emoji: '\ud83e\udddb', name: 'Bela Lugosi Jr.', role: 'Actor Legendario', description: 'Heredero del legado del Dracula mas famoso.', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400' },
            { id: 2, emoji: '\ud83d\udc7b', name: 'Shirley Jackson II', role: 'Escritora de Terror', description: 'Nieta de la legendaria Shirley Jackson.', image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400' }
        ],
        jury: [
            { id: 1, emoji: '\ud83e\uddd1\u200d\u2696\ufe0f', name: 'Prof. Dracula Van Helsing', role: 'Presidente del Jurado', specialty: 'Cine de Terror', description: 'Historiador del cine de terror con mas de 40 anos de experiencia.', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400' },
            { id: 2, emoji: '\ud83d\udc69\u200d\u2696\ufe0f', name: 'Dra. Morticia Raven', role: 'Jurado Principal', specialty: 'Terror Psicologico', description: 'Psicologa forense especializada en el analisis del terror en el cine.', image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400' },
            { id: 3, emoji: '\ud83e\uddd1\u200d\u2696\ufe0f', name: 'Sr. Edgar Poe III', role: 'Jurado Principal', specialty: 'Guion y Narrativa', description: 'Bisnieto del maestro Edgar Allan Poe.', image: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=400' }
        ],
        gallery: [
            { id: 1, emoji: '\ud83c\udf83', title: 'Calabazas Malditas', image: 'https://images.unsplash.com/photo-1509557965875-b88c97052f0e?w=400' },
            { id: 2, emoji: '\ud83d\udc7b', title: 'Fantasma en el Espejo', image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400' },
            { id: 3, emoji: '\ud83e\udddf', title: 'Horda Zombie', image: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=400' },
            { id: 4, emoji: '\ud83e\udd87', title: 'Murcielagos al Anochecer', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400' }
        ],
        awards: [
            { id: 1, emoji: '\ud83c\udfc6', category: 'Mejor Pelicula de Terror', winner: 'La Noche Eterna', description: 'Premio a la mejor pelicula.', year: 2025 },
            { id: 2, emoji: '\ud83e\udd47', category: 'Mejor Cortometraje', winner: 'El Espejo Maldito', description: 'Reconocimiento al mejor corto.', year: 2025 }
        ],
        news: [
            { id: 1, emoji: '\ud83d\udcf0', title: 'Guillermo del Toro confirmado', excerpt: 'El aclamado director presentara su nueva pelicula.', date: '15 Jun 2026', tag: 'Invitados', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400' },
            { id: 2, emoji: '\ud83c\udfab', title: 'Entradas VIP agotadas', excerpt: 'El Pase Senor de la Oscuridad se vendio en tiempo record.', date: '10 Jun 2026', tag: 'Entradas', image: 'https://images.unsplash.com/photo-1509557965875-b88c97052f0e?w=400' }
        ],
        info: [
            { id: 1, emoji: '\ud83d\udccd', title: 'Como Llegar', description: 'El festival se celebra en el Cementerio Viejo de Transilvania.' },
            { id: 2, emoji: '\ud83c\udf7d\ufe0f', title: 'Gastronomia Terrorifica', description: 'Mas de 20 food trucks con comida tematica.' }
        ],
        tickets: [
            { id: 1, emoji: '\ud83c\udfab', name: 'Pase del Miedo', description: 'Acceso a 3 atracciones.', price: 25, features: ['3 Atracciones', 'Mapa', 'Pulsera'], badge: 'Popular' },
            { id: 2, emoji: '\ud83d\udc80', name: 'Pase Terror Total', description: 'Acceso ilimitado.', price: 45, features: ['Ilimitado', 'Cola preferente', 'Camiseta'], badge: 'Mejor valor' },
            { id: 3, emoji: '\ud83d\udc51', name: 'Pase Senor de la Oscuridad', description: 'Todo incluido VIP.', price: 80, features: ['Todo', 'VIP', 'Cena', 'Merch'], badge: 'VIP' }
        ],
        program: [
            { id: 1, day: '31 de Octubre', emoji: '\ud83c\udf83', items: [
                { time: '18:00', name: 'Apertura', location: 'Entrada' },
                { time: '20:00', name: 'Noche de Calabazas', location: 'Bosque' }
            ]},
            { id: 2, day: '1 de Noviembre', emoji: '\ud83d\udc7b', items: [
                { time: '10:00', name: 'Taller FX', location: 'Zona Creativa' },
                { time: '21:00', name: 'Invasion Zombie', location: 'Cuarentena' }
            ]}
        ]
    };
}

// ===== SAFE STORAGE =====
function safeGetData() {
    if (appData) return appData;
    try {
        const stored = localStorage.getItem('baidefest_data');
        if (stored) { 
            appData = JSON.parse(stored); 
            if (!appData.geekShock) {
                appData.geekShock = getDefaultData().geekShock;
                safeSaveData(appData);
            }
            return appData; 
        }
    } catch (e) { 
        console.warn('localStorage no disponible'); 
    }
    appData = getDefaultData();
    safeSaveData(appData);
    return appData;
}

function safeSaveData(data) {
    appData = data;
    try { 
        localStorage.setItem('baidefest_data', JSON.stringify(data)); 
    }
    catch (e) { 
        console.warn('localStorage no disponible'); 
    }
}

// ===== LOGIN =====
function login() {
    const passwordInput = document.getElementById('admin-password');
    if (!passwordInput) {
        showToast('Error: No se encontro el campo de contrasena', 'error');
        return;
    }
    const password = passwordInput.value;
    if (password === ADMIN_PASSWORD) {
        isLoggedIn = true;
        const loginScreen = document.getElementById('login-screen');
        const adminPanel = document.getElementById('admin-panel');
        if (loginScreen) loginScreen.style.display = 'none';
        if (adminPanel) {
            adminPanel.style.display = 'flex';
            showSection('events');
        }
        showToast('\ud83e\udddf\u200d\u2640\ufe0f Bienvenido al Infierno, Admin', 'success');
    } else {
        showToast('\ud83d\udeab Contrasena incorrecta', 'error');
        passwordInput.value = '';
        passwordInput.style.borderColor = '#ff0000';
        setTimeout(() => { 
            passwordInput.style.borderColor = 'var(--border)'; 
        }, 1000);
    }
}

function logout() {
    isLoggedIn = false;
    const loginScreen = document.getElementById('login-screen');
    const adminPanel = document.getElementById('admin-panel');
    if (loginScreen) loginScreen.style.display = 'flex';
    if (adminPanel) adminPanel.style.display = 'none';
    const passwordInput = document.getElementById('admin-password');
    if (passwordInput) passwordInput.value = '';
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    console.log('Admin JS v3.0 - BaiDeFest');
    createParticles();
    const passwordInput = document.getElementById('admin-password');
    if (passwordInput) {
        passwordInput.addEventListener('keypress', (e) => { 
            if (e.key === 'Enter') login(); 
        });
    }
});

// ===== PARTICLES =====
function createParticles() {
    const container = document.getElementById('particles-container');
    if (!container) return;
    container.innerHTML = '';
    const emojis = ['\ud83d\udc7b', '\ud83c\udf83', '\ud83d\udc80', '\ud83e\udddf', '\ud83e\udd87', '\ud83d\udd77\ufe0f', '\ud83d\udc78', '\ud83e\udea6', '\ud83d\udd2a', '\ud83e\ude78'];
    for (let i = 0; i < 20; i++) {
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

// ===== SECTION NAVIGATION =====
function showSection(section) {
    currentSection = section;

    // Update sidebar active state
    document.querySelectorAll('.sidebar-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.section === section) link.classList.add('active');
    });

    // Update section title
    const sectionTitle = document.getElementById('section-title');
    const schema = schemas[section];
    if (sectionTitle && schema) {
        sectionTitle.textContent = schema.emoji + ' Gestion de ' + schema.title;
    }

    // Show/hide sections
    const statsSection = document.getElementById('stats-section');
    const tableSection = document.getElementById('table-section');

    if (section === 'stats') {
        if (statsSection) statsSection.style.display = 'block';
        if (tableSection) tableSection.style.display = 'none';
        renderStats();
    } else {
        if (statsSection) statsSection.style.display = 'none';
        if (tableSection) tableSection.style.display = 'block';
        renderTable(section);
    }
}

// ===== RENDER TABLE =====
function renderTable(section) {
    const data = safeGetData();
    const tableHead = document.getElementById('table-head');
    const tableBody = document.getElementById('table-body');
    const emptyState = document.getElementById('empty-state');
    const tableContainer = document.querySelector('.table-container');

    if (!tableHead || !tableBody) return;

    let items = [];
    if (section === 'geekShock') {
        items = data.geekShock && data.geekShock.items ? data.geekShock.items : [];
    } else {
        items = data[section] || [];
    }

    if (items.length === 0) {
        if (emptyState) emptyState.style.display = 'block';
        if (tableContainer) tableContainer.style.display = 'none';
        tableHead.innerHTML = '';
        tableBody.innerHTML = '';
        return;
    }

    if (emptyState) emptyState.style.display = 'none';
    if (tableContainer) tableContainer.style.display = 'block';

    // Build headers based on schema
    const schema = schemas[section];
    const displayFields = schema.fields.filter(f => f.key !== 'description' && f.key !== 'excerpt' && f.key !== 'items');

    let headHTML = '<tr>';
    displayFields.forEach(f => {
        headHTML += '<th>' + f.label + '</th>';
    });
    headHTML += '<th style="width:120px">Acciones</th></tr>';
    tableHead.innerHTML = headHTML;

    // Build rows
    let bodyHTML = '';
    items.forEach(item => {
        bodyHTML += '<tr>';
        displayFields.forEach(f => {
            let val = item[f.key];
            if (val === undefined || val === null) val = '';
            if (f.key === 'image' && val) {
                if (typeof val === 'string' && val.startsWith('data:image')) {
                    bodyHTML += '<td><img src="' + val + '" class="image-preview-small" alt="img"></td>';
                } else if (typeof val === 'string' && val.startsWith('http')) {
                    bodyHTML += '<td><img src="' + val + '" class="image-preview-small" alt="img" onerror="this.style.display=\'none\'"></td>';
                } else {
                    bodyHTML += '<td>' + val + '</td>';
                }
            } else if (f.key === 'features' && Array.isArray(val)) {
                bodyHTML += '<td>' + val.join(', ') + '</td>';
            } else if (f.key === 'price') {
                bodyHTML += '<td><strong>' + val + ' EUR</strong></td>';
            } else {
                bodyHTML += '<td>' + val + '</td>';
            }
        });
        bodyHTML += '<td class="table-actions">';
        bodyHTML += '<button class="btn btn-small btn-info" onclick="editItem(' + item.id + ')" title="Editar">\u270f\ufe0f</button>';
        bodyHTML += '<button class="btn btn-small btn-danger" onclick="deleteItem(' + item.id + ')" title="Eliminar">\ud83d\uddd1\ufe0f</button>';
        bodyHTML += '</td></tr>';
    });
    tableBody.innerHTML = bodyHTML;
}

// ===== RENDER STATS =====
function renderStats() {
    const data = safeGetData();

    const stats = {
        events: data.events ? data.events.length : 0,
        shorts: data.shorts ? data.shorts.length : 0,
        movies: data.movies ? data.movies.length : 0,
        geekShock: data.geekShock && data.geekShock.items ? data.geekShock.items.length : 0,
        artists: data.artists ? data.artists.length : 0,
        guests: data.guests ? data.guests.length : 0,
        jury: data.jury ? data.jury.length : 0,
        gallery: data.gallery ? data.gallery.length : 0,
        awards: data.awards ? data.awards.length : 0,
        news: data.news ? data.news.length : 0,
        info: data.info ? data.info.length : 0,
        tickets: data.tickets ? data.tickets.length : 0,
        program: data.program ? data.program.length : 0
    };

    for (const [key, val] of Object.entries(stats)) {
        const el = document.getElementById('stat-' + key);
        if (el) el.textContent = val;
    }

    // Bar chart
    const chart = document.getElementById('bar-chart');
    if (!chart) return;

    const chartData = [
        { label: '\ud83c\udfad', value: stats.events, color: '#ff0000' },
        { label: '\ud83c\udfac', value: stats.shorts, color: '#00ff00' },
        { label: '\ud83c\udf9e\ufe0f', value: stats.movies, color: '#ff0000' },
        { label: '\ud83e\udde0', value: stats.geekShock, color: '#00ffff' },
        { label: '\ud83e\udddb', value: stats.artists, color: '#00ff00' },
        { label: '\ud83c\udfa4', value: stats.guests, color: '#ccff00' },
        { label: '\u2696\ufe0f', value: stats.jury, color: '#00ff00' },
        { label: '\ud83d\udcf8', value: stats.gallery, color: '#00ffff' },
        { label: '\ud83c\udfc6', value: stats.awards, color: '#ff00ff' },
        { label: '\ud83d\udcf0', value: stats.news, color: '#ff0000' },
        { label: '\u2139\ufe0f', value: stats.info, color: '#00ffff' },
        { label: '\ud83c\udfab', value: stats.tickets, color: '#00ff00' },
        { label: '\ud83d\udccb', value: stats.program, color: '#ff0000' }
    ];

    const maxVal = Math.max(...chartData.map(d => d.value), 1);

    chart.innerHTML = chartData.map(item => 
        '<div class="bar-item"><div class="bar" style="height:' + (item.value / maxVal * 100) + '%; background:' + item.color + '"></div>' +
        '<div class="bar-label">' + item.label + '<br><strong>' + item.value + '</strong></div></div>'
    ).join('');
}

// ===== FILE UPLOAD =====
function triggerFileUpload(fieldKey) {
    currentUploadField = fieldKey;
    const fileInput = document.getElementById('file-upload-input');
    if (fileInput) fileInput.click();
}

function handleFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) { showToast('Solo se permiten imagenes', 'error'); return; }
    if (file.size > 5 * 1024 * 1024) { showToast('La imagen debe ser menor a 5MB', 'error'); return; }
    const reader = new FileReader();
    reader.onload = (e) => {
        const base64 = e.target.result;
        if (!uploadedImageData[currentSection]) uploadedImageData[currentSection] = {};
        uploadedImageData[currentSection][currentUploadField] = base64;
        const previewContainer = document.getElementById('preview-' + currentUploadField);
        if (previewContainer) previewContainer.innerHTML = '<img src="' + base64 + '" style="max-width:200px; max-height:150px; border-radius:10px; border:2px solid #ff0000; margin-top:0.5rem">';
        const urlInput = document.querySelector('input[name="' + currentUploadField + '"]');
        if (urlInput) { urlInput.value = '[Imagen subida desde PC]'; urlInput.dataset.base64 = base64; }
        showToast('Imagen cargada correctamente', 'success');
    };
    reader.readAsDataURL(file);
    event.target.value = '';
}

// ===== FORM =====
function openForm() {
    editingId = null;
    uploadedImageData[currentSection] = {};
    const schema = schemas[currentSection];
    if (!schema) return;
    const formTitle = document.getElementById('form-title');
    if (formTitle) formTitle.textContent = '\u2795 Nuevo ' + schema.title.slice(0, -1);
    buildFormFields();
    const modal = document.getElementById('form-modal');
    if (modal) modal.classList.add('active');
}

function buildFormFields(itemData) {
    const schema = schemas[currentSection];
    if (!schema) return;
    const fieldsContainer = document.getElementById('form-fields');
    if (!fieldsContainer) return;

    fieldsContainer.innerHTML = schema.fields.map(field => {
        let value = itemData ? (itemData[field.key] || '') : '';
        if (field.key === 'features' && Array.isArray(value)) value = value.join(', ');
        if (field.key === 'items' && Array.isArray(value)) value = JSON.stringify(value, null, 2);

        const valAttr = value ? ' value="' + value + '"' : '';
        const txtContent = value ? value : '';

        if (field.type === 'textarea') {
            return '<div class="form-group"><label>' + field.label + '</label><textarea name="' + field.key + '" placeholder="' + field.placeholder + '" required>' + txtContent + '</textarea></div>';
        } else if (field.type === 'select') {
            return '<div class="form-group"><label>' + field.label + '</label><select name="' + field.key + '" required>' + field.options.map(opt => '<option value="' + opt + '"' + (opt === value ? ' selected' : '') + '>' + opt + '</option>').join('') + '</select></div>';
        } else if (field.type === 'image') {
            const isBase64 = value && typeof value === 'string' && value.startsWith('data:image');
            const previewHtml = isBase64 ? '<img src="' + value + '" style="max-width:200px; max-height:150px; border-radius:10px; border:2px solid #ff0000; margin-top:0.5rem">' : '';
            return '<div class="form-group"><label>' + field.label + '</label><div style="display:flex; gap:0.5rem; align-items:center"><input type="text" name="' + field.key + '"' + valAttr + ' placeholder="' + field.placeholder + '" style="flex:1"><button type="button" class="btn btn-info" onclick="triggerFileUpload(\'' + field.key + '\')" style="padding:0.6rem 1rem; font-size:0.85rem">\ud83d\udcc1 Subir</button></div><div id="preview-' + field.key + '">' + previewHtml + '</div><small style="color:#666; font-size:0.75rem">Pega una URL o sube una imagen desde tu PC</small></div>';
        } else {
            return '<div class="form-group"><label>' + field.label + '</label><input type="' + field.type + '" name="' + field.key + '"' + valAttr + ' placeholder="' + field.placeholder + '" required></div>';
        }
    }).join('');
}

function closeForm() {
    const modal = document.getElementById('form-modal');
    if (modal) modal.classList.remove('active');
    const form = document.getElementById('admin-form');
    if (form) form.reset();
    editingId = null;
    uploadedImageData = {};
    document.querySelectorAll('[id^="preview-"]').forEach(el => el.innerHTML = '');
}

function editItem(id) {
    editingId = id;
    uploadedImageData[currentSection] = {};
    const data = safeGetData();
    const schema = schemas[currentSection];
    if (!schema) return;

    let items = [];
    if (currentSection === 'geekShock') items = data.geekShock && data.geekShock.items ? data.geekShock.items : [];
    else items = data[currentSection] || [];

    const item = items.find(i => i.id === id);
    if (!item) return;

    const formTitle = document.getElementById('form-title');
    if (formTitle) formTitle.textContent = '\u270f\ufe0f Editar ' + schema.title.slice(0, -1);

    buildFormFields(item);

    const modal = document.getElementById('form-modal');
    if (modal) modal.classList.add('active');
}

function saveItem(e) {
    e.preventDefault();
    const data = safeGetData();
    const schema = schemas[currentSection];
    if (!schema) return;
    const form = e.target;
    const formData = new FormData(form);
    const item = {};

    schema.fields.forEach(field => {
        let val = formData.get(field.key);
        if (field.type === 'number') val = val ? parseFloat(val) : 0;
        if (field.key === 'features') val = val ? val.split(',').map(f => f.trim()).filter(f => f) : [];
        if (field.key === 'items') { try { val = val ? JSON.parse(val) : []; } catch (err) { val = []; } }
        if (field.key === 'image') {
            const urlInput = document.querySelector('input[name="' + field.key + '"]');
            if (urlInput && urlInput.dataset.base64) val = urlInput.dataset.base64;
            else if (val === '[Imagen subida desde PC]') {
                if (editingId) {
                    let items = currentSection === 'geekShock' ? (data.geekShock && data.geekShock.items ? data.geekShock.items : []) : (data[currentSection] || []);
                    const existingItem = items.find(i => i.id === editingId);
                    val = (existingItem && existingItem.image) ? existingItem.image : '';
                } else val = '';
            }
        }
        item[field.key] = val;
    });

    if (currentSection === 'geekShock') {
        if (!data.geekShock) data.geekShock = { intro: { title: '\ud83e\udde0 Geek Shock Cinema', description: '' }, items: [] };
        if (editingId) {
            const index = data.geekShock.items.findIndex(i => i.id === editingId);
            if (index !== -1) { item.id = editingId; data.geekShock.items[index] = item; showToast('Actualizado con exito', 'success'); }
        } else { const maxId = Math.max(0, ...data.geekShock.items.map(i => i.id)); item.id = maxId + 1; data.geekShock.items.push(item); showToast('Creado con exito', 'success'); }
    } else {
        if (editingId) {
            const index = data[currentSection].findIndex(i => i.id === editingId);
            if (index !== -1) { item.id = editingId; data[currentSection][index] = item; showToast('Actualizado con exito', 'success'); }
        } else { const maxId = Math.max(0, ...data[currentSection].map(i => i.id)); item.id = maxId + 1; data[currentSection].push(item); showToast('Creado con exito', 'success'); }
    }

    safeSaveData(data);
    closeForm();
    if (currentSection === 'stats') renderStats();
    else renderTable(currentSection);
}

// ===== DELETE =====
function deleteItem(id) {
    deleteId = id;
    const modal = document.getElementById('delete-modal');
    if (modal) modal.classList.add('active');
}

function confirmDelete() {
    if (deleteId) {
        const data = safeGetData();
        if (currentSection === 'geekShock') { 
            if (data.geekShock && data.geekShock.items) data.geekShock.items = data.geekShock.items.filter(i => i.id !== deleteId); 
        }
        else { data[currentSection] = data[currentSection].filter(i => i.id !== deleteId); }
        safeSaveData(data);
        if (currentSection === 'stats') renderStats();
        else renderTable(currentSection);
        showToast('\ud83d\udd25 Eliminado para siempre...', 'success');
    }
    closeDeleteModal();
}

function closeDeleteModal() {
    const modal = document.getElementById('delete-modal');
    if (modal) modal.classList.remove('active');
    deleteId = null;
}

// ===== EXPORT / IMPORT =====
function exportData() {
    const data = safeGetData();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'baidefest_data.json'; a.click();
    URL.revokeObjectURL(url);
    showToast('Datos exportados', 'info');
}

function importData() {
    const fileInput = document.getElementById('import-file');
    if (fileInput) fileInput.click();
}

function handleImport(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
        try {
            const data = JSON.parse(event.target.result);
            if (data.events && data.artists && data.gallery && data.tickets) {
                if (!data.geekShock) data.geekShock = { intro: { title: '\ud83e\udde0 Geek Shock Cinema', description: '' }, items: [] };
                safeSaveData(data);
                if (currentSection === 'stats') renderStats();
                else renderTable(currentSection);
                showToast('Datos importados correctamente', 'success');
            } else showToast('Formato de archivo invalido', 'error');
        } catch (err) { showToast('Error al leer el archivo', 'error'); }
    };
    reader.readAsText(file);
    e.target.value = '';
}

// ===== TOAST =====
function showToast(message, type) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.className = 'toast ' + type + ' show';
    setTimeout(() => { toast.classList.remove('show'); }, 3000);
}

// ===== MODAL CLOSE =====
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal') && !e.target.querySelector('.modal-large')) {
        e.target.classList.remove('active');
    }
});
