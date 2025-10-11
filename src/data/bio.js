const BioData = [
  {
    desc: {
      en: "Bachelor of Informatics graduate with a specialization in UI/UX Design. Experienced in conducting user experience research, designing low and high-fidelity interface, developing design systems, and prototyping interface.",
      id: "Lulusan Sarjana Informatika dengan spesialisasi dalam Desain UI/UX. Berpengalaman dalam melakukan riset pengalaman pengguna, merancang antarmuka fidelitas rendah dan tinggi, mengembangkan sistem desain, serta membuat prototipe antarmuka.",
    },
    experience: [
      {
        uid: 1,
        title: "PT. Cipta Lima Sekawan",
        role: {
          en: "Digital Marketing Specialist (Contract)",
          id: "Spesialis Marketing Digital (Kontrak)"
        },
        dateStart: "2024-11",
        dateEnd: "Present",
        keyWord: [
          { en: 'Digital Marketing', id: 'Pemasaran Digital' },
          { en: 'Graphic Design', id: 'Desain Grafis' },
          { en: 'UI/UX Design', id: 'Desain UI/UX' },
          { en: 'Handle Social Media', id: 'Mengelola Media Sosial' },
          { en: 'Figma', id: 'Figma' },
          { en: 'Meta Ads', id: 'Meta Ads' },
          { en: 'Veo 3', id: 'Veo 3' },
        ],
        jobdesc: {
          en: 'Designed promotional and company profile websites, managed corporate design assets, and developed digital content strategies, including optimizing paid advertising through Meta Ads to boost engagement and conversions.',
          id: 'Merancang website promosi dan profil perusahaan, mengelola aset desain perusahaan, serta mengembangkan strategi konten digital hingga melakukan optimasi iklan berbayar melalui Meta Ads untuk meningkatkan engagement dan konversi.'
        },      
      },
      {
        uid: 2,
        title: "PT. Mahakarya Inovasi Bangsa",
        role: {
          en: "UI/UX Designer (Intern)",
          id: "Perancang UI/UX (Magang)"
        },
        dateStart: "2024-06",
        dateEnd: "2024-09",
        keyWord: [
          { en: 'UI/UX Design', id: 'Desain UI/UX' },
          { en: 'ERP Website', id: 'Situs ERP' },
          { en: 'Agile', id: 'Agile' },
          { en: 'Figma', id: 'Figma' },
          { en: 'Jira', id: 'Jira' },
        ],
        jobdesc: {
          en: 'Designed and optimized the user interface and user experience (UI/UX) of ERP websites for state-owned enterprises (BUMN) in Balikpapan including PDAM, PLN, and the Environmental Agency with a focus on usability, accessibility, and efficiency.',
          id: 'Merancang dan mengoptimalkan desain antarmuka serta pengalaman pengguna (UI/UX) untuk website ERP milik BUMN di Balikpapan termasuk PDAM, PLN, dan Dinas Lingkungan Hidup dengan fokus pada kegunaan, aksesibilitas, dan efisiensi.'
        },
      },
      {
        uid: 3,
        title: "PT. Talenta Sinergi Group",
        role: {
          en: "UI/UX Designer (Intern)",
          id: "Perancang UI/UX (Magang)"
        },
        dateStart: "2023-06",
        dateEnd: "2023-09",
        keyWord: [
          { en: 'UI/UX Design', id: 'Desain UI/UX' },
          { en: 'Landing Page for Mentor', id: 'Halaman Arahan untuk Mentor' },
          { en: 'Agile', id: 'Agile' },
          { en: 'A/B Testing', id: 'A/B Testing' },
          { en: 'Figma', id: 'Figma' },
          { en: 'Jira', id: 'Jira' },
        ],
        jobdesc: {
          en: "Contributed to the design of the main page for Eduwork's mentor website, and participated in daily brainstorming sessions with other interns to create low-fidelity and high-fidelity designs.",
          id: 'Berkontribusi dalam perancangan halaman utama website mentor milik Eduwork, dan Terlibat dalam sesi brainstorming harian bersama tim magang lain untuk membuat desain low-fi dan hi-fi'
        },
      },
      {
        uid: 4,
        title: "Torche Education",
        role: {
          en: "UI Designer (Intern)",
          id: "Perancang UI (Magang)"
        },
        dateStart: "2023-02",
        dateEnd: "2023-06",
        keyWord: [
          { en: 'UI/UX Design', id: 'Desain UI/UX' },
          { en: 'Landing Page for Career', id: 'Halaman Arahan untuk Karir' },
          { en: 'Figma', id: 'Figma' },
          { en: 'Discord', id: 'Discord' },
        ],
        jobdesc: {
          en: 'Transformed wireframes into compelling visual mockups and responsive prototypes for the careers page—designed to attract top-tier candidates. Strategically enhanced navigation and user flow to ensure faster, more intuitive access and deliver an exceptional user experience.',
          id: 'Mengubah wireframe menjadi mockup visual yang menarik dan prototipe responsif untuk halaman karir, yang dirancang untuk menarik lebih banyak pelamar berkualitas. Menyempurnakan navigasi dan alur pengguna secara strategis untuk memastikan akses yang cepat, intuitif, dan meningkatkan pengalaman pengguna secara keseluruhan.'
        },
      },
      {
        uid: 5,
        title: "PT. Media Kreasi Abadi",
        role: {
          en: "UI/UX Designer (Intern)",
          id: "Perancang UI/UX (Magang)"
        },
        dateStart: "2022-02",
        dateEnd: "2022-07",
        keyWord: [
          { en: 'UI/UX Design', id: 'Desain UI/UX' },
          { en: 'Familiy-Education Platform', id: 'Platform untuk Edukasi-Keluarga' },
          { en: 'Kanban', id: 'Kanban' },
          { en: 'Design Thinking', id: 'Design Thinking' },
          { en: 'Figma', id: 'Figma' },
          { en: 'Microsoft Planner', id: 'Microsoft Planner' },
          { en: 'Miro', id: 'Miro' },
        ],
        jobdesc: {
          en: 'Experienced in working within an Agile team using the Kanban framework, I contributed to the development of a family education platform called EduFams through a Design Thinking approach. I led the end-to-end UX design process, including problem identification, solution formulation, and crafting both user and business flows. Additionally, I designed and managed comprehensive UI components, covering wireframing, design systems, UI mockups, and responsive, functional prototyping.',
          id: 'Berpengalaman bekerja dalam tim dengan metodologi Agile menggunakan Kanban, saya berkontribusi dalam pengembangan platform edukasi keluarga bernama EduFams menggunakan pendekatan Design Thinking. Dalam proyek ini, saya menangani seluruh proses desain UX mulai dari identifikasi masalah, perumusan solusi, hingga perancangan alur pengguna dan bisnis. Selain itu, saya juga merancang dan mengelola desain UI secara menyeluruh, mencakup wireframing, sistem desain, mockup antarmuka, hingga pembuatan prototipe yang responsif dan fungsional.'
        },
      },
    ],
    education: [
      {
        uid: 1,
        title: {
          en: "Kalimantan Institute of Technologies",
          id: "Institut Teknologi Kalimantan"
        },
        role: {
          en: "Bachelor of Informatics",
          id: "Sarjana Informatika"
        },
        dateStart: "2019-10",
        dateEnd: "2023-01",
      },
    ],
    certification: [
      {
        uid: 1,
        title: 'Test of English Proficiency and Skill (610)',
        company: 'Neo Specta',
        date: "2025",
      },
      {
        uid: 2,
        title: 'EF SET English Certificate (C1 Advanced)',
        company: 'EF Standard English Test',
        date: "2025",
      },
      {
        uid: 3,
        title: 'Figma Assessment',
        company: 'Uxcel',
        date: "2023",
      },
      {
        uid: 4,
        title: 'Google UX Design',
        company: 'Coursera',
        date: "2023",
      },
      {
        uid: 5,
        title: 'SKKNI Junior Graphic Design',
        company: 'Balai Pelatihan & Pengembangan Teknologi Informasi & Komunikasi',
        date: "2021",
      },
    ]
  },
];


export default BioData;
