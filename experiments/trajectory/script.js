// Verified public profiles. Private contact details are intentionally omitted.
const PROFILE = {
  email: '',
  github: 'https://github.com/muathmalsulami',
  linkedin: 'https://www.linkedin.com/in/muath-m-alsulami/',
  cv: ''
};

const translations = {
  en: {
    projectCapstone: '001 / CAPSTONE', projectCoop: '002 / CO-OP EXPERIENCE', projectPersonal: '003 / PERSONAL PROJECT', indexAbout: '01 / ABOUT', indexWork: '02 / WORK', indexJourney: '03 / JOURNEY', indexToolkit: '04 / TOOLKIT', indexContact: '05 / CONTACT', viewSource: 'View source ↗', navAbout: 'About', navWork: 'Work', navJourney: 'Journey', navContact: 'Contact', navCta: "Let's talk",
    heroName: 'Muath Alsulami', heroBadge: 'COMPUTER SCIENCE & AI GRADUATE',
    heroLine1: 'I turn complex ideas', heroLine2: 'into useful', heroLine3: 'software<span class="period">.</span>',
    heroLead: "I'm Muath — a Computer Science & AI graduate who enjoys building thoughtful experiences, integrating intelligent systems, and making technology work in the real world.",
    heroPrimary: 'Explore selected work', heroSecondary: 'More about me', metaBased: 'BASED IN', metaBasedValue: 'Saudi Arabia', metaFocus: 'FOCUS', metaFocusValue: 'Software · AI · Systems', scrollToExplore: 'SCROLL TO EXPLORE',
    aboutSide: 'THE PERSON BEHIND THE CODE', aboutKicker: "HELLO, I'M MUATH.", aboutHeading: 'Curiosity fuels me.<br><em>Purpose</em> guides the build.',
    aboutParagraph1: 'I graduated from Umm Al-Qura University with a B.Sc. in Computer Science & Artificial Intelligence. I like the space where clean software engineering meets AI that actually helps people.',
    aboutParagraph2: 'During my cooperative training at the National Center for Meteorology, I worked with monitoring and infrastructure tooling. In my graduation project, Numoo, I contributed to application development and AI feature integration.',
    aboutParagraph3: "I'm early in my career, serious about growing, and most interested in work that is useful, well crafted, and built with care.",
    factGraduation: 'UQU GRADUATE', factGpa: 'GPA · SECOND CLASS HONORS', factTraining: 'COOPERATIVE TRAINING', factQuote: 'Make it useful.<br>Then make it better.',
    workSide: "A FEW THINGS I'VE BUILT & LEARNED", workKicker: 'SELECTED WORK', workHeading: 'Work with <em>intention.</em>', workIntro: 'A small collection of real academic, training, and personal work. Each reflects a different part of how I think and build.',
    filterAll: 'All work', filterDev: 'Development', filterSystems: 'Systems',
    numooDescription: 'A team graduation project combining application development and AI functionality. My contribution focused on software implementation and integrating model functionality into the application—not training the models.',
    monitorTitle: 'Monitoring & Observability <span class="project-arrow" aria-hidden="true">↗</span>',
    monitorDescription: 'Hands-on infrastructure monitoring during my cooperative training at the National Center for Meteorology, working with containerized tooling, metrics, dashboards, and logs.',
    monitorVisualNote: 'ILLUSTRATIVE UI · NOT ACTUAL METRICS',
    portfolioTitle: 'This Portfolio <span class="project-arrow" aria-hidden="true">↗</span>', portfolioDescription: 'A lightweight, responsive portfolio built with HTML, CSS, and JavaScript. Designed to communicate clearly, feel human, and demonstrate a thoughtful front-end workflow.', viewDetails: 'Read project notes',
    journeySide: 'THE PATH SO FAR', journeyKicker: 'EXPERIENCE & EDUCATION', journeyHeading: 'Learning by <em>building.</em>', journeyIntro: 'An early-career foundation shaped by university projects, practical systems work, and continuous learning.',
    educationTitle: 'B.Sc. Computer Science & Artificial Intelligence', educationPlace: 'Umm Al-Qura University · Makkah', educationDescription: 'Graduated with a 3.54/4.00 GPA and Second Class Honors. Built a foundation across software, computing, and AI.',
    trainingTitle: 'IT Cooperative Trainee', trainingPlace: 'National Center for Meteorology · Jeddah', trainingDescription: 'Worked with Docker, Prometheus, Grafana, and Loki in infrastructure monitoring and technical reporting.', journeyNow: 'NOW', nowTitle: "Exploring what's next", nowPlace: 'Software development · Applied AI', nowDescription: 'Building practical projects, strengthening engineering skills, and seeking opportunities to contribute to meaningful products.',
    skillsSide: 'TOOLS I WORK WITH', skillsKicker: 'MY TOOLKIT', skillsHeading: 'Tools are the means.<br><em>Impact</em> is the goal.', skillsNote: "A practical mix of technologies I've used in coursework, personal work, and cooperative training.", skillProgramming: 'Programming & Front-end', skillBuild: 'Building & Collaboration', skillSystems: 'Systems & Observability',
    contactSide: 'NEXT CHAPTER STARTS HERE', contactKicker: 'HAVE AN IDEA OR OPPORTUNITY?', contactHeading: "Let's build something<br><em>worth using.</em>", contactText: "I'm interested in thoughtful software, applied AI, and conversations with people who care about solving real problems.", contactEmpty: 'Contact links can be added in script.js before publishing.', contactSignature: 'KEEP LEARNING. KEEP BUILDING.',
    footerCrafted: 'CRAFTED WITH INTENTION, NOT A TEMPLATE.', backTop: 'BACK TO TOP',
    dialogKicker: 'PROJECT NOTES', dialogContribution: 'My contribution / context', dialogLearning: 'What it taught me', dialogDone: 'Close notes',
    linkEmail: 'Email me', linkGithub: 'GitHub', linkLinkedin: 'LinkedIn', linkCv: 'View CV'
  },
  ar: {
    projectCapstone: '٠٠١ / مشروع تخرج', projectCoop: '٠٠٢ / تدريب تعاوني', projectPersonal: '٠٠٣ / مشروع شخصي', indexAbout: '٠١ / عني', indexWork: '٠٢ / أعمالي', indexJourney: '٠٣ / المسار', indexToolkit: '٠٤ / المهارات', indexContact: '٠٥ / تواصل', viewSource: 'عرض الشيفرة ↗', navAbout: 'عني', navWork: 'أعمالي', navJourney: 'رحلتي', navContact: 'تواصل', navCta: 'تواصل معي',
    heroName: 'معاذ السلمي', heroBadge: 'خريج علوم الحاسب والذكاء الاصطناعي',
    heroLine1: 'أحوّل الأفكار المعقدة', heroLine2: 'إلى حلول', heroLine3: 'تُستخدم<span class="period">.</span>',
    heroLead: 'أنا معاذ، خريج علوم الحاسب والذكاء الاصطناعي. أهتم ببناء تجارب تقنية مدروسة، ودمج الأنظمة الذكية، وتطوير برمجيات تقدم قيمة فعلية في الواقع.',
    heroPrimary: 'استكشف أعمالي', heroSecondary: 'اعرف المزيد عني', metaBased: 'الموقع', metaBasedValue: 'المملكة العربية السعودية', metaFocus: 'الاهتمامات', metaFocusValue: 'البرمجيات · الذكاء الاصطناعي · الأنظمة', scrollToExplore: 'مرّر لاكتشاف المزيد',
    aboutSide: 'خلف الأكواد هناك قصة', aboutKicker: 'أهلًا، أنا معاذ.', aboutHeading: 'الفضول يدفعني.<br>و<em>الهدف</em> يوجّه عملي.',
    aboutParagraph1: 'تخرجت في جامعة أم القرى بدرجة البكالوريوس في علوم الحاسب والذكاء الاصطناعي. يثير اهتمامي الجمع بين الهندسة البرمجية المتقنة والذكاء الاصطناعي الذي يساعد الناس فعلًا.',
    aboutParagraph2: 'خلال التدريب التعاوني في المركز الوطني للأرصاد، عملت على أدوات مراقبة الأنظمة والبنية التحتية. وفي مشروع التخرج «نمو»، شاركت في تطوير التطبيق ودمج وظائف الذكاء الاصطناعي.',
    aboutParagraph3: 'ما زلت في بداية مسيرتي المهنية، وأسعى للتطور باستمرار والمساهمة في بناء حلول مفيدة ومدروسة بعناية.',
    factGraduation: 'خريج جامعة أم القرى', factGpa: 'المعدل · مرتبة الشرف الثانية', factTraining: 'التدريب التعاوني', factQuote: 'اجعلها مفيدة.<br>ثم اجعلها أفضل.',
    workSide: 'نماذج مما أنجزته وتعلمته', workKicker: 'أعمال مختارة', workHeading: 'أعمال وراءها <em>هدف.</em>', workIntro: 'مجموعة صغيرة من الأعمال الدراسية والتدريبية والشخصية الحقيقية، يعكس كل منها جانبًا من طريقة تفكيري وعملي.',
    filterAll: 'جميع الأعمال', filterDev: 'التطوير', filterSystems: 'الأنظمة',
    numooDescription: 'مشروع تخرج جماعي يجمع بين تطوير التطبيق ووظائف الذكاء الاصطناعي. ركّز دوري على تنفيذ أجزاء برمجية ودمج وظائف النماذج داخل التطبيق، وليس تدريب النماذج بنفسي.',
    monitorTitle: 'المراقبة ورصد الأنظمة <span class="project-arrow" aria-hidden="true">↗</span>',
    monitorDescription: 'تجربة عملية في مراقبة البنية التحتية خلال تدريبي التعاوني في المركز الوطني للأرصاد، باستخدام أدوات الحاويات والقياسات ولوحات المراقبة والسجلات.',
    monitorVisualNote: 'تصميم توضيحي · ليس بيانات تشغيل حقيقية',
    portfolioTitle: 'موقعي الشخصي <span class="project-arrow" aria-hidden="true">↗</span>', portfolioDescription: 'موقع شخصي خفيف ومتجاوب باستخدام HTML وCSS وJavaScript، صُمم لتقديم المحتوى بوضوح وإظهار سير عمل مدروس في تطوير الواجهات.', viewDetails: 'اقرأ تفاصيل العمل',
    journeySide: 'المسار حتى الآن', journeyKicker: 'الخبرة والتعليم', journeyHeading: 'أتعلّم عبر <em>التطبيق.</em>', journeyIntro: 'بداية مهنية تشكلت من المشاريع الجامعية والخبرة العملية في الأنظمة والتعلّم المستمر.',
    educationTitle: 'بكالوريوس علوم الحاسب والذكاء الاصطناعي', educationPlace: 'جامعة أم القرى · مكة المكرمة', educationDescription: 'تخرجت بمعدل 3.54 من 4 ومرتبة الشرف الثانية، واكتسبت أساسًا في تطوير البرمجيات والحوسبة والذكاء الاصطناعي.',
    trainingTitle: 'متدرب تعاوني في تقنية المعلومات', trainingPlace: 'المركز الوطني للأرصاد · جدة', trainingDescription: 'عملت باستخدام Docker وPrometheus وGrafana وLoki في مراقبة البنية التحتية وإعداد التقارير التقنية.', journeyNow: 'حاليًا', nowTitle: 'أستكشف خطوتي القادمة', nowPlace: 'تطوير البرمجيات · الذكاء الاصطناعي التطبيقي', nowDescription: 'أبني مشاريع عملية، وأطوّر مهاراتي الهندسية، وأبحث عن فرص للمساهمة في منتجات ذات أثر حقيقي.',
    skillsSide: 'التقنيات التي أستخدمها', skillsKicker: 'أدواتي التقنية', skillsHeading: 'الأدوات وسيلة.<br><em>والأثر</em> هو الغاية.', skillsNote: 'مزيج عملي من التقنيات التي استخدمتها في الدراسة ومشاريعي الشخصية وتدريبي التعاوني.', skillProgramming: 'البرمجة والواجهات', skillBuild: 'التطوير والتعاون', skillSystems: 'الأنظمة والمراقبة',
    contactSide: 'من هنا تبدأ الخطوة القادمة', contactKicker: 'عندك فكرة أو فرصة؟', contactHeading: 'لنبنِ شيئًا<br><em>يستحق الاستخدام.</em>', contactText: 'أهتم بالبرمجيات المدروسة، والذكاء الاصطناعي التطبيقي، والنقاش مع من يبحثون عن حلول لمشكلات حقيقية.', contactEmpty: 'أضف روابط التواصل في ملف script.js قبل نشر الموقع.', contactSignature: 'واصل التعلّم. واصل البناء.',
    footerCrafted: 'صُنع بعناية، لا بمجرد قالب جاهز.', backTop: 'العودة للأعلى',
    dialogKicker: 'تفاصيل العمل', dialogContribution: 'مساهمتي / سياق العمل', dialogLearning: 'ما تعلمته', dialogDone: 'إغلاق التفاصيل',
    linkEmail: 'البريد الإلكتروني', linkGithub: 'جيت هب', linkLinkedin: 'لينكدإن', linkCv: 'السيرة الذاتية'
  }
};

const projectNotes = {
  numoo: {
    en: {
      title: 'Numoo — Graduation Project',
      description: 'A collaborative university capstone combining application development and intelligent functionality.',
      contribution: 'I worked on application development and Flask-based integration, connecting components and model-powered functionality. I was not responsible for training the AI models.',
      learning: 'How to integrate work across a team, design around application needs, and make AI functionality usable through a software interface.'
    },
    ar: {
      title: 'نمو — مشروع التخرج',
      description: 'مشروع جامعي جماعي يجمع تطوير التطبيقات مع وظائف ذكية.',
      contribution: 'شاركت في تطوير التطبيق والدمج باستخدام Flask، وربط المكونات والوظائف المعتمدة على النماذج. لم أكن المسؤول عن تدريب نماذج الذكاء الاصطناعي.',
      learning: 'تنسيق العمل بين أعضاء الفريق وربط المكونات وتحويل الوظائف الذكية إلى تجربة يمكن استخدامها.'
    }
  },
  monitoring: {
    en: {
      title: 'Monitoring & Observability',
      description: 'Technical work completed during IT cooperative training at the National Center for Meteorology in Jeddah.',
      contribution: 'I worked with Docker/Compose, Prometheus and Node Exporter, Grafana dashboards, Loki logs, and monitoring of CPU, memory, disk, and network signals. I also contributed to reporting.',
      learning: 'Why observability matters for reliable systems, how infrastructure tools fit together, and how to communicate technical findings clearly. The graph on this site is illustrative, not actual operational data.'
    },
    ar: {
      title: 'المراقبة ورصد الأنظمة',
      description: 'أعمال تقنية خلال التدريب التعاوني في قسم تقنية المعلومات بالمركز الوطني للأرصاد في جدة.',
      contribution: 'استخدمت Docker/Compose وPrometheus وNode Exporter ولوحات Grafana وسجلات Loki، ومراقبة المعالج والذاكرة والتخزين والشبكة، مع المساهمة في التقارير.',
      learning: 'أهمية وضوح حالة الأنظمة وربط أدوات المراقبة ببعضها وتقديم النتائج التقنية بطريقة مفهومة. الرسم في هذا الموقع توضيحي وليس بيانات تشغيل فعلية.'
    }
  },
  portfolio: {
    en: {
      title: 'Portfolio — Personal Web Project',
      description: 'A deliberately small, maintainable site written with core web technologies.',
      contribution: 'The page structure is semantic HTML, the visual system uses responsive CSS, and JavaScript handles language switching, filters, navigation, and project details. No framework is required.',
      learning: 'How typography, clarity, accessibility, and restrained motion can make a personal site feel more human and intentional.'
    },
    ar: {
      title: 'الموقع الشخصي — مشروع ويب',
      description: 'موقع خفيف وسهل التطوير باستخدام تقنيات الويب الأساسية.',
      contribution: 'يتكون من HTML منظّم وCSS متجاوب وJavaScript لتبديل اللغة والتصفية والتنقل وتفاصيل المشاريع، دون الحاجة إلى إطار عمل.',
      learning: 'كيف يمكن أن يجتمع الخط الواضح وسهولة الاستخدام وإمكانية الوصول والحركة المتوازنة في تجربة شخصية جذابة.'
    }
  }
};

let currentLang = 'en';
try {
  currentLang = localStorage.getItem('muath-language') === 'ar' ? 'ar' : 'en';
} catch (_) { /* The site also works with localStorage disabled. */ }

const htmlKeys = new Set([
  'heroLine3', 'aboutHeading', 'factQuote', 'workHeading',
  'monitorTitle', 'portfolioTitle', 'journeyHeading',
  'skillsHeading', 'contactHeading'
]);

const langSwitch = document.getElementById('lang-switch');
const dialogLanguage = document.getElementById('dialog-language');
const dialog = document.getElementById('project-dialog');
const contactActions = document.getElementById('contact-actions');
const contactEmpty = document.getElementById('contact-empty');

function renderContact() {
  const labels = translations[currentLang];
  const links = [
    { value: PROFILE.email.trim(), label: labels.linkEmail, href: PROFILE.email.trim() ? `mailto:${PROFILE.email.trim()}` : '' },
    { value: PROFILE.github.trim(), label: labels.linkGithub, href: PROFILE.github.trim() },
    { value: PROFILE.linkedin.trim(), label: labels.linkLinkedin, href: PROFILE.linkedin.trim() },
    { value: PROFILE.cv.trim(), label: labels.linkCv, href: PROFILE.cv.trim() }
  ];
  contactActions.replaceChildren();
  for (const link of links) {
    if (!link.value) continue;
    if (!link.href.startsWith('https://') && !link.href.startsWith('mailto:')) continue;
    const anchor = document.createElement('a');
    anchor.href = link.href;
    anchor.textContent = link.label + ' ↗';
    if (link.href.startsWith('https://')) {
      anchor.target = '_blank';
      anchor.rel = 'noopener noreferrer';
    }
    contactActions.append(anchor);
  }
  contactEmpty.hidden = contactActions.childElementCount > 0;
}

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.title = lang === 'ar' ? 'معاذ السلمي — ملف أعمالي' : 'Muath Alsulami — Software & AI Portfolio';
  document.querySelector('meta[name="description"]').content = lang === 'ar'
    ? 'معاذ السلمي، خريج علوم الحاسب والذكاء الاصطناعي. مشاريع برمجية وتجارب في تطوير التطبيقات والأنظمة.'
    : 'Muath Alsulami — Computer Science and Artificial Intelligence graduate building practical software and intelligent experiences.';
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.dataset.i18n;
    if (!(key in translations[lang])) return;
    if (htmlKeys.has(key)) element.innerHTML = translations[lang][key];
    else element.textContent = translations[lang][key];
  });
  [langSwitch, dialogLanguage].forEach(button => {
    button.innerHTML = (lang === 'en' ? 'عربي' : 'EN') + ' <span aria-hidden="true">↗</span>';
    button.setAttribute('aria-label', lang === 'en' ? 'عربي — switch language to Arabic' : 'EN — switch language to English');
  });
  renderContact();
  document.querySelector('.signature-button').setAttribute('aria-label', lang === 'ar' ? 'استكشف حركة الهوية' : 'Explore the animated identity');
  updateLabels();
  if (dialog.open && activeProject) populateProject(activeProject);
  try { localStorage.setItem('muath-language', lang); } catch (_) {}
}

[langSwitch, dialogLanguage].forEach(button => button.addEventListener('click', () => {
  setLanguage(currentLang === 'en' ? 'ar' : 'en');
  button.classList.remove('language-changed');
  void button.offsetWidth;
  button.classList.add('language-changed');
}));


document.getElementById('year').textContent = String(new Date().getFullYear());

const header = document.querySelector('.site-header');
const progress = document.querySelector('.reading-progress');
let scrollScheduled = false;
function updateScroll() {
  const total = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${total > 0 ? Math.min(100, Math.max(0, window.scrollY / total * 100)) : 0}%`;
  header.classList.toggle('is-scrolled', window.scrollY > 25);
  scrollScheduled = false;
}
window.addEventListener('scroll', () => {
  if (scrollScheduled) return;
  scrollScheduled = true;
  requestAnimationFrame(updateScroll);
}, { passive: true });
window.addEventListener('resize', updateScroll);
updateScroll();

const menuButton = document.getElementById('menu-button');
const siteNav = document.getElementById('site-nav');
function updateLabels() {
  const ar = currentLang === 'ar';
  document.querySelector('.skip-link').textContent = ar ? 'انتقل إلى المحتوى' : 'Skip to content';
  document.querySelector('.brand').setAttribute('aria-label', ar ? 'M. MUATH / ALSULAMI — العودة للرئيسية' : 'M. MUATH / ALSULAMI — back to home');
  document.querySelector('.footer-inner a').setAttribute('aria-label', ar ? 'العودة للأعلى' : 'Back to top');
  document.getElementById('contact-actions').setAttribute('aria-label', ar ? 'وسائل التواصل' : 'Contact methods');
  document.querySelector('.site-nav').setAttribute('aria-label', ar ? 'التنقل الرئيسي' : 'Main navigation');
  document.querySelector('.filters').setAttribute('aria-label', ar ? 'تصفية الأعمال' : 'Filter projects');
  document.getElementById('dialog-close').setAttribute('aria-label', ar ? 'إغلاق التفاصيل' : 'Close project details');
  const open = document.body.classList.contains('menu-open');
  document.getElementById('menu-button').setAttribute('aria-label', ar ? (open ? 'إغلاق القائمة' : 'فتح القائمة') : (open ? 'Close menu' : 'Open menu'));
}
function setMenu(open) {
  document.body.classList.toggle('menu-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', currentLang === 'ar' ? (open ? 'إغلاق القائمة' : 'فتح القائمة') : (open ? 'Close menu' : 'Open menu'));
}
menuButton.addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')));
siteNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => { if (event.key === 'Escape') setMenu(false); });
window.addEventListener('resize', () => { if (window.innerWidth > 800) setMenu(false); });

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: .08, rootMargin: '0px 0px -25px 0px' });
  document.querySelectorAll('.reveal').forEach((node, index) => {
    if (node.closest('.hero')) return;
    node.style.setProperty('--reveal-delay', `${(index % 3) * 70}ms`);
    revealObserver.observe(node);
  });

  const navLinks = [...siteNav.querySelectorAll('a')];
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => link.classList.toggle('is-active', link.hash === '#' + entry.target.id));
    });
  }, { rootMargin: '-28% 0px -56% 0px' });
  document.querySelectorAll('main .section-anchor').forEach(section => sectionObserver.observe(section));
} else {
  document.querySelectorAll('.reveal').forEach(node => node.classList.add('is-visible'));
}

const filters = document.querySelectorAll('.filter');
filters.forEach(button => button.addEventListener('click', () => {
  const filter = button.dataset.filter;
  filters.forEach(item => {
    const selected = item === button;
    item.classList.toggle('is-active', selected);
    item.setAttribute('aria-pressed', String(selected));
  });
  document.querySelectorAll('.project-card').forEach(card => {
    card.hidden = filter !== 'all' && card.dataset.category !== filter;
  });
}));

function closeDialog() {
  dialog.close();
}
let activeProject = null;
function populateProject(key) {
  const notes = projectNotes[key] && projectNotes[key][currentLang];
  if (!notes) return;
  document.getElementById('dialog-title').textContent = notes.title;
  document.getElementById('dialog-description').textContent = notes.description;
  document.getElementById('dialog-contribution').textContent = notes.contribution;
  document.getElementById('dialog-learning').textContent = notes.learning;
}
function openProject(key) {
  activeProject = key;
  populateProject(key);
  if (typeof dialog.showModal === 'function') dialog.showModal();
}
document.querySelectorAll('[data-open-project]').forEach(button => {
  button.addEventListener('click', () => openProject(button.dataset.openProject));
});
document.getElementById('dialog-close').addEventListener('click', closeDialog);
document.getElementById('dialog-done').addEventListener('click', closeDialog);
dialog.addEventListener('click', event => { if (event.target === dialog) closeDialog(); });

setLanguage(currentLang);


// A single demand-driven loop resolves cursor influence and the discovery sequence.
const identity = document.querySelector('.signature-button');
const identityArea = document.querySelector('.signature-art');
const threads = [...identity.querySelectorAll('.thread')];
const identityMotion = matchMedia('(prefers-reduced-motion: reduce)');
const identityKind = 'flow';
let frame = 0, bounds = null, lastTime = 0, lastX = 0, lastY = 0, speed = 0, discoveryStart = 0;
let arrivalStart = identityMotion.matches ? 0 : performance.now();
let targetX = 0, targetY = 0, targetNear = 0, x = 0, y = 0, near = 0, impulse = 0;
identity.disabled = identityMotion.matches;
const clamp = (n, a, b) => Math.min(b, Math.max(a, n));
function renderThreads(phase = 0, arrival = 0) {
  // An M made of five connected strokes; proximity bends the shared joints.
  const endpoints = [[55,250,95,75],[95,75,160,190],[160,190,225,75],[225,75,265,250],[55,250,265,250]];
  const joints = (px,py) => {
    const influence = Math.max(0, 1 - Math.hypot(px - (160 + x*110), py - (160 + y*110))/180) * near;
    const opening = phase * (px < 160 ? -13 : px > 160 ? 13 : 0);
    return [px + x*14*influence + opening + (px-160)*arrival*.18, py + y*14*influence - phase*7 + (py-160)*arrival*.12];
  };
  threads.forEach((line,i) => {
    const [a,b,c,d] = endpoints[i], p=joints(a,b), q=joints(c,d);
    const bend=(i===4 ? -1 : 1)*(impulse*5 + phase*12);
    const mx=(p[0]+q[0])/2 + bend, my=(p[1]+q[1])/2 - bend;
    line.setAttribute('d',`M ${p[0]} ${p[1]} Q ${mx} ${my} ${q[0]} ${q[1]}`);
  });
}
function tick(time) {
  frame = 0;
  if (document.hidden || identityMotion.matches) return;
  x += (targetX-x)*.13; y += (targetY-y)*.13; near += (targetNear-near)*.13; impulse *= .88;
  let phase = 0;
  if (discoveryStart) {
    const elapsed = time - discoveryStart;
    phase = elapsed < 650 ? (1 - Math.cos(Math.PI*elapsed/650))/2 : elapsed < 1050 ? 1 : elapsed < 1800 ? (1+Math.cos(Math.PI*(elapsed-1050)/750))/2 : 0;
    if (elapsed >= 1800) discoveryStart = 0;
  }
  let arrival = 0;
  if (arrivalStart) { const progress = clamp((time-arrivalStart)/1750,0,1); arrival = Math.pow(1-progress, 3); if (progress === 1) arrivalStart = 0; }
  renderThreads(phase, arrival);
  if (arrivalStart || discoveryStart || Math.abs(targetX-x)>.003 || Math.abs(targetY-y)>.003 || Math.abs(targetNear-near)>.003 || Math.abs(impulse)>.003) frame=requestAnimationFrame(tick);
}
function wake() { if (!frame && !identityMotion.matches && !document.hidden) frame=requestAnimationFrame(tick); }
function resetIdentity() { bounds=null;targetX=targetY=targetNear=0;speed=0;wake(); }
identityArea.addEventListener('pointerenter', event => { if (!identityMotion.matches && event.pointerType==='mouse') {bounds=identityArea.getBoundingClientRect();lastTime=0;} });
identityArea.addEventListener('pointermove', event => {
  if (!bounds || identityMotion.matches || event.pointerType !== 'mouse') return;
  const nx=clamp((event.clientX-bounds.left)/bounds.width*2-1,-1,1), ny=clamp((event.clientY-bounds.top)/bounds.height*2-1,-1,1);
  const distance=Math.hypot(nx,ny), now=event.timeStamp;
  targetNear=clamp((1.15-distance)/.8,0,1); targetX=nx;targetY=ny;
  if(lastTime){speed=clamp(Math.hypot(event.clientX-lastX,event.clientY-lastY)/Math.max(8,now-lastTime),0,2); impulse=Math.max(impulse,speed*.35*targetNear);}
  lastTime=now;lastX=event.clientX;lastY=event.clientY;wake();
});
identityArea.addEventListener('pointerleave',resetIdentity);
identity.addEventListener('click',()=>{if(identityMotion.matches)return;discoveryStart=performance.now();wake();});
identityMotion.addEventListener('change',()=>{cancelAnimationFrame(frame);frame=0;bounds=null;targetX=targetY=targetNear=x=y=near=impulse=discoveryStart=arrivalStart=0;identity.disabled=identityMotion.matches;renderThreads();});
window.addEventListener('resize',resetIdentity);
document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(frame);frame=0;bounds=null;targetX=targetY=targetNear=x=y=near=impulse=discoveryStart=arrivalStart=0;renderThreads();}});

if (arrivalStart) { renderThreads(0, 1); wake(); }
