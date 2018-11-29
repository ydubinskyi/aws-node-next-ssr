import './BreedInfo.scss';

export default ({ breed }) => (
  <div className="BreedInfo">
    <p className="BreedInfo-name">{breed.name}</p>
    <p className="BreedInfo-lifeSpan">Life span: {breed.life_span}</p>
    <p className="BreedInfo-temperament">Temperament: {breed.temperament}</p>
    <p className="BreedInfo-weight">Weight: {breed.weight.metric}</p>
  </div>
);
