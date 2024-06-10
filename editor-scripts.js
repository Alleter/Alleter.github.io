document.addEventListener("DOMContentLoaded", function() {
    loadSections();
});

function loadSections() {
    const sectionsContainer = document.getElementById('sections-container');
    sectionsContainer.innerHTML = '';

    const sections = JSON.parse(localStorage.getItem('sections')) || getDefaultSections();

    sections.forEach((section, index) => {
        const sectionElement = createSectionElement(section, index);
        sectionsContainer.appendChild(sectionElement);
    });
}

function createSectionElement(section, index) {
    const sectionContainer = document.createElement('div');
    sectionContainer.className = 'section-container';
    sectionContainer.dataset.index = index;

    const sectionHeader = document.createElement('div');
    sectionHeader.className = 'section-header';

    const sectionTitle = document.createElement('h3');
    sectionTitle.textContent = section.title;
    sectionTitle.contentEditable = true;
    sectionTitle.onblur = () => updateSectionTitle(index, sectionTitle.textContent);

    const sectionActions = document.createElement('div');
    sectionActions.className = 'section-actions';

    const moveUpButton = document.createElement('button');
    moveUpButton.textContent = '↑';
    moveUpButton.onclick = () => moveSectionUp(index);

    const moveDownButton = document.createElement('button');
    moveDownButton.textContent = '↓';
    moveDownButton.onclick = () => moveSectionDown(index);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = () => removeSection(index);

    sectionActions.appendChild(moveUpButton);
    sectionActions.appendChild(moveDownButton);
    sectionActions.appendChild(removeButton);

    sectionHeader.appendChild(sectionTitle);
    sectionHeader.appendChild(sectionActions);

    const sectionContent = document.createElement('textarea');
    sectionContent.rows = 5;
    sectionContent.value = section.content;
    sectionContent.onblur = () => updateSectionContent(index, sectionContent.value);

    sectionContainer.appendChild(sectionHeader);
    sectionContainer.appendChild(sectionContent);

    return sectionContainer;
}

function addSection() {
    const sections = JSON.parse(localStorage.getItem('sections')) || [];
    sections.push({ title: 'New Section', content: '' });
    localStorage.setItem('sections', JSON.stringify(sections));
    loadSections();
}

function updateSectionTitle(index, title) {
    const sections = JSON.parse(localStorage.getItem('sections')) || [];
    sections[index].title = title;
    localStorage.setItem('sections', JSON.stringify(sections));
}

function updateSectionContent(index, content) {
    const sections = JSON.parse(localStorage.getItem('sections')) || [];
    sections[index].content = content;
    localStorage.setItem('sections', JSON.stringify(sections));
}

function moveSectionUp(index) {
    const sections = JSON.parse(localStorage.getItem('sections')) || [];
    if (index > 0) {
        [sections[index], sections[index - 1]] = [sections[index - 1], sections[index]];
        localStorage.setItem('sections', JSON.stringify(sections));
        loadSections();
    }
}

function moveSectionDown(index) {
    const sections = JSON.parse(localStorage.getItem('sections')) || [];
    if (index < sections.length - 1) {
        [sections[index], sections[index + 1]] = [sections[index + 1], sections[index]];
        localStorage.setItem('sections', JSON.stringify(sections));
        loadSections();
    }
}

function removeSection(index) {
    const sections = JSON.parse(localStorage.getItem('sections')) || [];
    sections.splice(index, 1);
    localStorage.setItem('sections', JSON.stringify(sections));
    loadSections();
}

function saveChanges() {
    alert("Changes saved!");
}

function getDefaultSections() {
    return [
        { title: "Professional Summary", content: "Experienced Technical Translator with a strong background in IT, specializing in translating complex technical documents from English to Spanish. Proven expertise in software development, networking, and utilizing CAT tools to ensure high-quality translations." },
        { title: "Technical Skills", content: "Programming Languages: Java, Python, C++\nSoftware: SDL Trados, memoQ, Wordfast\nIT Domains: Cybersecurity, Cloud Computing, Networking\nOperating Systems: Windows, Linux" },
        { title: "Language Pro