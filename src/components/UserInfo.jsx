import { IoLocationSharp } from 'react-icons/io5';
import { FaXTwitter } from 'react-icons/fa6';
import { HiBuildingOffice2 } from 'react-icons/hi2';
import { ImLink } from 'react-icons/im';

const UserInfo = ({ userInfo, mode, resStatus }) => {
  const formatDate = (dateString) => {
    // Create a Date object from the input string
    const date = new Date(dateString);

    // Define month names array
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    // Get day, month, and year from the Date object
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    // Format the date as "DD Mon YYYY"
    const formattedDate = `${day.toString().padStart(2, '0')} ${
      monthNames[monthIndex]
    } ${year}`;

    return formattedDate;
  };

  return (
    <>
      {resStatus == 200 ? (
        <div
          className={`user-info-container user-info-container-${
            mode ? `dark` : `light`
          }`}
        >
          <div className='desc-container'>
            <img src={userInfo.avatar_url} className='profile-picture' />
            <div className='desc-container-info'>
              <div className='names'>
                <p className={`login login-${mode ? `dark` : `light`}`}>
                  {userInfo.login}
                </p>
                <p className='name'>{userInfo.name ? userInfo.name : ''}</p>
              </div>
              <p className='joined'>
                Joined {formatDate(userInfo.created_at.substring(0, 10))}
              </p>
            </div>
          </div>
          <div className='bio-container'>
            {userInfo.bio ? (
              <p className='bio'>{userInfo.bio}</p>
            ) : (
              <p className='bio'>This profile has no bio</p>
            )}
          </div>
          <div
            className={`stats-container stats-container-${
              mode ? `dark` : `light`
            }`}
          >
            <div>
              <p className='stat-text'>Repos</p>
              <p className='stat'>{userInfo.public_repos}</p>
            </div>
            <div>
              <p className='stat-text'>Followers</p>
              <p className='stat'> {userInfo.followers}</p>
            </div>
            <div>
              <p className='stat-text'>Following</p>
              <p className='stat'> {userInfo.following}</p>
            </div>
          </div>
          <div className='links-container'>
            <div>
              <p>
                <IoLocationSharp className='icon' />{' '}
                {userInfo.location ? userInfo.location : 'Not Available'}
              </p>
              <p>
                <ImLink className='icon' />{' '}
                {userInfo.bio ? userInfo.bio : 'Not Available'}
              </p>
            </div>
            <div>
              <p>
                <FaXTwitter className='icon' />{' '}
                {userInfo.twitter_username
                  ? userInfo.twitter_username
                  : 'Not Available'}
              </p>
              <p>
                <HiBuildingOffice2 className='icon' />{' '}
                {userInfo.company ? userInfo.company : 'Not Available'}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`user-info-container user-info-container-${
            mode ? `dark` : `light`
          }`}
        >
          <h1 className={`title-${mode ? `dark` : `light`}`}>User not found</h1>
        </div>
      )}
    </>
  );
};

export default UserInfo;
