const translations = {
  ja: {
    "nav.home": "ホーム",
    "nav.news": "ニュース",
    "nav.about": "WCSについて",
    "nav.contact": "お問い合わせ",

    "contact.heroTitle": "- お問い合わせ -",
    "contact.heroSubtitle": "Contact info",
    "contact.formTitle": "お問い合わせフォーム",
    "contact.name": "お名前",
    "contact.email": "メールアドレス",
    "contact.subject": "件名",
    "contact.message": "お問い合わせ内容",
    "contact.submit": "送信",

    "about.heroTitle": "- WCSについて -",
    "about.heroSubtitle": "About Us",

    "about.whatTitle": "White Coat Societyとは",

    "about.intro1":
      "White Coat Society（WCS）は、医療に関心を持つ中高生が、実際の医療現場や研究に触れ、実践的に学べる機会を増やすことを目的とした学生団体です。",

    "about.intro2":
      "現在、中高生が医療について学ぶ機会は、学校での授業やインターネットなどに限られることも多く、実際に医療現場を見たり、医療に携わる方々から直接お話を伺ったりする機会はまだ十分ではありません。",

    "about.intro3Before":
      "私たちはこの現状に注目し、",

    "about.intro3Strong":
      "実際に見て、聞いて、感じて、学ぶ場",

    "about.intro3After":
      "を中高生に届けるため、様々な活動をしています。",

    "about.activitiesTitle": "主な活動内容",
    "about.activitiesSubtitle": "Activities",

    "about.activity1Title": "医療現場での体験",
    "about.activity1Text":
      "病院やクリニック、介護施設と連携し、ボランティアや職業体験に参加します。",

    "about.activity2Title": "現場で働く医師の講演会",
    "about.activity2Text":
      "実際に医療現場で働く医師の方々から、医療の仕事や現場での経験について直接お話を伺います。",

    "about.activity3Title": "医学生・研修医との交流会",
    "about.activity3Text":
      "医学生や研修医などの先輩方に、受験について相談したり、学生生活や進路についての体験談を聞いたりすることができます。",

    "about.activity4Title": "患者さんとの交流会",
    "about.activity4Text":
      "医療者側からの視点だけではなく、医療を受ける側がどのようなことを感じ、考えているのかを知ることで、普段とは異なる視点から医療について学びます。",

    "about.teamTitle": "WCSの運営について",
    "about.teamSubtitle": "Our Team",

    "about.teamIntro":
      "WCSの運営には、主に三つの部門が携わっています。",

    "about.department1Title": "メイン部門",
    "about.department1Text":
      "病院や医師の方々に連絡を取り、WCSで実施する企画の立案から運営までを担当します。",

    "about.department2Title": "ウェブサイト部門",
    "about.department2Text":
      "当ウェブサイトの更新や管理を行い、WCSの活動や情報を分かりやすく発信します。",

    "about.department3Title": "SNS部門",
    "about.department3Text":
      "InstagramやXなどのSNSを運用し、WCSの活動やイベントについてより多くの方々に発信します。"
  },

  en: {
    "nav.home": "Home",
    "nav.news": "News",
    "nav.about": "About WCS",
    "nav.contact": "Contact",

    "contact.heroTitle": "- Contact -",
    "contact.heroSubtitle": "Contact info",
    "contact.formTitle": "Contact Form",
    "contact.name": "Name",
    "contact.email": "Email Address",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.submit": "Send",

    "about.heroTitle": "- About WCS -",
    "about.heroSubtitle": "About Us",

    "about.whatTitle": "What is White Coat Society?",

    "about.intro1":
      "White Coat Society (WCS) is a student organization that aims to increase opportunities for middle and high school students interested in medicine to experience real medical settings and research and learn through hands-on experiences.",

    "about.intro2":
      "Currently, opportunities for middle and high school students to learn about medicine are often limited to school classes and the internet, and there are still not enough opportunities to actually visit medical settings or speak directly with people working in medicine.",

    "about.intro3Before":
      "We focus on this situation and aim to provide middle and high school students with opportunities to",

    "about.intro3Strong":
      "see, hear, feel, and learn firsthand",

    "about.intro3After":
      "through a variety of activities.",

    "about.activitiesTitle": "Main Activities",
    "about.activitiesSubtitle": "Activities",

    "about.activity1Title": "Experiences in Medical Settings",
    "about.activity1Text":
      "We work with hospitals, clinics, and care facilities to participate in volunteer and work experience opportunities.",

    "about.activity2Title": "Talks by Practicing Doctors",
    "about.activity2Text":
      "We hear directly from doctors working in medical settings about their work and experiences in the medical field.",

    "about.activity3Title": "Meetups with Medical Students and Residents",
    "about.activity3Text":
      "Students can talk with medical students and residents about university admissions and hear about their experiences with student life and future career paths.",

    "about.activity4Title": "Interactions with Patients",
    "about.activity4Text":
      "By learning what patients feel and think, rather than only looking at medicine from the perspective of healthcare professionals, students can learn about medicine from a different point of view.",

    "about.teamTitle": "How WCS is Organized",
    "about.teamSubtitle": "Our Team",

    "about.teamIntro":
      "WCS is mainly operated through three departments.",

    "about.department1Title": "Main Department",
    "about.department1Text":
      "We contact hospitals and doctors and are responsible for planning and managing WCS projects and activities.",

    "about.department2Title": "Website Department",
    "about.department2Text":
      "We update and manage this website and communicate WCS activities and information in an easy-to-understand way.",

    "about.department3Title": "Social Media Department",
    "about.department3Text":
      "We manage social media platforms such as Instagram and X to share WCS activities and events with more people."
  }
};

let currentLanguage = localStorage.getItem("wcs-language") || "ja";

function setLanguage(lang) {
  currentLanguage = lang;

  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;

    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  const toggleButton = document.getElementById("language-toggle");

  if (toggleButton) {
    toggleButton.textContent =
      lang === "ja" ? "日本語 / EN" : "JP / English";
  }

  localStorage.setItem("wcs-language", lang);
}

const toggleButton = document.getElementById("language-toggle");

if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    const nextLanguage = currentLanguage === "ja" ? "en" : "ja";
    setLanguage(nextLanguage);
  });
}

setLanguage(currentLanguage);