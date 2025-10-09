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
      en: 'is a website design project for Bhumi Pemedas Housing, focusing on promotional and sales pages',
      id: 'adalah proyek desain situs web untuk Bhumi Pemedas Housing yang berfokus pada halaman promosi dan penjualan.'
    },
    categories: [{
        en: 'UI/UX',
        id: 'UI/UX'
      },
      {
        en: 'Web Apps',
        id: 'Aplikasi Web'
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
      en: 'is a simple arcade-survival game called Another Day in the Island, which I designed for my final project as an informatics student at the Kalimantan Institute of Technology.',
      id: 'adalah permainan arkade-survival sederhana bernama Another Day in the Island, yang saya desain untuk proyek akhir saya sebagai mahasiswa ilmu komputer di Institut Teknologi Kalimantan.'
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
      en: 'is a family education platform called EduFams that i design using the Design Thinking methodology. For MSIB Kampus Merdeka Program.',
      id: 'adalah sebuah platform edukasi keluarga bernama EduFams yang saya rancang menggunakan metodologi Design Thinking. Untuk Program MSIB Kampus Merdeka.'
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
      en: 'is a project initiated when Eduwork (an education platform company based in Yogyakarta) planned to develop a new platform in the form of a community-based website.',
      id: 'adalah proyek saat Eduwork (perusahaan platform pendidikan yang berbasis di Yogyakarta) berencana mengembangkan platform baru berupa situs web berbasis komunitas.'
    },
    categories: [{
        en: 'UI/UX',
        id: 'UI/UX'
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

    contents: Eduwork,
  },
];

export default CardData;