import { IoLocationSharp } from 'react-icons/io5';
import { FaXTwitter } from 'react-icons/fa6';
import { HiBuildingOffice2 } from 'react-icons/hi2';
import { ImLink } from 'react-icons/im';

const UserInfo = () => {
  const userInfo = {
    avatar_url: 'https://avatars.githubusercontent.com/u/80058433?v=4',
    bio: null,
    blog: '',
    company: null,
    created_at: '2021-03-04T16:32:59Z',
    email: null,
    events_url: 'https://api.github.com/users/JuanDCeballos/events{/privacy}',
    followers: 6,
    followers_url: 'https://api.github.com/users/JuanDCeballos/followers',
    following: 3,
    following_url:
      'https://api.github.com/users/JuanDCeballos/following{/other_user}',
    gists_url: 'https://api.github.com/users/JuanDCeballos/gists{/gist_id}',
    gravatar_id: '',
    hireable: null,
    html_url: 'https://github.com/JuanDCeballos',
    id: 80058433,
    location: 'Medellín - Colombia',
    login: 'JuanDCeballos',
    name: null,
    node_id: 'MDQ6VXNlcjgwMDU4NDMz',
    organizations_url: 'https://api.github.com/users/JuanDCeballos/orgs',
    public_gists: 0,
    public_repos: 33,
    received_events_url:
      'https://api.github.com/users/JuanDCeballos/received_events',
    repos_url: 'https://api.github.com/users/JuanDCeballos/repos',
    site_admin: false,
    starred_url:
      'https://api.github.com/users/JuanDCeballos/starred{/owner}{/repo}',
    subscriptions_url:
      'https://api.github.com/users/JuanDCeballos/subscriptions',
    twitter_username: null,
    type: 'User',
    updated_at: '2023-08-28T15:47:08Z',
    url: 'https://api.github.com/users/JuanDCeballos',
  };

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
      {userInfo ? (
        <div className='user-info-container'>
          <div className='desc-container'>
            <img src={userInfo.avatar_url} className='profile-picture' />
            <div className='desc-container-info'>
              <div className='names'>
                <p>{userInfo.login}</p>
                <p>{userInfo.name ? userInfo.name : ''}</p>
              </div>
              <p>Joined {formatDate(userInfo.created_at.substring(0, 10))}</p>
            </div>
          </div>
          <div className='bio-container'>
            {userInfo.bio ? (
              <p className='bio'>{userInfo.bio}</p>
            ) : (
              <p className='bio'>This profile has no bio.</p>
            )}
          </div>
          <div className='stats-container'>
            <div>
              <p>Repos</p>
              <p className='stat'>{userInfo.public_repos}</p>
            </div>
            <div>
              <p>Followers</p>
              <p className='stat'> {userInfo.followers}</p>
            </div>
            <div>
              <p>Following</p>
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
        <div>
          <h1>Data not received</h1>
        </div>
      )}
    </>
  );
};

export default UserInfo;
