const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "", label: "Years of Experience" },
  { value: 12, suffix: "", label: "Satisfied Clients" },
  { value: 30, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "E - T - L Developing",
    imgPath: "/images/logos/etl.png",
  },
  {
    name: "Data Analysis",
    imgPath: "/images/logos/da.png",
  },
  {
    name: "Data Engineering",
    imgPath: "/images/logos/de.png",
  },
  {
    name: "Machine Learning",
    imgPath: "/images/logos/ml.png",
  },
  {
    name: "Technical Reporting",
    imgPath: "/images/logos/tr.png",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Hafiyan consistently brought both creativity and technical expertise to the team, contributing to significant improvements in both front-end and back-end performance. He demonstrated strong leadership skills and excellent communication, making him an effective team leader throughout the project.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Full Stack Developer",
    date: "January 2022 - Present",
    responsibilities: [
      "Developed multiple websites from front-end to back-end using frameworks such as Next.js, Vite, Laravel, and more.",
      "Collaborated with UI/UX designers and back-end developers to build the official university website.",
      "Created various websites for clients under the name of Brawijaya University.",
      "Served as the team leader and project manager for a high-impact client project, overseeing end-to-end development",
    ],
  },
  {
    review:
      "Hafiyan’s contributions to our data projects have been exceptional. He tackles complex data challenges with a strong analytical mindset and consistently delivers reliable, well-documented solutions.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Data Engineer - Analyst - Scientist",
    date: "June 2024 - Present",
    responsibilities: [
      "Performed web scraping and ETL on a fashion studio website, extracting structured data and automating storage into Google Sheets for further analysis.",
      "Developed a Convolutional Neural Network (CNN) model to classify images with high accuracy, applying deep learning techniques for computer vision tasks",
      "Built a machine learning model to predict house prices, conducted exploratory data analysis, and delivered insights through clear and compelling data visualizations.",
    ],
  },
  {
    review:
      "Hafiyan’s work on our Laravel-based web platform brought exceptional reliability and functionality. He delivered robust payment integrations and automated reporting features that greatly improved our operational efficiency and user experience.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Laravel Developer",
    date: "March 2022 - Des 2022",
    responsibilities: [
      "Developed both front-end and back-end features using Laravel, ensuring a seamless user experience and robust system functionality.",
      "Integrated real-time payment processing and verification by connecting multiple banking APIs for secure and efficient transactions.",
      "Automated monthly sales reporting, generating purchase summaries directly from the website’s transaction data to streamline business insights.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Dimas Saputra",
    mentions: "@dimassaputra",
    review:
      "Bekerja dengan Hafiyan adalah pengalaman yang luar biasa. Ia mampu mengolah data dari web scraping hingga menjadi laporan yang informatif dan mudah dipahami. Website Fashion Studio telah ia scrap dengan amat amat baik. 100% data yang benar telah ia transform dan dilaporkan ke dalam google sheets menggunakan API gogle sheets. Dalam waktu satu hari, pekerjaan yang ia lakukan sangat luar biasa.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Andi Wijaya",
    mentions: "@andiwijaya",
    review:
      "Profesionalisme Hafiyan sangat terasa sejak awal proyek. Ia menyusun pipeline data, membangun model prediksi harga, dan memvisualisasikan hasilnya dengan sangat baik. Penjelasan saat mempresentasikan hasil visualisasinya benar benar membuat kami semua paham. Ini menunjukan skill komunikasi dan teknisnya yang amat baik.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Bayu Pratama",
    mentions: "@bayupratama",
    review:
      "Hafiyan menunjukan keahlian luar biasa dalam membuat Laporan Teknis hasil analisis data kami. Sebagai product manager saat menghandle analisis data dari server universitas brawijaya, Hafiyan benar benar melaporkan dan mendokumentasikan analisis kami secara detail dan sangat mudah dipahami.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Fajar Nugroho",
    mentions: "@fajarnugroho",
    review:
      "Kemampuan dan profesionalisme Hafiyan dalam membangun web dengan Framework Next JS sangat bagus dan sudah cukup ahli. Dengan autentikasi Clerk, Library UI dari ShadCN, database dari Prisma dan uploader foto dari Cloudinary benar benar menggambarkan kalau ia paham dengan teknologi terkini pada pegembangan website.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Reza Maulana",
    mentions: "@rezamaulana",
    review:
      "Kami sangat terbantu dengan sistem Face Mask Detection yang Hafiyan buat. Hafiyan memegang tanggung jawab sebagai machine learning engineer dalam proyek itu dan sistemnya benar benar akurat hingga 98% dalam mendeteksi seseorang yang menggunakan masker atau tidak. Sistem yang stabil dan tidak terlalu berat tetapi akurat secara bersamaan.",
    imgPath: "/images/client4.png",
  },
  {
    name: "Ilham Ramadhan",
    mentions: "@ilhamramadhan",
    review:
      "Kemampuan Hafiyan dalam posisi Fullstack Developer saat mengembangkan website OG WAR RIG benar benar luar biasa. Website dibuat menggunakan Laravel secara penuh. Mengintegrasikan berbagai macam API untuk verivikasi pembayaran di berbagai macam bank, mengambil API whatsapp yang terintegrasi langsung ke dashboard dan membuat website untuk admin yang sangat sangat baik.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "instagram",
    imgPath: "/images/insta.png",
    url: "https://www.instagram.com/hafiyan_a_u/",
  },
  {
    name: "facebook",
    imgPath: "/images/fb.png",
    url: "https://www.facebook.com/hafiyan.al.muqaffi/",
  },
  {
    name: "github",
    imgPath: "/images/github.png",
    url: "https://github.com/habstrakT808",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/habstrakt808/",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
