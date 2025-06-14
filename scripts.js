// --- Travaux page only ---
if (document.getElementById("portfolioGrid")) {
    // ---- DATA ----
    const projects = [
        {
            title: "Processeurs de SmartDevices Dataset",
            description: "Smartphones, Smartwatches, Tablets. Data science (MachineLearning/DeepLearning).",
            image: "../img/processors/processor.png",
            category: "Data",
            link: "https://www.kaggle.com/datasets/ellimaaac/processors-of-smart-devices"
        },
        {
            title: "Camille, assistante virtuelle",
            description: "Agent AI (Chabot) pour guider les citoyens sur la gestion des dechets de la Metropole de Grenoble.",
            image: "../img/camille AI/camilleIA.png",
            category: "AI",
            link: "../nav/construction.html"
        },
        {
            title:"Spotify Analysis",
            description: "Analyse des données de Spotify. Data science (MachineLearning/DeepLearning).",
            image: "../img/spotify/spotify.png",
            category: "Data",
            link: "../nav/construction.html"
        },          
        {
            title: "Osu! Players Dataset",
            description: "Conservation  des joueurs d'Osu!. Data science (MachineLearning/DeepLearning).",
            image: "../img/Osu!beatmaps/osu-Stellar-Series-BTMC-desk.jpg",
            category: "Data",
            link: "https://www.kaggle.com/datasets/ellimaaac/osustandard-players-from-2007-to-today"
        },
        {
            title: "Osu! Beatmaps  Dataset",
            description: "Conservation des beatmaps d'Osu!. Data science (MachineLearning/DeepLearning).",
            image: "../img/Osu!beatmaps/osu-Stellar-Series-BTMC-desk.jpg",
            category: "Data",
            link: "https://www.kaggle.com/datasets/ellimaaac/osu-dataset-of-all-beatmaps-from-2007-to-today"
        },
        {
            title: "Amazon Product Datasets",
            description: "Casques et Ecouteurs Audio. Analyse Statistique et NLP.",
            image: "../img/amazon/amazon.png",
            category: "Data",
            link: "https://www.kaggle.com/datasets/ellimaaac/amazon-france-headphones-and-earphones-bestsellers"
        },
        {
            title: "Walmart Product Dataset",
            description: "Casques et Ecouteurs Audio. Dataset.",
            image: "../img/walmart/walmart.png",
            category: "Data",
            link: "https://www.kaggle.com/datasets/ellimaaac/walmart-headphones-and-earphones-bestsellers"
        },
        {
            title: "Pédale de Guitare Multi Effets",
            description: "Projet de 2eme année d'ecole d'ingénieur. Conception et réalisation d'une pédale de guitare multi-effets.",
            image: "../img/pedaleDeGuitare/pedaleDeGuitare.png",
            category: "Electronique",
            link: "../nav/construction.html"
        },
        {
            title:"Etude Synthétiseur FM",
            description: "Projet de 2eme année d'ecole d'ingénieur, option Electronique et Signal pour la Musique.",
            image: "../img/SynthéFM/FMsynth.jpg",
            category: "Electronique",
            link: "../nav/construction.html"
        },
        {
            title: "Logiciel Paint + Jeux",
            description: "Projet de 2eme année d'ecole d'ingénieur. Logiciel de dessin Paint + Ou est Charlie et 7 differences, développé en Java.",
            image: "../img/paintJava/paintJava.png",
            category: "Informatique",
            link: "../nav/construction.html"
        },
        {
            title: "Clavier Mécanique",
            description: "Conception d'un clavier mécanique personnalisé avec souris intégrée.",
            image: "../img/clavier/CM.png",
            category: "Electronique",
            link: "../nav/construction.html"
        },            
        {
            title: "TIXI : Robot suiveur de ligne",
            description: "Projet de fin d'études DUT GEII.",
            image: "../img/tixi/TIXI2.png",
            category: "Electronique",
            link: "../travaux/tixi.html"
        },
        {
            title: "Automatic Icon Converter",
            description: "Convertie la 1ere image en icône du dossier.",
            image: "../img/autoIconConverter/Auto_Icon_Converter.png",
            category: "Informatique",
            link: "../nav/construction.html"
        },
        {
            title: ".Webp to .PNG Converter",
            description: "Convertisseur automatique d’images .webp en .png pour toutes les images contenues dans un dossier. Et cela pour tous les dossiers contenus dans un dossier/chemin.",
            image: "../img/ImageConverter/ImageConverter.png",
            category: "Informatique",
            link: "../nav/construction.html"
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

// --- Carrousel Reddit/Instagram pour le blog/galerie ---
// (reprend le code déjà donné, sinon tu peux fusionner tes deux carrousels)
document.querySelectorAll('.image-carousel').forEach(function(carousel) {
    const track = carousel.querySelector('.carousel-track');
    const medias = carousel.querySelectorAll('.carousel-img');
    const prevBtn = carousel.querySelector('.carousel-btn.prev');
    const nextBtn = carousel.querySelector('.carousel-btn.next');
    const dotsContainer = carousel.querySelector('.carousel-dots');
    let idx = 0;
    // Génère les dots
    medias.forEach((img, i) => {
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
    prevBtn.onclick = () => goTo((idx - 1 + medias.length) % medias.length);
    nextBtn.onclick = () => goTo((idx + 1) % medias.length);
});

// --- Lightbox pour carrousel (images seulement, pas vidéos) ---
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

// --- Clic sur une image = ouvrir lightbox / Clic sur une vidéo = rien (lecture native) ---
document.querySelectorAll('.carousel-img').forEach(media => {
    if (media.tagName.toLowerCase() === "img") {
        media.style.cursor = 'zoom-in';
        media.onclick = function() {
            const lightbox = document.getElementById('carousel-lightbox');
            const bigImg = lightbox.querySelector('.carousel-lightbox-img');
            const link = lightbox.querySelector('.carousel-lightbox-link');
            bigImg.src = this.src;
            bigImg.alt = this.alt;
            link.href = this.src;
            lightbox.classList.add('active');
        }
    } else if (media.tagName.toLowerCase() === "video") {
        // Optionnel : mini-style
        media.style.cursor = 'pointer';
        // Pas de lightbox : le lecteur vidéo natif suffit.
    }
});

// --- Language switcher ---
function switchLanguage(lang) {
    if (lang === 'en') {
        window.location.href = 'eng/index.html'; // correspond à ton dossier
    } else if (lang === 'fr') {
        window.location.href = '../index.html';  // car on est dans /eng/
    }
}

// === FLOW FIELD FULLSCREEN BACKGROUND ANIMATION (TURQUOISE) ===
if (document.body) {
  // --- Paramètres du preset GenerativeMap ---
  let nbPoints = 3000;
  let speed = 0.2;
  let size = 1;
  let positionScale = 200;
  let rotationScale = 200;
  let opacity = 20;
  let fadeSpeed = 0; // pas de trail qui s'efface
  let colorMap = [0, 255, 200, opacity]; // TURQUOISE. Pour couleur d'origine : [115, 64, 50, opacity]
  let points = [];
  let mainWidth, mainHeight;

  window.setup = function() {
    mainWidth = window.innerWidth;
    mainHeight = window.innerHeight;
    createCanvas(mainWidth, mainHeight);
    let c = document.querySelector('canvas');
    c.style.position = "fixed";
    c.style.top = "0";
    c.style.left = "0";
    c.style.width = "100vw";
    c.style.height = "100vh";
    c.style.zIndex = "-1";
    c.style.pointerEvents = "none";
    background(0);
    stroke(...colorMap);
    strokeWeight(size);

    // Création des points
    points = [];
    for (let i = 0; i < nbPoints; i++) {
      points.push(createVector(random(mainWidth), random(mainHeight)));
    }
  };

  window.draw = function() {
    if (fadeSpeed > 0) {
      background(0, fadeSpeed);
    }
    stroke(...colorMap);
    strokeWeight(size);

    for (let vector of points) {
      let direction = 2 * rotationScale * Math.PI * noise(vector.x / positionScale, vector.y / positionScale);
      vector.x += Math.cos(direction) * speed;
      vector.y += Math.sin(direction) * speed;

      // randomTeleport (comme dans ton générateur)
      if (vector.x < 0 || vector.x > mainWidth || vector.y < 0 || vector.y > mainHeight) {
        vector.x = random(mainWidth);
        vector.y = random(mainHeight);
      }
      point(vector.x, vector.y);
    }
  };

  window.windowResized = function() {
    mainWidth = window.innerWidth;
    mainHeight = window.innerHeight;
    resizeCanvas(mainWidth, mainHeight);
    background(0);
    // Replace tous les points pour couvrir le nouveau canvas
    for (let vector of points) {
      vector.x = random(mainWidth);
      vector.y = random(mainHeight);
    }
  };
}
