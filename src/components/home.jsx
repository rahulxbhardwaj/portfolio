import spotify from '../assets/spotifyclone.png';
import CodeEditor from '../components/randomFact';

export default function Home() {
  return (
    <>
     <div id="home">
      <main>
       <h1 id="glow-effect">RAHUL's</h1>
        <h1 id="glow-effect">Creative Space</h1>
      </main>
    </div>

    <div id="project">
      <h2 id="projects">Projects</h2>
      <div id="SpotifyClone">


        
        <div class="container">
            <div class="terminal_toolbar">
                <div class="butt">
                    <button class="btn btn-color"></button>
                    <button class="btn"></button>
                    <button class="btn"></button>
                </div>
                <p class="user">rahul@bhardwaj: ~</p>
                <div class="add_tab">
                    +
                </div>
            </div>
            <div class="terminal_body">
                <div class="terminal_promt">
                    <span class="terminal_user">rahul@root:</span>
                    <span class="terminal_location">~</span>
                    <span class="terminal_bling">$</span>
                   <p>-example -U SpotifyClone UI</p>
                    <span class="terminal_cursor"></span>
                </div>
            </div>
        </div>


        
        <a href="https://rahulxbhardwaj.github.io/spotifyclone/" target="_blank" rel="noopener noreferrer">
          <img src={spotify} alt="Spotify Clone" id="spotify" />
        </a>
        
     

{/* _______________________________Random Fact API_______________________________ */}

        <div id="randomfactapi">
         <h2>Random Fact Api</h2>
             <CodeEditor />
        </div>
   
    

{/* _____________________________________________________________________________________ */}
      </div>

   
    </div>
      
    
    </>
   
  );
}