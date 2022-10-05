
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/Vanubioinfo/portifolio-js/main/javascript-portfolio/data/profile.json';

    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
