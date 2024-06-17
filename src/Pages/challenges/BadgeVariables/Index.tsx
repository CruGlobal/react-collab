import './styles.css';
import { useState , useEffect } from 'react';
// We have a "Badge" component with variables for "name", "handle" and "img" that are unassigned.
// Your job is to assign those variables in the JSX so that the component renders correctly.

// Tasks
// 1. Give the image a proper "alt" tag using the author's name.
// 2. Make sure the badge displays the profile "image" correctly
// 3. Display the author's "name" in the badge's heading
// 4. Display the author's "handle" below the heading

interface BadgeVariablesResponse {
  id: string,
  email: string,
  Picture: string,
  firstName: string,
  lastName: string,
}

function BadgeVariables() {
  const name = "TYLER MCGINNIS";
  const handle = "tylermcginnis";
  const img = "https://avatars0.githubusercontent.com/u/2933430";

  const [ badges , setBadges ] = useState<BadgeVariablesResponse[]> ([]);
  useEffect ( () => {
    (async () => {
      setBadges ( await getBadges() );
    })()
  }
, []);
  // https://retoolapi.dev/z5RU3D/BadgeVariables
  const getBadges: () => Promise<BadgeVariablesResponse[]> = async () => {
    const response = await fetch ( 'https://retoolapi.dev/z5RU3D/BadgeVariables' );
    return response.json()
  }

  return (
    <>
    {
      badges.map((data) => {
        return (
          <div className="badge">
          <img alt={data.firstName + ' ' + data.lastName} src={data.Picture} />
          <div>
            <h4 className="name">{data.firstName + ' ' + data.lastName}</h4>
            <p>@{data.email}</p>
          </div>
        </div>
        )
      })
    }

    </>
  );
}

export default BadgeVariables;
