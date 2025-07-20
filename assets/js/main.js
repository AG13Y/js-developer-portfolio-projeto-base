function updateProfileInfo(profileData){
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
     job.innerText = profileData.job
    
    const location = document.getElementById('profile.location')
     location.innerText = profileData.location

    const phone = document.getElementById('profile.phone')
     phone.innerText = profileData.phone
     phone.href = `tel:${profileData.phone}`

     const email = document.getElementById('profile.email')
      email.innerText = profileData.email
      email.href = `mailto:${profileData.email}`
}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkill')

    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills')

    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li>
                                <img src="${skill.logo}" alt="${skill.name}" title="${skill.name}">
                            </li>`).join('')
}

function updateLanguages(profileData) {
    const languages = document.getElementById('profile.languages')
    languages.innerHTML = profileData.language.map(language => `<li>${language.name} | ${language.level}</li>`).join('')
}

function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio')
    portfolio.innerHTML = profileData.educacao[0].portfolio.map(project => {
        return `
            <li>
                <h3 ${project.github ? 'class="github"' : ''}>${project.name}</h3>
                <a href="${project.url}" target="_blank">${project.url}</a>
            </li>
        `
    }).join('')
}
function updateExperiencias(profileData) {
    const experiencesList = document.getElementById('profile.experience');
    experiencesList.innerHTML = profileData.exp.map(exp => {
        return `
            <li>
                <h3 class="title">${exp.nome}</h3>
                <p class="period">${exp.periodo.inicio} - ${exp.periodo.fim}</p>
                ${exp.descricao ? `<p>${exp.descricao}</p>` : ''}
            </li>
        `
    }).join('');
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateHardSkills(profileData)
    updateSoftSkills(profileData)
    updateLanguages(profileData)
    updatePortfolio(profileData)
    updateExperiencias(profileData)
})()
