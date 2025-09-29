const ArticleData = [{
    id: 1,
    slug: 'bhumi-pemedas',
    title: 'Bhumi Pemedas Ads Website',
    title2: 'BHUMI PEMEDAS',
    nav: 'bhumi-pemedas.prj',
    cover: '/bg.webp',
    obj: '/showcase2.webp',
    desc: {
      en: 'Coming Soon.',
      id: 'Akan Datang.'
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
    extUrl: 'https://anotherisland.netlify.app',
    extImg: '/web.svg',
    extText: {
      en: 'See Page',
      id: 'Lihat Halaman'
    },

    contents: [{
        text: {
          en: 'This project is a simple arcade-survival game called Another Day in the Island, which I designed as research for my final project as an informatics student at the Kalimantan Institute of Technology.',
          id: 'Proyek ini adalah permainan arkade-survival sederhana yang disebut Hari Lain di Pulau, yang saya desain sebagai riset untuk proyek akhir saya sebagai mahasiswa informatika di Institut Teknologi Kalimantan.'
        }
      },
      {
        text: {
          en: "In this game, players take on the role of a mysterious character, whose objective is to gather as many points as possible by defeating monsters scattered throughout the area.",
          id: "Dalam permainan ini, pemain mengambil peran sebagai karakter misterius, dengan tujuan untuk mengumpulkan sebanyak mungkin poin dengan mengalahkan monster yang tersebar di seluruh area."
        }
      },
      {
        text: {
          en: "This research employs the User-Centered Design (UCD) approach, a method that places users as the primary focus in the product, application, or experience design process as illustrated in the image below.",
          id: "Penelitian ini menggunakan pendekatan User-Centered Design (UCD), yaitu metode yang menempatkan pengguna sebagai fokus utama dalam proses desain produk, aplikasi, atau pengalaman seperti yang digambarkan dalam gambar di bawah."
        }
      },
      {
        img: "/anotherisland/ucd.png",
        desc: {
          en: "UCD Cycle according to ISO 9241-210:2019",
          id: "Siklus UCD menurut ISO 9241-210:2019"
        }
      },
      {
        title: {
          en: "Specify Context of Use",
          id: "Spesifikasi Konteks Kegunaan"
        },
        text: {
          en: "At this stage, the researcher focused on understanding who the game's users are, their goals in playing, and the context of using the arcade game to be designed. Data was collected through a questionnaire covering participant profiles, such as age, play preferences, the reasons behind those choices, and their experience with arcade games.",
          id: "Pada tahap ini peneliti berfokus untuk memahami siapa pengguna permainan, tujuan mereka bermain, serta kondisi penggunaan permainan arcade yang akan dirancang. Data dikumpulkan melalui kuesioner yang mencakup profil peserta, seperti usia, preferensi bermain, alasan di balik pilihan tersebut, dan pengalaman mereka dengan permainan arcade."
        }
      },
      {
        text: {
          en: "To clarify the analysis results, the researcher created user personas based on respondent data. Personas help visualize who the main players are, the situations in which they play, and the challenges they face, thereby providing a more concrete understanding of the game's usage context.",
          id: "Untuk memperjelas hasil analisis, peneliti menyusun user persona berdasarkan data responden. Persona membantu memvisualisasikan siapa pemain utama, dalam situasi apa mereka bermain, serta hambatan yang mereka hadapi, sehingga memberikan pemahaman yang lebih konkret mengenai konteks penggunaan permainan."
        }
      },
      {
        title: {
          en: "Specify Requirement",
          id: "Spesifikasi Kebutuhan"
        },
        text: {
          en: "The results of questionnaire data analysis, interviews, and insights from personas were then used to formulate user needs. Some of the main identified needs include:",
          id: "Hasil analisis data kuesioner, wawancara, serta insight dari persona kemudian digunakan untuk merumuskan kebutuhan pengguna. Beberapa kebutuhan utama yang teridentifikasi antara lain:"
        }
      },
      {
        textQuote: [{
            type: "text",
            value: {
              en: "Occasional bugs that disrupt player's comfort during gameplay have been identified. One such bug occurs in the hell level, where bullets keep spawning at the position of a monster that has already been defeated.",
              id: "Gameplay sederhana yang dapat dipelajari dengan cepat agar sesuai dengan waktu senggang yang terbatas."
            }
          },
          {
            type: "text",
            value: {
              en: "A fun gameplay experience that can provide quick entertainment.",
              id: "Pengalaman bermain yang menyenangkan dan mampu memberikan hiburan singkat."
            }
          },
          {
            type: "text",
            value: {
              en: "A survival arcade theme that offers both challenges and motivation to keep playing.",
              id: "Tema bertahan hidup (survival arcade) yang memberikan tantangan sekaligus motivasi untuk terus bermain."
            }
          },
          {
            type: "text",
            value: {
              en: "Modern visuals that are more appealing than classic pixelated designs, aligning with the expectations of younger users.",
              id: "Visual modern yang lebih menarik daripada desain pixelated klasik, sesuai dengan ekspektasi pengguna muda."
            }
          },
          {
            type: "text",
            value: {
              en: "High replayability that encourages players to replay the game without feeling bored.",
              id: "Replayability tinggi yang mendorong pemain untuk mengulang permainan tanpa merasa bosan."
            }
          },
        ]
      },
      {
        text: {
          en: "The points above will be used as a reference in designing the arcade game Another Day in the Island.",
          id: "Poin-poin diatas akan digunakan sebagai acuan dalam perancangan permainan arcade Another Day in the Island."
        }
      },
      {
        title: {
          en: "Product Design Solution",
          id: "Solusi Desain Produk"
        },
        text: {
          en: 'This stage covers the creation of design solutions, starting from rough concepts such as the Game Design Document (GDD), storyboard, and wireframe, design system, up to the UI mockup.',
          id: 'Tahap ini mencakup pembuatan solusi desain, mulai dari konsep kasar seperti Game Design Document (GDD), storyboard, dan wireframe, design system hingga UI mockup.'
        }
      },
      {
        img: "/anotherisland/content3.webp",
        desc: {
          en: "This is the description for the image.",
          id: "Ini adalah deskripsi untuk gambar."
        }
      },
      {
        text: {
          en: 'The image above is the result of the storyboard for the game to be developed. This design illustrates the game flow, where when players open the game, they will enter the main menu screen. Here, players can also access several features such as settings, events, and tutorials. Before playing, players can choose the difficulty level. Outside of the main gameplay flow, there are also explanations such as monster characteristics and conditional situations that players will encounter.',
          id: 'Gambar diatas adalah hasil dari storyboard permainan yang akan di bangun, rancangan tersebut menjelaskan alur permainan dimana saat pemain membuka permainan akan masuk ke tampilan main-menu, disini pemain juga dapat mengakses beberapa fitur seperti pengaturan, event, dan tutorial. sebelum bermain pemain dapat memilih tingkat kesulitan. Diluar dari alur permainan ada penjelasan seperti karakterisitik monster, dan situasi kondisional yang akan dihadapi pemain.'
        }
      },
      {
        text: {
          en: 'The next step is moving into the wireframe design process, which aims to visualize the storyboard sketches into a simple framework of the game interface. The result is attached in the image below.',
          id: 'Langkah selanjutnya adalah masuk ke proses desain wireframe, yang bertujuan untuk memvisualisasikan sketsa storyboard yang dibuat menjadi kerangka sederhana antarmuka permainan. berikut hasilnya terlampir pada gambar dibawah ini.'
        }
      },
      {
        img: "/anotherisland/wire.png",
        desc: {
          en: "Wireframe from Another Day in the Island.",
          id: "Wireframe dari Another Day in the Island."
        }
      },
      {
        text: {
          en: 'The wireframe is designed based on the previously created storyboard concept. The next stage is the design system development, which serves as the main guideline for designing the game interface. This stage includes creating a style guide that covers brand identity, color system, typography, assets, and several key components of the game.',
          id: 'Wireframe dirancang berdasarkan konsep storyboard yang telah dibuat sebelumnya. Tahap selanjutnya adalah perancangan design system sebagai panduan utama dalam merancang antarmuka permainan. Tahap ini mencakup pembuatan style guide yang meliputi brand identity, color system, tipografi, aset, serta beberapa komponen penting dalam permainan.'
        }
      },
      {
        img: "/anotherisland/desy.png",
        desc: {
          en: "UI Assets from Another Day in the Island.",
          id: "Aset UI dari Another Day in the Island."
        }
      },
      {
        text: {
          en: 'The final result of the design solution will be a UI mockup, which will be used by the developers to build the game Another Day in the Island.',
          id: 'Hasil akhir dari solusi desain nantinya akan berupa maket UI untuk digunakan pengembang dalam membangun permainan Another Day in the Island.'
        }
      },
      {
        title: {
          en: "Evaluation Design",
          id: "Evaluasi Desain"
        },
        text: {
          en: "The purpose of this evaluation is to gather player's feedback through prepared questions and to understand their experience while playing. The evaluation is conducted iteratively to ensure satisfactory results.",
          id: 'Tujuan dari evaluasi ini adalah untuk mengumpulkan pendapat pemain melalui pertanyaan yang disiapkan dan memahami pengalaman mereka saat bermain. Evaluasi dilakukan secara iteratif untuk memastikan hasilnya memuaskan.'
        }
      },
      {
        img: "/anotherisland/user.png",
        desc: {
          en: "Game Trial Documentation.",
          id: "Dokumentasi Pengujian Permainan."
        }
      },
      {
        text: {
          en: 'Here is a brief documentation of how feedback will be collected. Players will first play the game, and once they feel they have experienced enough to provide an assessment, they will fill out a prepared feedback form. The evaluation technique will be carried out using the Customer Feedback Loop (CFL) method with the following stages.',
          id: 'Berikut adalah sedikit dokumentasi bagaimana pengambilan feedback akan dilakukan. Pemain akan bermain terlebih dahulu, setelah dirasa cukup dan bisa menilai, pemain akan mengisi form feedback yang sudah disiapkan. Teknik evaluasi akan dilakukan menggunakan metode customer feedback loop (CFL) dengan tahapan sebagai berikut.'
        }
      },
      {
        img: "/anotherisland/cfl.png",
        desc: {
          en: "This is the description for the image.",
          id: "Ini adalah deskripsi untuk gambar."
        }
      },
      {
        text: {
          en: "The initial stage involved collecting feedback through a questionnaire with parameters such as age, gender, and questions related to Another Day in the Island. Usability-related questions aimed to evaluate the interface and user experience, using a rating scale from 1 to 5 based on factors of satisfaction, learnability, efficiency, and memorability.",
          id: 'Tahap awal melibatkan pengumpulan umpan balik melalui kuesioner dengan parameter seperti usia, gender, serta pertanyaan terkait Another Day in the Island. Pertanyaan mengenai usability ditujukan untuk mengevaluasi antarmuka dan pengalaman pengguna, dengan skala penilaian 1 hingga 5 berdasarkan faktor satisfaction, learnability, efficiency, dan memorability.'
        }
      },
      {
        text: {
          en: "In addition, players were also asked to provide reviews, critiques, and suggestions to support interface development and improve the overall gaming experience. The following are the evaluation results obtained for the arcade game Another Day in the Island.",
          id: 'Selain itu, pemain juga diminta memberikan ulasan, kritik, dan saran yang dapat mendukung pengembangan antarmuka serta meningkatkan pengalaman bermain. Berikut adalah hasil evaluasi untuk game arcade Another Day in the Island yang diperoleh.'
        }
      },
      {
        img: "/anotherisland/ces1.png",
        desc: {
          en: "This is the description for the image.",
          id: "Ini adalah deskripsi untuk gambar."
        }
      },
      {
        text: {
          en: 'The initial evaluation results show a usability score of 3.72 (above average), with the following details: Satisfaction (3.675), Learnability (3.2), Efficiency (4), and Memorability (4.1).',
          id: 'Hasil evaluasi awal menunjukkan skor usability 3,72 (di atas rata-rata), dengan detail sebagai berikut: Satisfaction (3,675), Learnability (3,2), Efficiency (4), dan Memorability (4,1).'
        }
      },
      {
        text: {
          en: "The next stage is processing data from player reviews and feedback. This data will be used to improve the interface and gameplay experience. The collected feedback was then integrated into the development of a tool that helps determine priorities between value and effort, enabling designers to make more accurate decisions. The following are the processes and decisions I made in refining the design.",
          id: 'Tahap selanjutnya adalah mengolah data dari ulasan dan masukan pemain. Data ini akan digunakan untuk meningkatkan antarmuka serta pengalaman bermain. Hasil masukan yang terkumpul kemudian diintegrasikan ke dalam pengembangan alat yang berfungsi menentukan prioritas antara nilai (value) dan usaha (effort), sehingga dapat membantu desainer mengambil keputusan yang lebih tepat. Berikut adalah proses dan keputusan yang saya ambil dalam perbaikan desain.'
        }
      },
      {
        img: "/anotherisland/ev.png",
        desc: {
          en: "This is the description for the image.",
          id: "Ini adalah deskripsi untuk gambar."
        }
      },
      {
        text: {
          en: "Improvements were focused on the green area because they directly affect the player experience and are relatively easy to implement. For the yellow area, enhancements included adding a tutorial stage, refining the tutorial page, introducing power-up buffs to increase gameplay variety, and reducing the excessive number of enemies in casual stages.",
          id: 'Perbaikan yang dilakukan difokuskan pada area hijau karena berpengaruh langsung pada pengalaman pemain dan mudah diimplementasikan. Pada area kuning, peningkatan meliputi penambahan tahap tutorial, penyempurnaan halaman tutorial, penambahan power-up buffs untuk variasi gameplay, serta pengurangan jumlah musuh berlebihan pada tahap kasual.'
        }
      },
      {
        text: {
          en: "However, an in-game currency system was not added due to its complexity and lack of urgency, while the difficulty gap between casual and hell levels was intentionally maintained to preserve the sense of extreme challenge. The red area did not receive improvements since its urgency was low and it required significant resources.",
          id: 'Namun, fitur mata uang dalam game tidak ditambahkan karena kompleksitas dan belum mendesak, sementara kesenjangan tingkat kesulitan antara level kasual dan hell tetap dipertahankan untuk menjaga tantangan ekstrem. Area merah tidak mendapat peningkatan karena urgensinya rendah dan membutuhkan sumber daya besar.'
        }
      },
      {
        text: {
          en: "From the analysis above, the improvements to be made can be seen in the following points.",
          id: 'Dari analisis di atas, perbaikan yang akan dilakukan dapat dilihat pada poin-poin berikut.'
        }
      },
      {
        textQuote: [{
            type: "text",
            value: {
              en: "Occasional bugs that disrupt player's comfort during gameplay have been identified. One such bug occurs in the hell level, where bullets keep spawning at the position of a monster that has already been defeated.",
              id: "Bug yang sesekali muncul dan mengganggu kenyamanan pemain saat bermain telah teridentifikasi. Salah satu bug terjadi pada level hell, di mana peluru terus muncul di posisi monster yang sudah dikalahkan."
            }
          },
          {
            type: "text",
            value: {
              en: "In addition, there are issues with background settings and sound effects that do not function properly during gameplay. To address these problems and ensure players can enjoy a smooth gaming experience, adjustments will be made to the game's event sheet.",
              id: "Selain itu, terdapat masalah pada pengaturan latar belakang dan efek suara yang tidak berfungsi dengan baik selama permainan. Untuk mengatasi masalah tersebut dan memastikan pemain dapat menikmati pengalaman bermain yang lancar, penyesuaian akan dilakukan pada event sheet game."
            }
          },
        ]
      },
      {
        textQuote: [{
            type: "text",
            value: {
              en: "The improvements include creating a dedicated stage designed to provide gameplay guidance in the game Another Day in the Island, as illustrated in the image below.",
              id: "Perbaikan mencakup pembuatan sebuah tahap khusus yang didedikasikan untuk memberikan panduan gameplay dalam game Another Day in the Island, seperti yang digambarkan pada gambar di bawah ini."
            }
          },
          {
            type: "image",
            value: "/anotherisland/fix1.webp"
          },
          {
            type: "text",
            value: {
              en: "The image above shows the tutorial page that can be accessed from the main menu. However, due to the lack of player interest in opening this page, improvements have been made as shown in the image below.",
              id: "Gambar di atas menampilkan halaman tutorial yang dapat diakses dari menu utama. Namun, karena kurangnya minat pemain untuk membuka halaman ini, dilakukan perbaikan seperti yang ditunjukkan pada gambar di bawah."
            }
          },
          {
            type: "image",
            value: "/anotherisland/fix2.webp"
          },
          {
            type: "image",
            value: "/anotherisland/fix3.webp"
          },
          {
            type: "text",
            value: {
              en: "The two images above illustrate the improvement of the game guide from simple informational content into a playable stage. This tutorial stage is intended for players who find the game quite challenging, allowing them to play it first. The feature also introduces difficulty variations, including easy, medium, and hard levels.",
              id: "Dua gambar di atas menggambarkan perbaikan panduan game dari sekadar informasi biasa menjadi tahap yang dapat dimainkan. Tahap tutorial ini ditujukan bagi pemain yang merasa permainan cukup menantang, sehingga mereka dapat memainkan tahap ini terlebih dahulu. Fitur ini juga menambahkan variasi tingkat kesulitan, termasuk level mudah, sedang, dan sulit."
            }
          },
        ]
      },
      {
        textQuote: [{
            type: "text",
            value: {
              en: "Designing the power-up system includes adding buffs to enhance gameplay variety, as illustrated in the image below.",
              id: "Merancang sistem power-up mencakup penambahan buff untuk meningkatkan variasi dalam permainan, seperti yang digambarkan pada gambar di bawah ini."
            }
          },
          {
            type: "image",
            value: "/anotherisland/fix6.webp"
          },
          {
            type: "image",
            value: "/anotherisland/fix7.webp"
          },
          {
            type: "text",
            value: {
              en: "The image above shows that after players defeat a monster in a certain area, the monster will have a small chance of dropping an orb, as illustrated. Once players obtain this orb, they will receive a buff effect such as a shield buff. This shield provides protection for a few seconds and destroys anything it comes into contact with, including monsters and enemy projectiles.",
              id: "Gambar di atas menggambarkan bahwa setelah pemain mengalahkan monster di suatu area, monster tersebut akan menjatuhkan sebuah orb dengan kemungkinan kecil, seperti yang ditunjukkan. Setelah pemain memperoleh orb ini, mereka akan mendapatkan efek buff seperti shield buff. Buff ini akan memberikan perlindungan kepada pemain selama beberapa detik. Perisai ini akan menghancurkan apa pun yang bersentuhan dengannya, seperti monster maupun peluru dari monster."
            }
          },
        ]
      },
      {
        textQuote: [{
            type: "text",
            value: {
              en: "Lastly, at the beginning of the game, a page is designed to display a warning about photosensitivity symptoms, allowing players with such conditions to choose not to play the game. The interface can be seen in the image below.",
              id: "Terakhir, pada awal permainan dirancang sebuah halaman yang menampilkan peringatan mengenai gejala fotosensitivitas, sehingga pemain dengan gejala serupa dapat memilih untuk tidak memainkan game. Antarmuka tersebut dapat dilihat pada gambar di bawah ini."
            }
          },
          {
            type: "image",
            value: "/anotherisland/fix8.webp"
          },
        ]
      },
      {
        img: "/anotherisland/ces2.png",
        desc: {
          en: "This is the description for the image.",
          id: "Ini adalah deskripsi untuk gambar."
        }
      },
      {
        text: {
          en: "The image above compares evaluation data 1 and 2 for the game Another Day in the Island, showing a difference in overall usability. Evaluation 1 recorded a score of 3.72, while Evaluation 2 showed an improvement with a score of 4.14. This indicates that usability has improved between the two evaluations.",
          id: 'Gambar di atas membandingkan data evaluasi 1 dan 2 untuk game Another Day in the Island, yang menunjukkan adanya perbedaan dalam usability secara keseluruhan. Evaluasi 1 mencatat skor 3,72, sementara Evaluasi 2 menunjukkan peningkatan dengan skor 4,14. Hal ini mengindikasikan bahwa telah terjadi perbaikan usability antara kedua evaluasi tersebut.'
        }
      },
      {
        text: {
          en: "The image above compares evaluation data 1 and 2 for the game Another Day in the Island, showing a difference in overall usability. Evaluation 1 recorded a score of 3.72, while Evaluation 2 showed an improvement with a score of 4.14. This indicates that usability has improved between the two evaluations.",
          id: 'Pada grafik perbandingan terlihat bahwa kriteria usability seperti satisfaction, learnability, efficiency, dan memorability juga mengalami peningkatan. Satisfaction meningkat dari 3,68 menjadi 4,03, learnability dari 3,1 menjadi 3,7, efficiency dari 4,0 menjadi 4,3, dan memorability dari 4,1 menjadi 4,55. Grafik kolom perbandingan memvisualisasikan peningkatan ini dengan jelas, menyoroti progres yang dicapai pada setiap aspek usability.'
        }
      },
      {
        text: {
          en: "The image above compares evaluation data 1 and 2 for the game Another Day in the Island, showing a difference in overall usability. Evaluation 1 recorded a score of 3.72, while Evaluation 2 showed an improvement with a score of 4.14. This indicates that usability has improved between the two evaluations.",
          id: 'Perubahan dan perbaikan yang diterapkan antara Evaluasi 1 dan 2 telah berhasil meningkatkan tingkat usability pada setiap kriteria, sehingga memberikan pengalaman bermain yang lebih baik bagi pengguna Another Day in the Island.'
        }
      },
      {
        title: {
          en: "Aftermath",
          id: "Dampak"
        },
        text: {
          en: 'The UI and UX design for the arcade game Another Day in the Island has successfully provided an enjoyable gameplay experience. The application of User-Centered Design (UCD) principles has improved user acceptance and engagement. Evaluation through questionnaires and interviews ensured that the design aligns with user preferences, resulting in an experience that meets expectations.',
          id: 'Desain UI dan UX untuk game arcade Another Day in the Island berhasil memberikan pengalaman bermain yang menyenangkan. Penerapan prinsip User-Centered Design (UCD) telah meningkatkan penerimaan serta keterlibatan pengguna. Evaluasi melalui kuesioner dan wawancara memastikan keselarasan desain dengan preferensi pengguna, sehingga pengalaman yang dihasilkan sesuai dengan harapan.'
        }
      },
      {
        text: {
          en: 'However, this game is still in its early stages, so there are many concepts, features, and designs that can be further developed in the future. Thank you for reading until the end.',
          id: 'Namun, game ini masih berada pada tahap awal, sehingga masih banyak konsep, fitur, dan desain yang dapat dikembangkan lebih lanjut di masa depan. Terima kasih sudah membaca sampai akhir.'
        }
      },
    ]
  },

  {
    id: 2,
    slug: 'another-island',
    title: 'Another Day in the Island',
    title2: 'ANOTHER ISLAND',
    nav: 'another_island.prj',
    cover: '/bg.webp',
    obj: '/showcase2.webp',
    desc: {
      en: 'A simple arcade-survival game called Another Day in the Island, which I designed for my final project as an informatics student at the Kalimantan Institute of Technology.',
      id: 'Permainan arkade-survival sederhana bernama Another Day in the Island, yang saya desain untuk proyek akhir saya sebagai mahasiswa ilmu komputer di Institut Teknologi Kalimantan.'
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

    contents: [{
        text: {
          en: 'This project is a simple arcade-survival game called Another Day in the Island, which I designed as research for my final project as an informatics student at the Kalimantan Institute of Technology.',
          id: 'Proyek ini adalah permainan arkade-survival sederhana yang disebut Hari Lain di Pulau, yang saya desain sebagai riset untuk proyek akhir saya sebagai mahasiswa informatika di Institut Teknologi Kalimantan.'
        }
      },
      {
        text: {
          en: "In this game, players take on the role of a mysterious character, whose objective is to gather as many points as possible by defeating monsters scattered throughout the area.",
          id: "Dalam permainan ini, pemain mengambil peran sebagai karakter misterius, dengan tujuan untuk mengumpulkan sebanyak mungkin poin dengan mengalahkan monster yang tersebar di seluruh area."
        }
      },
      {
        text: {
          en: "This research employs the User-Centered Design (UCD) approach, a method that places users as the primary focus in the product, application, or experience design process as illustrated in the image below.",
          id: "Penelitian ini menggunakan pendekatan User-Centered Design (UCD), yaitu metode yang menempatkan pengguna sebagai fokus utama dalam proses desain produk, aplikasi, atau pengalaman seperti yang digambarkan dalam gambar di bawah."
        }
      },
      {
        img: "/anotherisland/ucd.png",
        desc: {
          en: "UCD Cycle according to ISO 9241-210:2019",
          id: "Siklus UCD menurut ISO 9241-210:2019"
        }
      },
      {
        title: {
          en: "Specify Context of Use",
          id: "Spesifikasi Konteks Kegunaan"
        },
        text: {
          en: "At this stage, the researcher focused on understanding who the game's users are, their goals in playing, and the context of using the arcade game to be designed. Data was collected through a questionnaire covering participant profiles, such as age, play preferences, the reasons behind those choices, and their experience with arcade games.",
          id: "Pada tahap ini peneliti berfokus untuk memahami siapa pengguna permainan, tujuan mereka bermain, serta kondisi penggunaan permainan arcade yang akan dirancang. Data dikumpulkan melalui kuesioner yang mencakup profil peserta, seperti usia, preferensi bermain, alasan di balik pilihan tersebut, dan pengalaman mereka dengan permainan arcade."
        }
      },
      {
        text: {
          en: "To clarify the analysis results, the researcher created user personas based on respondent data. Personas help visualize who the main players are, the situations in which they play, and the challenges they face, thereby providing a more concrete understanding of the game's usage context.",
          id: "Untuk memperjelas hasil analisis, peneliti menyusun user persona berdasarkan data responden. Persona membantu memvisualisasikan siapa pemain utama, dalam situasi apa mereka bermain, serta hambatan yang mereka hadapi, sehingga memberikan pemahaman yang lebih konkret mengenai konteks penggunaan permainan."
        }
      },
      {
        title: {
          en: "Specify Requirement",
          id: "Spesifikasi Kebutuhan"
        },
        text: {
          en: "The results of questionnaire data analysis, interviews, and insights from personas were then used to formulate user needs. Some of the main identified needs include:",
          id: "Hasil analisis data kuesioner, wawancara, serta insight dari persona kemudian digunakan untuk merumuskan kebutuhan pengguna. Beberapa kebutuhan utama yang teridentifikasi antara lain:"
        }
      },
      {
        textQuote: [{
            type: "text",
            value: {
              en: "Occasional bugs that disrupt player's comfort during gameplay have been identified. One such bug occurs in the hell level, where bullets keep spawning at the position of a monster that has already been defeated.",
              id: "Gameplay sederhana yang dapat dipelajari dengan cepat agar sesuai dengan waktu senggang yang terbatas."
            }
          },
          {
            type: "text",
            value: {
              en: "A fun gameplay experience that can provide quick entertainment.",
              id: "Pengalaman bermain yang menyenangkan dan mampu memberikan hiburan singkat."
            }
          },
          {
            type: "text",
            value: {
              en: "A survival arcade theme that offers both challenges and motivation to keep playing.",
              id: "Tema bertahan hidup (survival arcade) yang memberikan tantangan sekaligus motivasi untuk terus bermain."
            }
          },
          {
            type: "text",
            value: {
              en: "Modern visuals that are more appealing than classic pixelated designs, aligning with the expectations of younger users.",
              id: "Visual modern yang lebih menarik daripada desain pixelated klasik, sesuai dengan ekspektasi pengguna muda."
            }
          },
          {
            type: "text",
            value: {
              en: "High replayability that encourages players to replay the game without feeling bored.",
              id: "Replayability tinggi yang mendorong pemain untuk mengulang permainan tanpa merasa bosan."
            }
          },
        ]
      },
      {
        text: {
          en: "The points above will be used as a reference in designing the arcade game Another Day in the Island.",
          id: "Poin-poin diatas akan digunakan sebagai acuan dalam perancangan permainan arcade Another Day in the Island."
        }
      },
      {
        title: {
          en: "Product Design Solution",
          id: "Solusi Desain Produk"
        },
        text: {
          en: 'This stage covers the creation of design solutions, starting from rough concepts such as the Game Design Document (GDD), storyboard, and wireframe, design system, up to the UI mockup.',
          id: 'Tahap ini mencakup pembuatan solusi desain, mulai dari konsep kasar seperti Game Design Document (GDD), storyboard, dan wireframe, design system hingga UI mockup.'
        }
      },
      {
        img: "/anotherisland/content3.webp",
        desc: {
          en: "This is the description for the image.",
          id: "Ini adalah deskripsi untuk gambar."
        }
      },
      {
        text: {
          en: 'The image above is the result of the storyboard for the game to be developed. This design illustrates the game flow, where when players open the game, they will enter the main menu screen. Here, players can also access several features such as settings, events, and tutorials. Before playing, players can choose the difficulty level. Outside of the main gameplay flow, there are also explanations such as monster characteristics and conditional situations that players will encounter.',
          id: 'Gambar diatas adalah hasil dari storyboard permainan yang akan di bangun, rancangan tersebut menjelaskan alur permainan dimana saat pemain membuka permainan akan masuk ke tampilan main-menu, disini pemain juga dapat mengakses beberapa fitur seperti pengaturan, event, dan tutorial. sebelum bermain pemain dapat memilih tingkat kesulitan. Diluar dari alur permainan ada penjelasan seperti karakterisitik monster, dan situasi kondisional yang akan dihadapi pemain.'
        }
      },
      {
        text: {
          en: 'The next step is moving into the wireframe design process, which aims to visualize the storyboard sketches into a simple framework of the game interface. The result is attached in the image below.',
          id: 'Langkah selanjutnya adalah masuk ke proses desain wireframe, yang bertujuan untuk memvisualisasikan sketsa storyboard yang dibuat menjadi kerangka sederhana antarmuka permainan. berikut hasilnya terlampir pada gambar dibawah ini.'
        }
      },
      {
        img: "/anotherisland/wire.png",
        desc: {
          en: "Wireframe from Another Day in the Island.",
          id: "Wireframe dari Another Day in the Island."
        }
      },
      {
        text: {
          en: 'The wireframe is designed based on the previously created storyboard concept. The next stage is the design system development, which serves as the main guideline for designing the game interface. This stage includes creating a style guide that covers brand identity, color system, typography, assets, and several key components of the game.',
          id: 'Wireframe dirancang berdasarkan konsep storyboard yang telah dibuat sebelumnya. Tahap selanjutnya adalah perancangan design system sebagai panduan utama dalam merancang antarmuka permainan. Tahap ini mencakup pembuatan style guide yang meliputi brand identity, color system, tipografi, aset, serta beberapa komponen penting dalam permainan.'
        }
      },
      {
        img: "/anotherisland/desy.png",
        desc: {
          en: "UI Assets from Another Day in the Island.",
          id: "Aset UI dari Another Day in the Island."
        }
      },
      {
        text: {
          en: 'The final result of the design solution will be a UI mockup, which will be used by the developers to build the game Another Day in the Island.',
          id: 'Hasil akhir dari solusi desain nantinya akan berupa maket UI untuk digunakan pengembang dalam membangun permainan Another Day in the Island.'
        }
      },
      {
        title: {
          en: "Evaluation Design",
          id: "Evaluasi Desain"
        },
        text: {
          en: "The purpose of this evaluation is to gather player's feedback through prepared questions and to understand their experience while playing. The evaluation is conducted iteratively to ensure satisfactory results.",
          id: 'Tujuan dari evaluasi ini adalah untuk mengumpulkan pendapat pemain melalui pertanyaan yang disiapkan dan memahami pengalaman mereka saat bermain. Evaluasi dilakukan secara iteratif untuk memastikan hasilnya memuaskan.'
        }
      },
      {
        img: "/anotherisland/user.png",
        desc: {
          en: "Game Trial Documentation.",
          id: "Dokumentasi Pengujian Permainan."
        }
      },
      {
        text: {
          en: 'Here is a brief documentation of how feedback will be collected. Players will first play the game, and once they feel they have experienced enough to provide an assessment, they will fill out a prepared feedback form. The evaluation technique will be carried out using the Customer Feedback Loop (CFL) method with the following stages.',
          id: 'Berikut adalah sedikit dokumentasi bagaimana pengambilan feedback akan dilakukan. Pemain akan bermain terlebih dahulu, setelah dirasa cukup dan bisa menilai, pemain akan mengisi form feedback yang sudah disiapkan. Teknik evaluasi akan dilakukan menggunakan metode customer feedback loop (CFL) dengan tahapan sebagai berikut.'
        }
      },
      {
        img: "/anotherisland/cfl.png",
        desc: {
          en: "This is the description for the image.",
          id: "Ini adalah deskripsi untuk gambar."
        }
      },
      {
        text: {
          en: "The initial stage involved collecting feedback through a questionnaire with parameters such as age, gender, and questions related to Another Day in the Island. Usability-related questions aimed to evaluate the interface and user experience, using a rating scale from 1 to 5 based on factors of satisfaction, learnability, efficiency, and memorability.",
          id: 'Tahap awal melibatkan pengumpulan umpan balik melalui kuesioner dengan parameter seperti usia, gender, serta pertanyaan terkait Another Day in the Island. Pertanyaan mengenai usability ditujukan untuk mengevaluasi antarmuka dan pengalaman pengguna, dengan skala penilaian 1 hingga 5 berdasarkan faktor satisfaction, learnability, efficiency, dan memorability.'
        }
      },
      {
        text: {
          en: "In addition, players were also asked to provide reviews, critiques, and suggestions to support interface development and improve the overall gaming experience. The following are the evaluation results obtained for the arcade game Another Day in the Island.",
          id: 'Selain itu, pemain juga diminta memberikan ulasan, kritik, dan saran yang dapat mendukung pengembangan antarmuka serta meningkatkan pengalaman bermain. Berikut adalah hasil evaluasi untuk game arcade Another Day in the Island yang diperoleh.'
        }
      },
      {
        img: "/anotherisland/ces1.png",
        desc: {
          en: "This is the description for the image.",
          id: "Ini adalah deskripsi untuk gambar."
        }
      },
      {
        text: {
          en: 'The initial evaluation results show a usability score of 3.72 (above average), with the following details: Satisfaction (3.675), Learnability (3.2), Efficiency (4), and Memorability (4.1).',
          id: 'Hasil evaluasi awal menunjukkan skor usability 3,72 (di atas rata-rata), dengan detail sebagai berikut: Satisfaction (3,675), Learnability (3,2), Efficiency (4), dan Memorability (4,1).'
        }
      },
      {
        text: {
          en: "The next stage is processing data from player reviews and feedback. This data will be used to improve the interface and gameplay experience. The collected feedback was then integrated into the development of a tool that helps determine priorities between value and effort, enabling designers to make more accurate decisions. The following are the processes and decisions I made in refining the design.",
          id: 'Tahap selanjutnya adalah mengolah data dari ulasan dan masukan pemain. Data ini akan digunakan untuk meningkatkan antarmuka serta pengalaman bermain. Hasil masukan yang terkumpul kemudian diintegrasikan ke dalam pengembangan alat yang berfungsi menentukan prioritas antara nilai (value) dan usaha (effort), sehingga dapat membantu desainer mengambil keputusan yang lebih tepat. Berikut adalah proses dan keputusan yang saya ambil dalam perbaikan desain.'
        }
      },
      {
        img: "/anotherisland/ev.png",
        desc: {
          en: "This is the description for the image.",
          id: "Ini adalah deskripsi untuk gambar."
        }
      },
      {
        text: {
          en: "Improvements were focused on the green area because they directly affect the player experience and are relatively easy to implement. For the yellow area, enhancements included adding a tutorial stage, refining the tutorial page, introducing power-up buffs to increase gameplay variety, and reducing the excessive number of enemies in casual stages.",
          id: 'Perbaikan yang dilakukan difokuskan pada area hijau karena berpengaruh langsung pada pengalaman pemain dan mudah diimplementasikan. Pada area kuning, peningkatan meliputi penambahan tahap tutorial, penyempurnaan halaman tutorial, penambahan power-up buffs untuk variasi gameplay, serta pengurangan jumlah musuh berlebihan pada tahap kasual.'
        }
      },
      {
        text: {
          en: "However, an in-game currency system was not added due to its complexity and lack of urgency, while the difficulty gap between casual and hell levels was intentionally maintained to preserve the sense of extreme challenge. The red area did not receive improvements since its urgency was low and it required significant resources.",
          id: 'Namun, fitur mata uang dalam game tidak ditambahkan karena kompleksitas dan belum mendesak, sementara kesenjangan tingkat kesulitan antara level kasual dan hell tetap dipertahankan untuk menjaga tantangan ekstrem. Area merah tidak mendapat peningkatan karena urgensinya rendah dan membutuhkan sumber daya besar.'
        }
      },
      {
        text: {
          en: "From the analysis above, the improvements to be made can be seen in the following points.",
          id: 'Dari analisis di atas, perbaikan yang akan dilakukan dapat dilihat pada poin-poin berikut.'
        }
      },
      {
        textQuote: [{
            type: "text",
            value: {
              en: "Occasional bugs that disrupt player's comfort during gameplay have been identified. One such bug occurs in the hell level, where bullets keep spawning at the position of a monster that has already been defeated.",
              id: "Bug yang sesekali muncul dan mengganggu kenyamanan pemain saat bermain telah teridentifikasi. Salah satu bug terjadi pada level hell, di mana peluru terus muncul di posisi monster yang sudah dikalahkan."
            }
          },
          {
            type: "text",
            value: {
              en: "In addition, there are issues with background settings and sound effects that do not function properly during gameplay. To address these problems and ensure players can enjoy a smooth gaming experience, adjustments will be made to the game's event sheet.",
              id: "Selain itu, terdapat masalah pada pengaturan latar belakang dan efek suara yang tidak berfungsi dengan baik selama permainan. Untuk mengatasi masalah tersebut dan memastikan pemain dapat menikmati pengalaman bermain yang lancar, penyesuaian akan dilakukan pada event sheet game."
            }
          },
        ]
      },
      {
        textQuote: [{
            type: "text",
            value: {
              en: "The improvements include creating a dedicated stage designed to provide gameplay guidance in the game Another Day in the Island, as illustrated in the image below.",
              id: "Perbaikan mencakup pembuatan sebuah tahap khusus yang didedikasikan untuk memberikan panduan gameplay dalam game Another Day in the Island, seperti yang digambarkan pada gambar di bawah ini."
            }
          },
          {
            type: "image",
            value: "/anotherisland/fix1.webp"
          },
          {
            type: "text",
            value: {
              en: "The image above shows the tutorial page that can be accessed from the main menu. However, due to the lack of player interest in opening this page, improvements have been made as shown in the image below.",
              id: "Gambar di atas menampilkan halaman tutorial yang dapat diakses dari menu utama. Namun, karena kurangnya minat pemain untuk membuka halaman ini, dilakukan perbaikan seperti yang ditunjukkan pada gambar di bawah."
            }
          },
          {
            type: "image",
            value: "/anotherisland/fix2.webp"
          },
          {
            type: "image",
            value: "/anotherisland/fix3.webp"
          },
          {
            type: "text",
            value: {
              en: "The two images above illustrate the improvement of the game guide from simple informational content into a playable stage. This tutorial stage is intended for players who find the game quite challenging, allowing them to play it first. The feature also introduces difficulty variations, including easy, medium, and hard levels.",
              id: "Dua gambar di atas menggambarkan perbaikan panduan game dari sekadar informasi biasa menjadi tahap yang dapat dimainkan. Tahap tutorial ini ditujukan bagi pemain yang merasa permainan cukup menantang, sehingga mereka dapat memainkan tahap ini terlebih dahulu. Fitur ini juga menambahkan variasi tingkat kesulitan, termasuk level mudah, sedang, dan sulit."
            }
          },
        ]
      },
      {
        textQuote: [{
            type: "text",
            value: {
              en: "Designing the power-up system includes adding buffs to enhance gameplay variety, as illustrated in the image below.",
              id: "Merancang sistem power-up mencakup penambahan buff untuk meningkatkan variasi dalam permainan, seperti yang digambarkan pada gambar di bawah ini."
            }
          },
          {
            type: "image",
            value: "/anotherisland/fix6.webp"
          },
          {
            type: "image",
            value: "/anotherisland/fix7.webp"
          },
          {
            type: "text",
            value: {
              en: "The image above shows that after players defeat a monster in a certain area, the monster will have a small chance of dropping an orb, as illustrated. Once players obtain this orb, they will receive a buff effect such as a shield buff. This shield provides protection for a few seconds and destroys anything it comes into contact with, including monsters and enemy projectiles.",
              id: "Gambar di atas menggambarkan bahwa setelah pemain mengalahkan monster di suatu area, monster tersebut akan menjatuhkan sebuah orb dengan kemungkinan kecil, seperti yang ditunjukkan. Setelah pemain memperoleh orb ini, mereka akan mendapatkan efek buff seperti shield buff. Buff ini akan memberikan perlindungan kepada pemain selama beberapa detik. Perisai ini akan menghancurkan apa pun yang bersentuhan dengannya, seperti monster maupun peluru dari monster."
            }
          },
        ]
      },
      {
        textQuote: [{
            type: "text",
            value: {
              en: "Lastly, at the beginning of the game, a page is designed to display a warning about photosensitivity symptoms, allowing players with such conditions to choose not to play the game. The interface can be seen in the image below.",
              id: "Terakhir, pada awal permainan dirancang sebuah halaman yang menampilkan peringatan mengenai gejala fotosensitivitas, sehingga pemain dengan gejala serupa dapat memilih untuk tidak memainkan game. Antarmuka tersebut dapat dilihat pada gambar di bawah ini."
            }
          },
          {
            type: "image",
            value: "/anotherisland/fix8.webp"
          },
        ]
      },
      {
        img: "/anotherisland/ces2.png",
        desc: {
          en: "This is the description for the image.",
          id: "Ini adalah deskripsi untuk gambar."
        }
      },
      {
        text: {
          en: "The image above compares evaluation data 1 and 2 for the game Another Day in the Island, showing a difference in overall usability. Evaluation 1 recorded a score of 3.72, while Evaluation 2 showed an improvement with a score of 4.14. This indicates that usability has improved between the two evaluations.",
          id: 'Gambar di atas membandingkan data evaluasi 1 dan 2 untuk game Another Day in the Island, yang menunjukkan adanya perbedaan dalam usability secara keseluruhan. Evaluasi 1 mencatat skor 3,72, sementara Evaluasi 2 menunjukkan peningkatan dengan skor 4,14. Hal ini mengindikasikan bahwa telah terjadi perbaikan usability antara kedua evaluasi tersebut.'
        }
      },
      {
        text: {
          en: "The image above compares evaluation data 1 and 2 for the game Another Day in the Island, showing a difference in overall usability. Evaluation 1 recorded a score of 3.72, while Evaluation 2 showed an improvement with a score of 4.14. This indicates that usability has improved between the two evaluations.",
          id: 'Pada grafik perbandingan terlihat bahwa kriteria usability seperti satisfaction, learnability, efficiency, dan memorability juga mengalami peningkatan. Satisfaction meningkat dari 3,68 menjadi 4,03, learnability dari 3,1 menjadi 3,7, efficiency dari 4,0 menjadi 4,3, dan memorability dari 4,1 menjadi 4,55. Grafik kolom perbandingan memvisualisasikan peningkatan ini dengan jelas, menyoroti progres yang dicapai pada setiap aspek usability.'
        }
      },
      {
        text: {
          en: "The image above compares evaluation data 1 and 2 for the game Another Day in the Island, showing a difference in overall usability. Evaluation 1 recorded a score of 3.72, while Evaluation 2 showed an improvement with a score of 4.14. This indicates that usability has improved between the two evaluations.",
          id: 'Perubahan dan perbaikan yang diterapkan antara Evaluasi 1 dan 2 telah berhasil meningkatkan tingkat usability pada setiap kriteria, sehingga memberikan pengalaman bermain yang lebih baik bagi pengguna Another Day in the Island.'
        }
      },
      {
        title: {
          en: "Aftermath",
          id: "Dampak"
        },
        text: {
          en: 'The UI and UX design for the arcade game Another Day in the Island has successfully provided an enjoyable gameplay experience. The application of User-Centered Design (UCD) principles has improved user acceptance and engagement. Evaluation through questionnaires and interviews ensured that the design aligns with user preferences, resulting in an experience that meets expectations.',
          id: 'Desain UI dan UX untuk game arcade Another Day in the Island berhasil memberikan pengalaman bermain yang menyenangkan. Penerapan prinsip User-Centered Design (UCD) telah meningkatkan penerimaan serta keterlibatan pengguna. Evaluasi melalui kuesioner dan wawancara memastikan keselarasan desain dengan preferensi pengguna, sehingga pengalaman yang dihasilkan sesuai dengan harapan.'
        }
      },
      {
        text: {
          en: 'However, this game is still in its early stages, so there are many concepts, features, and designs that can be further developed in the future. Thank you for reading until the end.',
          id: 'Namun, game ini masih berada pada tahap awal, sehingga masih banyak konsep, fitur, dan desain yang dapat dikembangkan lebih lanjut di masa depan. Terima kasih sudah membaca sampai akhir.'
        }
      },
    ]
  },

  {
    id: 3,
    slug: 'edufams',
    title: 'EduFams',
    title2: 'EDU FAMS',
    nav: 'edufams.prj',
    cover: '/bg.webp',
    obj: '/showcase4.webp',
    desc: {
      en: 'I had the opportunity to intern at PT. Media Kreasi Abadi through the Kampus Merdeka program, with a focus on developing a family education platform called EduFams using the Design Thinking methodology.',
      id: 'PSaya berkesempatan untuk magang di PT. Media Kreasi Abadi melalui program Kampus Merdeka, dengan fokus mengembangkan sebuah platform edukasi keluarga bernama EduFams menggunakan metodologi Design Thinking.'
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
    extImg: '/web.svg',
    extText: {
      en: 'See Page',
      id: 'Lihat Halaman'
    },

    contents: [{
        img: "/edufams/brand.webp",
        desc: {
          en: "This is the description for the image.",
          id: "Ini adalah deskripsi untuk gambar."
        }
      },
      {
        text: {
          en: 'The EduFams family education platform was created as a solution for families in need of education and information about building a harmonious and healthy family.',
          id: 'Platform edukasi keluarga EduFams dibuat sebagai solusi masalah bagi keluarga yang membutuhkan edukasi dan informasi seputar keluarga yang harmonis dan baik.'
        }
      },
      {
        text: {
          en: 'The main features offered by the platform include informational media in the form of articles and videos, allowing users to gain knowledge and insights on topics such as child parenting, symptoms or syndromes that may occur in children, and more.',
          id: 'Fitur utama yang ditawarkan oleh platform antara lain media informasi berupa artikel maupun video agar pengguna dapat mendapat informasi dan wawasan seperti parenting anak, gejala atau sindrom yang terjadi pada anak, dan lain sebagainya.'
        }
      },
      {
        text: {
          en: 'The platform also provides classes and training with top mentors in their fields, along with paid features such as group chat counseling to help users better understand the classes they attend. Lastly, there is a donation feature for users from financially disadvantaged families.',
          id: 'Platform ini juga menyediakan kelas dan pelatihan bersama mentor terbaik di bidangnya, fitur berbayar seperti konseling via group chat juga menjadi opsi untuk membantu pengguna lebih memahami kelas yang diikuti. Terakhir ada fitur donasi untuk pengguna dari keluarga yang kekurangan secara finansial.'
        }
      },
      {
        title: {
          en: "Team and Project Management",
          id: "Manajemen Tim dan Proyek"
        }
      },
      {
        img: "/edufams/team.jpg",
        desc: {
          en: "This is the description for the image.",
          id: "Ini adalah deskripsi untuk gambar."
        }
      },
      {
        text: {
          en: 'The platform also provides classes and training with top mentors in their fields, along with paid features such as group chat counseling to help users better understand the classes they attend. Lastly, there is a donation feature for users from financially disadvantaged families.',
          id: 'Tim EduFams terdiri dari 4 mahasiswa dengan 4 role berbeda yaitu sebagai UI/UX Designer, Front-End Developer, Back-End Developer, dan Mobile App Developer. Dikepalai oleh 1 mentor dari MKA sebagai Product Manager. Selama proses kolaborasi bersama tim, Kanban digunakan sebagai metode dalam manajemen proyek selama magang berlangsung.'
        }
      },
      {
        text: {
          en: 'At this stage, the author and the team reported daily activities on a regular basis to communicate the progress made, based on the tasks assigned by the Product Manager using a Kanban Board. The implementation of the Kanban Board during the internship utilized Microsoft Planner, a web-based application, as shown in the following image.',
          id: 'Pada tahap ini, penulis bersama tim melaporkan kegiatan yang dilakukan secara berkala setiap harinya untuk memberitahu sejauh apa progress yang sudah dilakukan, berdasarkan penugasan yang diterima oleh Product Manager menggunakan Kanban Board. Adapun implementasi penggunaan Kanban Board selama magang menggunakan aplikasi berbasis web Planner dari Microsoft seperti pada gambar berikut.'
        }
      },
      {
        img: "/edufams/kanban.jpg",
        desc: {
          en: "This is the description for the image.",
          id: "Ini adalah deskripsi untuk gambar."
        }
      },
      {
        title: {
          en: "Platform Design Process",
          id: "Proses Perancangan Platform"
        },
        text: {
          en: 'At this stage, MKA provided various themes with different problems to each team, and Design Thinking became the main method for designing this project.',
          id: 'Pada tahap ini pihak MKA memberikan berbagai jenis tema dengan permasalahan yang berbeda kepada masing-masing tim, dan Design Thinking menjadi metode utama dalam merancang proyek ini.'
        }
      },
      {
        text: {
          en: 'The process I went through with the team members in this program included learning the materials and skills needed to build a solid and proper startup, such as teamwork, brainstorming, research, and startup development. All of these stages were guided by a mentor who also served as the product manager.',
          id: 'Proses yang saya jalani bersama anggota tim dalam program ini mencakup pembelajaran materi dan keterampilan yang dibutuhkan untuk membangun startup yang baik dan tepat, seperti kerja sama tim, brainstorming, riset, dan pengembangan startup. Seluruh tahapan ini dibimbing oleh seorang mentor yang juga berperan sebagai product manager.'
        }
      },
      {
        img: "/edufams/think.png",
        desc: {
          en: "This is the description for the image.",
          id: "Ini adalah deskripsi untuk gambar."
        }
      },
      {
        text: {
          en: 'As a UI/UX Designer, my tasks involved designing with a Design Thinking approach to problem-solving, covering the stages of Empathize, Define, Ideate, Prototyping, and Design. After completing the Design Thinking phase, we proceeded to the Pitching stage as the outcome of the startup creation process developed during the internship.',
          id: 'Sebagai seorang UI/UX Designer, tugas saya melibatkan perancangan dengan pendekatan Design Thinking dalam pemecahan masalah, meliputi tahap Empathize, Define, Ideate, Prototyping, dan Design. Setelah menyelesaikan fase Design Thinking, kami melanjutkan ke tahap Pitching sebagai hasil dari proses penciptaan startup yang dikembangkan selama masa magang.'
        }
      },
      {
        title: {
          en: "Emphatize",
          id: "Empati"
        },
        text: {
          en: 'In this stage, the author and the team conducted problem identification based on the assigned theme by carrying out observations using data obtained from the internet. During the observation process, we identified the following problems.',
          id: 'Tahap ini penulis dan tim melakukan pencarian suatu permasalahan berdasarkan tema yang didapat dengan melakukan observasi dengan data yang didapat dari internet, selama proses observasi kami mendapatkan permasalahan yang kami jabarkan sebagai berikut ini.'
        }
      },
      {
        textQuote: [{
          type: "text",
          value: {
            en: "During the COVID-19 pandemic, children in Indonesia spent more time at home using gadgets for play and socializing. According to data from the Central Bureau of Statistics in 2021, 88.99% of children aged 5 and above had accessed the internet, such as social media, and 63.08% used it for entertainment like games. This could lead to gadget addiction among children if not properly managed.",
            id: "Selama pandemi covid-19, anak-anak di Indonesia lebih banyak menghabiskan waktunya dirumah dengan gadget untuk bermain dan bersosialisasi. Berdasarkan data Badan Pusat Statistik tahun 2021 sebanyak 88,99% anak berumur 5 tahun ke atas sudah mengakses internet seperti sosial media dan 63,08% untuk hiburan seperti game. Hal ini bisa menyebabkan terjadinya kecanduan gadget pada anak jika tidak ditangani dengan tepat."
          }
        }, ]
      },
      {
        textQuote: [{
          type: "text",
          value: {
            en: "During the COVID-19 pandemic, according to Komnas Perempuan in 2022, there were 64,211 cases of child marriage dispensation in 2021, which was three times higher than the previous year’s 23,126 cases. This highlights the urgent need for parenting education.",
            id: "Selama pandemi covid-19 berdasarkan Komnas Perempuan tahun 2022 sebanyak 64.211 kasus dispensasi pernikahan anak terjadi selama tahun 2011 yang mana meningkat 3 kali lipat dari tahun sebelumnya yang hanya sebesar 23.126 kasus. Yang menyebabkan urgensi kebutuhan edukasi parenting sangatlah tinggi."
          }
        }, ]
      },
      {
        textQuote: [{
          type: "text",
          value: {
            en: "Based on the interview with a 43-year-old mother, it can be concluded that during the COVID-19 pandemic, many workers were laid off, leading to an economic collapse, especially for lower-middle-class families. This has become a major challenge for those striving to support their families, particularly their children.",
            id: "Berdasarkan hasil wawancara dengan seorang ibu berumur 43 tahun. Dapat disimpulkan bahwa selama pandemi covid-19 banyak pekerja yang terkena PHK menyebabkan keruntuhan ekonomi khususnya keluarga menengah kebawah. Hal ini menjadi tantangan sulit bagi mereka yang ingin menghidupi keluarga khususnya anak mereka."
          }
        }, ]
      },
      {
        title: {
          en: "Define",
          id: "Definisi"
        },
        text: {
          en: 'In this stage, we conducted an analysis to determine the problem statement for the research. The problem statement obtained is as follows.',
          id: 'Tahap ini kami melakukan analisa untuk menentukan pernyataan masalah pada penelitian. Adapun pernyataan yang didapat adalah sebagai berikut.'
        }
      },
      {
        textQuote: [{
            type: "text",
            value: {
              en: "+ Children are at risk of experiencing gadget addiction if not provided with proper parenting education.",
              id: "+ Anak beresiko mengalami kecanduan gadget jika tidak diberikan edukasi parenting."
            }
          },
          {
            type: "text",
            value: {
              en: "+ The need for parenting education for parents, especially child-aged couples.",
              id: "+ Perlunya edukasi parenting untuk orang tua khususnya pasangan usia anak."
            }
          },
          {
            type: "text",
            value: {
              en: "+ Many families are in need of funds to cover their living expenses.",
              id: "+ Banyak keluarga yang membutuhkan dana untuk kebutuhan hidup."
            }
          },
        ]
      },
      {
        title: {
          en: "Ideate",
          id: "Ideasi"
        },
        text: {
          en: 'In this stage, we carried out a brainstorming process to generate ideas as solutions to the existing problems. The solutions obtained are as follows.',
          id: 'Tahap ini kami melakukan proses brainstorming dengan mencari gagasan atau ide sebagai solusi dari masalah yang ada. Solusi yang didapat adalah sebagai berikut.'
        }
      },
      {
        textQuote: [{
          type: "text",
          value: {
            en: "Creating a family education platform to provide parenting education through informational media such as articles and videos, as well as classes and training. Additionally, the platform includes a donation service to help ease the burden of lower-middle-class families in meeting their current needs.",
            id: "Membuat sebuah platform edukasi keluarga untuk memberikan edukasi parenting lewat media informasi seperti artikel dan video, mapun kelas dan pelatihan. Ditambah fasilitas berupa layanan donasi untuk membantu meringankan keluarga dengan ekonomi menengah kebawah dalam memenuhi kebutuhannya saat ini."
          }
        }, ]
      },
      {
        text: {
          en: 'The solution was successfully obtained, followed by the planning process by creating an information architecture presented in the form of a mind map, to outline the information needed to realize the solution. Below is a screenshot of the mind map created using the web-based application Miro.',
          id: 'Solusi berhasil didapatkan, kemudian lanjut ke proses perencanaan dengan membuat information architecture yang disajikan dalam bentuk mind-map, untuk menjabarkan apa saja informasi yang diperlukan untuk mewujudkan solusi tersebut. Berikut adalah tangkapan layar dari mind map dengan menggunakan aplikasi berbasis website Miro.'
        }
      },
      {
        title: {
          en: "Prototype",
          id: "Prototipe"
        },
        text: {
          en: 'In this stage, we designed the EduFams family education platform. The process began with creating a wireframe as the initial design, followed by developing the design system, producing the mockup design by combining the wireframe and design system, and finally, the prototyping process to make the mockup interactive. This entire process was carried out using Figma.',
          id: 'Tahap ini kami merancang platform edukasi keluarga EduFams. Mulai dari desain wireframe sebagai rancangan awal, pembuatan design system, pembuatan mockup design dari penggabungan wireframe dan design system, terakhir proses prototyping agar mockup dapat berinteraksi. Proses ini sepenuhnya dikerjakan pada aplikasi Figma.'
        }
      },
      {
        img: "/edufams/wire1.png",
      },
      {
        img: "/edufams/wire2.png",
        desc: {
          en: "This is the description for the image.",
          id: "Ini adalah deskripsi untuk gambar."
        }
      },
      {
        text: {
          en: 'During the wireframing process, the author designed features and components according to the planned outcomes. The designs included both a web-based application and a mobile-based application.',
          id: 'Selama proses wireframe penulis merancang fitur dan komponen sesuai dengan hasil yang sudah direncanakan. Desain yang dibuat meliputi aplikasi berbasis website dan aplikasi berbasis mobile.'
        }
      },
      {
        img: "/edufams/style.webp",
        desc: {
          en: "This is the description for the image.",
          id: "Ini adalah deskripsi untuk gambar."
        }
      },
      {
        textQuote: [{
            type: "text",
            value: {
              en: "Typography aims to provide readers with comfort by ensuring text that is easy to read and consistent in scale. Based on the image above, the EduFams application project uses two types of typography for its two platforms, namely mobile and website.",
              id: "Typography bertujuan untuk memberikan kenyamanan pada pembaca dalam membaca dengan memberikan skala teks yang mudah dibaca dan konsisten. Berdasarkan gambar diatas proyek aplikasi EduFams membuat dua typography untuk 2 platform, yakni mobile dan website."
            }
          },
          {
            type: "text",
            value: {
              en: "The color palette serves to establish the brand's identity. Based on the image above, the EduFams application project uses blue as the primary color, as it psychologically conveys a sense of safety and trustworthiness. This is complemented by purple as the secondary brand color, along with other colors that complete and balance the primary and secondary palette.",
              id: "Color palette bertujuan untuk memberikan identitas pada brand. Berdasarkan gambar diatas proyek aplikasi EduFams menggunakan warna biru karena secara psikologis dapat memberikan rasa aman dan terpercaya, dilanjutkan dengan warna lainnya seperti ungu sebagai warna sekunder pada brand, dan warna lainnya untuk melengkapi kedua warna sebelumnya."
            }
          },
          {
            type: "text",
            value: {
              en: "Icons are intended to provide meaning within a call to action, helping users understand where their actions will lead while using the application. The icons used here are sourced from Iconic, a website that provides free icon templates.",
              id: "Icon bertujuan untuk memberikan makna dalam sebuah call to action agar pengguna bisa mengetahui akan kemana arah tujuan mereka selama menggunakan aplikasi. adapun icon yang dipakai disini berasal dari Iconic sebuah website yang menyediakan template icon secara gratis."
            }
          },
          {
            type: "text",
            value: {
              en: "Illustrations are intended to provide information about a component and enhance the aesthetic value of the application. The illustrations used here are sourced from unDraw, a website that offers free illustration templates.",
              id: "Illustration bertujuan untuk memberikan informasi terkait suatu komponen dan menambah nilai estetika dalam aplikasi. Ilustrasi yang dipakai disini berasal dari unDraw sebuah website yang menyediakan template ilustrasi secara gratis."
            }
          },
          {
            type: "text",
            value: {
              en: "Layout aims to provide design specifications so that application developers can easily implement and build the intended application.",
              id: "Layout bertujuan untuk memberikan spesifikasi desain agar pengembang aplikasi bisa dengan mudah mengerjakan aplikasi yang akan dibuat."
            }
          },
        ]
      },
      {
        text: {
          en: 'With the design system in place, the author then began integrating the initial designs from the previous stage with the guidelines from the design system to create an attractive, colorful, and consistent mockup design.',
          id: 'Dengan adanya design system kemudian penulis mulai memadukan rancangan awal pada tahap sebelumnya dengan panduan dari design system untuk menciptakan desain mockup yang menarik, berwarna, dan seragam.'
        }
      },
      {
        text: {
          en: 'By adding flow and interaction, the design can be used like a real application. If you want to try the prototype, you can access it through the link below.',
          id: 'Dengan menambahkan flow dan interaction agar desain dapat digunakan layaknya sebuah aplikasi sebenarnya. Jika anda ingin mencoba prototype aplikasi penulis bisa anda coba pada tautan dibawah ini.'
        }
      },
      {
        title: {
          en: "Test",
          id: "Tes"
        },
        text: {
          en: 'Everything that has been designed needs to be tested first to determine whether it meets expectations and addresses user problems. Here, the UI/UX mentor acting as the user tested the prepared prototype. The following is the feedback received during testing.',
          id: 'Segala sesuatu yang sudah dirancang pasti akan dibutuhkan percobaan terlebih dahulu apakah sudah memenuhi ekspektasi dan menjawab permasalahan dari user nantinya. Disini mentor ui/ux yang berperan sebagai pengguna akan mencoba prototype yang sudah dipersiapkan. Berikut adalah feedback yang didapat saat melakukan testing.'
        }
      },
      {
        textQuote: [{
            type: "text",
            value: {
              en: "+ The right and left margins in the mobile-based application were too small, so the previous 16px margin was increased to 24px to create a more spacious appearance.",
              id: "+ Kecilnya margin kanan dan kiri pada aplikasi berbasis mobile sehingga margin sebelumnya yaitu 16px ditambah menjadi 24px agar terlihat lebih lapang."
            }
          },
          {
            type: "text",
            value: {
              en: "+ On the main dashboard page of the web-based application, the original design appeared too sparse. Improvements were made by adding cards to each component and introducing an additional background color level.",
              id: "+ Pada halaman dashboard utama untuk aplikasi berbasis web desain yang ditawarkan terlalu sepi, sehingga diberikan peningkatan dengan menambahkan card pada tiap komponennya serta menambah satu level pada warna latar belakang."
            }
          },
        ]
      },
      {
        textQuote: [{
          type: "text",
          value: {
            en: "+ The color on the class sidebar in the mobile-based application was not prominent enough, so an additional neutral color level was added to the palette.",
            id: "+ Kurang terlihatnya warna pada sidebar kelas untuk aplikasi berbasis mobile sehingga menambahkan satu level warna untuk bagian netral pada warna palete."
          }
        }, ]
      },
      {
        title: {
          en: "Deploy and Pitching",
          id: "Deploy and Pitching"
        }
      },
      {
        img: "/edufams/pitch.webp",
        desc: {
          en: "This is the description for the image.",
          id: "Ini adalah deskripsi untuk gambar."
        }
      },
      {
        text: {
          en: "After the mentor approved the designed application, it was then deployed by the developer role into the actual product, both as a website and a mobile application. From here, we proceeded to the final stage of the internship, which was the Pitching session to several mentor representatives and executives from PT. Media Kreasi Abadi, acting as potential investors.",
          id: "Setelah dari mentor rasa aplikasi yang dirancang sudah oke, selanjutnya di deploy oleh role developer hingga menjadi produk sesungguhnya yaitu website dan aplikasi mobile. Dari sini kami kemudian masuk ke tahap final dari magang ini yaitu Pitching kepada beberapa perwakilan mentor dan pimpinan dari PT. Media Kreasi Abadi secara langsung yang berperan sebagai calon investor."
        }
      },
      {
        title: {
          en: "Aftermath",
          id: "Aftermath"
        },
        text: {
          en: "Here are some points for future evaluation: During the design process, a product’s design does not always need to be aesthetically pleasing or visually striking; it should prioritize readability, clarity, and accessibility to ensure ease of use. Additionally, there should be broader and more diverse user testing stages so that the application can be enjoyed by the majority of users in the future.",
          id: "Beberapa hal yang bisa dijadikan bahan evaluasi untuk kedepannya saya jabarkan seperti; Selama proses pembuatan desain tidak selamanya desain produk yang dibuat harus estetik ataupun menarik, tetapi lebih mementingkan tampilan yang mudah dibaca dan dipahami, dan aksesibilitas yang memudahkan pengguna selama menggunakan aplikasi. Kemudian perlu adanya tahapan testing kepada pengguna lebih luas dan bervariasi agar dapat dinikmati oleh mayoritas pengguna kedepannya."
        }
      },
    ]
  },

  {
    id: 4,
    slug: 'eduwork',
    title: 'Eduwork Mentor Website',
    title2: 'EDUWORK MENTOR',
    nav: 'eduwork.prj',
    cover: '/bg.webp',
    obj: '/showcase3.webp',
    desc: {
      en: 'I had the opportunity to intern at Eduwork, an education platform company based in Yogyakarta. Eduwork planned to develop a new platform in the form of a community-based website.',
      id: 'Saya berkesempatan untuk menjalani magang di Eduwork, sebuah perusahaan platform pendidikan yang berbasis di Yogyakarta. Eduwork berencana mengembangkan platform baru berupa situs web berbasis komunitas'
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
    extImg: '/web.svg',
    extText: {
      en: 'See Page',
      id: 'Lihat Halaman'
    },

    contents: [{
        text: {
          en: "So, during this internship I was placed in the Unicorn team, which consisted of 2 product managers, 2 UI/UX designers, and 1 copywriter. This team was responsible for creating the landing page of Eduwork's mentor website, which will be launched in the future.",
          id: 'Jadi, selama magang ini saya ditempatkan di tim Unicorn, yang terdiri dari 2 product manager, 2 UI/UX designer, dan 1 copywriter. Tim ini bertugas untuk membuat landing page dari situs web mentor milik Eduwork yang akan diluncurkan di masa mendatang.'
        }
      },
      {
        img: "/eduwork/team.png",
        desc: {
          en: "This is the description for the image.",
          id: "Ini adalah deskripsi untuk gambar."
        }
      },
      {
        text: {
          en: 'The work environment was conducted remotely, with morning meetings alongside the team for brainstorming sessions. Design sessions were carried out flexibly, following the contracted working hours. The workday concluded with afternoon meetings with the CEO to present the design progress achieved that day.',
          id: 'Lingkungan kerja dilakukan secara remote, dengan pertemuan pagi bersama tim untuk sesi brainstorming. Sesi desain dijalankan secara fleksibel mengikuti jam kerja sesuai kontrak. Hari kerja ditutup dengan pertemuan sore bersama CEO untuk mempresentasikan progres desain yang telah dicapai pada hari itu.'
        }
      },
      {
        text: {
          en: 'Here is the design process flow that I went through with the team during this internship.',
          id: 'Berikut adalah alur proses desain yang saya jalani bersama tim selama masa magang ini.'
        }
      },
      {
        img: "/eduwork/flow.png",
        desc: {
          en: "This is the description for the image.",
          id: "Ini adalah deskripsi untuk gambar."
        }
      },
      {
        text: {
          en: 'The first thing we did was hold brainstorming sessions every morning with the entire team via Zoom meetings. The purpose of these sessions was to generate ideas and concepts related to the features and designs to be developed, such as creating a mood board.',
          id: 'Hal pertama yang kami lakukan adalah mengadakan sesi brainstorming setiap pagi bersama seluruh tim melalui Zoom meeting. Tujuan dari sesi brainstorming ini adalah untuk menghasilkan ide dan konsep terkait fitur maupun desain yang akan dikembangkan, seperti membuat mood board.'
        }
      },
      {
        img: "/eduwork/mood.png",
        desc: {
          en: "This is the description for the image.",
          id: "Ini adalah deskripsi untuk gambar."
        }
      },
      {
        text: {
          en: 'Entering the design phase, we primarily worked on creating both low-fidelity and high-fidelity designs based on the results of brainstorming sessions. Since the team consisted of two UI/UX designers, the work was usually divided so that each could produce their own designs. This approach allowed us to make comparisons while also providing additional references during presentation sessions.',
          id: 'Memasuki fase desain, kami terutama mengerjakan pembuatan desain low-fidelity maupun high-fidelity berdasarkan hasil brainstorming. Karena dalam tim terdapat dua UI/UX designer, biasanya pekerjaan dibagi sehingga masing-masing dapat menghasilkan desainnya sendiri. Pendekatan ini memungkinkan kami untuk melakukan perbandingan sekaligus memberikan referensi tambahan saat sesi presentasi.'
        }
      },
      {
        img: "/eduwork/design.png",
        desc: {
          en: "This is the description for the image.",
          id: "Ini adalah deskripsi untuk gambar."
        }
      },
      {
        text: {
          en: 'Entering the presentation phase, these sessions were held every afternoon with the entire team and division to present the progress achieved each day. During the presentations, feedback was provided by Mr. Dodi, the CEO, regarding necessary improvements or decisions on whether we could proceed to the prototyping stage.',
          id: 'Memasuki fase presentasi, sesi ini diadakan setiap sore oleh seluruh tim dan divisi untuk memaparkan progres yang telah dicapai setiap hari. Dalam presentasi tersebut, masukan diberikan oleh Bapak Dodi selaku CEO terkait perbaikan yang diperlukan atau keputusan apakah kami bisa melanjutkan ke tahap prototyping.'
        }
      },
    ]
  },
];

export default ArticleData;