const ArticleData = [
  {
    id: 1,
    title: 'Another Day in the Island',
    cover: '/bg.webp',
    obj: '/showcase2.webp',
    categories: [
      { en: 'Game UIX', id: 'Permainan UIX' },
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

    contents: [
      { text: {
          en: 'This project is a simple arcade-survival game called Another Day in the Island, which I designed as research for my final project as a computer science student at the Kalimantan Institute of Technology.',
          id: 'Proyek ini adalah permainan arkade-survival sederhana yang disebut Hari Lain di Pulau, yang saya desain sebagai riset untuk proyek akhir saya sebagai mahasiswa ilmu komputer di Institut Teknologi Kalimantan.'
        } },
      { text: {
          en: "In this game, players take on the role of a mysterious character, whose objective is to gather as many points as possible by defeating monsters scattered throughout the area.",
          id: "Dalam permainan ini, pemain mengambil peran sebagai karakter misterius, dengan tujuan untuk mengumpulkan sebanyak mungkin poin dengan mengalahkan monster yang tersebar di seluruh area."
        } },
      { text: {
          en: "This research employs the User-Centered Design (UCD) approach, a method that places users as the primary focus in the product, application, or experience design process as illustrated in the image below.", 
          id: "Penelitian ini menggunakan pendekatan User-Centered Design (UCD), yaitu metode yang menempatkan pengguna sebagai fokus utama dalam proses desain produk, aplikasi, atau pengalaman seperti yang digambarkan dalam gambar di bawah."
        } },
      { img: "/anotherisland/ucd.webp", 
        desc: {
          en: "UCD Cycle according to usability.gov",
          id: "Siklus UCD menurut usability.gov"
        } },
      { title: {
          en: "Identify Need",
          id: "Identifikasi Kebutuhan"
        },
        text: {
          en: "This is a stage where the researcher identifies the requirements that users will have while playing the designed game. A questionnaire can serve as a tool to assist the researcher in the process of identifying user needs throughout the project.", 
          id: "Ini adalah tahap di mana peneliti mengidentifikasi kebutuhan yang akan dimiliki pengguna saat bermain game yang dirancang. Kuesioner dapat berfungsi sebagai alat untuk membantu peneliti dalam proses mengidentifikasi kebutuhan pengguna selama proyek."
        } },
      { img: "/anotherisland/interview.webp",
        desc: {
          en: "Questionnaire Results (Feb 4, 2023)",
          id: "Hasil Kuesioner (Feb 4, 2023)"
        } },
      { text: {
          en: "The questions presented to participants consist of several sections. The first part includes questions about the participants' profiles, such as age range, their preferences for games and reasons behind them, and the players' experiences with arcade games.", 
          id: "Pertanyaan yang diajukan kepada peserta terdiri dari beberapa bagian. Bagian pertama mencakup pertanyaan tentang profil peserta, seperti rentang usia, preferensi mereka terhadap permainan dan alasan di baliknya, serta pengalaman pemain dengan permainan arkade."
        } },
      { text: {
          en: "The second part involves questions from the participants' perspective on arcade games in terms of gameplay, visuals, overall impressions, and finally, their preference for the desired game model to be developed.", 
          id: "Bagian kedua melibatkan pertanyaan dari perspektif peserta tentang permainan arkade dalam hal gameplay, visual, kesan keseluruhan, dan akhirnya, preferensi mereka untuk model permainan yang ingin dikembangkan."
        } },
      { text: {
          en: "To understand the participants more deeply, the next stage is creating user personas to gain a clear understanding of what users are currently experiencing and needing. These personas are fictional characters based on the data gathered from the questionnaires, which help in shaping the design process by representing the primary users.", 
          id: "Untuk memahami peserta lebih dalam, tahap berikutnya adalah membuat persona pengguna untuk mendapatkan pemahaman yang jelas tentang apa yang saat ini dialami dan dibutuhkan pengguna. Persona ini adalah karakter fiksi yang didasarkan pada data yang dikumpulkan dari kuesioner, yang membantu membentuk proses desain dengan mewakili pengguna utama."
        } },
      { img: "/example2.jpg",
        desc: {
          en: "User Personas that have been created",
          id: "Persona Pengguna yang telah dibuat"
        } },
      { title: {
          en: "Specify Context of Use",
          id: "Spesifikasi Konteks Kegunaan"
        },
        text: {
          en: "The results obtained from the questionnaire participants will be used to identify user preferences in the game to be developed. These points will be used as references in the design of the Another Day in the Island arcade game. Here are the key points identified from the research:", 
          id: "Hasil yang diperoleh dari peserta kuesioner akan digunakan untuk mengidentifikasi preferensi pengguna dalam permainan yang akan dikembangkan. Poin-poin ini akan digunakan sebagai referensi dalam desain permainan arcade Another Day in the Island. Berikut adalah poin-poin kunci yang diidentifikasi dari riset:"
        } },
      { img: "/example2.jpg",
        desc: {
          en: "This is the description for the image.",
          id: "Ini adalah deskripsi untuk gambar."
        } },
      { title: {
          en: "Specify Requirement",
          id: "Spesifikasi Kebutuhan"
        },
        text: {
          en: "In this stage, the researcher will establish the necessary requirements for the game design by conducting research on competitors, such as similar or related games. The research is carried out to understand how their products function, identify areas for improvement, and create features that are more appealing than those of competitors. This helps in shaping a better user experience in the new game.", 
          id: "Pada tahap ini, peneliti akan menetapkan persyaratan yang diperlukan untuk desain permainan dengan melakukan riset pada pesaing, seperti permainan serupa atau terkait. Riset dilakukan untuk memahami bagaimana produk mereka berfungsi, mengidentifikasi area yang perlu diperbaiki, dan menciptakan fitur yang lebih menarik daripada pesaing. Ini membantu dalam membentuk pengalaman pengguna yang lebih baik dalam permainan baru."
        } },
      { text: {
          en: "In this case, the researcher has selected a game with a similar mechanism, namely the arcade game series from Bandai Namco called Galaga. The game mechanics, enemy behavior, and power-ups are analyzed to understand what makes the game engaging and how those aspects can be improved or adapted for 'Another Day in the Island'.", 
          id: "Dalam hal ini, peneliti telah memilih permainan dengan mekanisme serupa, yaitu seri permainan arkade dari Bandai Namco yang disebut Galaga. Mekanika permainan, perilaku musuh, dan power-up dianalisis untuk memahami apa yang membuat permainan ini menarik dan bagaimana aspek-aspek tersebut dapat ditingkatkan atau diadaptasi untuk 'Another Day in the Island'."
        } },
      { img: "/example2.jpg",
        desc: {
          en: "This is the description for the image.",
          id: "Ini adalah deskripsi untuk gambar."
        } },
      { text: {
          en: 'Based on the attached data, the design of the Another Day in the Island game can be done by creating a simple game with a more modern interface and characters. One advantage is that the player character can move freely, enhancing the gaming experience. The integration of modern design elements, such as smoother animations and responsive controls, will help create a more immersive experience for players.', 
          id: 'Berdasarkan data yang terlampir, desain permainan Another Day in the Island dapat dilakukan dengan membuat permainan sederhana dengan antarmuka dan karakter yang lebih modern. Salah satu keuntungannya adalah bahwa karakter pemain dapat bergerak dengan bebas, meningkatkan pengalaman bermain. Integrasi elemen desain modern, seperti animasi yang lebih halus dan kontrol yang responsif, akan membantu menciptakan pengalaman yang lebih imersif bagi pemain.'
        } },
      { title: {
          en: "Product Design Solution",
          id: "Solusi Desain Produk"
        },
        text: {
          en: 'This stage covers the creation of design solutions, starting from rough concepts such as the Game Design Document (GDD), storyboard, and wireframe, design system, up to the UI mockup.', 
          id: 'Tahap ini mencakup pembuatan solusi desain, mulai dari konsep kasar seperti Game Design Document (GDD), storyboard, dan wireframe, design system hingga UI mockup.'
        } },
      { img: "/example2.jpg",
        desc: {
          en: "This is the description for the image.",
          id: "Ini adalah deskripsi untuk gambar."
        } },
      { text: {
          en: 'The image above is the result of the storyboard for the game to be developed. This design illustrates the game flow, where when players open the game, they will enter the main menu screen. Here, players can also access several features such as settings, events, and tutorials. Before playing, players can choose the difficulty level. Outside of the main gameplay flow, there are also explanations such as monster characteristics and conditional situations that players will encounter.', 
          id: 'Gambar diatas adalah hasil dari storyboard permainan yang akan di bangun, rancangan tersebut menjelaskan alur permainan dimana saat pemain membuka permainan akan masuk ke tampilan main-menu, disini pemain juga dapat mengakses beberapa fitur seperti pengaturan, event, dan tutorial. sebelum bermain pemain dapat memilih tingkat kesulitan. Diluar dari alur permainan ada penjelasan seperti karakterisitik monster, dan situasi kondisional yang akan dihadapi pemain.'
        } },
      { text: {
          en: 'The next step is moving into the wireframe design process, which aims to visualize the storyboard sketches into a simple framework of the game interface. The result is attached in the image below.', 
          id: 'Langkah selanjutnya adalah masuk ke proses desain wireframe, yang bertujuan untuk memvisualisasikan sketsa storyboard yang dibuat menjadi kerangka sederhana antarmuka permainan. berikut hasilnya terlampir pada gambar dibawah ini.'
        } },
      { img: "/example2.jpg",
        desc: {
          en: "This is the description for the image.",
          id: "Ini adalah deskripsi untuk gambar."
        } },
      { text: {
          en: 'The wireframe is designed based on the previously created storyboard concept. The next stage is the design system development, which serves as the main guideline for designing the game interface. This stage includes creating a style guide that covers brand identity, color system, typography, assets, and several key components of the game.', 
          id: 'Wireframe dirancang berdasarkan konsep storyboard yang telah dibuat sebelumnya. Tahap selanjutnya adalah perancangan design system sebagai panduan utama dalam merancang antarmuka permainan. Tahap ini mencakup pembuatan style guide yang meliputi brand identity, color system, tipografi, aset, serta beberapa komponen penting dalam permainan.'
        } },
      { text: {
          en: 'The final result of the design solution will be a UI mockup, which will be used by the developers to build the game Another Day in the Island.', 
          id: 'Hasil akhir dari solusi desain nantinya akan berupa maket UI untuk digunakan pengembang dalam membangun permainan Another Day in the Island.'
        } },
      { title: {
          en: "Evaluation Design",
          id: "Evaluasi Desain"
        },
        text: {
          en: "The purpose of this evaluation is to gather player's feedback through prepared questions and to understand their experience while playing. The evaluation is conducted iteratively to ensure satisfactory results.", 
          id: 'Tujuan dari evaluasi ini adalah untuk mengumpulkan pendapat pemain melalui pertanyaan yang disiapkan dan memahami pengalaman mereka saat bermain. Evaluasi dilakukan secara iteratif untuk memastikan hasilnya memuaskan.'
        } },
      { img: "/example2.jpg",
        desc: {
          en: "This is the description for the image.",
          id: "Ini adalah deskripsi untuk gambar."
        } },
      { text: {
          en: 'Here is a brief documentation of how feedback will be collected. Players will first play the game, and once they feel they have experienced enough to provide an assessment, they will fill out a prepared feedback form. The evaluation technique will be carried out using the Customer Feedback Loop (CFL) method with the following stages.', 
          id: 'Berikut adalah sedikit dokumentasi bagaimana pengambilan feedback akan dilakukan. Pemain akan bermain terlebih dahulu, setelah dirasa cukup dan bisa menilai, pemain akan mengisi form feedback yang sudah disiapkan. Teknik evaluasi akan dilakukan menggunakan metode customer feedback loop (CFL) dengan tahapan sebagai berikut.'
        } },
      { text: {
          en: "The initial stage involves collecting feedback through a questionnaire with parameters such as age, gender, and questions related to Another Day in the Island. Age data is used to assess the level of game analysis understanding, while gender serves as a comparison for evaluating player's tendencies in assessing the game.", 
          id: 'Tahap awal melibatkan pengumpulan umpan balik menggunakan kuesioner dengan parameter seperti usia, gender, serta pertanyaan seputar Another Day in the Island. Data usia digunakan untuk melihat tingkat pemahaman analisis game, sedangkan gender untuk pembanding tingkat kecendrungan untuk menilai permainan.'
        } },
      { img: "/example2.jpg",
        desc: {
          en: "This is the description for the image.",
          id: "Ini adalah deskripsi untuk gambar."
        } },
      { text: {
          en: "Next are questions regarding the game's usability, which are aimed at evaluating the user interface and user experience within the game. The usability testing questions in the questionnaire will be presented using a rating scale from 1 to 5. The details of the questions and scale are provided in the image below.", 
          id: 'Selanjutnya adalah pertanyaan mengenai usability pada game yang digunakan untuk mengevaluasi antarmuka dan pengalaman pengguna dalam game. Untuk pertanyaan usability testing pada kuesioner, akan disajikan dengan skala penilaian dari 1 hingga 5. Berikut adalah informasi mengenai pertanyaan dan skala sebagaimana ditunjukkan pada gambar di bawah ini.'
        } },
      { img: "/example2.jpg",
        desc: {
          en: "This is the description for the image.",
          id: "Ini adalah deskripsi untuk gambar."
        } },
      { text: {
          en: "Players will also be asked to provide reviews and input in the form of critiques and suggestions that can contribute to improving the game's interface and overall experience. The following are the evaluation results for the arcade game *Another Day in the Island* that I have gathered", 
          id: 'Pemain juga akan diminta untuk memberikan ulasan dan masukan berupa kritik serta saran yang dapat berkontribusi pada pengembangan antarmuka dan pengalaman permainan ini. Berikut adalah hasil evaluasi untuk game arcade Another Day in the Island yang saya peroleh.'
        } },
      { img: "/example2.jpg",
        desc: {
          en: "This is the description for the image.",
          id: "Ini adalah deskripsi untuk gambar."
        } },
      { text: {
          en: 'The initial evaluation results show a usability score of 3.72 (above average), with the following details: Satisfaction (3.675), Learnability (3.2), Efficiency (4), and Memorability (4.1).', 
          id: 'Hasil evaluasi awal menunjukkan skor usability 3,72 (di atas rata-rata), dengan detail sebagai berikut: Satisfaction (3,675), Learnability (3,2), Efficiency (4), dan Memorability (4,1).'
        } },
      { text: {
          en: "The next stage is processing data from open-ended questions, such as player's reviews and feedback. The results have been grouped based on common opinions shared by the players. Here are some examples of the collected feedback.", 
          id: 'Tahap selanjutnya adalah mengolah data dari pertanyaan terbuka seperti ulasan dan masukan dari pemain. Hasilnya telah dipilih berdasarkan kesamaan pendapat yang diberikan oleh para pemain. Berikut adalah beberapa contoh hasil masukan yang telah dikumpulkan.'
        } },
      { img: "/example2.jpg",
        desc: {
          en: "This is the description for the image.",
          id: "Ini adalah deskripsi untuk gambar."
        } },
      { text: {
          en: "Based on the evaluation results, the next step will focus on improving the user experience and user interface. The following are the processes and decisions I have made in refining the design.", 
          id: 'Dari hasil evaluasi, langkah selanjutnya akan berfokus pada peningkatan user experience dan user interface. Berikut adalah proses serta keputusan yang saya ambil dalam perbaikan desain.'
        } },
      { text: {
          en: "The collected feedback will then be incorporated into the development of a tool to determine priorities between values and efforts, helping designers make better decisions.", 
          id: 'Hasil dari masukan yang telah dikumpulkan kemudian akan dimasukkan ke dalam pengembangan sebuah alat untuk menentukan prioritas antara nilai (values) dan usaha (efforts), sehingga dapat membantu desainer dalam membuat keputusan yang lebih baik.'
        } },
      { text: {
          en: "From the analysis above, the improvements to be made can be seen in the following points.", 
          id: 'Dari analisis di atas, perbaikan yang akan dilakukan dapat dilihat pada poin-poin berikut.'
        } },
      { textQuote: [
          { type: "text", 
            value: { 
              en: "Occasional bugs that disrupt player's comfort during gameplay have been identified. One such bug occurs in the hell level, where bullets keep spawning at the position of a monster that has already been defeated.", 
              id: "Bug yang sesekali muncul dan mengganggu kenyamanan pemain saat bermain telah teridentifikasi. Salah satu bug terjadi pada level hell, di mana peluru terus muncul di posisi monster yang sudah dikalahkan." 
            } 
          },
          { type: "text", 
            value: { 
              en: "In addition, there are issues with background settings and sound effects that do not function properly during gameplay. To address these problems and ensure players can enjoy a smooth gaming experience, adjustments will be made to the game's event sheet.", 
              id: "Selain itu, terdapat masalah pada pengaturan latar belakang dan efek suara yang tidak berfungsi dengan baik selama permainan. Untuk mengatasi masalah tersebut dan memastikan pemain dapat menikmati pengalaman bermain yang lancar, penyesuaian akan dilakukan pada event sheet game." 
            } 
          },
        ] },
      { textQuote: [
          { type: "text", 
            value: { 
              en: "The improvements include creating a dedicated stage designed to provide gameplay guidance in the game Another Day in the Island, as illustrated in the image below.", 
              id: "Perbaikan mencakup pembuatan sebuah tahap khusus yang didedikasikan untuk memberikan panduan gameplay dalam game Another Day in the Island, seperti yang digambarkan pada gambar di bawah ini." 
            } 
          },
          { type: "image", 
            value: "https://example.com/img1.jpg" 
          },
          { type: "text", 
            value: { 
              en: "The image above shows the tutorial page that can be accessed from the main menu. However, due to the lack of player interest in opening this page, improvements have been made as shown in the image below.", 
              id: "Gambar di atas menampilkan halaman tutorial yang dapat diakses dari menu utama. Namun, karena kurangnya minat pemain untuk membuka halaman ini, dilakukan perbaikan seperti yang ditunjukkan pada gambar di bawah." 
            } 
          },
          { type: "image", 
            value: "https://example.com/img1.jpg" 
          },
          { type: "image", 
            value: "https://example.com/img1.jpg" 
          },
          { type: "text", 
            value: { 
              en: "The two images above illustrate the improvement of the game guide from simple informational content into a playable stage. This tutorial stage is intended for players who find the game quite challenging, allowing them to play it first. The feature also introduces difficulty variations, including easy, medium, and hard levels.", 
              id: "Dua gambar di atas menggambarkan perbaikan panduan game dari sekadar informasi biasa menjadi tahap yang dapat dimainkan. Tahap tutorial ini ditujukan bagi pemain yang merasa permainan cukup menantang, sehingga mereka dapat memainkan tahap ini terlebih dahulu. Fitur ini juga menambahkan variasi tingkat kesulitan, termasuk level mudah, sedang, dan sulit." 
            } 
          },
        ] },
        { textQuote: [
          { type: "text", 
            value: { 
              en: "Designing the power-up system includes adding buffs to enhance gameplay variety, as illustrated in the image below.", 
              id: "Merancang sistem power-up mencakup penambahan buff untuk meningkatkan variasi dalam permainan, seperti yang digambarkan pada gambar di bawah ini." 
            } 
          },
          { type: "image", 
            value: "https://example.com/img1.jpg" 
          },
          { type: "image", 
            value: "https://example.com/img1.jpg" 
          },
          { type: "text", 
            value: { 
              en: "The image above shows that after players defeat a monster in a certain area, the monster will have a small chance of dropping an orb, as illustrated. Once players obtain this orb, they will receive a buff effect such as a shield buff. This shield provides protection for a few seconds and destroys anything it comes into contact with, including monsters and enemy projectiles.", 
              id: "Gambar di atas menggambarkan bahwa setelah pemain mengalahkan monster di suatu area, monster tersebut akan menjatuhkan sebuah orb dengan kemungkinan kecil, seperti yang ditunjukkan. Setelah pemain memperoleh orb ini, mereka akan mendapatkan efek buff seperti shield buff. Buff ini akan memberikan perlindungan kepada pemain selama beberapa detik. Perisai ini akan menghancurkan apa pun yang bersentuhan dengannya, seperti monster maupun peluru dari monster." 
            } 
          },
        ] },
        { textQuote: [
          { type: "text", 
            value: { 
              en: "Lastly, at the beginning of the game, a page is designed to display a warning about photosensitivity symptoms, allowing players with such conditions to choose not to play the game. The interface can be seen in the image below.", 
              id: "Terakhir, pada awal permainan dirancang sebuah halaman yang menampilkan peringatan mengenai gejala fotosensitivitas, sehingga pemain dengan gejala serupa dapat memilih untuk tidak memainkan game. Antarmuka tersebut dapat dilihat pada gambar di bawah ini." 
            } 
          },
          { type: "image", 
            value: "https://example.com/img1.jpg" 
          },
        ] },
        { img: "/example2.jpg",
        desc: {
          en: "This is the description for the image.",
          id: "Ini adalah deskripsi untuk gambar."
        } },
        { text: {
          en: "The image above compares evaluation data 1 and 2 for the game Another Day in the Island, showing a difference in overall usability. Evaluation 1 recorded a score of 3.72, while Evaluation 2 showed an improvement with a score of 4.14. This indicates that usability has improved between the two evaluations.", 
          id: 'Gambar di atas membandingkan data evaluasi 1 dan 2 untuk game Another Day in the Island, yang menunjukkan adanya perbedaan dalam usability secara keseluruhan. Evaluasi 1 mencatat skor 3,72, sementara Evaluasi 2 menunjukkan peningkatan dengan skor 4,14. Hal ini mengindikasikan bahwa telah terjadi perbaikan usability antara kedua evaluasi tersebut.'
        } },
        { text: {
          en: "The image above compares evaluation data 1 and 2 for the game Another Day in the Island, showing a difference in overall usability. Evaluation 1 recorded a score of 3.72, while Evaluation 2 showed an improvement with a score of 4.14. This indicates that usability has improved between the two evaluations.", 
          id: 'Pada grafik perbandingan terlihat bahwa kriteria usability seperti satisfaction, learnability, efficiency, dan memorability juga mengalami peningkatan. Satisfaction meningkat dari 3,68 menjadi 4,03, learnability dari 3,1 menjadi 3,7, efficiency dari 4,0 menjadi 4,3, dan memorability dari 4,1 menjadi 4,55. Grafik kolom perbandingan memvisualisasikan peningkatan ini dengan jelas, menyoroti progres yang dicapai pada setiap aspek usability.'
        } },
        { text: {
          en: "The image above compares evaluation data 1 and 2 for the game Another Day in the Island, showing a difference in overall usability. Evaluation 1 recorded a score of 3.72, while Evaluation 2 showed an improvement with a score of 4.14. This indicates that usability has improved between the two evaluations.", 
          id: 'Perubahan dan perbaikan yang diterapkan antara Evaluasi 1 dan 2 telah berhasil meningkatkan tingkat usability pada setiap kriteria, sehingga memberikan pengalaman bermain yang lebih baik bagi pengguna Another Day in the Island.'
        } },
        { title: {
          en: "Aftermath",
          id: "Dampak"
        },
        text: {
          en: 'The UI and UX design for the arcade game Another Day in the Island has successfully provided an enjoyable gameplay experience. The application of User-Centered Design (UCD) principles has improved user acceptance and engagement. Evaluation through questionnaires and interviews ensured that the design aligns with user preferences, resulting in an experience that meets expectations.', 
          id: 'Desain UI dan UX untuk game arcade Another Day in the Island berhasil memberikan pengalaman bermain yang menyenangkan. Penerapan prinsip User-Centered Design (UCD) telah meningkatkan penerimaan serta keterlibatan pengguna. Evaluasi melalui kuesioner dan wawancara memastikan keselarasan desain dengan preferensi pengguna, sehingga pengalaman yang dihasilkan sesuai dengan harapan.'
        } },
        { text: {
          en: 'However, this game is still in its early stages, so there are many concepts, features, and designs that can be further developed in the future. Thank you for reading until the end.', 
          id: 'Namun, game ini masih berada pada tahap awal, sehingga masih banyak konsep, fitur, dan desain yang dapat dikembangkan lebih lanjut di masa depan. Terima kasih sudah membaca sampai akhir.'
        } },
    ]
  },

  {
    id: 2,
    title: 'EduFams',
    cover: '/bg.webp',
    obj: '/showcase3.webp',
    categories: [
      { en: 'Mobile Apps', id: 'Aplikasi Mobile' },
      { en: 'Web Apps', id: 'Aplikasi Web' },
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

    contents: [
      { text: {
          en: 'The EduFams family education platform was created as a solution for families in need of education and information about building a harmonious and healthy family.',
          id: 'Platform edukasi keluarga EduFams dibuat sebagai solusi masalah bagi keluarga yang membutuhkan edukasi dan informasi seputar keluarga yang harmonis dan baik.'
        } },
      { text: {
          en: 'The main features offered by the platform include informational media in the form of articles and videos, allowing users to gain knowledge and insights on topics such as child parenting, symptoms or syndromes that may occur in children, and more.',
          id: 'Fitur utama yang ditawarkan oleh platform antara lain media informasi berupa artikel maupun video agar pengguna dapat mendapat informasi dan wawasan seperti parenting anak, gejala atau sindrom yang terjadi pada anak, dan lain sebagainya.'
        } },
        { text: {
          en: 'The platform also provides classes and training with top mentors in their fields, along with paid features such as group chat counseling to help users better understand the classes they attend. Lastly, there is a donation feature for users from financially disadvantaged families.',
          id: 'Platform ini juga menyediakan kelas dan pelatihan bersama mentor terbaik di bidangnya, fitur berbayar seperti konseling via group chat juga menjadi opsi untuk membantu pengguna lebih memahami kelas yang diikuti. Terakhir ada fitur donasi untuk pengguna dari keluarga yang kekurangan secara finansial.'
        } },
    ]
  }
];

export default ArticleData;
