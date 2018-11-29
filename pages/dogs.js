import axios from 'axios';

import Grid from '../components/Grid/Grid';
import GridItem from '../components/GridItem/GridItem';

const Page = ({ dogs }) => (
  <div>
    <Grid>
      {dogs.map((dog, index) => (
        <GridItem key={index} dogInfo={dog} />
      ))}
    </Grid>
  </div>
);

Page.getInitialProps = async ({ req }) => {
  const { data } = await axios.get('https://api.thedogapi.com/v1/images/search?limit=9&has_breeds=true&size=small');

  return { dogs: data };
};

export default Page;
