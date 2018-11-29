import BreedInfo from '../BreedInfo/BreedInfo';

import './GridItem.scss';

export default ({ dogInfo }) => (
  <div className="GridItem">
    <img className="GridItem-image" src={dogInfo.url} />
    <BreedInfo breed={dogInfo.breeds[0]} />
  </div>
);
