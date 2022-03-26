import "../css/characterheader.css";
const CHARACTER_API = "https://api.genshin.dev/characters/";
const CharacterHeader = ({ character, characterName }) => {
  return (
    <div className="container">
      <div
        className={`character-header ${characterName}`}
        style={{
          backgroundImage: `url(https://api.genshin.dev/characters/${characterName}/gacha-splash)`,
        }}
      >
        <img src={CHARACTER_API + characterName + "/icon"} alt={characterName} />
        <ul>
          <li>
            <h2>Genshin Impact</h2>
          </li>
          <li>
            <h1>{character.name}</h1>
          </li>
          <li>
            <h2>
              {" "}
              <span className={`${character.vision}`}>
                {character.vision}
              </span> &#x2022; {character.weapon}
            </h2>
          </li>
        </ul>
      </div>

      <div className="character-navbar">
        <ul>
          <li>
            <a href="#">Description</a>
          </li>
          <li>
            <a href="#">Weapon</a>
          </li>
          <li>
            <a href="#">Artifacts</a>
          </li>
          <li>
            <a href="#">Teams</a>
          </li>
          <li>
            <a href="#">Showcase</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CharacterHeader;