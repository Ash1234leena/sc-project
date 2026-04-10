import Post from "./components/Post";

function App() {
  return (
    <div>
      <h1>🔥 Flick</h1>

      <Post 
        user="alex"
        image="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
        caption="Nature vibes 🌄"
      />

      <Post 
        user="sara"
        image="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
        caption="City lights ✨"
      />

    </div>
  );
}

export default App;