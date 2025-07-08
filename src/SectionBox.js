export default function SectionBox({ title, items }) {
  return (
    <div className="col-md-4 mb-4 text-center">
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <ul className="list-unstyled mb-0">
            {items && items.length > 0 ? (
              items.map((item, index) => <li key={index}>{item}.</li>)
            ) : (
              <li>.</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
