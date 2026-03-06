// CONFIGURATION
const PASSWORD = "06071981";
const BIRTH_DATE = new Date("2009-03-06"); // 17 years ago from 2026

// TEXT CONTENT
const TEXT_PART_1 = `Parabéns, preta. 17 anos já, né? você OFICIALMENTE é quase uma idosa em anos de adolescente.

Engraçado que você não gosta que eu te chame de Júlia... um nome bonito, normal, mas não, a pessoa prefere os apelidos super carinhosos que eu dei. Então... parabéns, minha Rica em Petróleo, minha KI-suco de petróleo, minha Marrom Bombom, meu Chocolate Amargo, minha sombra, minha flamenguista preta, minha macaca autopeças enviada pela sedex, minha Mancha-Pulmão favorita, e parabéns aos outros milhões de apelidos que não vem em mente.

Sério, quem precisa de nome quando tem um catálogo inteiro de apelidos desses? No fundo você ama, assim como me ama, só finge que odeia pra manter a pose.

Mas falando sério (só um pouquinho): desde 2023 aturando tua existência e, surpreendentemente, eu ainda não te bloqueei (ou já 🤫🤭). Isso já prova que tu é importante pra mim, porque minha paciência normalmente dura menos que a permanência de Filipe Luís depois de golear o Madureira.

Então feliz aniversário e que seus 17 anos venham cheios de caos, risada e eu te perturbando com apelidos horríveis por muito tempo ainda. (Mas o texto não acaba aqui, sabe... é apenas o fim do nosso primeiro tempo)...`;

const TEXT_PART_2 = `E outra coisa: 17 ÂNUS já… daqui a pouco tu começa a reclamar de dor nas 17 bundas, e também nas costas quando levanta rápido (NA VERDADE, você já reclama de tudo). O adolescente é virar um idoso reclamando da vida às 22h da noite, a sua, é reclamar desde novinha.

Inclusive acho incrível como você não gosta que eu te chame de “Júlia” pois não se acostumou, mas sobrevive tranquilamente sendo chamada de Mancha-Pulmão.

Sem falar que “Rica em Petróleo” não é nem apelido mais, é praticamente um patrimônio nacional. Se um dia descobrirem petróleo de verdade perto de você, a Petrobras já vai querer registrar teu nome (e eu terei ciúmes disso, sabe? 🙄).

E o KI-suco de petróleo continua sendo um dos maiores absurdos. Até hoje não sei se é um apelido, uma bebida industrial proibida pela Anvisa ou muito pozinho.

Amizade de verdade é quando até os piores apelidos viram prova de carinho.

Mas olha… mesmo com todos esses apelidos horríveis, piadas duvidosas e eu claramente sendo um péssimo ser humano às vezes, tu continua sendo uma das melhores pessoas que eu conheci desde 2023.

Então aproveita teus 17 anos, porque daqui a pouco vem boleto, responsabilidade e crise existencial. Por enquanto só aproveita o bolo (manda via sedex pra mim), as risadas e aceita que eu nunca vou parar de inventar apelido novo pra você.

Inclusive relaxa… se reclamar muito, eu crio mais uns 12 apelidos piores ainda (e pode deixar, aqui vai outros 4 novos apelidos).`;

const TEXT_PART_3 = `Eu nem acredito que tô dizendo isso… mas eu amo você. Olha o nível da coisa: eu, tendo que admitir sentimento por uma flamenguista. Isso já prova que é sério mesmo.

Porque amar alguém que torce pro Flamengo exige coragem, paciência e um pouco de sofrimento psicológico.

Mas fazer o quê… no meio de tanta zoeira, discussão de futebol e implicância, você virou uma das pessoas mais importantes pra mim.

Então é isso. Contra todos os princípios futebolísticos possíveis… eu amo você.

Eu te amo: Mais que a virada do Gabigol na final contra o River.
Eu te amo: Mais que o gol de Danilo na final contra o Palmeiras.

Só não te amo mais que duas coisas… você sabe, né?

BAHIA
NEYMAR
E você, minha flamenguista favorita.

E aproveita, que não é sempre que eu irei ser carinhoso assim, sabe? Porque normalmente eu volto ao meu estado natural: te zoar por torcer pro Flamengo.

E para não dizer, que eu sou ruim, olha a sua notificação, ok?

Assinado: a pessoa que se recusa a te chamar de Júlia.`;

// DOM ELEMENTS
const lockScreen = document.getElementById('lock-screen');
const passwordInput = document.getElementById('password-input');
const unlockBtn = document.getElementById('unlock-btn');
const errorMessage = document.getElementById('error-message');
const mainContent = document.getElementById('main-content');
const lifeCounter = document.getElementById('life-counter');

// --- PASSWORD LOGIC ---
unlockBtn.addEventListener('click', checkPassword);
passwordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkPassword();
});

function checkPassword() {
    const input = passwordInput.value;
    if (input === PASSWORD) {
        unlockSite();
    } else {
        const errors = [
            "Senha Incorreta! Tenta de novo, flamenguista.",
            "Errou! Tá nervosa?",
            "Quase... só que não.",
            "Dica: 06 + 07 + 1981",
            "Sério que você não sabe?"
        ];
        errorMessage.textContent = errors[Math.floor(Math.random() * errors.length)];
        errorMessage.classList.remove('hidden');
        passwordInput.value = '';
        
        // Shake animation
        lockScreen.querySelector('.lock-content').animate([
            { transform: 'translateX(0)' },
            { transform: 'translateX(-10px)' },
            { transform: 'translateX(10px)' },
            { transform: 'translateX(0)' }
        ], { duration: 300 });
    }
}

function unlockSite() {
    lockScreen.style.opacity = '0';
    setTimeout(() => {
        lockScreen.classList.add('hidden');
        mainContent.classList.remove('hidden');
        
        // Trigger confetti
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#06b2b8', '#A051A8', '#ffffff']
        });

        // Start animations
        setTimeout(() => {
            mainContent.style.opacity = '1';
            animateCounter();
            startTypewriter();
        }, 100);
    }, 1000);
}

// --- LIFE COUNTER LOGIC ---
function animateCounter() {
    const today = new Date();
    const diffTime = Math.abs(today - BIRTH_DATE);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    // Animate numbers
    let start = 0;
    const end = diffDays;
    const duration = 2000;
    const increment = end / (duration / 16); // 60fps
    
    const timer = setInterval(() => {
        start += increment;
        lifeCounter.textContent = Math.floor(start);
        if (start >= end) {
            lifeCounter.textContent = end;
            clearInterval(timer);
        }
    }, 16);
}

// --- TYPEWRITER EFFECT ---
function typeWriter(elementId, text, speed = 30) {
    const element = document.getElementById(elementId);
    let i = 0;
    element.innerHTML = "";
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            // If this is section 2, reveal nicknames
            if (elementId === 'text-part-2') {
                document.getElementById('nicknames-box').classList.remove('hidden');
                document.getElementById('nicknames-box').animate([
                    { opacity: 0, transform: 'translateY(20px)' },
                    { opacity: 1, transform: 'translateY(0)' }
                ], { duration: 800, fill: 'forwards' });
            }
        }
    }
    
    // Intersection Observer to start typing when in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                type();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    observer.observe(document.getElementById('section-' + elementId.split('-')[2]));
}

function startTypewriter() {
    typeWriter('text-part-1', TEXT_PART_1, 20);
    typeWriter('text-part-2', TEXT_PART_2, 20);
    typeWriter('text-part-3', TEXT_PART_3, 20);
}

// --- CAKE BUILDER LOGIC ---
const cakeState = {
    dough: '#f3e5ab',
    topping: 'transparent',
    deco: null
};

const colors = {
    chocolate: '#5c3a21',
    baunilha: '#f3e5ab',
    morango: '#ff9999',
    roxo: '#A051A8',
    chantilly: '#ffffff',
    azul: '#06b2b8',
    glacê_roxo: '#800080'
};

function updateCake(type, value) {
    const layers = document.querySelectorAll('.cake-layer');
    
    if (type === 'dough') {
        layers.forEach(layer => {
            layer.style.backgroundColor = colors[value] || value; // Handle hex or key
        });
    } else if (type === 'topping') {
        // Determine color based on value
        let color;
        if (value === 'roxo') {
            color = colors.glacê_roxo;
        } else if (colors[value]) {
            color = colors[value];
        } else {
            color = colors.chocolate;
        }
        
        // Inject style for pseudo elements dynamically to handle ::before and ::after
        const styleId = 'dynamic-cake-style';
        let styleTag = document.getElementById(styleId);
        if (!styleTag) {
            styleTag = document.createElement('style');
            styleTag.id = styleId;
            document.head.appendChild(styleTag);
        }
        
        styleTag.innerHTML = `
            .cake-layer::before { background-color: ${color} !important; }
            .cake-layer::after { background-color: ${color} !important; }
        `;
    } else if (type === 'deco') {
        // Hide all first
        document.getElementById('cake-topper').classList.add('hidden');
        document.getElementById('cake-candles').classList.add('hidden');
        
        // Remove existing deco classes from layers
        layers.forEach(l => {
            l.innerHTML = ''; // Clear internal decos
        });

        if (value === 'topper') {
            document.getElementById('cake-topper').classList.remove('hidden');
        } else if (value === 'velas') {
            document.getElementById('cake-candles').classList.remove('hidden');
        } else {
            // Add emojis to layers
            const emoji = value === 'estrelas' ? '⭐' : value === 'confetes' ? '🎉' : '❤️';
            layers.forEach(layer => {
                for(let i=0; i<3; i++) {
                    const span = document.createElement('span');
                    span.textContent = emoji;
                    span.style.position = 'absolute';
                    span.style.left = Math.random() * 80 + 10 + '%';
                    span.style.top = Math.random() * 60 + 20 + '%';
                    span.style.fontSize = '1.2rem';
                    layer.appendChild(span);
                }
            });
        }
    }
}

// --- SPECIAL BUTTON ---
document.getElementById('light-candles-btn').addEventListener('click', () => {
    // Force candles to appear if not already
    document.getElementById('cake-candles').classList.remove('hidden');
    
    // Light them
    const candles = document.querySelectorAll('.candle');
    candles.forEach(c => c.classList.add('lit'));
    
    // Play audio
    const audio = document.getElementById('birthday-audio');
    audio.volume = 0.5;
    audio.play().catch(e => console.log("Audio play failed (interaction needed):", e));
    
    // Confetti explosion
    const duration = 3000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#06b2b8', '#A051A8']
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#06b2b8', '#A051A8']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
    
    // Show message
    document.getElementById('final-message').classList.remove('hidden');
    
    // Scroll to message
    setTimeout(() => {
        document.getElementById('final-message').scrollIntoView({ behavior: 'smooth' });
    }, 500);
});
