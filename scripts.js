// --- Travaux page only ---
if (document.getElementById("portfolioGrid")) {
    // ---- DATA ----
    const projects = [
        {
            title: "Camille, assistante virtuelle",
            description: "Agent AI (Chabot) pour guider les citoyens sur la gestion des dechets de la Metropole de Grenoble.",
            image: "img/camille AI/camille.png",
            category: "AI",
            link: "../travaux/CamilleAI.html"
        },
        {
            title:"Spotify Analysis",
            description: "Analyse des données de Spotify. Data science (MachineLearning/DeepLearning).",
            image: "../img/spotify/spotify.png",
            category: "Data",
            link: "../travaux/spotify.html"
        },          
        {
            title: "Osu! Players Analysis & Dataset",
            description: "Conservation et Analyse des joueurs d'Osu!. Data science (MachineLearning/DeepLearning).",
            image: "../img/Osu!beatmaps/osu-Stellar-Series-BTMC-desk.jpg",
            category: "Data",
            link: "../travaux/Osu!player.html"
        },
        {
            title: "Osu! Beatmaps Analysis & Dataset",
            description: "Conservation et Analyse des beatmaps d'Osu!. Data science (MachineLearning/DeepLearning).",
            image: "../img/Osu!beatmaps/osu-Stellar-Series-BTMC-desk.jpg",
            category: "Data",
            link: "../travaux/Osu!beatmaps.html"
        },
        {
            tile: "Osu! Rankings 2024",
            description: "Datasets des classements mondiaux d'Osu! de 2024.",
            image: "../img/Osu!beatmaps/osu-Stellar-Series-BTMC-desk.jpg",
            category: "Data",
            link: "../travaux/Osu!rankings2024.html"
        },
        {
            title: "Osu! Classement Mondial Dataset de 2017 a 2025",
            description: "Datasets.",
            image: "../img/Osu!beatmaps/osu-Stellar-Series-BTMC-desk.jpg",
            category: "Data",
            link: "#"
        },
        {
            title: "Amazon Product Analysis & Dataset",
            description: "Casques et Ecouteurs Audio. Analyse Statistique et NLP.",
            image: "../img/amazon/amazon.png",
            category: "Data",
            link: "#"
        },
        {
            title: "Walmart Product Dataset",
            description: "Casques et Ecouteurs Audio. Dataset.",
            image: "../img/walmart/walmart.png",
            category: "Data",
            link: ""
        },
        {
            title : "Auchan Product Dataset",
            description: "Casques et Ecouteurs Audio. Dataset.",
            image: "../img/auchan/auchan.png",
            category: "Data",
            link: ""
        },
        {
            title: "Pédale de Guitare Multi Effets",
            description: "Projet de 2eme année d'ecole d'ingénieur. Conception et réalisation d'une pédale de guitare multi-effets.",
            image: "../img/pedaleDeGuitare/pedaleDeGuitare.png",
            category: "Electronique",
            link: ".html"
        },
        {
            title:"Etude Synthétiseur FM",
            description: "Projet de 2eme année d'ecole d'ingénieur, option Electronique et Signal pour la Musique.",
            image: "../img/synthesizer/synthesizer.png",
            category: "Electronique",
            link: "../travaux/synthesizer.html"
        },
        {
            title: "Logiciel Paint + Jeux",
            description: "Projet de 2eme année d'ecole d'ingénieur. Logiciel de dessin Paint + Ou est Charlie et 7 differences, développé en Java.",
            image: "../img/paint/paint.png",
            category: "Informatique",
            link: "../travaux/paint.html"
        },
        {
            title: "Clavier Mécanique",
            description: "Conception d'un clavier mécanique personnalisé avec souris intégrée.",
            image: "../img/clavier/clavierMecanique.png",
            category: "Electronique",
            link: ".html"
        },            
        {
            title: "TIXI : Robot suiveur de ligne",
            description: "Projet de fin d'études DUT GEII.",
            image: "../img/tixi/tixi2.png",
            category: "Electronique",
        },
        {
            title: "Automatic Icon Converter",
            description: "Convertie la 1ere image en icône du dossier.",
            image: "../img/autoIconConverter/Auto_Icon_Converter.png",
            category: "Informatique",
            link: "../travaux/autoIconConverter.html"
        },
        {
            title: ".Webp to .PNG Converter",
            description: "Convertisseur automatique d’images .webp en .png pour toutes les images contenues dans un dossier. Et cela pour tous les dossiers contenus dans un dossier/chemin.",
            image: "../img/ImageConverter/ImageConverter.png",
            category: "Informatique",
            link: "../travaux/webpToPngConverter.html"
        },

    ];

    const categories = ["Toutes les réalisations", ...Array.from(new Set(projects.map(p => p.category)))];

    // ---- FILTERS RENDER ----
    const filtersDiv = document.getElementById("filters");
    categories.forEach(cat => {
        const btn = document.createElement("button");
        btn.className = "filter-btn" + (cat === "Toutes les réalisations" ? " active" : "");
        btn.textContent = cat;
        btn.onclick = () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderGrid(cat);
        };
        filtersDiv.appendChild(btn);
    });

    // ---- GRID RENDER WITH ANIMATIONS ----
    function renderGrid(filter) {
        const grid = document.getElementById("portfolioGrid");
        grid.innerHTML = "";
        projects.filter(p => (filter === "Toutes les réalisations" || p.category === filter)).forEach((proj, i) => {
            grid.innerHTML += `
                <div class="card animate__animated animate__fadeInUp" style="animation-delay: ${i * 0.10}s;">
                    <img src="${proj.image}" alt="${proj.title}">
                    <div class="card-content">
                        <div class="card-title">${proj.title}</div>
                        <div class="card-desc">${proj.description}</div>
                        <a href="${proj.link}" class="see-more">Voir plus</a>
                    </div>
                </div>`;
        });
    }

    // Apparition animée au chargement
    renderGrid("Toutes les réalisations");
}

// --- Carrousel Reddit/Instagram pour le blog ---
document.querySelectorAll('.image-carousel').forEach(function(carousel) {
    const track = carousel.querySelector('.carousel-track');
    const images = carousel.querySelectorAll('.carousel-img');
    const prevBtn = carousel.querySelector('.carousel-btn.prev');
    const nextBtn = carousel.querySelector('.carousel-btn.next');
    const dotsContainer = carousel.querySelector('.carousel-dots');
    let idx = 0;
    // Génère les dots
    images.forEach((img, i) => {
        const dot = document.createElement('span');
        dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
        dot.onclick = () => goTo(i);
        dotsContainer.appendChild(dot);
    });
    const dots = dotsContainer.querySelectorAll('.carousel-dot');
    function goTo(n) {
        idx = n;
        track.style.transform = `translateX(-${n * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[n].classList.add('active');
    }
    prevBtn.onclick = () => goTo((idx - 1 + images.length) % images.length);
    nextBtn.onclick = () => goTo((idx + 1) % images.length);
});

// --- Lightbox pour carrousel ---
if (!document.getElementById('carousel-lightbox')) {
    const lightbox = document.createElement('div');
    lightbox.className = 'carousel-lightbox';
    lightbox.id = 'carousel-lightbox';
    lightbox.innerHTML = `
        <button class="carousel-lightbox-close" aria-label="Fermer">&#10006;</button>
        <a class="carousel-lightbox-link" href="#" target="_blank" title="Ouvrir l’image originale">
            <img src="" alt="Image agrandie" class="carousel-lightbox-img">
            <span class="carousel-lightbox-open" title="Ouvrir dans un nouvel onglet">&#128279;</span>
        </a>
    `;
    document.body.appendChild(lightbox);

    // Fermer lightbox par la croix ou clic en dehors de l'image
    lightbox.querySelector('.carousel-lightbox-close').onclick = () => lightbox.classList.remove('active');
    lightbox.onclick = (e) => {
        if (e.target === lightbox) lightbox.classList.remove('active');
    }
}

// --- Clic sur une image du carrousel = ouvrir lightbox ---
document.querySelectorAll('.carousel-img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.onclick = function() {
        const lightbox = document.getElementById('carousel-lightbox');
        const bigImg = lightbox.querySelector('.carousel-lightbox-img');
        const link = lightbox.querySelector('.carousel-lightbox-link');
        bigImg.src = this.src;
        bigImg.alt = this.alt;
        link.href = this.src; // bouton/lien "ouvrir l’image originale"
        lightbox.classList.add('active');
    }
});
