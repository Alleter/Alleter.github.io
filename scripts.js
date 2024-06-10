document.addEventListener("DOMContentLoaded", function() {
    loadSections();
});

function loadSections() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '';

    const sections = JSON.parse(localStorage.getItem('sections')) || getDefaultSections();

    sections.forEach(section => {
        const sectionElement = document.createElement('section');
        const sectionTitle = document.createElement('h2');
        sectionTitle.textContent = section.title;
        const sectionContent = document.createElement('p');
        sectionContent.textContent = section.content;

        sectionElement.appendChild(sectionTitle);
        sectionElement.appendChild(sectionContent);
        mainContent.appendChild(sectionElement);
    });
}

function getDefaultSections() {
    return [
        { title: "Professional Summary", content: "Experienced Technical Translator with a strong background in IT, specializing in translating complex technical documents from English to Spanish. Proven expertise in software development, networking, and utilizing CAT tools to ensure high-quality translations." },
        { title: "Technical Skills", content: "Programming Languages: Java, Python, C++\nSoftware: SDL Trados, memoQ, Wordfast\nIT Domains: Cybersecurity, Cloud Computing, Networking\nOperating Systems: Windows, Linux" },
        { title: "Language Proficiency", content: "English: Native\nSpanish: Native\nCertifications: DELE C2, TOEFL iBT 115" },
        { title: "Professional Experience", content: "Technical Translator - XYZ Tech Solutions\nJanuary 2019 - Present\n- Translated technical documentation and user manuals.\n- Collaborated with IT teams for accurate technical terminology.\n- Utilized CAT tools for consistency and efficiency.\nTechnical Translator - ABC Software Inc.\nJune 2015 - December 2018\n- Led translation of cybersecurity software.\n- Developed glossaries and translation memory databases.\n- Worked with developers to understand software functionality." },
        { title: "Education", content: "Master’s Degree in Translation Studies - University of Language and Technology, 2018\nBachelor’s Degree in Computer Science - Tech University, 2015" },
        { title: "Certifications", content: "ATA Certified Translator\nCompTIA Network+ Certification" }
    ];
}