import HeroImage from "/assets/profile.jpeg";
import AboutImage from "/assets/about.png";

const Image = {
  ProfileImage: HeroImage,
  AboutImage: AboutImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/googlelooker.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/googlecolab.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/tableau.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/python.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/excel.png";
import Tools13 from "/assets/tools/mysql.png";
import Tools14 from "/assets/tools/laravel.png";


export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Google Looker",
    ket: "Data Visualization",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Google Colab",
    ket: "Data Science & Machine Learning",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Tableau",
    ket: "Data Visualization",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Python",
    ket: "Language",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Excel",
    ket: "Data Analysis Tool",
    dad: "1200",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "MySql",
    ket: "Database",
    dad: "1300",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "Laravel",
    ket: "Framework",
    dad: "1400",
  },
];

import Proyek1 from "/assets/proyek/proyek1.png";
import Proyek2 from "/assets/proyek/proyek2.png";
import Proyek3 from "/assets/proyek/proyek3.png";
import Proyek4 from "/assets/proyek/proyek4.png";
import Proyek5 from "/assets/proyek/proyek5.ico";
// import Proyek6 from "/assets/proyek/proyek6.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Netflix User Feedback Insights",
    desk: "This project aims to analyze Netflix app user reviews with an AI-based sentiment analysis and summarization approach with the help of LLM from IBM.",
    tools: ["Python", "Pandas", "IBM Granite", "Kaggle", "Excel", "Replicate"],
    link: "https://github.com/riansyaputra123/CapstoneProject_IBMGranite_Netflix_ReviewsApp.git",
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "MyPertamina App Sentiment Analysis",
    desk: "This project performs sentiment analysis on MyPertamina app reviews collected via web scraping. After preprocessing, the data was balanced using SMOTE and classified with KNN and Naïve Bayes for better insights",
    tools: ["Python", "Google Looker", "Excel","Spreadsheet", "Pandas", "NLTK", "Scikit-learn"],
    link: "https://github.com/riansyaputra123/Analisis-Sentimen-Aplikasi-MyPertamina",
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "BodyFit Assistant",
    desk: "An Android app that assists you with independent workouts at home to achieve your ideal body. Scans of the user's image are used as data to determine the appropriate workout.",
    tools: ["Kotlin", "OpenCV", "Tensorflow", "Node.Js", "Flask", "Google Cloud", "Scikit-learn"],
    link: "https://github.com/Bangkit-Capstone-CH2-PS046",
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Smart Door ",
    desk: "An Android-based IoT device that can detect suspicious movements and emit an alarm to detect thieves breaking through the door of the house.",
    tools: ["Kodular", "Esp32", "C++", "MQTT"],
    link: "https://github.com/riansyaputra123/SmartDoor_esp32",
    dad: "500",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Xtrememuisix",
    desk: "Xtrememusix is ​​a music streaming website like spotify that supports users to like songs, search for songs and create their own playlists.",
    tools: ["HTML", "CSS", "Javascript", "PHP", "MySQL"],
    link: "https://github.com/riansyaputra123/xtrememusix_2022",
    dad: "600",
  },
  // {
  //   id: 6,
  //   gambar: Proyek6,
  //   nama: "Company Profile 2.0",
  //   desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
  //   tools: ["NextJS", "TailwindCSS", "Framermotion"],
  //   dad: "700",
  // },

];
