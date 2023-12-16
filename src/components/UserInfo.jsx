const UserInfo = ({ userInfo }) => {
  console.log('Sizas', userInfo);

  return (
    <div>
      {userInfo ? (
        <div>
          <h1>{userInfo.login}</h1>
        </div>
      ) : (
        <div>
          <h1>Data not received</h1>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
