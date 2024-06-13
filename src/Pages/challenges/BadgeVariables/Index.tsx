import "./styles.css";
import { useEffect, useState } from "react";

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

  interface Person {
    id: Number;
    email: string;
    Picture: string;
    lastName: string;
    firstName: string;
  }

  const initialDude: Person = {
    id: 1,
    email: "thedude@cru.org",
    Picture: "https://avatars0.githubusercontent.com/u/2933430",
    lastName: "Dude",
    firstName: "The",
  };

  const [theDude, setTheDude] = useState(initialDude);

  useEffect(() => {
    (async () => {
      const result: Response = await fetch(
        "https://retoolapi.dev/z5RU3D/BadgeVariables"
      );
      console.log(JSON.stringify(result));
      const info = await result.json();
      const tempDude: Person = {...info[0]};
      setTheDude(tempDude);
    })();
  }, []);

  return (
    <div className="badge">
      <img alt={`${theDude.firstName} ${theDude.lastName}`} src={theDude.Picture} />
      <div>
        <h4>@{`${theDude.firstName} ${theDude.lastName}`}</h4>
        <p>{theDude.email}</p>
      </div>
    </div>
  );
}

export default BadgeVariables;
