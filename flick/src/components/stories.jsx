import "../App.css";

function Stories() {
  const users = ["You", "alex", "sara", "john", "emma"];

  return (
    <div className="stories">
      {users.map((u, i) => (
        <div key={i} className="story">
          <img src={`https://i.pravatar.cc/150?img=${i+1}`} />
          <p>{u}</p>
        </div>
      ))}
    </div>
  );
}

export default Stories;