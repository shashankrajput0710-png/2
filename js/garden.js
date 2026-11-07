/**
 * Enchanted Garden of Lilies & The Royal Masterpiece Bouquet
 * Features realistic botanical SVG illustrations with rich gradients, organic petal curves,
 * realistic stamens and pollen anthers, cute botanical lore, and interactive inspection.
 */

const LILY_DATA = [
  {
    id: 'stargazer',
    name: 'Stargazer Oriental Lily',
    botanical: 'Lilium Orientalis "Stargazer"',
    tagline: 'The Drama Queen of the Garden ✨',
    colorName: 'Crimson-Fuchsia with Pure White Edges',
    symbolism: 'Limitless Ambition, Passion & Prosperity',
    fragrance: 'Intensely sweet and intoxicating spicy-honey perfume that fills an entire room',
    cuteFact: 'Most lilies nod gracefully downward, but Stargazers face straight up towards the heavens—literally gazing at the stars all night!',
    accentColor: '#db2777',
    svg: `
      <svg viewBox="0 0 240 240" class="w-full h-full filter drop-shadow-[0_8px_20px_rgba(219,39,119,0.35)]">
        <defs>
          <linearGradient id="sg-petal-main" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#831843"/>
            <stop offset="30%" stop-color="#be123c"/>
            <stop offset="70%" stop-color="#f43f5e"/>
            <stop offset="92%" stop-color="#fda4af"/>
            <stop offset="100%" stop-color="#ffffff"/>
          </linearGradient>
          <radialGradient id="sg-throat" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#84cc16"/>
            <stop offset="45%" stop-color="#fef08a"/>
            <stop offset="100%" stop-color="#be123c"/>
          </radialGradient>
        </defs>

        <!-- Sturdy Botanical Stem & Leaves -->
        <path d="M 120 150 Q 116 195 120 240" stroke="#15803d" stroke-width="6" fill="none" stroke-linecap="round"/>
        <path d="M 119 180 Q 75 165 45 185 Q 90 200 119 185" fill="#14532d"/>
        <path d="M 121 165 Q 165 150 195 170 Q 150 185 121 170" fill="#166534"/>

        <!-- Flower Center Cluster -->
        <g transform="translate(120, 115)">
          <!-- Petal 1: Top Center -->
          <path d="M 0 0 C -28 -45 -22 -100 0 -110 C 22 -100 28 -45 0 0" fill="url(#sg-petal-main)" stroke="#fbcfe8" stroke-width="1.2"/>
          <path d="M 0 0 L 0 -105" stroke="#ffe4e6" stroke-width="0.8" opacity="0.6"/>

          <!-- Petal 2: Top Right -->
          <path d="M 0 0 C 18 -50 75 -80 98 -62 C 90 -35 45 -18 0 0" fill="url(#sg-petal-main)" stroke="#fbcfe8" stroke-width="1.2"/>
          
          <!-- Petal 3: Bottom Right -->
          <path d="M 0 0 C 40 -12 92 20 86 50 C 58 55 22 28 0 0" fill="url(#sg-petal-main)" stroke="#fbcfe8" stroke-width="1.2"/>

          <!-- Petal 4: Bottom Center -->
          <path d="M 0 0 C 22 40 18 92 0 102 C -18 92 -22 40 0 0" fill="url(#sg-petal-main)" stroke="#fbcfe8" stroke-width="1.2"/>

          <!-- Petal 5: Bottom Left -->
          <path d="M 0 0 C -22 28 -58 55 -86 50 C -92 20 -40 -12 0 0" fill="url(#sg-petal-main)" stroke="#fbcfe8" stroke-width="1.2"/>

          <!-- Petal 6: Top Left -->
          <path d="M 0 0 C -45 -18 -90 -35 -98 -62 C -75 -80 -18 -50 0 0" fill="url(#sg-petal-main)" stroke="#fbcfe8" stroke-width="1.2"/>

          <!-- Lime green floral throat -->
          <circle cx="0" cy="0" r="16" fill="url(#sg-throat)"/>

          <!-- Papillae Freckles (raised crimson dots) -->
          <g fill="#4c0519">
            <circle cx="0" cy="-30" r="1.8"/><circle cx="6" cy="-42" r="1.6"/><circle cx="-7" cy="-36" r="1.6"/>
            <circle cx="22" cy="-18" r="1.8"/><circle cx="35" cy="-26" r="1.6"/><circle cx="-22" cy="-18" r="1.8"/>
            <circle cx="-35" cy="-26" r="1.6"/><circle cx="22" cy="18" r="1.6"/><circle cx="-22" cy="18" r="1.6"/>
            <circle cx="0" cy="35" r="1.8"/>
          </g>

          <!-- 6 Protruding Graceful Stamens with Pollen-rich Anthers -->
          <g stroke="#fef08a" stroke-width="2.2" fill="none" stroke-linecap="round">
            <path d="M 0 0 Q -12 -30 -18 -55"/>
            <path d="M 0 0 Q 12 -30 18 -55"/>
            <path d="M 0 0 Q 35 -10 55 -15"/>
            <path d="M 0 0 Q -35 -10 -55 -15"/>
            <path d="M 0 0 Q 25 25 38 45"/>
            <path d="M 0 0 Q -25 25 -38 45"/>
          </g>
          <!-- Rust-Brown Anthers -->
          <g fill="#78350f" stroke="#451a03" stroke-width="0.8">
            <ellipse cx="-18" cy="-57" rx="6" ry="2.8" transform="rotate(-30, -18, -57)"/>
            <ellipse cx="18" cy="-57" rx="6" ry="2.8" transform="rotate(30, 18, -57)"/>
            <ellipse cx="57" cy="-15" rx="6" ry="2.8" transform="rotate(70, 57, -15)"/>
            <ellipse cx="-57" cy="-15" rx="6" ry="2.8" transform="rotate(-70, -57, -15)"/>
            <ellipse cx="40" cy="47" rx="6" ry="2.8" transform="rotate(20, 40, 47)"/>
            <ellipse cx="-40" cy="47" rx="6" ry="2.8" transform="rotate(-20, -40, 47)"/>
          </g>

          <!-- Pistil and 3-lobed Stigma -->
          <circle cx="0" cy="-8" r="3.5" fill="#15803d"/>
        </g>
      </svg>
    `
  },
  {
    id: 'casablanca',
    name: 'Casablanca White Lily',
    botanical: 'Lilium "Casa Blanca"',
    tagline: 'The Queen of Grace & Serenity 🕊️',
    colorName: 'Pristine Velvety Snow White & Lime Core',
    symbolism: 'Purity of Soul, Divine Blessings & Tranquility',
    fragrance: 'Delicate, airy, and deeply calming floral aroma with gentle sweet spice',
    cuteFact: 'Celebrated worldwide as the pinnacle of white lilies! Its petals have a microscopic crystalline texture that reflects moonbeams.',
    accentColor: '#f8fafc',
    svg: `
      <svg viewBox="0 0 240 240" class="w-full h-full filter drop-shadow-[0_8px_20px_rgba(255,255,255,0.25)]">
        <defs>
          <linearGradient id="cb-petal" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#e2e8f0"/>
            <stop offset="25%" stop-color="#f1f5f9"/>
            <stop offset="70%" stop-color="#ffffff"/>
            <stop offset="100%" stop-color="#f8fafc"/>
          </linearGradient>
          <radialGradient id="cb-throat" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#84cc16"/>
            <stop offset="60%" stop-color="#d9f99d"/>
            <stop offset="100%" stop-color="#ffffff"/>
          </radialGradient>
        </defs>

        <path d="M 120 150 Q 124 195 120 240" stroke="#16a34a" stroke-width="6" fill="none" stroke-linecap="round"/>
        <path d="M 120 175 Q 165 160 195 180 Q 150 195 120 180" fill="#15803d"/>
        <path d="M 120 190 Q 75 175 45 195 Q 90 210 120 195" fill="#14532d"/>

        <g transform="translate(120, 115)">
          <!-- 6 Sculpted Velvety White Petals with subtle ribbing -->
          <path d="M 0 0 C -28 -45 -22 -100 0 -110 C 22 -100 28 -45 0 0" fill="url(#cb-petal)" stroke="#cbd5e1" stroke-width="1.2"/>
          <path d="M 0 0 C 18 -50 75 -80 98 -62 C 90 -35 45 -18 0 0" fill="url(#cb-petal)" stroke="#cbd5e1" stroke-width="1.2"/>
          <path d="M 0 0 C 40 -12 92 20 86 50 C 58 55 22 28 0 0" fill="url(#cb-petal)" stroke="#cbd5e1" stroke-width="1.2"/>
          <path d="M 0 0 C 22 40 18 92 0 102 C -18 92 -22 40 0 0" fill="url(#cb-petal)" stroke="#cbd5e1" stroke-width="1.2"/>
          <path d="M 0 0 C -22 28 -58 55 -86 50 C -92 20 -40 -12 0 0" fill="url(#cb-petal)" stroke="#cbd5e1" stroke-width="1.2"/>
          <path d="M 0 0 C -45 -18 -90 -35 -98 -62 C -75 -80 -18 -50 0 0" fill="url(#cb-petal)" stroke="#cbd5e1" stroke-width="1.2"/>

          <!-- Glowing Spring Green Throat -->
          <circle cx="0" cy="0" r="16" fill="url(#cb-throat)"/>

          <!-- Curved Green Filaments & Golden Amber Pollen Anthers -->
          <g stroke="#84cc16" stroke-width="2.2" fill="none" stroke-linecap="round">
            <path d="M 0 0 Q -14 -32 -20 -58"/>
            <path d="M 0 0 Q 14 -32 20 -58"/>
            <path d="M 0 0 Q 38 -10 60 -16"/>
            <path d="M 0 0 Q -38 -10 -60 -16"/>
            <path d="M 0 0 Q 28 28 42 48"/>
            <path d="M 0 0 Q -28 28 -42 48"/>
          </g>
          <g fill="#d97706" stroke="#92400e" stroke-width="0.8">
            <ellipse cx="-20" cy="-60" rx="6.5" ry="3" transform="rotate(-25, -20, -60)"/>
            <ellipse cx="20" cy="-60" rx="6.5" ry="3" transform="rotate(25, 20, -60)"/>
            <ellipse cx="62" cy="-16" rx="6.5" ry="3" transform="rotate(65, 62, -16)"/>
            <ellipse cx="-62" cy="-16" rx="6.5" ry="3" transform="rotate(-65, -62, -16)"/>
            <ellipse cx="44" cy="50" rx="6.5" ry="3" transform="rotate(15, 44, 50)"/>
            <ellipse cx="-44" cy="50" rx="6.5" ry="3" transform="rotate(-15, -44, 50)"/>
          </g>

          <circle cx="0" cy="-10" r="3.5" fill="#15803d"/>
        </g>
      </svg>
    `
  },
  {
    id: 'tiger',
    name: 'Fiery Tiger Lily',
    botanical: 'Lilium lancifolium',
    tagline: 'Fierce, Bold & Full of Energy 🐅',
    colorName: 'Fiery Sunset Orange with Espresso Spots',
    symbolism: 'Confidence, Wealth & Fearless Joy',
    fragrance: 'Mild, crisp earthy freshness like morning dew',
    cuteFact: 'Tiger lilies curve their petals back so far it looks like a joyful festive turban, proudly showing off their wild leopard spots!',
    accentColor: '#f97316',
    svg: `
      <svg viewBox="0 0 240 240" class="w-full h-full filter drop-shadow-[0_8px_20px_rgba(249,115,22,0.35)]">
        <defs>
          <linearGradient id="tl-petal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ea580c"/>
            <stop offset="50%" stop-color="#f97316"/>
            <stop offset="100%" stop-color="#fdba74"/>
          </linearGradient>
        </defs>

        <path d="M 120 140 Q 115 190 120 240" stroke="#16a34a" stroke-width="6" fill="none" stroke-linecap="round"/>
        <path d="M 120 170 Q 75 160 45 180 Q 90 195 120 180" fill="#15803d"/>

        <g transform="translate(120, 105)">
          <!-- Strongly Reflexed / Swept-Back Petals -->
          <path d="M 0 0 C -35 -40 -48 -80 -30 -100 C -12 -88 -5 -45 0 0" fill="url(#tl-petal)" stroke="#c2410c" stroke-width="1.2"/>
          <path d="M 0 0 C 35 -40 48 -80 30 -100 C 12 -88 5 -45 0 0" fill="url(#tl-petal)" stroke="#c2410c" stroke-width="1.2"/>
          <path d="M 0 0 C 50 -18 88 -18 100 5 C 75 18 40 12 0 0" fill="url(#tl-petal)" stroke="#c2410c" stroke-width="1.2"/>
          <path d="M 0 0 C -50 -18 -88 -18 -100 5 C -75 18 -40 12 0 0" fill="url(#tl-petal)" stroke="#c2410c" stroke-width="1.2"/>
          <path d="M 0 0 C -30 40 -40 75 -18 88 C 0 70 12 40 0 0" fill="url(#tl-petal)" stroke="#c2410c" stroke-width="1.2"/>
          <path d="M 0 0 C 30 40 40 75 18 88 C 0 70 -12 40 0 0" fill="url(#tl-petal)" stroke="#c2410c" stroke-width="1.2"/>

          <!-- Dark Chocolate Freckles -->
          <g fill="#451a03">
            <circle cx="6" cy="-30" r="2.2"/><circle cx="-12" cy="-42" r="2"/><circle cx="18" cy="-55" r="1.8"/>
            <circle cx="-6" cy="-20" r="2.2"/><circle cx="30" cy="5" r="2.2"/><circle cx="-30" cy="5" r="2.2"/>
            <circle cx="12" cy="30" r="2"/><circle cx="-12" cy="30" r="2"/>
          </g>

          <!-- Exerted, hanging stamens -->
          <g stroke="#fef08a" stroke-width="2.5" fill="none" stroke-linecap="round">
            <path d="M 0 0 Q -25 35 -30 65"/>
            <path d="M 0 0 Q 0 40 0 72"/>
            <path d="M 0 0 Q 25 35 30 65"/>
          </g>
          <g fill="#78350f" stroke="#451a03">
            <ellipse cx="-30" cy="68" rx="7" ry="3.2"/>
            <ellipse cx="0" cy="75" rx="7" ry="3.2"/>
            <ellipse cx="30" cy="68" rx="7" ry="3.2"/>
          </g>
        </g>
      </svg>
    `
  },
  {
    id: 'asiatic-gold',
    name: 'Golden Asiatic Lily',
    botanical: 'Lilium Asiaticum "Pollyanna"',
    tagline: 'Liquid Sunshine & Good Vibes ☀️',
    colorName: 'Radiant Sunbeam Yellow with Amber Heart',
    symbolism: 'Joy, Warmth, Auspicious Beginnings & Good Fortune',
    fragrance: 'Pollen-free, delicate fresh petal scent',
    cuteFact: 'Asiatic lilies are the very first to welcome dawn. In Indian folklore, their bright golden petals symbolize Lakshmi\'s coins of light!',
    accentColor: '#eab308',
    svg: `
      <svg viewBox="0 0 240 240" class="w-full h-full filter drop-shadow-[0_8px_20px_rgba(234,179,8,0.35)]">
        <defs>
          <linearGradient id="al-petal" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#ca8a04"/>
            <stop offset="35%" stop-color="#eab308"/>
            <stop offset="80%" stop-color="#fde047"/>
            <stop offset="100%" stop-color="#fef9c3"/>
          </linearGradient>
        </defs>

        <path d="M 120 150 Q 122 195 118 240" stroke="#16a34a" stroke-width="6" fill="none" stroke-linecap="round"/>
        <path d="M 120 175 Q 165 160 195 180 Q 150 195 120 180" fill="#15803d"/>

        <g transform="translate(120, 115)">
          <!-- Starry Golden Petals -->
          <path d="M 0 0 C -25 -40 -25 -92 0 -105 C 25 -92 25 -40 0 0" fill="url(#al-petal)" stroke="#ca8a04" stroke-width="1.2"/>
          <path d="M 0 0 C 18 -45 70 -75 92 -58 C 86 -28 40 -16 0 0" fill="url(#al-petal)" stroke="#ca8a04" stroke-width="1.2"/>
          <path d="M 0 0 C 40 -12 86 18 80 46 C 52 52 22 24 0 0" fill="url(#al-petal)" stroke="#ca8a04" stroke-width="1.2"/>
          <path d="M 0 0 C 22 40 18 86 0 98 C -18 86 -22 40 0 0" fill="url(#al-petal)" stroke="#ca8a04" stroke-width="1.2"/>
          <path d="M 0 0 C -22 24 -52 52 -80 46 C -86 18 -40 -12 0 0" fill="url(#al-petal)" stroke="#ca8a04" stroke-width="1.2"/>
          <path d="M 0 0 C -40 -16 -86 -28 -92 -58 C -70 -75 -18 -45 0 0" fill="url(#al-petal)" stroke="#ca8a04" stroke-width="1.2"/>

          <!-- Warm Tangerine Center Core -->
          <circle cx="0" cy="0" r="18" fill="#f97316" opacity="0.65"/>

          <g stroke="#fef08a" stroke-width="2.2" fill="none" stroke-linecap="round">
            <path d="M 0 0 Q -12 -28 -18 -50"/>
            <path d="M 0 0 Q 12 -28 18 -50"/>
            <path d="M 0 0 Q 30 -8 46 -12"/>
            <path d="M 0 0 Q -30 -8 -46 -12"/>
          </g>
          <g fill="#9a3412" stroke="#7c2d12">
            <ellipse cx="-18" cy="-52" rx="5.5" ry="2.8" transform="rotate(-30, -18, -52)"/>
            <ellipse cx="18" cy="-52" rx="5.5" ry="2.8" transform="rotate(30, 18, -52)"/>
            <ellipse cx="48" cy="-12" rx="5.5" ry="2.8" transform="rotate(60, 48, -12)"/>
            <ellipse cx="-48" cy="-12" rx="5.5" ry="2.8" transform="rotate(-60, -48, -12)"/>
          </g>
        </g>
      </svg>
    `
  },
  {
    id: 'pink-trumpet',
    name: 'Pink Perfection Trumpet Lily',
    botanical: 'Lilium "Pink Perfection"',
    tagline: 'A Romantic Warm Hug 🌸',
    colorName: 'Blush Rose-Lilac with Golden Throat',
    symbolism: 'Gentle Affection, Elegance & Family Harmony',
    fragrance: 'Warm vanilla and sweet honeyed clover breeze',
    cuteFact: 'Its grand trumpet shape acts like an acoustic megaphone, amplifying the gentle rustle of evening breezes!',
    accentColor: '#ec4899',
    svg: `
      <svg viewBox="0 0 240 240" class="w-full h-full filter drop-shadow-[0_8px_20px_rgba(236,72,153,0.35)]">
        <defs>
          <linearGradient id="pt-petal" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#be185d"/>
            <stop offset="35%" stop-color="#db2777"/>
            <stop offset="75%" stop-color="#f472b6"/>
            <stop offset="100%" stop-color="#fdf2f8"/>
          </linearGradient>
        </defs>

        <path d="M 120 155 Q 118 198 122 240" stroke="#16a34a" stroke-width="6" fill="none" stroke-linecap="round"/>
        <g transform="translate(120, 115)">
          <path d="M 0 0 C -35 -35 -48 -70 -25 -100 C 0 -88 12 -45 0 0" fill="url(#pt-petal)" stroke="#db2777" stroke-width="1.2"/>
          <path d="M 0 0 C 0 -45 12 -88 30 -100 C 48 -75 35 -35 0 0" fill="url(#pt-petal)" stroke="#db2777" stroke-width="1.2"/>
          <path d="M 0 0 C 40 -18 80 -18 92 6 C 70 30 40 18 0 0" fill="url(#pt-petal)" stroke="#db2777" stroke-width="1.2"/>
          <path d="M 0 0 C 24 35 24 75 0 92 C -18 75 -18 35 0 0" fill="url(#pt-petal)" stroke="#db2777" stroke-width="1.2"/>
          <path d="M 0 0 C -40 18 -70 30 -92 6 C -80 -18 -40 -18 0 0" fill="url(#pt-petal)" stroke="#db2777" stroke-width="1.2"/>

          <circle cx="0" cy="0" r="16" fill="#fef08a" opacity="0.85"/>

          <g stroke="#84cc16" stroke-width="2.2" fill="none" stroke-linecap="round">
            <path d="M 0 0 Q -12 -30 -18 -60"/>
            <path d="M 0 0 Q 12 -30 18 -60"/>
          </g>
          <g fill="#b45309">
            <ellipse cx="-18" cy="-62" rx="6" ry="2.8"/>
            <ellipse cx="18" cy="-62" rx="6" ry="2.8"/>
          </g>
        </g>
      </svg>
    `
  },
  {
    id: 'calla-peace',
    name: 'Calla / Peace Lily',
    botanical: 'Zantedeschia aethiopica',
    tagline: 'Modern, Sleek & Sculptural 🌿',
    colorName: 'Creamy Ivory Spathe with Golden Spadix',
    symbolism: 'Rebirth, Eternal Tranquility & Pure Intentions',
    fragrance: 'Delicate whisper of citrus-vanilla nectar',
    cuteFact: 'The magnificent white "petal" is actually a modified leaf called a spathe that gracefully embraces its golden center spire!',
    accentColor: '#10b981',
    svg: `
      <svg viewBox="0 0 240 240" class="w-full h-full filter drop-shadow-[0_8px_20px_rgba(255,255,255,0.25)]">
        <defs>
          <linearGradient id="cp-spathe" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#cbd5e1"/>
            <stop offset="40%" stop-color="#f8fafc"/>
            <stop offset="100%" stop-color="#ffffff"/>
          </linearGradient>
        </defs>

        <path d="M 120 135 Q 116 185 120 240" stroke="#16a34a" stroke-width="6" fill="none" stroke-linecap="round"/>
        <path d="M 120 170 Q 60 155 35 200 Q 80 215 120 180" fill="#15803d"/>

        <g transform="translate(120, 100)">
          <!-- Creamy curved sculptural spathe -->
          <path d="M -18 55 C -55 12 -48 -42 0 -80 C 48 -42 55 12 18 55 Z" fill="url(#cp-spathe)" stroke="#e2e8f0" stroke-width="2"/>
          <path d="M 0 -80 Q 18 -92 30 -80 Q 0 -60 -18 55" fill="#ffffff" opacity="0.95"/>

          <!-- Golden Spadix Core with granular texture -->
          <path d="M 0 20 L 0 -55" stroke="#ca8a04" stroke-width="9" stroke-linecap="round"/>
          <path d="M 0 20 L 0 -55" stroke="#facc15" stroke-width="7" stroke-linecap="round"/>
        </g>
      </svg>
    `
  }
];

class LilyGardenManager {
  constructor() {
    this.lilies = LILY_DATA;
    this.selectedLily = null;
  }

  renderGardenGrid(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = this.lilies.map(lily => `
      <div class="lily-card bg-gradient-to-b from-slate-900/90 to-purple-950/60 border border-amber-500/20 hover:border-amber-400 rounded-3xl p-6 flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(245,158,11,0.25)] backdrop-blur-md group" data-lily-id="${lily.id}">
        <div class="w-44 h-44 relative mb-4 group-hover:scale-110 transition-transform duration-500">
          ${lily.svg}
        </div>
        <span class="text-[11px] font-semibold text-pink-300 uppercase tracking-widest">${lily.tagline}</span>
        <h3 class="text-2xl font-serifHeading font-bold text-amber-100 mt-1">${lily.name}</h3>
        <p class="text-xs text-amber-200/60 italic mb-4">${lily.botanical}</p>
        <div class="mt-auto flex items-center gap-2 text-xs font-semibold text-amber-300 bg-amber-500/10 px-5 py-2.5 rounded-full border border-amber-500/30 group-hover:bg-amber-400 group-hover:text-black transition-all">
          <span>🌸 View Flower Lore</span>
          <i class="fa-solid fa-arrow-right text-[10px]"></i>
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.lily-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-lily-id');
        this.openLilyModal(id);
      });
    });
  }

  openLilyModal(lilyId) {
    const lily = this.lilies.find(l => l.id === lilyId);
    if (!lily) return;

    if (window.festiveAudio) {
      window.festiveAudio.playSweetChime();
    }

    const modal = document.getElementById('lily-detail-modal');
    if (!modal) return;

    document.getElementById('modal-lily-svg').innerHTML = lily.svg;
    document.getElementById('modal-lily-tagline').innerText = lily.tagline;
    document.getElementById('modal-lily-name').innerText = lily.name;
    document.getElementById('modal-lily-botanical').innerText = lily.botanical;
    document.getElementById('modal-lily-symbolism').innerText = lily.symbolism;
    document.getElementById('modal-lily-fragrance').innerText = lily.fragrance;
    document.getElementById('modal-lily-fact').innerText = lily.cuteFact;

    modal.classList.remove('hidden');
    setTimeout(() => {
      modal.classList.remove('opacity-0');
      modal.querySelector('.modal-box').classList.remove('scale-95');
    }, 20);
  }

  closeLilyModal() {
    const modal = document.getElementById('lily-detail-modal');
    if (!modal) return;

    modal.classList.add('opacity-0');
    modal.querySelector('.modal-box').classList.add('scale-95');
    setTimeout(() => {
      modal.classList.add('hidden');
    }, 300);
  }
}

window.lilyGarden = new LilyGardenManager();
