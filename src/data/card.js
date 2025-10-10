import AnotherIsland from "./content/another_island";
import Edufams from "./content/edufams";
import Eduwork from "./content/eduwork";

const CardData = [{
    id: 1,
    slug: 'bhumi-pemedas',
    title: 'Bhumi Pemedas Ads Website',
    title2: 'BHUMI PEMEDAS',
    nav: 'bhumi_pemedas.prj',
    cover: '/bg.webp',
    obj: '/showcase/pemedas.webp',
    desc: {
      en: 'is a website design project for Bhumi Pemedas Housing, focused on creating engaging promotional and sales pages that highlight the unique benefits of living in this seaside residential area.',
      id: 'adalah proyek desain situs web untuk Perumahan Bhumi Pemedas, yang berfokus pada pembuatan halaman promosi dan penjualan yang menarik serta menonjolkan keunggulan tinggal di kawasan hunian tepi pantai ini.'
    },
    categories: [{
        en: 'UI/UX',
        id: 'UI/UX'
      },
      {
        en: 'Web Landing Page',
        id: 'Web Halaman Arahan'
      },
    ],
    extUrl: 'https://bhumipemedas.netlify.app',
    extImg: '/web.svg',
    extText: {
      en: 'See Page',
      id: 'Lihat Halaman'
    },
  },

  {
    id: 2,
    slug: 'another-island',
    title: 'Another Day in the Island',
    title2: 'ANOTHER ISLAND',
    nav: 'another_island.prj',
    cover: '/bg.webp',
    obj: '/showcase/another.webp',
    desc: {
      en: 'is a simple yet challenging arcade-survival game, which I designed and developed as my final project while studying Informatics at the Kalimantan Institute of Technology.',
      id: 'adalah gim arcade-survival sederhana namun menantang, yang saya rancang dan kembangkan sebagai proyek akhir ketika menempuh studi Informatika di Institut Teknologi Kalimantan.'
    },
    categories: [{
        en: 'UI/UX',
        id: 'UI/UX'
      },
      {
        en: 'Web Game',
        id: 'Permainan Web'
      },
    ],
    intImg: '/process.svg',
    intText: {
      en: 'See Process',
      id: 'Lihat Proses'
    },
    extUrl: 'https://anotherisland.netlify.app',
    extImg: '/web.svg',
    extText: {
      en: 'See Page',
      id: 'Lihat Halaman'
    },

    contents: AnotherIsland,
  },

  {
    id: 3,
    slug: 'edufams',
    title: 'EduFams',
    title2: 'EDUCATION FAMILY',
    nav: 'edufams.prj',
    cover: '/bg.webp',
    obj: '/showcase/edufams.webp',
    desc: {
      en: 'is a family education platform called EduFams, which I designed using the Design Thinking methodology. The project focuses on creating an intuitive, family-friendly interface that supports accessible experiences.',
      id: 'adalah platform edukasi keluarga bernama EduFams yang saya rancang menggunakan metodologi Design Thinking. Proyek ini berfokus pada pembuatan antarmuka yang intuitif dan ramah keluarga untuk mendukung pengalaman yang mudah diakses.'
    },
    categories: [{
        en: 'UI/UX',
        id: 'UI/UX'
      },
      {
        en: 'Mobile Apps',
        id: 'Aplikasi Mobile'
      },
      {
        en: 'Web Apps',
        id: 'Aplikasi Web'
      },
    ],
    intImg: '/process.svg',
    intText: {
      en: 'See Process',
      id: 'Lihat Proses'
    },
    intImg2: '/process.svg',
    intText2: {
      en: 'See Design',
      id: 'Lihat Rancangan'
    },
    extImg: '/web.svg',
    extText: {
      en: 'See Page',
      id: 'Lihat Halaman'
    },

    contents: Edufams,
  },

  {
    id: 4,
    slug: 'eduwork',
    title: 'Eduwork Mentor Website',
    title2: 'EDUWORK MENTOR',
    nav: 'eduwork.prj',
    cover: '/bg.webp',
    obj: '/showcase/eduwork.webp',
    desc: {
      en: 'is a UI/UX design project developed for Eduwork — an education platform company based in Yogyakarta — during their plan to expand into a new community-based website platform.',
      id: 'adalah proyek desain UI/UX yang dikembangkan untuk Eduwork — perusahaan platform pendidikan berbasis di Yogyakarta — dalam rangka pengembangan platform baru berbasis komunitas.'
    },
    categories: [{
        en: 'UI/UX',
        id: 'UI/UX'
      },
      {
        en: 'Web Landing Page',
        id: 'Web Halaman Arahan'
      },
    ],
    intImg: '/process.svg',
    intText: {
      en: 'See Process',
      id: 'Lihat Proses'
    },
    intImg2: '/process.svg',
    intText2: {
      en: 'See Design',
      id: 'Lihat Rancangan'
    },
    extImg: '/web.svg',
    extText: {
      en: 'See Page',
      id: 'Lihat Halaman'
    },

    contents: Eduwork,
  },
];

export default CardData;