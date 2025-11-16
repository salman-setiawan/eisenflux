const Edufams = {
  card: {
    id: 3,
    slug: 'edufams',
    title: 'EDUCATION FAMILY',
    nav: 'edufams.prj',
    cover: '/bg.webp',
    obj: '/showcase/edufams.webp',
    desc: {
      en: 'is a family education platform called EduFams. The project focuses on creating an intuitive interface that supports accessible experiences.',
      id: 'adalah platform edukasi keluarga bernama EduFams. Proyek ini berfokus pada pembuatan antarmuka yang intuitif untuk mendukung pengalaman yang mudah diakses.'
    },
    categories: [
      { en: 'Company Project', id: 'Proyek Perusahaan' },
      { en: 'UI/UX Internship', id: 'UI/UX Internship' },
      { en: 'Design Thinking', id: 'Design Thinking' },
      { en: 'Mobile Apps', id: 'Aplikasi Mobile' },
      { en: 'Web Apps', id: 'Aplikasi Web' },
    ],
    intImg: '/process.svg',
    intText: { en: 'See Process', id: 'Lihat Proses' },
    intImg2: '/process.svg',
    intText2: { en: 'See Design', id: 'Lihat Rancangan' },
    extImg: '/web.svg',
    extText: { en: 'See Page', id: 'Lihat Halaman' },
  },

  caseStudies: {
    title: "EduFams - Family Education Platform",
    altTitle: "EduFams",
    role: { en: "UI/UX Internship", id: "UI/UX Magang" },
    duration: { en: "5 Months", id: "5 Bulan" },
    tools: ["Figma", "Miro", "Microsoft Planner"],
    type: { en: "Startup Internship Project", id: "Proyek Magang Startup" },
    overview: [
      {
        en: "EduFams is a family education platform that provides article and video content about family life, class programs with top mentors in their fields, and donation support to help underprivileged families.",
        id: "EduFams adalah platform edukasi keluarga yang menyediakan konten artikel/video mengenai keluarga, program kelas dengan mentor terbaik di bidangnya, dan dukungan donasi untuk membantu keluarga dengan ekonomi kebawah."
      },
      {
        en: "This project was developed collaboratively with web and mobile developers under the guidance of a Product Manager, using the Agile Kanban methodology and applying Design Thinking throughout the design process.",
        id: "Proyek ini dikembangkan secara kolaboratif bersama developer web dan juga mobile di bawah arahan Product Manager menggunakan metodologi Agile Kanban, dan Design Thinking dalam proses desainnya."
      },
    ],
    problem: {
      en: "Indonesian families lacked accessible parenting education during the pandemic, leading to increased child gadget dependency and family stress.",
      id: "Keluarga Indonesia kekurangan akses terhadap edukasi parenting selama masa pandemi, yang menyebabkan meningkatnya ketergantungan anak terhadap gawai dan stres dalam keluarga."
    },
    processImg: '/edufams/think.webp',
    process: [
      {
        overview: {
          en: "Design Thinking was chosen by our company because it emphasizes empathy, iteration, and collaboration making it ideal for designing human-centered solutions in a startup environment.",
          id: "Metode Design Thinking dipilih oleh perusahaan karena menekankan empati, iterasi, dan kolaborasi menjadikannya ideal untuk merancang solusi berorientasi manusia dalam lingkungan startup."
        }
      },
      {
        label: { en: 'Empathize :', id: 'Empati :' },
        desc: {
          en: 'Conducted online research and interviews with parents.',
          id: 'Melakukan riset daring dan wawancara dengan para orang tua.'
        }
      },
      {
        label: { en: 'Define :', id: 'Definisi :' },
        desc: {
          en: 'Framed the problem around the lack of reliable family education tools.',
          id: 'Merumuskan masalah utama seputar kurangnya alat edukasi keluarga yang andal.'
        }
      },
      {
        label: { en: 'Ideate :', id: 'Ideasi :' },
        desc: {
          en: 'Brainstormed solutions via mind maps resulting in a family-learning platform concept.',
          id: 'Melakukan brainstorming melalui mind map menghasilkan konsep platform pembelajaran keluarga.'
        }
      },
      {
        label: { en: 'Prototype :', id: 'Prototipe :' },
        desc: {
          en: 'Created responsive web & mobile wireframes, built design system, and interactive prototype.',
          id: 'Membuat wireframe responsif untuk web dan mobile, membangun sistem desain, serta membuat prototipe interaktif.'
        }
      },
      {
        label: { en: 'Test :', id: 'Uji Coba :' },
        desc: {
          en: 'Received mentor feedback on margins, layout density, and color hierarchy; refined accordingly.',
          id: 'Mendapatkan masukan dari mentor terkait margin, kepadatan tata letak, dan hierarki warna; kemudian melakukan perbaikan sesuai saran.'
        }
      },
    ],
    impact: {
      en: 'Delivered a complete MVP prototype ready for deployment and pitching to investors at PT Media Kreasi Abadi. Improved usability through layout refinement and consistent brand identity.',
      id: 'Menghasilkan prototipe MVP lengkap yang siap digunakan untuk pengujian dan presentasi kepada investor di PT Media Kreasi Abadi. Kegunaan meningkat melalui penyempurnaan tata letak dan konsistensi identitas merek.'
    },
    keyLearnings: {
      en: "Design should first serve clarity, accessibility, and empathy not only aesthetics. Broader usability testing is key for scalable design decisions.",
      id: "Desain harus terlebih dahulu mengutamakan kejelasan, aksesibilitas, dan empati bukan sekadar estetika. Pengujian kegunaan yang lebih luas merupakan kunci dalam pengambilan keputusan desain yang dapat diskalakan."
    },
    gallery: [
      {
        type: 'image',
        src: '/edufams/mobile.webp',
      },
      {
        type: 'image',
        src: '/edufams/browser.webp',
      },
    ]
  }
};

export default Edufams;
