/* ===== KYOKABIR IMAGE CONFIGURATION ===== */
/* All images are from Unsplash (free to use) */

const IMAGES = {
  /* ===== HERO ===== */
  hero: {
    bg: 'images/u-1555597673-b21d5c935865.jpg', // Karate dojo
    bgMobile: 'images/u-1555597673-b21d5c935865.jpg'
  },

  /* ===== PRODUCTS ===== */
  products: {
    'p01': 'images/products/p01.jpg', // White karate gi
    'p02': 'images/products/p02.jpg', // Black karate gi
    'p03': 'images/u-1549719386-74dfcbf7dbed.jpg', // Boxing gloves
    'p04': 'images/products/p04.jpg', // Face guard
    'p05': 'images/products/p05.jpg', // Shin guards
    'p06': 'images/u-1556821840-3a63f95609a7.jpg', // Hoodie
    'p07': 'images/u-1521572163474-6864f9cf17ab.jpg', // Long sleeve tee
    'p08': 'images/products/p08.jpg', // Sports bag
    'p09': 'images/u-1531346878377-a5be20888e57.jpg', // Notebook
    'p10': 'images/u-1514228742587-6b1558fcca3d.jpg', // Mug
    'p11': 'images/u-1621252756235-7f37e5e5125e.jpg', // Stickers
    'p12': 'images/products/p12.jpg'  // Mouth guard
  },

  /* ===== VIDEO THUMBNAILS ===== */
  videos: {
    'v01': 'images/u-1678804481508-93d3357b4477.jpg', // Kata
    'v02': 'images/u-1549719386-74dfcbf7dbed.jpg', // Punches
    'v03': 'images/u-1517438322307-e67111335449.jpg', // Kumite
    'v04': 'images/u-1506126613408-eca07ce68773.jpg', // Philosophy/meditation
    'v05': 'images/u-1555597673-b21d5c935865.jpg', // Kata advanced
    'v06': 'images/u-1769095210251-e7927d8bf012.jpg', // Advanced kicks
    'v07': 'images/u-1495555775484-97f7c56a7ba9.jpg', // Competition
    'v08': 'images/u-1528360983277-13d401cdc186.jpg'  // Japanese philosophy
  },

  /* ===== TEAM MEMBERS ===== */
  team: {
    'sensei': 'images/u-1568602471122-7832951cc4c5.jpg', // Male coach
    'mentor': 'images/u-1580489944761-15a19d654956.jpg', // Female mentor
    'doctor': 'images/u-1612349317150-e413f6a5b16d.jpg', // Doctor
    'manager': 'images/u-1573496359142-b8d87734a5a2.jpg'  // Manager
  },

  /* ===== EVENTS ===== */
  events: {
    'exam': 'images/u-1576149146095-caa19d4de102.jpg', // Belt exam
    'tournament': 'images/u-1517438322307-e67111335449.jpg', // Tournament
    'camp': 'images/u-1571019614242-c5c5dee9f50b.jpg', // Training camp
    'seminar': 'images/u-1528360983277-13d401cdc186.jpg' // Seminar
  },

  /* ===== VIP ===== */
  vip: {
    'medical': 'images/u-1576091160399-112ba8d25d1d.jpg', // Medical
    'nutrition': 'images/u-1490645935967-10de6ba17061.jpg', // Nutrition
    'therapy': 'images/u-1571019614242-c5c5dee9f50b.jpg', // Therapy
    'mentor': 'images/u-1521791136064-7986c2920216.jpg', // Mentorship
    'monitoring': 'images/u-1576091160550-2173dba999ef.jpg', // Monitoring
    'insurance': 'images/u-1554224155-6726b3ff858f.jpg'  // Insurance
  },

  /* ===== RANKS ===== */
  ranks: {
    'ashigaru': 'images/u-1560631820-7f68897fd447.jpg', // White belt
    'samurai': 'images/u-1555597673-b21d5c935865.jpg', // Yellow/orange belt
    'hatamoto': 'images/u-1678804481508-93d3357b4477.jpg', // Brown belt
    'shogun': 'images/u-1551101584-8c8a053e1e00.jpg'  // Black belt
  },

  /* ===== DOJO ===== */
  dojo: {
    'main': 'images/u-1555597673-b21d5c935865.jpg', // Main dojo
    'training': 'images/u-1571019614242-c5c5dee9f50b.jpg', // Training
    'map': 'images/u-1524661135-423995f22d0b.jpg' // Map placeholder
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
