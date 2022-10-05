
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/Vanubioinfo/Dio-portifolio/master/javascript-portfolio/data/profile.json';

    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
