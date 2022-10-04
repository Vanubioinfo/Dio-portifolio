
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/Vanubioinfo/portifolio-js/main/javascript-portfolio/data/profile.json';
=======
    const url = 
>>>>>>> 6332b5b60a0b913eaec0d5e8ca14331b311e57be
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
