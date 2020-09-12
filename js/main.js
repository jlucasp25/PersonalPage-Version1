"use strict";

const ACADEMIC_PROJECTS = [
    {
        'name':'Construction Costs Form (INTERNSHIP)',
        'description':'A web application for insertion of real estate construction expenses for further integration on a data warehouse.',
        'languages':['python','django','bootstrap','jquery']
    },
    {
        'name':'DCEMS Web Interface',
        'description':'A Web application to manage server states and energy management.',
        'languages':['dart']
    },
    {
        'name':'IoT Proof-of-concept Android App',
        'description':'A proof-of-concept for an Android app capable of controlling a basic IoT system using the MQTT protocol.',
        'languages':['dart','flutter']
    },
    {
        'name':'Intermediate Compiler for RUST',
        'description':'A (semi) compiler for a subset of the RUST language. Outputs only intermediate code.',
        'languages':['c']
    },
    {
        'name':'Language Interpreter and AST Generator for RUST',
        'description':'Interprets a subset of the RUST language and generates an AST.',
        'languages':['c']
    },
    {
        'name':'Graphical Interface for a "Rides Sharing" app',
        'description':'A graphical interface made using GWT for a "rides sharing" application that uses the Google Maps API.',
        'languages':['java','gwt']
    },
    {
        'name':'"Rides Sharing" application',
        'description':'An application to simulate a "rides sharing" service. Includes a module of JUnit tests.',
        'languages':['java']
    },
    {
        'name':'Remote server for a Connect4 game',
        'description':'A server to allow remote play using a web-based Connect4 game.',
        'languages':['nodejs']
    },
    {
        'name':'Web-based Connect4 game',
        'description':'A web-based Connect4 game made using JavaScript.',
        'languages':['javascript']
    },
    {
        'name':'"Complaints Portal" Interface Prototype',
        'description':'A prototype for a "complaints portal" web interface.',
        'languages':['html','css']
    },
    {
        'name':'Connect4 Bot',
        'description':'A bot that plays a Connect4 game using adversarial search. Uses the Minimax and Alpha-Beta pruning algorithms.',
        'languages':['c++']
    },
    {
        'name':'15 Puzzle Solver',
        'description':'A bot that solves a 15-puzzle using heuristic search. Uses (B/L)DFS, BFS, A* and greedy algorithms.',
        'languages':['c++']
    },
    {
        'name':'Parser for Prefix Arithmetics',
        'description':'A parser to calculate prefix arithmetics expressions.',
        'languages':['python']
    },
    {
        'name':'Fibonacci & "BigNumber" calculator',
        'description':'A calculator for big numbers that can\'t be represented using standard integers. Also computes the Fibonacci sequence.',
        'languages':['c']
    },
    {
        'name':'Supermarket Manager',
        'description':'A stocks and purchases manager for a supermarket.',
        'languages':['c']
    },
];

const PERSONAL_PROJECTS = [
    {
        'name':'Grupo Escolas de Condução Oliveira',
        'description':null,
        'languages':null
    },
    {
        'name':'WebApp for managing multiple Driving Schools',
        'description':'A web application designed to manage driving schools. Allows printing using thermal printers and PDF output.',
        'languages':['python','django','bootstrap','jquery']
    },
    {
        'name':'MEDI-MAIA - Serviços Médicos',
        'description':null,
        'languages':null
    },
    {
        'name':'Applet for GDPR Compliance Purposes',
        'description':'A small applet with a graphical interface that generates a GDPR consent document with the given name.',
        'languages':['python']
    },
    {
        'name':'FOCA Automotive',
        'description':null,
        'languages':null
    },
    {
        'name':'Android App for Car Wash Bookings',
        'description':'An Android app for customers to book car washes and check its state.\nA server-side application was also developed to handle the app\'s requests.',
        'languages':['dart','flutter','nodejs']
    },
    {
        'name':'WebApp for Booking and Customer Management',
        'description':'A web portal that allows the staff to control and view car wash bookings.',
        'languages':['php','bootstrap']
    },
    {
        'name':'WebApp for Car Wash Bookings',
        'description':'A web-based app for customer to book car washes and check its state.',
        'languages':['php','bootstrap']
    },
    {
        'name':'FarCar Automotive',
        'description':null,
        'languages':null
    },
    {
        'name':'Mobile-oriented WebPage',
        'description':'Alternative version of the website made just for mobile devices made with a more responsive design.',
        'languages':['php','bootstrap']
    },
    {
        'name':'Web-App for Vehicle Management',
        'description':'A web-app that allows the staff to manage the vehicles displayed on the website. Allows insertion, edition and removal of vehicles.',
        'languages':['php','bootstrap']
    },
    {
        'name':'Dynamic Website for Stock Display',
        'description':'A dynamic website for display of the current vehicles in stock.',
        'languages':['php','bootstrap']
    },
];

const LANGUAGES_IMGS = new Map(
    [
        ['python','img/python.png'],
        ['django','img/django.png'],
        ['bootstrap','img/bootstrap4.png'],
        ['dart','img/dart.png'],
        ['flutter','img/flutter.svg'],
        ['jquery','img/jq.png'],
        ['c','img/c.webp'],
        ['c++','img/cpp.png'],
        ['css','img/css3.png'],
        ['gwt','img/gwt.svg'],
        ['html','img/html5.webp'],
        ['java', 'img/java.png'],
        ['javascript','img/javascript.png'],
        ['nodejs','img/nodejs.png'],
        ['php','img/php.png']
    ]
);

class Project {

    constructor(name, description, languages) {
        this.name = name;
        this.description = description;
        this.languages = languages;
    }

    static fromDict(project_dict) {
        return new Project(project_dict['name'],project_dict['description'],project_dict['languages']);
    }

    toDOMNode() {
        let wrapperButton = document.createElement('button');
        wrapperButton.classList.add('list-group-item');
        wrapperButton.classList.add('list-group-item-action');
        wrapperButton.classList.add('custom-button-wrapper');
        let row = document.createElement('div');
        row.classList.add('project-row');
        row.classList.add('p-2')
        let projectName = document.createElement('span');
        projectName.classList.add('text-muted');
        projectName.innerText = this.name;
        let projectDescription = document.createElement('span');
        projectDescription.innerText = this.description;
        let projectLanguages = document.createElement('div');
        if (this.languages == null && this.description == null) {
            wrapperButton.classList.add('override-grey');
        }
        else {
            for (let lang of this.languages) {
                if (LANGUAGES_IMGS.has(lang)) {
                    let lang_icon = document.createElement('img');
                    lang_icon.classList.add('language-icon');
                    lang_icon.classList.add('mr-2');
                    lang_icon.src = LANGUAGES_IMGS.get(lang);
                    projectLanguages.appendChild(lang_icon);
                }
            }
        }
        appendChildren(row,[projectName,projectDescription,projectLanguages]);
        wrapperButton.appendChild(row);
        return wrapperButton;
    }

}

class ProjectListing {

    constructor(projInstances) {
        this.projectInstances = projInstances;
    }

    static fromArray(projects_arr) {
        let projectInstances = [];
        for (let project of projects_arr) {
            projectInstances.push(Project.fromDict(project));
        }
        return new ProjectListing(projectInstances);
    }

    toDOMNode() {
        let wellContainer = document.createElement('div');
        wellContainer.classList.add('well');
        wellContainer.classList.add('list-group');
        wellContainer.classList.add('shadow');
        wellContainer.classList.add('main-border-radius');
        wellContainer.classList.add('project-container');
        wellContainer.id = 'academic-well';
        wellContainer.setAttribute('data-simplebar','');
        for (let project of this.projectInstances) {
            wellContainer.appendChild(project.toDOMNode());
        }
        return wellContainer;
    }

}

class PersonalContainer {

    constructor() {
        this.bodyNode = document.querySelector('#page-body');
        this.bodyNode.classList.add('mt-2');
        this.aboutPage = this.buildAboutPage();
        this.curriculumPage = this.buildCurriculumPage();
        this.academicProjectsPage = this.buildAcademicProjectsPage();
        this.personalProjectsPage = this.buildPersonalProjectsPage();
        this.contactsPage = this.buildContactsPage();
    }

    buildContainer() {
        let mainContainer = document.createElement('div');
        mainContainer.classList.add('main-container');
        mainContainer.classList.add('p-4');
        return mainContainer;
    }

    buildAboutPage() {
        let container = this.buildContainer();
        let header = document.createElement('h1');
        header.classList.add('font-weight-light');
        header.innerText = 'About me';
        let hr = document.createElement('hr');
        let content = document.createElement('p');
        content.classList.add('lead');
        content.innerHTML = 'Currently I\'m taking a master\'s degree in Network and Computer Systems Engineering at the Faculty of Sciences @ University of Porto.<br><br>' +
            'I have some experience developing applications and programs for various sorts of business, and have familiarity with an array of programming languages, frameworks and libraries.<br><br>' +
            'Some of my current focus are on improving my front-end and software architecture skills.<br><br>' +
            'I always strive to make the most of the applications I develop, focusing on a balance between acessibility and pleasing UI while delivering the functionality required.';
        appendChildren(container,[header,hr,content]);
        return container;
    }

    buildCurriculumPage() {
        let container = this.buildContainer();
        container.classList.add('curriculum-container');
        let header = document.createElement('h1');
        header.classList.add('font-weight-light');
        header.innerText = 'Curriculum Vitae';
        let hr = document.createElement('hr');
        let content = document.createElement('p');
        content.classList.add('lead');
        content.innerHTML = 'Here you can view or <a target="_blank" rel="noopener noreferrer" class="pdf-link" href="pdf/CV_ING_august_2020.pdf">download</a> my Curriculum Vitae.';
        let pdfViewer = document.createElement('embed');
        pdfViewer.src = 'pdf/CV_ING_august_2020.pdf';
        pdfViewer.setAttribute('type','application/pdf');
        pdfViewer.classList.add('pdf-container');
        appendChildren(container,[header,hr,content,pdfViewer,this.buildPDFWarning()]);
        return container;
    }

    buildPDFWarning() {
        let container = document.createElement("div");
        container.classList.add('mobile-pdf-warn');
        let content = document.createElement('p');
        content.classList.add('lead');
        content.innerHTML = 'Sadly looks like you are using a mobile browser. In order to view the pdf, you must download it first.';
        container.appendChild(content);
        return container;
    }

    buildAcademicProjectsPage() {
        let container = this.buildContainer();
        let header = document.createElement('h1');
        header.classList.add('font-weight-light');
        header.innerText = 'Academic Projects';
        let hr = document.createElement('hr');
        let content = document.createElement('p');
        content.classList.add('lead');
        content.innerHTML = 'Some of my projects made during my master\'s degree classes.';
        let projectListing = ProjectListing.fromArray(ACADEMIC_PROJECTS);
        appendChildren(container,[header,hr,content,projectListing.toDOMNode()]);
        return container;
    }

    buildPersonalProjectsPage() {
        let container = this.buildContainer();
        let header = document.createElement('h1');
        header.classList.add('font-weight-light');
        header.innerText = 'Personal Projects';
        let hr = document.createElement('hr');
        let content = document.createElement('p');
        content.classList.add('lead');
        content.innerHTML = 'Some of my projects outside of classes';
        let projectListing = ProjectListing.fromArray(PERSONAL_PROJECTS);
        appendChildren(container,[header,hr,content,projectListing.toDOMNode()]);
        return container;
    }

    buildContactsPage() {
        let container = this.buildContainer();
        let header = document.createElement('h1');
        header.classList.add('font-weight-light');
        header.innerText = 'Contacts';
        let hr = document.createElement('hr');
        let content = document.createElement('p');
        content.classList.add('lead');
        content.innerHTML = 'Here are some ways to get in touch with me.';
        let iconContainer = document.createElement('div');
        iconContainer.classList.add('contacts-icon-container');
        appendChildren(iconContainer,[
            this.createContactIcon('fab','fa-linkedin-in',"https://www.linkedin.com/in/jlucasp/"),
            this.createContactIcon('fas','fa-envelope',"mailto:jlucasp25@gmail.com"),
            this.createContactIcon('fab','fa-github',"https://www.github.com/isynthx/"),
        ]);
        appendChildren(container,[header,hr,content,iconContainer]);
        return container;
    }

    createContactIcon(iconType,iconName,link) {
        let icon = document.createElement('i');
        icon.classList.add('contact-icon');
        icon.classList.add(iconType);
        icon.classList.add('fa-3x');
        icon.classList.add(iconName);
        let anchor = document.createElement('a');
        anchor.setAttribute('target','_blank');
        anchor.href = link;
        anchor.appendChild(icon);
        return anchor;
    }

    displayAboutPage() {
        this.clearBody();
        this.bodyNode.appendChild(this.aboutPage);
    }

    displayCurriculumPage() {
        this.clearBody();
        this.bodyNode.appendChild(this.curriculumPage);
    }

    displayAcademicProjectsPage() {
        this.clearBody();
        this.bodyNode.appendChild(this.academicProjectsPage);
    }

    displayPersonalProjectsPage() {
        this.clearBody();
        this.bodyNode.appendChild(this.personalProjectsPage);
    }

    displayContactsPage() {
        this.clearBody();
        this.bodyNode.appendChild(this.contactsPage);
    }

    clearBody() {
        while (this.bodyNode.firstChild) {
            this.bodyNode.removeChild(this.bodyNode.lastChild);
        }
    }
};

function clearChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.lastChild);
    }
}

function appendChildren(parent,children) {
    children.forEach(child => parent.append(child));
}

function enableCallbacks(personalContainer) {
    let links = [
        document.querySelector('#about-link'),
        document.querySelector('#curriculum-link'),
        document.querySelector('#academic-link'),
        document.querySelector('#personal-link'),
        document.querySelector('#contacts-link')
    ];
    links[0].addEventListener('click', () => {
        personalContainer.displayAboutPage();
    });

    links[1].addEventListener('click', () => {
        personalContainer.displayCurriculumPage();
    });
    links[2].addEventListener('click', () => {
        personalContainer.displayAcademicProjectsPage();
    });
    links[3].addEventListener('click', () => {
        personalContainer.displayPersonalProjectsPage();
    });
    links[4].addEventListener('click', () => {
        personalContainer.displayContactsPage();
    });
    for (let link of links) {
        link.setAttribute('data-toggle','collapse');
        link.setAttribute('data-target','#navbarButton');
    }
}

let page = new PersonalContainer();
enableCallbacks(page);
page.displayAboutPage();
