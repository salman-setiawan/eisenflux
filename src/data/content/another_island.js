const AnotherIsland = [
  {
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
    img: "/anotherisland/ucd.webp",
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
    img: "/anotherisland/wire.webp",
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
    img: "/anotherisland/desy.webp",
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
    img: "/anotherisland/user.webp",
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
    img: "/anotherisland/cfl.webp",
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
    img: "/anotherisland/ces1.webp",
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
    img: "/anotherisland/ev.webp",
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
    img: "/anotherisland/ces2.webp",
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

export default AnotherIsland;