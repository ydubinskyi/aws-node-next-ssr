import './RandomDog.scss';

export default ({ dog }) => (
  <div className="RandomDog">
    <h2 className="RandomDog-title">Random doggo</h2>
    <img src={dog.url} />
  </div>
);
