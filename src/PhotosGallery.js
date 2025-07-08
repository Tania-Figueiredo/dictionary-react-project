export default function PhotosGallery({ photos, keyword }) {
  if (!photos.length) return null;

  return (
    <div className="card mt-4 border-0">
      <div className="card-body">
        <div className="row">
          {photos.map((photo, index) => (
            <div className="col-6 col-md-3 mb-3" key={index}>
              <img
                src={photo.src.medium}
                alt={keyword}
                className="img-fluid rounded shadow-sm"
                style={{
                  height: "200px",
                  objectFit: "cover",
                  width: "100%",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
