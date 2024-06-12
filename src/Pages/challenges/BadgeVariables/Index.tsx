import './styles.css';

// We have a "Badge" component with variables for "name", "handle" and "img" that are unassigned.
// Your job is to assign those variables in the JSX so that the component renders correctly.

// Tasks
// 1. Give the image a proper "alt" tag using the author's name.
// 2. Make sure the badge displays the profile "image" correctly
// 3. Display the author's "name" in the badge's heading
// 4. Display the author's "handle" below the heading


function BadgeVariables() {
  const name = "Tyler McGinnis";
  const handle = "tylermcginnis";
  const img = "https://avatars0.githubusercontent.com/u/2933430";

  return (
    <div className="badge">
      <img alt={``} src={``} />
      <div>
        <h4>NAME</h4>
        <p>@HANDLE</p>
      </div>
    </div>
  );
}

export default BadgeVariables;
