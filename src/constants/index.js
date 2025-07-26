import {
    c,
    python,
    java,
    cpp,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    edunet,
    weatherpedia,
    termpw,
    payloadmaster,
    threejs,
    mhft,
    sketcher,
    mathwork,
    CompileVortex,
    eduskill,
    check,
    database,
    modelplan,
    settings,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  export const services = [
    { title: "C", icon: c },
    { title: "C++", icon: cpp },
    { title: "Python", icon: python },
    { title: "Java", icon: java },
  ];
  
  export const technologies = [
    { name: "HTML 5", icon: html },
    { name: "CSS 3", icon: css },
    { name: "JavaScript", icon: javascript },
    { name: "Rect JS", icon: reactjs },
    { name: "Tailwind CSS", icon: tailwind },
    { name: "Node JS", icon: nodejs },
    { name: "Three JS", icon: threejs },
    { name: "git", icon: git },
  ];
  
  export const experiences = [
    {
      title: "現有模型評估",
      company_name: "",
      icon: check,
      iconBg: "#161329",
      date: "",
      points: [
        "A全面分析您目前 AI 模型的效能、準確度與資源使用情況。",
      ],
    },
    {
      title: "數據品質優化",
      company_name: "",
      icon: database,
      iconBg: "#161329",
      date: "",
      points: [
        "改善訓練數據的品質、多樣性與代表性，消除潛在偏見。",
      ],
    },
    {
      title: "模型架構調整",
      company_name: "",
      icon: modelplan,
      iconBg: "#161329",
      date: "",
      points: [
        "優化模型結構與參數，提升準確度與運算效率。",
      ],
    },
    {
      title: "效能測試與驗證",
      company_name: "",
      icon: settings,
      iconBg: "#161329",
      date: "",
      points: [
        "嚴格測試優化後的模型，確保在實際環境中的表現符合預期。",
      ],
    },
  ];

  //add
  export const fmspropertyline = [
    {
      title: "定期檢查",
      company_name: "",
      icon: check,
      iconBg: "#161329",
      date: "",
      points: [
        "系統自動提醒設備檢查時間，確保及時發現潛在問題",
      ],
    },
    {
      title: "預防性維護",
      company_name: "",
      icon: database,
      iconBg: "#161329",
      date: "",
      points: [
        "根據製造商建議和使用情況，安排最佳維護時間",
      ],
    },
    {
      title: "維護記錄追蹤",
      company_name: "",
      icon: modelplan,
      iconBg: "#161329",
      date: "",
      points: [
        "完整記錄所有維護活動，建立設備健康檔案",
      ],
    },
    {
      title: "性能監控",
      company_name: "",
      icon: settings,
      iconBg: "#161329",
      date: "",
      points: [
        "持續監控設備性能，及早發現效能下降跡象",
      ],
    },
  ];

 //add
 export const aimsdeployline = [
  {
    title: "模型打包",
    company_name: "",
    icon: check,
    iconBg: "#161329",
    date: "",
    points: [
      "將訓練好的模型與依賴項打包，準備部署。",
    ],
  },
  {
    title: "環境配置",
    company_name: "",
    icon: database,
    iconBg: "#161329",
    date: "",
    points: [
      "自動設置所需的運行環境與資源。",
    ],
  },
  {
    title: "部署上線",
    company_name: "",
    icon: modelplan,
    iconBg: "#161329",
    date: "",
    points: [
      "支援多種部署模式，如API服務或批次處理。",
    ],
  },
  {
    title: "驗證確認",
    company_name: "",
    icon: settings,
    iconBg: "#161329",
    date: "",
    points: [
      "確保部署模型的功能與性能符合預期。",
    ],
  },
];



  
  // export const projects = [
  //   {
  //     name: "WeatherPedia",
  //     description:
  //       "Web-based platform that allows users to access weather information for their location by entering it in the search field",
  //     tags: [
  //       { name: "Javascript", color: "blue-text-gradient" },
  //       { name: "HTML", color: "green-text-gradient" },
  //       { name: "bootstrap 5.3.0", color: "pink-text-gradient" },
  //       { name: "Weather API by API Ninjas", color: "yellow-text-gradient" },
  //     ],
  //     image: weatherpedia,
  //     source_code_link: "https://github.com/lohitkolluri/WeatherPedia",
  //   },
  //   {
  //     name: "Terminal Like Portfolio Website",
  //     description:
  //       "A terminal themed portfolio website that allows users to type into the terminal and use commands like a real terminal.",
  //     tags: [
  //       { name: "HTML", color: "blue-text-gradient" },
  //       { name: "css", color: "green-text-gradient" },
  //       { name: "Javascript", color: "pink-text-gradient" },
  //     ],
  //     image: termpw,
  //     source_code_link: "https://github.com/lohitkolluri/lohitkolluri.github.io",
  //   },
  //   {
  //     name: "Mental Health Fitness Tracker",
  //     description:
  //       "ML model that utilizes regression techniques to provide insights into mental health and make predictions based on the available data.",
  //     tags: [
  //       { name: "Machine Learning", color: "blue-text-gradient" },
  //       { name: "Jupyter Notebook", color: "green-text-gradient" },
  //       { name: "Regression Algorithms", color: "pink-text-gradient" },
  //     ],
  //     image: mhft,
  //     source_code_link:
  //       "https://github.com/lohitkolluri/mental_health_fitness_tracker",
  //   },
  //   {
  //     name: "PayloadMaster",
  //     description:
  //       "Tool to automate payload creation using the Metasploit framework",
  //     tags: [
  //       { name: "shell", color: "blue-text-gradient" },
  //     ],
  //     image: payloadmaster,
  //     source_code_link: "https://github.com/lohitkolluri/PayloadMaster",
  //   },
  //   {
  //     name: "CompileVortex",
  //     description:
  //       "Tool to automate payload creation using the Metasploit framework",
  //     tags: [
  //       { name: "Javascript", color: "blue-text-gradient" },
  //       { name: "CSS", color: "green-text-gradient" },
  //       { name: "HTML", color: "pink-text-gradient" },
  //     ],
  //     image: CompileVortex,
  //     source_code_link: "https://github.com/lohitkolluri/CompileVortex",
  //   },
  //   {
  //     name: "Sketcher",
  //     description:
  //       "Convert an input image to a pencil sketch using OpenCV and Matplotlib libraries.",
  //     tags: [
  //       { name: "OpenCV", color: "blue-text-gradient" },
  //       { name: "Matplotlib", color: "green-text-gradient" },
  //       { name: "Python", color: "pink-text-gradient" },
  //     ],
  
  //     image: sketcher,
  //     source_code_link: "https://github.com/lohitkolluri/Image_to_Pencil_Sketch_App",
  //   },
  // ];