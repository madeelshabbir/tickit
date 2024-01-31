import buildClient from '../api/build-client';

const Home = ({ currentUser }) => {
  return currentUser ? (
    <h1>You are signed in</h1>
  ) : (
    <h1>You are NOT signed in</h1>
  );
};

Home.getInitialProps = async context => {
  const client = buildClient(context);
  const { data } = await client.get('/api/users/current-user');

  return data;
};

export default Home;