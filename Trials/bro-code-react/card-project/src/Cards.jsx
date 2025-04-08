import profilePic from './assets/profile.jpeg'

function Card () {
    return(
        <div className="card">
            <img className='card-image' src={profilePic} alt="profile picture" />
            <h2 className='card-title'>Newton Muhindi</h2>
            <p className='card-text'>I'm studying Software Engineering and edit videos</p>
        </div>
    )

}

export default Card