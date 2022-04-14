function UserProfilePage(props) {
  return (
    <div>
      <h1>{props.userName}</h1>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params, res, req } = context;

  console.log(res);

  console.log(req);
  return {
    props: {
      userName: "max",
    },
  };
}

export default UserProfilePage;
