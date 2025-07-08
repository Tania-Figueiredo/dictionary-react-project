export default function DefinitionCard({ word, phonetic, definitions }) {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h2 className="text-capitalize">{word}</h2>
        {phonetic && (
          <p className="text-muted">
            <strong>Phonetic:</strong> <em>{phonetic}</em>
          </p>
        )}
        {definitions.slice(0, 2).map((def, index) => (
          <p className="text-muted" key={index}>
            <strong>Definition {index + 1}:</strong> {def}.
          </p>
        ))}
        {definitions.length > 2 && (
          <details>
            <summary className="text-secondary">See more definitions</summary>
            <ul>
              {definitions.slice(2).map((def, index) => (
                <li key={index}>{def}.</li>
              ))}
            </ul>
          </details>
        )}
      </div>
    </div>
  );
}
