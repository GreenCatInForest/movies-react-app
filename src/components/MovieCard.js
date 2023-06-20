export const MovieCard = ({ imageUrl, title }) => {
  return (
    <div className="card movie-card my-3">
      <img src={imageUrl} className="card-img-top" alt={title} />
      <div className="card-body text-center">
        <h5 className="card-title">Card title</h5>
        <button type="button" className="btn btn-primary">
          Add to favourite
        </button>
      </div>
    </div>
  );
};
