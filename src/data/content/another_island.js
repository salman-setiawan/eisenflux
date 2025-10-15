const AnotherIsland = {
  card: {
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
      { en: 'Final Project', id: 'Proyek Tugas Akhir' },
      { en: 'Independent UI/UX', id: 'UI/UX Independen' },
      { en: 'User-Centered Design', id: 'User-Centered Design' },
      { en: 'Web Game', id: 'Permainan Web' },
      { en: 'Live Site', id: 'Situs Langsung' }
    ],
    intImg: '/process.svg',
    intText: { en: 'See Process', id: 'Lihat Proses' },
    extUrl: 'https://anotherisland.netlify.app',
    extImg: '/web.svg',
    extText: { en: 'See Website', id: 'Lihat Situs Web' },
  },

  caseStudies: {
    title: 'Another Day in the Island',
    role: 'UI/UX Designer & Researcher',
    tools: ['Figma', 'Google Form', 'Construct', 'Excel'],
    duration: { en: '3 Months', id: '3 Bulan' },
    type: { en: 'Game UX Design (Academic Research)', id: 'Desain UX Permainan (Riset Akademik)' },
    overview: {
      en: 'An arcade-survival game designed using the User-Centered Design (UCD) framework. The goal was to improve gameplay enjoyment and usability based on player feedback and iterative evaluation.',
      id: 'Permainan arcade-survival yang dirancang menggunakan kerangka User-Centered Design (UCD). Tujuannya adalah meningkatkan kesenangan bermain dan kegunaan berdasarkan umpan balik pemain serta evaluasi berulang.'
    },
    problem: {
      en: 'Players of casual arcade games often seek quick, satisfying entertainment but face issues with repetitive gameplay and unclear progression.',
      id: 'Pemain gim arcade kasual sering mencari hiburan cepat dan memuaskan, namun sering menghadapi masalah berupa gameplay yang repetitif dan progresi yang tidak jelas.'
    },
    process: [
      {
        overview: {
          en: "I'm using User-Centered Design because it prioritizes user needs and provides a structured approach to continuously improve usability through iterative testing and feedback loops.",
          id: 'Saya menggunakan metode User-Centered Design karena berfokus pada kebutuhan pengguna dan memberikan pendekatan terstruktur untuk meningkatkan kegunaan melalui pengujian dan umpan balik berulang.'
        }
      },
      {
        label: { en: 'Specify Context :', id: 'Menentukan Konteks :' },
        desc: {
          en: 'Conducted surveys to understand player demographics, play habits, and expectations.',
          id: 'Melakukan survei untuk memahami demografi pemain, kebiasaan bermain, serta ekspektasi mereka.'
        }
      },
      {
        label: { en: 'Define Requirements :', id: 'Menetapkan Kebutuhan :' },
        desc: {
          en: 'Identified key needs — quick learning curve, modern visuals, high replayability.',
          id: 'Mengidentifikasi kebutuhan utama — kurva pembelajaran cepat, visual modern, dan tingkat permainan ulang yang tinggi.'
        }
      },
      {
        label: { en: 'Design Solutions :', id: 'Merancang Solusi :' },
        desc: {
          en: 'Built GDD, storyboard, wireframes, and a complete design system before producing UI mockups.',
          id: 'Membangun GDD, storyboard, wireframe, serta sistem desain lengkap sebelum membuat mockup antarmuka.'
        }
      },
      {
        label: { en: 'Evaluate & Iterate :', id: 'Evaluasi & Iterasi :' },
        desc: {
          en: 'Applied Customer Feedback Loop (CFL) to gather usability scores, yielding improvement from 3.72 → 4.14.',
          id: 'Menerapkan Customer Feedback Loop (CFL) untuk mengumpulkan skor kegunaan, menghasilkan peningkatan dari 3,72 → 4,14.'
        }
      }
    ],
    impact: {
      en: 'Enhanced usability, satisfaction, and memorability metrics by over 10%, resulting in a smoother and more engaging play experience.',
      id: 'Meningkatkan metrik kegunaan, kepuasan, dan daya ingat lebih dari 10%, menghasilkan pengalaman bermain yang lebih lancar dan menarik.'
    },
    keyLearnings: {
      en: "Design iteration backed by measurable user data builds credibility. Visual fun alone doesn't guarantee usability — clarity and feedback do.",
      id: 'Iterasi desain yang didukung oleh data pengguna terukur meningkatkan kredibilitas. Visual yang menarik saja tidak menjamin kegunaan — kejelasan dan umpan baliklah yang menentukan.'
    }
  }
};

export default AnotherIsland;
