import { useState } from 'react';

function ReactKyotoGrid() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button type="button" onClick={() => setCount((count) => count + 1)}>
        Original Button Component: {count}
      </button>
    </div>
  );
}

export default ReactKyotoGrid;
