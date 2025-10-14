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
      en: 'is a website for Bhumi Pemedas Housing, focused on creating engaging promotional and sales pages that highlight the benefits of living in this seaside residential area.',
      id: 'adalah situs web untuk Perumahan Bhumi Pemedas, berfokus pada pembuatan halaman promosi dan penjualan yang menonjolkan keunggulan tinggal di kawasan hunian tepi pantai ini.'
    },
    categories: [
      {
        en: 'Company Project',
        id: 'Proyek Perusahaan'
      },
      {
        en: 'UI/UX Lead',
        id: 'Kepala UI/UX'
      },
      {
        en: 'Design Sprint',
        id: 'Design Sprint'
      },
      {
        en: 'Web Landing Page',
        id: 'Web Halaman Arahan'
      },
      {
        en: 'Live Site',
        id: 'Situs Langsung'
      },
    ],
    extUrl: 'https://bhumipemedas.netlify.app',
    extImg: '/web.svg',
    extText: {
      en: 'See Website',
      id: 'Lihat Situs Web'
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
      en: "a simple yet challenging arcade survival game that I designed as my final project for my bachelor's degree.",
      id: 'adalah permainan arcade survival yang sederhana namun menantang, yang saya rancang sebagai proyek akhir untuk gelar sarjana saya.'
    },
    categories: [
      {
        en: 'Final Project',
        id: 'Proyek Tugas Akhir'
      },
      {
        en: 'Independent UI/UX',
        id: 'UI/UX Independen'
      },
      {
        en: 'User-Centered Design',
        id: 'User-Centered Design'
      },
      {
        en: 'Web Game',
        id: 'Permainan Web'
      },
      {
        en: 'Live Site',
        id: 'Situs Langsung'
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
      en: 'See Website',
      id: 'Lihat Situs Web'
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
      en: 'is a family education platform called EduFams. The project focuses on creating an intuitive interface that supports accessible experiences.',
      id: 'adalah platform edukasi keluarga bernama EduFams. Proyek ini berfokus pada pembuatan antarmuka yang intuitif untuk mendukung pengalaman yang mudah diakses.'
    },
    categories: [
      {
        en: 'Company Project',
        id: 'Proyek Perusahaan'
      },
      {
        en: 'UI/UX Internship',
        id: 'UI/UX Internship'
      },
      {
        en: 'Design Thinking',
        id: 'Design Thinking'
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
      en: 'is a UI/UX design project developed for Eduwork (an education platform company based in Yogyakarta) during their plan to expand into a new community-based website platform.',
      id: 'adalah proyek desain UI/UX yang dikembangkan untuk Eduwork (perusahaan platform pendidikan berbasis di Yogyakarta) dalam rangka pengembangan platform baru berbasis komunitas.'
    },
    categories: [
      {
        en: 'Collaborative Project',
        id: 'Collaborative Project'
      },
      {
        en: 'UI/UX Internship',
        id: 'UI/UX Internship'
      },
      {
        en: 'Design Sprint',
        id: 'Design Sprint'
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