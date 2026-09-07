/* ===== KYOKABIR IMAGE CONFIGURATION ===== */
/* All images are from Unsplash (free to use) */

const IMAGES = {
  /* ===== HERO ===== */
  hero: {
    bg: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=1920&q=80', // Karate dojo
    bgMobile: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&q=80'
  },

  /* ===== PRODUCTS ===== */
  products: {
    'p01': 'https://images.unsplash.com/photo-1560631820-7f68897fd447?w=600&q=80', // White karate gi
    'p02': 'https://images.unsplash.com/photo-1678804481508-93d3357b4477?w=600&q=80', // Black karate gi
    'p03': 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600&q=80', // Boxing gloves
    'p04': 'https://images.unsplash.com/photo-1522956957021-9f2437e01594?w=600&q=80', // Face guard
    'p05': 'https://images.unsplash.com/photo-1522844931788-513a2ed46b4b?w=600&q=80', // Shin guards
    'p06': 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80', // Hoodie
    'p07': 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80', // Long sleeve tee
    'p08': 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80', // Sports bag
    'p09': 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=600&q=80', // Notebook
    'p10': 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&q=80', // Mug
    'p11': 'https://images.unsplash.com/photo-1621252756235-7f37e5e5125e?w=600&q=80', // Stickers
    'p12': 'https://images.unsplash.com/photo-1636302925863-6ad504baaf3c?w=600&q=80'  // Mouth guard
  },

  /* ===== VIDEO THUMBNAILS ===== */
  videos: {
    'v01': 'https://images.unsplash.com/photo-1678804481508-93d3357b4477?w=800&q=80', // Kata
    'v02': 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80', // Punches
    'v03': 'https://images.unsplash.com/photo-1517438322307-e67111335449?w=800&q=80', // Kumite
    'v04': 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80', // Philosophy/meditation
    'v05': 'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&q=80', // Kata advanced
    'v06': 'https://images.unsplash.com/photo-1769095210251-e7927d8bf012?w=800&q=80', // Advanced kicks
    'v07': 'https://images.unsplash.com/photo-1495555775484-97f7c56a7ba9?w=800&q=80', // Competition
    'v08': 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80'  // Japanese philosophy
  },

  /* ===== TEAM MEMBERS ===== */
  team: {
    'sensei': 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&q=80', // Male coach
    'mentor': 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80', // Female mentor
    'doctor': 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80', // Doctor
    'manager': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80'  // Manager
  },

  /* ===== EVENTS ===== */
  events: {
    'exam': 'https://images.unsplash.com/photo-1576149146095-caa19d4de102?w=600&q=80', // Belt exam
    'tournament': 'https://images.unsplash.com/photo-1517438322307-e67111335449?w=600&q=80', // Tournament
    'camp': 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80', // Training camp
    'seminar': 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80' // Seminar
  },

  /* ===== VIP ===== */
  vip: {
    'medical': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80', // Medical
    'nutrition': 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&q=80', // Nutrition
    'therapy': 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80', // Therapy
    'mentor': 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&q=80', // Mentorship
    'monitoring': 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80', // Monitoring
    'insurance': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=80'  // Insurance
  },

  /* ===== RANKS ===== */
  ranks: {
    'ashigaru': 'https://images.unsplash.com/photo-1560631820-7f68897fd447?w=300&q=80', // White belt
    'samurai': 'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=300&q=80', // Yellow/orange belt
    'hatamoto': 'https://images.unsplash.com/photo-1678804481508-93d3357b4477?w=300&q=80', // Brown belt
    'shogun': 'https://images.unsplash.com/photo-1551101584-8c8a053e1e00?w=300&q=80'  // Black belt
  },

  /* ===== DOJO ===== */
  dojo: {
    'main': 'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=1200&q=80', // Main dojo
    'training': 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80', // Training
    'map': 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80' // Map placeholder
  }
};

/* ===== IMAGE HELPER FUNCTIONS ===== */
function getProductImage(id) {
  return IMAGES.products[id] || IMAGES.products['p01'];
}

function getVideoImage(id) {
  return IMAGES.videos[id] || IMAGES.videos['v01'];
}

function getTeamImage(role) {
  return IMAGES.team[role] || IMAGES.team['sensei'];
}

function getEventImage(type) {
  return IMAGES.events[type] || IMAGES.events['exam'];
}

function getRankImage(rank) {
  return IMAGES.ranks[rank] || IMAGES.ranks['ashigaru'];
}

function getVipImage(feature) {
  return IMAGES.vip[feature] || IMAGES.vip['medical'];
}
