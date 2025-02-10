'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.getAttribute('data-translate') === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}


function openWhatsApp() {
  // Get the input values
  const fullName = document.querySelector('[name="fullname"]').value;
  const email = document.querySelector('[name="email"]').value;
  const subject = document.querySelector('[name="subject"]').value;
  const message = document.querySelector('[name="message"]').value;

  // Format the WhatsApp message
  const formattedMessage = `Olá! Me chamo ${fullName}!\nMeu email é ${email}\n\n${subject}\n\n${message}`;

  // Create the WhatsApp URL with the pre-filled message
  const encodedMessage = encodeURIComponent(formattedMessage);
  const phoneNumber = "+5531998387711"; // Hardcoded phone number
  const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

  // Open the WhatsApp URL in a new window or tab
  window.open(whatsappURL, '_blank');
}


function sendEmail() {
  // Get the input values
  const fullName = document.querySelector('[name="fullname"]').value;
  const email = document.querySelector('[name="email"]').value;
  const subject = document.querySelector('[name="subject"]').value;
  const message = document.querySelector('[name="message"]').value;

  // Construct the mailto link with the form data
  const body = encodeURIComponent(`Hello! My name is ${fullName}.\nMy email is ${email}.\n\n${message}`);
  const mailtoLink = `mailto:pdr.maia.d@gmail.com?subject=${subject}&body=${body}`;

  // Open the user's default email client with the mailto link
  window.location.href = mailtoLink;
}

// Example of triggering translation on language change
const languageButtons = document.querySelectorAll('.translate-button');
languageButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const selectedLanguage = event.currentTarget.getAttribute('data-language');
    translateTo(selectedLanguage);
  });
});

function translateTo(language) {
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach((element) => {
    const key = element.getAttribute('data-translate');
    element.textContent = translations[language][key];
  });
}

const translations = {
  en: {
    title: "Software Engineer",
    showContacts: "Show Contacts",
    phone: "Phone",
    birthday: "Birthday",
    birthdayDate: "January 21, 1999",
    location: "Location",
    aboutMe: "About Me",
    aboutText1: "I am a passionate software developer who thrives on solving complex problems and crafting efficient solutions. With strong communication skills, I excel in collaborative team environments. My primary focus is backend development, and I am particularly enthusiastic about distributed systems.",
    aboutText2: "Throughout my career, I have worked across diverse domains and technologies, ranging from developing intricate APIs to building web frontend applications. I have also gained hands-on experience in DevOps and on-premise application deployment. Additionally, I have had the opportunity to take on roles such as technical leadership and product ownership, where I leveraged my expertise while continuously honing my skills. I am committed to constant improvement, whether by mastering new technologies or exploring innovative methods to boost efficiency. ",
    aboutText3: "With three years of industry experience, I have been responsible for proposing and implementing digital solutions, developing APIs from scratch, creating new features, and maintaining legacy systems. I enjoy collaborating with fellow developers, learning from seasoned professionals, and, when possible, mentoring newcomers. I am always eager to embrace new technologies and tackle challenging problems head-on.",
    whatDoing: "My Skills",
    about: "About",
    resume: "Resume",
    portfolio: "Portfolio",
    contact: "Contact",
    backendText: "API development of complex solutions.",
    frontendText: "Development of web applications.",
    systemIntegrationTitle: "System Integration",
    systemIntegrationText: "Integration of self developed and external services." ,
    devopsText: "Management of sistems trhough  computing infrasruccture.",
    relationshipText: "Great relationship and comunication with clients and coleges.",
    relationshipTitle: "Relationship",
    clients: "Clients",
    experience: "Experience",
    bwtechRole: "Software Developer",
    bwtechText1: "Fullstack developer working on multiple products. Key responsibilities included:",
    bwtechText2: "Developing APIs using C# and Python;",
    bwtechText3: "Building and maintaining web applications using React;",
    bwtechText4: "Managing system integration and on-premise applications;",
    bwtechText5: "Maintaining and optimizing CI/CD pipelines;",
    bwtechText6: "Building and managing databases;",
    bwtechText7: "Developing systems for monitoring service performance.",
    commitJrRole1: "Software Developer",
    commitJrText1: "Fullstack developer responsible for:",
    commitJrText2: "Developing applications using React and Node.js;",
    commitJrRole2: "Leadership Roles:",
    commitJrText3: "Squad Leader and Product Owner;",
    commitJrText4: "Created technical documentation and led development teams using agile methodologies.",
    commitJrRole3: "Sales Consulting Analyst:",
    commitJrText5: "Generated leads and guided customers through their journey;",
    commitJrText6: "Analyzed customer needs and recommended suitable products/services.",
    cemighRole: "Internship in Electrical Energy Distribution",
    cemigText1: "Worked within a team responsible for:",
    cemigText2: "Studying electrical energy distribution and developing technical standards.",
    cemigText3: "Preparing technical reports and assisting in research and development activities;",
    cemigText4: "Providing technical support to other departments;",
    education: "Education",
    educationText1: "Bachelor of Computer Engineering",
    educationText2: "Electroeletronics Technician",
    mySkills: "My Skills",
    languages: "Languages",
    frameworks: "Frameworks and Development Tools",
    others: "Others",
    agileMethodologies: "Agile Methodologies",
    communication: "communication",
    personalProjects:"Personal projects" ,
    contactForm: "Contact Form",
    sendMessage: "Send Message",
  },
  pt: {
    title: "Engenheiro de Software",
    showContacts: "Mostrar Contatos",
    phone: "Telefone",
    birthday: "Aniversário",
    birthdayDate: "21 de janeiro de 1999",
    location: "Localização",
    aboutMe: "Sobre Mim",
    aboutText1: "Sou um desenvolvedor de software apaixonado que prospera ao resolver problemas complexos e criar soluções eficientes. Com fortes habilidades de comunicação, me destaco em ambientes de equipe colaborativos. Meu foco principal é o desenvolvimento de backend, e sou particularmente entusiasmado com sistemas distribuídos.",
    aboutText2: "Ao longo da minha carreira, trabalhei em diversos domínios e tecnologias, desde o desenvolvimento de APIs complexas até a construção de aplicações web frontend. Também adquiri experiência prática em DevOps e implantação de aplicações on-premise. Além disso, tive a oportunidade de assumir funções como liderança técnica e propriedade de produto, onde utilizei minha expertise enquanto aprimorava minhas habilidades. Estou comprometido com a melhoria constante, seja dominando novas tecnologias ou explorando métodos inovadores para aumentar a eficiência.",
    aboutText3: "Com três anos de experiência na indústria, fui responsável por propor e implementar soluções digitais, desenvolver APIs do zero, criar novas funcionalidades e manter sistemas legados. Gosto de colaborar com outros desenvolvedores, aprender com profissionais experientes e ,sempre que possível, ajudar iniciantes. Estou sempre ansioso para adotar novas tecnologias e enfrentar problemas desafiadores de frente.",
    whatDoing: "Minhas Habilidades",
    about: "Sobre",
    resume: "Currículo",
    portfolio: "Portfólio",
    contact: "Contato",
    backendText: "Desenvolvimento de APIs para soluções complexas.",
    frontendText: "Desenvolvimento de aplicações web.",
    systemIntegrationTitle: "Integração de Sistemas",
    systemIntegrationText: "Integração de serviços desenvolvidos internamente e externos.",
    devopsText: "Gerenciamento de sistemas através de infraestrutura de computação.",
    relationshipText: "Ótimo relacionamento e comunicação com clientes e colegas.",
    relationshipTitle: "Relacionamento",
    clients: "Clientes",
    experience: "Experiência",
    bwtechRole: "Desenvolvedor de Software",
    bwtechText1: "Desenvolvedor Fullstack trabalhando em múltiplos produtos. Principais responsabilidades:",
    bwtechText2: "Desenvolvimento de APIs usando C# e Python;",
    bwtechText3: "Construção e manutenção de aplicações web usando React;",
    bwtechText4: "Gerenciamento de integração de sistemas e aplicações on-premise;",
    bwtechText5: "Manutenção e otimização de pipelines de CI/CD;",
    bwtechText6: "Construção e gerenciamento de bancos de dados;",
    bwtechText7: "Desenvolvimento de sistemas para monitoramento de desempenho de serviços.",
    commitJrRole1: "Desenvolvedor de Software",
    commitJrText1: "Desenvolvedor Fullstack responsável por:",
    commitJrText2: "Desenvolvimento de aplicações usando React e Node.js;",
    commitJrRole2: "Funções de Liderança:",
    commitJrText3: "Líder de Squad e Product Owner;",
    commitJrText4: "Criação de documentação técnica e liderança de equipes de desenvolvimento usando metodologias ágeis.",
    commitJrRole3: "Analista de Consultoria de Vendas:",
    commitJrText5: "Geração de leads e orientação de clientes em sua jornada;",
    commitJrText6: "Análise das necessidades dos clientes e recomendação de produtos/serviços adequados.",
    cemighRole: "Estágio em Distribuição de Energia Elétrica",
    cemigText1: "Trabalhei em uma equipe responsável por:",
    cemigText2: "Estudar a distribuição de energia elétrica e desenvolver padrões técnicos.",
    cemigText3: "Elaborar relatórios técnicos e auxiliar em atividades de pesquisa e desenvolvimento.",
    cemigText4: "Prestar suporte técnico a outros departamentos.",
    education: "Formação",
    educationText1: "Bacharel em Engenharia de Computação",
    educationText2: "Técnico em Eletroeletrônica",
    mySkills: "Minhas Habilidades",
    languages: "Linguagens",
    frameworks: "Frameworks e Ferramentas de Desenvolvimento",
    others: "Outros",
    communication: "Comunicação",
    agileMethodologies: "Metodologias Ágeis",
    personalProjects: "Projetos Pessoais",
    contactForm: "Formulário de Contato",
    sendMessage: "Enviar Mensagem"
  }
}