import axios from 'axios';

import RandomDog from '../components/RandomDog/RandomDog';

const Page = ({ dog }) => (
  <div>
    <RandomDog dog={dog} />
  </div>
);

Page.getInitialProps = async ({ req }) => {
  const { data } = await axios.get('https://api.thedogapi.com/v1/images/search?limit=1&has_breeds=true');

  return { dog: data[0] };
};

export default Page;
