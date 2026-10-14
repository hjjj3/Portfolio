"use strict";

/* ================= EDIT HERE ================= */
const NAME = "Hashem Al-Na'seh";
const GH = "hjjj3";

/* Certificates: img = picture saved inside assets/ , link = verification link (optional) */
const certs = [
  {
    tag: "Kali Linux",
    img: "assets/cert-kali.jpg",
    link: "",
    en: ["Ethical Hacking with Kali", "Hands-on ethical hacking using Kali Linux tools."],
    ar: ["Ethical Hacking with Kali", "تطبيق عملي للاختراق الأخلاقي باستخدام أدوات Kali Linux."]
  },
  {
    tag: "Cisco",
    img: "assets/cert-python.jpg",
    link: "",
    en: ["Cisco Python Essentials 1", "Python fundamentals: syntax, data types, control flow and functions."],
    ar: ["Cisco Python Essentials 1", "أساسيات بايثون: الصياغة وأنواع البيانات والتحكم والدوال."]
  },
  {
    tag: "Cisco",
    img: "assets/cert-cybersecurtiy.jpg",
    link: "",
    en: ["Cisco Cybersecurity Essentials", "Core cybersecurity concepts: threats, defense and network security basics."],
    ar: ["Cisco Cybersecurity Essentials", "مفاهيم الأمن السيبراني: التهديدات والدفاع وأساسيات أمن الشبكات."]
  },
  {
    tag: "Hackviser",
    img: "assets/cert-core.jpg",
    link: "https://hackviser.com/verify?id=HV-CORE-O692NYFQ",
    en: ["Hackviser CORE", "Certified Cybersecurity Foundations: Hackviser's foundations certificate for cybersecurity beginners."],
    ar: ["Hackviser CORE", "Certified Cybersecurity Foundations: شهادة أساسيات الأمن السيبراني من Hackviser للمبتدئين."]
  },
  {
    tag: "Hackviser",
    img: "assets/cert-hackviser.jpg",
    link: "https://hackviser.com/verify?id=HV-CAPT-LS37BFYT",
    en: ["Hackviser CAPT", "Certified Associate Penetration Tester: an entry-level, hands-on penetration testing certification from Hackviser."],
    ar: ["Hackviser CAPT", "Certified Associate Penetration Tester: شهادة عملية للمستوى المبتدئ في اختبار الاختراق من Hackviser."]
  }
];

/* Projects: each item must be an object inside this array. */
const projects = [
  {
    id: "HM",
    tag: "Cybersecurity",
    feat: true,
    url: "https://hyvermail.com",
    tech: ["Email Privacy", "Cybersecurity", "Digital Identity"],
    en: [
      "HyverMail: Privacy-Focused Email Security Platform",
      "A platform focused on email privacy, helping users protect their email addresses with aliases and reduce exposure to spam and unwanted tracking.",
      "Explore the HyverMail blog to learn about email privacy, digital identity protection, and online security."
    ],
    ar: [
      "HyverMail: منصة لحماية البريد الإلكتروني والخصوصية",
      "منصة تركز على خصوصية البريد الإلكتروني، وتساعد المستخدمين على حماية عناوينهم باستخدام عناوين بديلة وتقليل التعرض للرسائل المزعجة والتتبع غير المرغوب فيه.",
      "استكشف مدونة HyverMail للتعرف على خصوصية البريد الإلكتروني وحماية الهوية الرقمية والأمان عبر الإنترنت."
    ]
  },
  {
    id: "00", tag: "Shell", repo: "discovery-web-piscine", tech: ["Linux", "Shell", "Git"],
    en: ["Linux & Shell", "Terminal mastery, the file system and shell scripting from the Discovery Piscine."],
    ar: ["لينكس والشِل", "إتقان الطرفية ونظام الملفات والسكربتات."]
  },
  {
    id: "01", tag: "HTML", repo: "Project01", tech: ["HTML5", "Semantic", "Git"],
    en: ["HTML Structure", "A semantic, accessible page built with clean HTML5."],
    ar: ["بنية HTML", "صفحة دلالية وسهلة الوصول بـ HTML5 نظيف."]
  },
  {
    id: "02", tag: "CSS", repo: "Project-02-CSS", tech: ["CSS3", "Flexbox", "Responsive"],
    en: ["CSS Styling", "Modern styling, layouts and responsive design."],
    ar: ["تنسيق CSS", "تنسيق حديث وتخطيطات وتصميم متجاوب."]
  },
  {
    id: "03", tag: "JavaScript", repo: "Project-03-JavaScript-Interactivity", tech: ["JavaScript", "DOM", "Events"],
    en: ["JavaScript Interactivity", "DOM manipulation and event-driven features."],
    ar: ["تفاعلية JavaScript", "التعامل مع DOM وميزات قائمة على الأحداث."]
  },
  {
    id: "04", tag: "JavaScript", repo: "ex00", tech: ["HTML", "CSS", "JavaScript", "i18n"],
    en: ["This Portfolio", "Capstone: themes, photo switcher, EN/AR with RTL, animations."],
    ar: ["هذا البورتفوليو", "المشروع الختامي: ثيمات وتبديل صور وعربي/إنجليزي مع RTL وأنيميشن."]
  }
];

const skills = [
  { k: "sk_sec", items: ["Kali Linux", "Nmap", "Wireshark", "Network Security", "TCP/IP", "SOC Fundamentals", "Linux Fundamentals", "TryHackMe"] },
  { k: "sk_prog", items: ["C++", "Python (Basic)", "SQL"] },
  { k: "sk_web", items: ["HTML5", "CSS3", "JavaScript", "Git"] }
];

const palettes = [
  ["#6c5ce7", "#00d2ff"],
  ["#11998e", "#38ef7d"],
  ["#ff512f", "#f09819"],
  ["#f857a6", "#7f5af0"],
  ["#000000","#f00000fb"]
];

const dict = {
  en: {
    nav_about: "About", nav_skills: "Skills", nav_projects: "Projects", nav_certs: "Certificates", nav_hobbies: "Hobbies", nav_contact: "Contact",
    hi: "Hi, I'm",
    hero_p: "Cybersecurity graduate with hands-on practice in Kali Linux, Nmap and Wireshark, who also builds clean, responsive websites.",
    roles: ["Cybersecurity Graduate", "SOC & Network Security", "Incident Response Enthusiast", "Kali Linux & Web Dev"],
    cta1: "View Projects", cta2: "Contact Me", casual: "Casual", pro: "Professional",
    about_p: "I'm a Cybersecurity graduate from Al al-Bayt University, interested in SOC, network security, incident response and cloud security. I practice with Kali Linux, Wireshark, Nmap and TryHackMe labs, and I'm looking for an opportunity to grow inside a professional security team.",
    st1: "Projects", st2: "Certificates", st3: "GitHub Repos", st4: "Followers",
    j_title: "My Journey", j0: "BSc in Cybersecurity, Al al-Bayt University.",
    sk_sec: "Cybersecurity", sk_prog: "Programming", sk_web: "Web", cv: "Download CV",
    fact1: "🎓 Cybersecurity graduate · Al al-Bayt University", fact2: "🌐 Arabic (Native) · English (Good)", fact3: "📍 Amman, Jordan",
    visit: "Visit website →", verify: "Verify certificate →", grad: "Featured Project", result: "Details", j1: "Terminal, shell and file system.",
    j2: "Version control and clean commits.", j3: "Semantic pages and responsive design.", j4: "DOM, events and interactivity.",
    f_all: "All", more: "Details →", view: "View on GitHub →", issued: "Issued by",
    h1: "Coding", h2: "TryHackMe Labs", h3: "Reading", h4: "Sports", send: "Send",
    ph_name: "Your name", ph_email: "Your email", ph_msg: "Your message",
    err: "Please fill all fields with a valid email.", ok: "Your email app will open so you can send the message.",
    altC: "Casual photo", altP: "Professional photo"
  },
  ar: {
    nav_about: "نبذة", nav_skills: "المهارات", nav_projects: "المشاريع", nav_certs: "الشهادات", nav_hobbies: "الهوايات", nav_contact: "تواصل",
    hi: "مرحباً، أنا",
    hero_p: "خريج أمن سيبراني بخبرة عملية في Kali Linux وNmap وWireshark، وأبني أيضاً مواقع نظيفة ومتجاوبة.",
    roles: ["خريج أمن سيبراني", "SOC وأمن الشبكات", "شغوف بالاستجابة للحوادث", "Kali Linux وتطوير الويب"],
    cta1: "شاهد المشاريع", cta2: "تواصل معي", casual: "عادية", pro: "رسمية",
    about_p: "أنا خريج أمن سيبراني من جامعة آل البيت، مهتم بالـ SOC وأمن الشبكات والاستجابة للحوادث وأمن السحابة. أتدرّب باستخدام Kali Linux وWireshark وNmap ومختبرات TryHackMe، وأبحث عن فرصة للتطور ضمن فريق أمني محترف.",
    st1: "مشاريع", st2: "شهادات", st3: "مستودعات GitHub", st4: "متابعون",
    j_title: "رحلتي", j0: "بكالوريوس أمن سيبراني — جامعة آل البيت.",
    sk_sec: "الأمن السيبراني", sk_prog: "البرمجة", sk_web: "الويب", cv: "تحميل السيرة الذاتية",
    fact1: "🎓 خريج أمن سيبراني · جامعة آل البيت", fact2: "🌐 العربية (لغة أم) · الإنجليزية (جيد)", fact3: "📍 عمّان، الأردن",
    visit: "زيارة الموقع ←", verify: "تحقق من الشهادة ←", grad: "مشروع مميز", result: "التفاصيل", j1: "الطرفية والشِل ونظام الملفات.",
    j2: "التحكم بالإصدارات وكوميتات مرتبة.", j3: "صفحات دلالية وتصميم متجاوب.", j4: "DOM والأحداث والتفاعلية.",
    f_all: "الكل", more: "التفاصيل ←", view: "شاهد على GitHub ←", issued: "الجهة المانحة",
    h1: "البرمجة", h2: "مختبرات TryHackMe", h3: "القراءة", h4: "الرياضة", send: "إرسال",
    ph_name: "اسمك", ph_email: "بريدك الإلكتروني", ph_msg: "رسالتك",
    err: "يرجى تعبئة جميع الحقول وإدخال بريد إلكتروني صحيح.", ok: "سيتم فتح برنامج البريد لديك لإرسال الرسالة.",
    altC: "صورة عادية", altP: "صورة رسمية"
  }
};

/* -----------------------------------helpers  */
const $ = (selector, rootElement = document) => rootElement.querySelector(selector);
const $$ = (selector, rootElement = document) => [...rootElement.querySelectorAll(selector)];
const root = document.documentElement;
const store = {
  get(key) { try { return localStorage.getItem(key); } catch { return null; } },
  set(key, value) { try { localStorage.setItem(key, value); } catch { /* storage may be disabled */ } }
};
let lang = store.get("lang") === "ar" ? "ar" : "en";
let photo = "casual";

/* -----------------------------rendering */
function renderSkills() {
  const grid = $("#skillGrid");
  grid.innerHTML = skills.map(group => `
    <article class="card">
      <h3 data-i18n="${group.k}"></h3>
      <div class="chips">${group.items.map(item => `<span>${item}</span>`).join("")}</div>
    </article>
  `).join("");
}

function renderProjects() {
  const activeFilter = $("#filters .active")?.dataset.f || "All";
  const filteredProjects = projects.filter(project => activeFilter === "All" || project.tag === activeFilter);
  $("#projGrid").innerHTML = filteredProjects.map(project => `
    <article class="card ${project.feat ? "feat" : ""}" data-p="${project.id}" tabindex="0" role="button" aria-label="${project[lang][0]}">
      <span class="num">${project.id}</span>
      ${project.feat ? `<small class="star">★ ${dict[lang].grad}</small>` : ""}
      <h3>${project[lang][0]}</h3>
      <p>${project[lang][1]}</p>
      <span class="link">${dict[lang].more}</span>
    </article>
  `).join("");
}

function renderCerts() {
  $("#certGrid").innerHTML = certs.map((cert, index) => `
    <article class="card" data-c="${index}" tabindex="0" role="button" aria-label="${cert[lang][0]}">
      <span class="num">🎓</span>
      <h3>${cert[lang][0]}</h3>
      <p>${cert.tag}</p>
      <span class="link">${dict[lang].more}</span>
    </article>
  `).join("");
}

/* ---------------------------language switcher */
function setLang(nextLanguage) {
  lang = nextLanguage === "ar" ? "ar" : "en";
  root.lang = lang;
  root.dir = lang === "ar" ? "rtl" : "ltr";

  $$('[data-i18n]').forEach(element => {
    const translation = dict[lang][element.dataset.i18n];
    if (typeof translation === "string") element.textContent = translation;
  });
  $$('[data-ph]').forEach(element => {
    const translation = dict[lang][element.dataset.ph];
    if (translation) element.placeholder = translation;
  });

  $("#langBtn").textContent = lang === "ar" ? "EN" : "AR";
  $("#avatar").alt = photo === "casual" ? dict[lang].altC : dict[lang].altP;
  renderProjects();
  renderCerts();
  store.set("lang", lang);
}
$("#langBtn").addEventListener("click", () => setLang(lang === "en" ? "ar" : "en"));

/* --------------------------- theme + accent switcher */
let particleColor = "#00d2ff";
function readColor() {
  particleColor = getComputedStyle(root).getPropertyValue("--a2").trim() || particleColor;
}
function setTheme(theme) {
  root.dataset.theme = theme;
  $("#themeBtn").textContent = theme === "dark" ? "🌙" : "☀️";
  store.set("theme", theme);
}
function setAccent(index) {
  const [firstColor, secondColor] = palettes[index] || palettes[0];
  root.style.setProperty("--a1", firstColor);
  root.style.setProperty("--a2", secondColor);
  $$(".dot").forEach((dot, dotIndex) => dot.classList.toggle("on", dotIndex === index));
  store.set("accent", String(index));
  readColor();
}
$("#themeBtn").addEventListener("click", () => setTheme(root.dataset.theme === "dark" ? "light" : "dark"));
$("#dots").innerHTML = palettes.map((palette, index) => `
  <button class="dot" data-i="${index}" aria-label="Accent color ${index + 1}" style="background:linear-gradient(135deg,${palette[0]},${palette[1]})"></button>
`).join("");
$("#dots").addEventListener("click", event => {
  const dot = event.target.closest(".dot");
  if (dot) setAccent(Number(dot.dataset.i));
});

/* --------------photo switcher------------------ */
const avatar = $("#avatar");
const FALLBACK = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" fill="#6c5ce7"/><text x="100" y="128" font-size="90" text-anchor="middle" fill="#fff" font-family="sans-serif">H</text></svg>'
);
function showPhoto(name) {
  avatar.onerror = () => {
    avatar.onerror = null;
    avatar.src = FALLBACK;
  };
  avatar.src = `assets/${name}.jpg`;
  avatar.alt = name === "casual" ? dict[lang].altC : dict[lang].altP;
}
$$(".avatar-btns .chip").forEach(button => button.addEventListener("click", () => {
  photo = button.dataset.photo;
  $$(".avatar-btns .chip").forEach(item => item.classList.toggle("active", item === button));
  avatar.classList.add("fade");
  window.setTimeout(() => {
    showPhoto(photo);
    avatar.classList.remove("fade");
  }, 250);
}));

/*  modal + project/certificate clicks */
function openModal(title, description, tags, href, linkLabel, result, image) {
  $("#mT").textContent = title;
  $("#mD").textContent = description;

  const resultElement = $("#mR");
  resultElement.hidden = !result;
  resultElement.textContent = result || "";

  /* certificate picture  */
  const imageElement = $("#mImg");
  if (imageElement) {
    imageElement.hidden = !image;
    if (image) {
      imageElement.onerror = () => { imageElement.hidden = true; };
      imageElement.src = image;
      imageElement.alt = title;
      imageElement.onclick = () => window.open(image, "_blank");
    }
  }

  $("#mTags").innerHTML = tags.map(tag => `<span>${tag}</span>`).join("");
  const link = $("#mL");
  link.hidden = !href;
  if (href) {
    link.href = href;
    link.textContent = linkLabel;
  } else {
    link.removeAttribute("href");
  }
  $("#modal").classList.add("open");
  $("#modal").setAttribute("aria-hidden", "false");
}
function closeModal() {
  $("#modal").classList.remove("open");
  $("#modal").setAttribute("aria-hidden", "true");
}
$("#mClose").addEventListener("click", closeModal);
$("#modal").addEventListener("click", event => {
  if (event.target.id === "modal") closeModal();
});
window.addEventListener("keydown", event => {
  if (event.key === "Escape") closeModal();
  if ((event.key === "Enter" || event.key === " ") && document.activeElement.matches("[data-p], [data-c]")) {
    event.preventDefault();
    document.activeElement.click();
  }
});

document.addEventListener("click", event => {
  const projectCard = event.target.closest("[data-p]");
  const certCard = event.target.closest("[data-c]");
  const translations = dict[lang];

  if (projectCard) {
    const project = projects.find(item => item.id === projectCard.dataset.p);
    if (!project) return;
    const projectHref = project.url || (project.repo ? `https://github.com/${GH}/${project.repo}` : "");
    const linkLabel = project.url ? translations.visit : translations.view;
    const result = project[lang][2] ? `${translations.result}: ${project[lang][2]}` : "";
    openModal(project[lang][0], project[lang][1], project.tech, projectHref, linkLabel, result);
  } else if (certCard) {
    const cert = certs[Number(certCard.dataset.c)];
    if (!cert) return;
    /* fixed: use the variables defined above (cert / translations), not c / L */
    openModal(cert[lang][0], cert[lang][1], [cert.tag], cert.link, translations.verify, "", cert.img);
  }
});

$("#filters").addEventListener("click", event => {
  const button = event.target.closest(".chip");
  if (!button) return;
  $$("#filters .chip").forEach(item => item.classList.toggle("active", item === button));
  renderProjects();
});

/* ================= menu, progress, back to top ================= */
$("#burger").addEventListener("click", () => {
  const menu = $("#menu");
  const isOpen = menu.classList.toggle("open");
  $("#burger").setAttribute("aria-expanded", String(isOpen));
});
$$("#menu a").forEach(link => link.addEventListener("click", () => {
  $("#menu").classList.remove("open");
  $("#burger").setAttribute("aria-expanded", "false");
}));
window.addEventListener("scroll", () => {
  const scrollableHeight = root.scrollHeight - window.innerHeight;
  $("#progress").style.width = `${scrollableHeight > 0 ? window.scrollY / scrollableHeight * 100 : 0}%`;
  $("#toTop").classList.toggle("show", window.scrollY > 500);
}, { passive: true });
$("#toTop").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

/* ================= reveal, counters, active navigation ================= */
const countedElements = new WeakSet();
function count(element) {
  if (countedElements.has(element)) return;
  countedElements.add(element);
  const target = Number(element.dataset.count) || 0;
  let current = 0;
  const timer = window.setInterval(() => {
    current = Math.min(target, current + Math.max(1, Math.ceil(target / 25)));
    element.textContent = String(current);
    if (current >= target) window.clearInterval(timer);
  }, 45);
}
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("show");
    $$('[data-count]', entry.target).forEach(count);
    revealObserver.unobserve(entry.target);
  }), { threshold: 0.1 });
  $$(".reveal").forEach(element => revealObserver.observe(element));

  const navObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    $$("#menu a").forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
  }), { rootMargin: "-45% 0px -50% 0px" });
  $$('main section[id]').forEach(section => navObserver.observe(section));
} else {
  $$(".reveal").forEach(element => element.classList.add("show"));
  $$('[data-count]').forEach(count);
}

/* ================= typing effect ================= */
let roleIndex = 0;
let characterIndex = 0;
let deleting = false;
function typeRole() {
  const roles = dict[lang].roles;
  const role = roles[roleIndex % roles.length];
  characterIndex = Math.min(characterIndex, role.length);
  $("#typed").textContent = role.slice(0, characterIndex);

  if (!deleting && characterIndex === role.length) {
    deleting = true;
    window.setTimeout(typeRole, 1400);
    return;
  }
  if (deleting && characterIndex === 0) {
    deleting = false;
    roleIndex++;
  }
  characterIndex += deleting ? -1 : 1;
  window.setTimeout(typeRole, deleting ? 40 : 90);
}

/* ================= cursor + card tilt ================= */
const cursor = $("#cursor");
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
window.addEventListener("mousemove", event => {
  mouseX = event.clientX;
  mouseY = event.clientY;
  cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  cursor.classList.toggle("big", Boolean(event.target.closest("a, button, .card")));
  const card = event.target.closest(".card");
  if (card) {
    const rect = card.getBoundingClientRect();
    const x = (mouseX - rect.left) / rect.width - 0.5;
    const y = (mouseY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(700px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg) translateY(-3px)`;
  }
}, { passive: true });
document.addEventListener("mouseout", event => {
  const card = event.target.closest?.(".card");
  if (card && !card.contains(event.relatedTarget)) card.style.transform = "";
});

/* ================= background particles ================= */
const canvas = $("#bg");
const context = canvas.getContext("2d");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let canvasWidth = 0;
let canvasHeight = 0;
let particles = [];
function resizeCanvas() {
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  canvasWidth = window.innerWidth;
  canvasHeight = window.innerHeight;
  canvas.width = Math.floor(canvasWidth * ratio);
  canvas.height = Math.floor(canvasHeight * ratio);
  canvas.style.width = `${canvasWidth}px`;
  canvas.style.height = `${canvasHeight}px`;
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  particles = Array.from({ length: Math.min(60, Math.floor(canvasWidth / 18)) }, () => ({
    x: Math.random() * canvasWidth,
    y: Math.random() * canvasHeight,
    vx: (Math.random() - 0.5) * 0.6,
    vy: (Math.random() - 0.5) * 0.6
  }));
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();
function drawParticles() {
  if (!document.hidden && !reduceMotion) {
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    context.fillStyle = particleColor;
    context.strokeStyle = particleColor;
    for (let index = 0; index < particles.length; index++) {
      const point = particles[index];
      point.x = (point.x + point.vx + canvasWidth) % canvasWidth;
      point.y = (point.y + point.vy + canvasHeight) % canvasHeight;
      context.globalAlpha = 0.85;
      context.beginPath();
      context.arc(point.x, point.y, 1.8, 0, Math.PI * 2);
      context.fill();

      for (let next = index + 1; next < particles.length; next++) {
        const other = particles[next];
        const distance = Math.hypot(point.x - other.x, point.y - other.y);
        if (distance < 120) {
          context.globalAlpha = (1 - distance / 120) * 0.5;
          context.beginPath();
          context.moveTo(point.x, point.y);
          context.lineTo(other.x, other.y);
          context.stroke();
        }
      }
      const mouseDistance = Math.hypot(point.x - mouseX, point.y - mouseY);
      if (mouseDistance < 150) {
        context.globalAlpha = 1 - mouseDistance / 150;
        context.beginPath();
        context.moveTo(point.x, point.y);
        context.lineTo(mouseX, mouseY);
        context.stroke();
      }
    }
    context.globalAlpha = 1;
  }
  window.requestAnimationFrame(drawParticles);
}
window.requestAnimationFrame(drawParticles);

/* ================= contact form =================
   This is a front-end-only form. It opens the visitor's email app; it does not send mail from a server. */
$("#form").addEventListener("submit", event => {
  event.preventDefault();
  const name = $("#name").value.trim();
  const email = $("#email").value.trim();
  const message = $("#msg").value.trim();
  const validEmail = /^\S+@\S+\.\S+$/.test(email);
  const status = $("#status");

  if (!name || !message || !validEmail) {
    status.textContent = dict[lang].err;
    status.style.color = "#ff6b6b";
    return;
  }

  status.textContent = dict[lang].ok;
  status.style.color = "#2ecc71";
  const subject = encodeURIComponent(`Portfolio contact from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:hasheemalghanem@gmail.com?subject=${subject}&body=${body}`;
});

/* ================= live GitHub stats ================= */
(async function loadGitHubStats() {
  try {
    const response = await fetch(`https://api.github.com/users/${GH}`);
    if (!response.ok) throw new Error(`GitHub API returned ${response.status}`);
    const user = await response.json();
    $("#gh-repos").textContent = String(user.public_repos ?? "—");
    $("#gh-fol").textContent = String(user.followers ?? "—");
  } catch (error) {
    console.warn("GitHub API unavailable:", error);
    $("#gh-repos").textContent = "—";
    $("#gh-fol").textContent = "—";
  }
})();

/* ================= initialize ================= */
document.title = `${NAME} | Portfolio`;
$$('[data-name]').forEach(element => { element.textContent = NAME; });
$$('[data-first]').forEach(element => { element.textContent = NAME.trim().split(/\s+/)[0]; });
renderSkills();
setTheme(store.get("theme") === "light" ? "light" : "dark");
const savedAccent = Number(store.get("accent"));
setAccent(Number.isInteger(savedAccent) && savedAccent >= 0 && savedAccent < palettes.length ? savedAccent : 0);
setLang(lang);
showPhoto("casual");
typeRole();