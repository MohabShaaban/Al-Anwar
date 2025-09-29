const translations = {
    en: {
        // Navbar & Header
        welcome: "Welcome To Alanwar LLC",
        tellMeMore: "Tell Me More",
        services: "Services",
        portfolio: "Portfolio",
        about: "About",
        team: "Team",
        contact: "Contact",
        contactUs: "Contact Us",

        // Services
        servicesSub: "Our company is a leading specialist in deep foundation works and geotechnical engineering solutions, delivering excellence through the use of advanced equipment and modern technologies. We provide innovative, reliable, and cost-effective solutions that meet the highest standards of quality and safety..",
        rotaryTitle: "Rotary Bored Piles",
        rotaryDesc: "Executed using bentonite-water slurry and full-length reinforced concrete. Suitable for bridges and specialized structures.\n\nDiameters: 60 cm – 250 cm\n\nDepths: up to 55 meters",
        cfaTitle: "Continuous Flight Auger (C.F.A.) Piles",
        cfaDesc: "Efficient pile installation method with minimal vibration and noise.\nDiameters: 40 cm – 120 cm",
        retainingTitle: "Retaining Walls & Secant Piles",
        retainingDesc: "Constructed using bentonite and concrete to provide reliable excavation support.",
        microTitle: "Micropiles & Ground Anchors",
        microDesc: "Designed for structural strengthening, underpinning, and retaining wall stabilization.",
        soilTitle: "Soil Improvement & Grouting Works",
        soilDesc: "Advanced soil injection techniques to enhance soil properties and ensure ground stability.",

        // Portfolio
        portfolioSub: "Some of our projects",
        rasElTin: "Ras El Tin Port",
        dekheila: "Dekheila Port",
        tolip: "Tolip Hotel",

        // About
        aboutSub: "Our Company's CV",

        // Team
        teamHeading: "Our Amazing Team",
        ali: "Ali Anwar",
        mohammed: "Mohammed Anwar",
        shaaban: "Shaaban Anwar",
        ahmed: "Ahmed Anwar",
        cofounder: "Co-founder",

        // Contact
        workingHours: "Working Hours:",
        saturdayThursday: "Saturday – Thursday: 11:00 AM – 11:00 PM",
        fridayClosed: "Friday: Closed",

        // Modals (just main headings and buttons)
        closeProject: "Close Project",

        toggleLabel: "عربي"
    },
    ar: {
        welcome: "مرحبا بكم في شركة ال أنور",
        tellMeMore: "اعرف المزيد",
        services: "الخدمات",
        portfolio: "المشاريع",
        about: "عن الشركة",
        team: "الفريق",
        contact: "اتصل بنا",
        contactUs: "اتصل بنا",

        servicesSub: "تضم الشركة فريق عمل مميز من المهندسين خبراء في مجال الأساسات العميقة  وفنيين ذوي خبرة مميزة في مجال العمل. تعمل الشركة في تنفيذ الأساسات العميقة ودراسة الحلول الهندسية الجيوتقنية باستخدام احدث المعدات",
        rotaryTitle: "خوازيق الحفر الدوار",
        rotaryDesc: "باستخدام خليط البنتونيت والمياه و الخرسانات المسلحة تسليح بكامل الطول لإنشاء الكباري و لأعمال المتخصصة  الخازوق أقطار من 60 سم – 250 سم وأطوال حتى 55 م",
        cfaTitle: "خوازيق بالحفر البريمى المستمر C.F.A",
        cfaDesc: "طريقة تنفيذ خوازيق فعّالة بأقل اهتزاز وضوضاء.\nالأقطار: 40 سم – 120 سم",
        retainingTitle: "جدران ساندة وخوازيق متداخلة",
        retainingDesc: "يتم إنشاؤها باستخدام البنتونيت والخرسانة لتوفير دعم آمن لأعمال الحفر.",
        microTitle: "الميكروبايل ومرابط التربة",
        microDesc: "مصممة لتدعيم الهياكل وتقوية الأساسات واستقرار الجدران الساندة.",
        soilTitle: "تحسين التربة وحقن الجراوت",
        soilDesc: "تقنيات متقدمة لحقن التربة لتحسين خصائصها وضمان استقرار الأرض.",

        portfolioSub: "بعض من مشاريعنا",
        rasElTin: "ميناء رأس التين",
        dekheila: "ميناء الدخيلة",
        tolip: "فندق توليب",

        aboutSub: "السيرة التعريفية للشركة",

        teamHeading: "فريقنا الرائع",
        ali: "علي أنور",
        mohammed: "محمد أنور",
        shaaban: "شعبان أنور",
        ahmed: "أحمد أنور",
        cofounder: "شريك مؤسس",

        workingHours: "ساعات العمل:",
        saturdayThursday: "السبت – الخميس: 11:00 صباحًا – 11:00 مساءً",
        fridayClosed: "الجمعة: مغلق",

        closeProject: "إغلاق المشروع",

        toggleLabel: "EN"
    }
};

let currentLang = "en";

function setLanguage(lang) {
    currentLang = lang;
    document.body.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    document.getElementById("lang-toggle").textContent = translations[lang].toggleLabel;

    // Navbar & header
    const mastheadSubheading = document.querySelector(".masthead-subheading");
    if (mastheadSubheading) mastheadSubheading.textContent = translations[lang].welcome;

    const customButton = document.querySelector(".custom-button");
    if (customButton) customButton.textContent = translations[lang].tellMeMore;

    const navServices = document.getElementById("navServices");
    if (navServices) navServices.textContent = translations[lang].services;

    const navPortfolio = document.getElementById("navPortfolio");
    if (navPortfolio) navPortfolio.textContent = translations[lang].portfolio;

    const navAbout = document.getElementById("navAbout");
    if (navAbout) navAbout.textContent = translations[lang].about;

    const navTeam = document.getElementById("navTeam");
    if (navTeam) navTeam.textContent = translations[lang].team;

    const navContact = document.getElementById("navContact");
    if (navContact) navContact.textContent = translations[lang].contact;

    const contactHeading = document.getElementById("contact-heading");
    if (contactHeading) contactHeading.textContent = translations[lang].contactUs;

    const contactSub = document.getElementById("contact-sub");
    if (contactSub && translations[lang].contactSub) contactSub.textContent = translations[lang].contactSub;

    // Services
    const servicesHeading = document.getElementById("services-heading");
    if (servicesHeading) servicesHeading.textContent = translations[lang].services;

    const servicesSub = document.getElementById("services-sub");
    if (servicesSub) servicesSub.textContent = translations[lang].servicesSub;

    const rotaryTitle = document.getElementById("rotary-title");
    if (rotaryTitle) rotaryTitle.textContent = translations[lang].rotaryTitle;

    const rotaryDesc = document.getElementById("rotary-desc");
    if (rotaryDesc) rotaryDesc.textContent = translations[lang].rotaryDesc;

    const cfaTitle = document.getElementById("cfa-title");
    if (cfaTitle) cfaTitle.textContent = translations[lang].cfaTitle;

    const cfaDesc = document.getElementById("cfa-desc");
    if (cfaDesc) cfaDesc.textContent = translations[lang].cfaDesc;

    const retainingTitle = document.getElementById("retaining-title");
    if (retainingTitle) retainingTitle.textContent = translations[lang].retainingTitle;

    const retainingDesc = document.getElementById("retaining-desc");
    if (retainingDesc) retainingDesc.textContent = translations[lang].retainingDesc;

    const microTitle = document.getElementById("micro-title");
    if (microTitle) microTitle.textContent = translations[lang].microTitle;

    const microDesc = document.getElementById("micro-desc");
    if (microDesc) microDesc.textContent = translations[lang].microDesc;

    const soilTitle = document.getElementById("soil-title");
    if (soilTitle) soilTitle.textContent = translations[lang].soilTitle;

    const soilDesc = document.getElementById("soil-desc");
    if (soilDesc) soilDesc.textContent = translations[lang].soilDesc;

    // Portfolio
    const portfolioHeading = document.getElementById("portfolio-heading");
    if (portfolioHeading) portfolioHeading.textContent = translations[lang].portfolio;

    const portfolioSub = document.getElementById("portfolio-sub");
    if (portfolioSub) portfolioSub.textContent = translations[lang].portfolioSub;

    const rasEltin = document.getElementById("ras-eltin");
    if (rasEltin) rasEltin.textContent = translations[lang].rasElTin;

    const dekheila = document.getElementById("dekheila");
    if (dekheila) dekheila.textContent = translations[lang].dekheila;

    const tolip = document.getElementById("tolip");
    if (tolip) tolip.textContent = translations[lang].tolip;

    // About
    const aboutTitle = document.getElementById("about-title");
    if (aboutTitle) aboutTitle.textContent = translations[lang].about;

    const aboutSub = document.getElementById("about-sub");
    if (aboutSub) aboutSub.textContent = translations[lang].aboutSub;

    // Team
    const teamHeading = document.getElementById("team-heading");
    if (teamHeading) teamHeading.textContent = translations[lang].teamHeading;

    const ali = document.getElementById("ali");
    if (ali) ali.textContent = translations[lang].ali;

    const mohammed = document.getElementById("mohammed");
    if (mohammed) mohammed.textContent = translations[lang].mohammed;

    const shaaban = document.getElementById("shaaban");
    if (shaaban) shaaban.textContent = translations[lang].shaaban;

    const ahmed = document.getElementById("ahmed");
    if (ahmed) ahmed.textContent = translations[lang].ahmed;

    document.querySelectorAll(".cofounder").forEach(e => e.textContent = translations[lang].cofounder);

    // Contact info
    const contactInfo = document.querySelector('.contact-info p');
    if (contactInfo) {
        contactInfo.innerHTML = `
          <strong>Al Anwar for Mechanical Foundations</strong><br>
          Head Office<br>
          El-Mahmoudia Canal Street – El Raml 2<br>
          Next to El Beheira Joint Stock Company / Alexandria<br><br>
          📞 01222399417 – 01224750657 – 01001781496<br><br>
          🕒 <strong>${translations[lang].workingHours}</strong><br>
          ${translations[lang].saturdayThursday}<br>
          ${translations[lang].fridayClosed}
        `;
    }

    // Modals close buttons
    document.querySelectorAll(".close-project").forEach(btn => btn.textContent = translations[lang].closeProject);
}

document.getElementById("lang-toggle").onclick = () => {
    setLanguage(currentLang === "en" ? "ar" : "en");
};

setLanguage("ar");
