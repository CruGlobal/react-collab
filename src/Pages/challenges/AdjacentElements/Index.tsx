// There's a problem with our Layout component which is preventing it from rendering correctly.
// First, uncomment Main Aside and footer elements to start.

// Tasks
// 1. Fix the error so the component renders correctly
// 2. Create styles sheet and import into react component.

import './styles.css';

function AdjacentElements() {
  return (
    <>
      <header>Header</header>
      <div className="container">
        <main>Main</main>
        <aside>Aside</aside>
      </div>
      <footer>Footer</footer>
    </>
  );
}

export default AdjacentElements;
