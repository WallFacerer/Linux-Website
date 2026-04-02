const translations = {
    en: {
        title: "LinuxPro | Professional Linux Guide",
        nav: {
            overview: "Overview",
            distros: "Distros", 
            benefits: "Benefits",
            learn: "Learn"
        },
        hero: {
            eyebrow: "Open source. Secure. Built for modern computing.",
            headline: "Linux for professionals, makers, and teams.",
            copy: "Discover Linux distributions, core advantages, and the strength of an ecosystem trusted by servers, cloud platforms, developers, and embedded systems.",
            exploreDistros: "Explore Distros",
            whyLinux: "Why Linux?"
        },
        overview: {
            title: "What is Linux?",
            text1: "Linux is a secure, open source kernel powering a wide ecosystem of operating systems. From lightweight desktop environments to enterprise-grade server deployments, it delivers stability, performance, and flexibility.",
            text2: "Its modular architecture and community-driven development make it ideal for professionals who need control, transparency, and long-term reliability.",
            designedForGrowth: "Designed for growth",
            designedForGrowthText: "Linux supports cloud-native infrastructure, container platforms, professional development workflows, and mission-critical systems with the same dependable foundation."
        },
        distros: {
            title: "Popular distributions",
            ubuntu: {
                name: "Ubuntu",
                text: "A polished desktop and server experience with wide hardware support and enterprise-ready updates.",
                button: "Visit Ubuntu"
            },
            fedora: {
                name: "Fedora", 
                text: "An innovation-focused distribution delivering the latest open source tools and cloud technologies.",
                button: "Visit Fedora"
            },
            debian: {
                name: "Debian",
                text: "Stable, secure, and community-driven. A strong base for servers and long-term deployments.",
                button: "Visit Debian"
            }
        },
        benefits: {
            title: "The Linux advantage",
            security: {
                title: "Security",
                text: "Regular updates, permissions controls, and a fast response cycle keep Linux systems resilient."
            },
            performance: {
                title: "Performance", 
                text: "Lightweight kernels and efficient resource usage are ideal for high-performance workloads."
            },
            flexibility: {
                title: "Flexibility",
                text: "Build exactly the environment you need, from minimal servers to full-featured desktop workstations."
            }
        },
        learn: {
            title: "Start your Linux journey today",
            text: "Whether you are building a server cluster, deploying containers, or learning development workflows, Linux gives you a professional platform with strong tooling and community support.",
            button: "Visit kernel.org"
        },
        footer: "LinuxPro © 2026 · Open source education and insight"
    },
    nl: {
        title: "LinuxPro | Professionele Linux Gids",
        nav: {
            overview: "Overzicht",
            distros: "Distributies",
            benefits: "Voordelen", 
            learn: "Leren"
        },
        hero: {
            eyebrow: "Open source. Veilig. Gebouwd voor modern computergebruik.",
            headline: "Linux voor professionals, makers en teams.",
            copy: "Ontdek Linux distributies, kernvoordelen en de kracht van een ecosysteem dat wordt vertrouwd door servers, cloudplatforms, ontwikkelaars en embedded systemen.",
            exploreDistros: "Verken Distributies",
            whyLinux: "Waarom Linux?"
        },
        overview: {
            title: "Wat is Linux?",
            text1: "Linux is een veilige, open source kernel die een breed ecosysteem van besturingssystemen aandrijft. Van lichtgewicht desktopomgevingen tot enterprise-grade serverimplementaties, het levert stabiliteit, prestaties en flexibiliteit.",
            text2: "Zijn modulaire architectuur en community-gedreven ontwikkeling maken het ideaal voor professionals die controle, transparantie en langetermijnbetrouwbaarheid nodig hebben.",
            designedForGrowth: "Ontworpen voor groei",
            designedForGrowthText: "Linux ondersteunt cloud-native infrastructuur, containerplatforms, professionele ontwikkelworkflows en missiekritische systemen met dezelfde betrouwbare basis."
        },
        distros: {
            title: "Populaire distributies",
            ubuntu: {
                name: "Ubuntu",
                text: "Een gepolijste desktop- en serverervaring met brede hardwareondersteuning en enterprise-ready updates.",
                button: "Bezoek Ubuntu"
            },
            fedora: {
                name: "Fedora",
                text: "Een op innovatie gerichte distributie die de nieuwste open source tools en cloudtechnologieën levert.",
                button: "Bezoek Fedora"
            },
            debian: {
                name: "Debian", 
                text: "Stabiel, veilig en community-gedreven. Een sterke basis voor servers en langetermijnimplementaties.",
                button: "Bezoek Debian"
            }
        },
        benefits: {
            title: "Het Linux voordeel",
            security: {
                title: "Veiligheid",
                text: "Regelmatige updates, permissiecontroles en een snelle responscyclus houden Linux-systemen veerkrachtig."
            },
            performance: {
                title: "Prestaties",
                text: "Lichtgewicht kernels en efficiënt resourcegebruik zijn ideaal voor high-performance workloads."
            },
            flexibility: {
                title: "Flexibiliteit",
                text: "Bouw precies de omgeving die je nodig hebt, van minimale servers tot volledig uitgeruste desktop werkstations."
            }
        },
        learn: {
            title: "Begin vandaag nog je Linux reis",
            text: "Of je nu een servercluster bouwt, containers implementeert, of ontwikkelworkflows leert, Linux geeft je een professioneel platform met sterke tooling en community-ondersteuning.",
            button: "Bezoek kernel.org"
        },
        footer: "LinuxPro © 2026 · Open source educatie en inzicht"
    }
};

let currentLang = localStorage.getItem('language') || 'nl';

function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    updateContent();
    updateLanguageSelector();
}

function updateContent() {
    const t = translations[currentLang];
    
    // Update page title
    document.title = t.title;
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLang;
    
    // Update navigation
    document.querySelector('a[href="#overview"]').textContent = t.nav.overview;
    document.querySelector('a[href="#distros"]').textContent = t.nav.distros;
    document.querySelector('a[href="#benefits"]').textContent = t.nav.benefits;
    document.querySelector('a[href="#learn-more"]').textContent = t.nav.learn;
    
    // Update hero section
    document.querySelector('.eyebrow').textContent = t.hero.eyebrow;
    document.querySelector('.hero h1').textContent = t.hero.headline;
    document.querySelector('.hero-copy').textContent = t.hero.copy;
    document.querySelector('.btn-primary').textContent = t.hero.exploreDistros;
    document.querySelector('.btn-secondary').textContent = t.hero.whyLinux;
    
    // Update overview section
    document.querySelector('#overview h2').textContent = t.overview.title;
    const overviewTexts = document.querySelectorAll('#overview p');
    overviewTexts[0].textContent = t.overview.text1;
    overviewTexts[1].textContent = t.overview.text2;
    document.querySelector('.info-card h3').textContent = t.overview.designedForGrowth;
    document.querySelector('.info-card p').textContent = t.overview.designedForGrowthText;
    
    // Update distros section
    document.querySelector('#distros h2').textContent = t.distros.title;
    
    const ubuntuCard = document.querySelectorAll('.card')[0];
    ubuntuCard.querySelector('h3').textContent = t.distros.ubuntu.name;
    ubuntuCard.querySelector('p').textContent = t.distros.ubuntu.text;
    ubuntuCard.querySelector('.btn').textContent = t.distros.ubuntu.button;
    
    const fedoraCard = document.querySelectorAll('.card')[1];
    fedoraCard.querySelector('h3').textContent = t.distros.fedora.name;
    fedoraCard.querySelector('p').textContent = t.distros.fedora.text;
    fedoraCard.querySelector('.btn').textContent = t.distros.fedora.button;
    
    const debianCard = document.querySelectorAll('.card')[2];
    debianCard.querySelector('h3').textContent = t.distros.debian.name;
    debianCard.querySelector('p').textContent = t.distros.debian.text;
    debianCard.querySelector('.btn').textContent = t.distros.debian.button;
    
    // Update benefits section
    document.querySelector('#benefits h2').textContent = t.benefits.title;
    
    const benefitItems = document.querySelectorAll('.benefit-item');
    benefitItems[0].querySelector('h3').textContent = t.benefits.security.title;
    benefitItems[0].querySelector('p').textContent = t.benefits.security.text;
    
    benefitItems[1].querySelector('h3').textContent = t.benefits.performance.title;
    benefitItems[1].querySelector('p').textContent = t.benefits.performance.text;
    
    benefitItems[2].querySelector('h3').textContent = t.benefits.flexibility.title;
    benefitItems[2].querySelector('p').textContent = t.benefits.flexibility.text;
    
    // Update learn section
    document.querySelector('#learn-more h2').textContent = t.learn.title;
    document.querySelector('#learn-more p').textContent = t.learn.text;
    document.querySelector('#learn-more .btn').textContent = t.learn.button;
    
    // Update footer
    document.querySelector('.footer-inner p').textContent = t.footer;
}

function updateLanguageSelector() {
    const selector = document.getElementById('language-selector');
    if (selector) {
        selector.value = currentLang;
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    updateContent();
    updateLanguageSelector();
});
