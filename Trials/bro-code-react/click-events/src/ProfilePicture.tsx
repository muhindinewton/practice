

function ProfilePicture() {
    const imageurl = './src/assets/profile.jpeg'

const handleClick = (e) => e.target.style.display = "none"

  return (
    <img src={imageurl} alt="Profile" onClick={(e) => handleClick(e)} />
  )
}

export default ProfilePicture