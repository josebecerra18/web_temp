
import {DummyData} from '../DummyData'
const AnunciosScreen1 = () => {
  
  return (
      <div>
          <div className="main-content">
              <Sidebar />
              <Feed />
              <Sidebar />
          </div>
          {/* Footer */}
          <Footer />
      </div>
  );
};
const AnunciosScreen = () => {
  
  return (
    <div className="w-full flex flex-1"  style={{height: 700, }}>
      <div className="flex flex-1" style={{backgroundColor: 'green', }}>
        Left
      </div>
      <div className="column-container" style={{width: 685, backgroundColor: 'white', marginTop:20}}>
            {DummyData.map((object, index) => (
                <div key={index} className="object-container">
                    <h2>{object?.userName}</h2>
                    <p>{object?.description}</p>
                    <img src={"https://firebasestorage.googleapis.com/v0/b/meins-25f6d.appspot.com/o/imagesFromPost%2F3e731eb6-e039-4bdd-9c24-44db332eedc6.1708134375738.jpg?alt=media&token=fe05731c-d36c-4aa2-92a3-8b6029af15c2"} 
                    alt={object.name}  style={{ maxHeight: '573px' }} />
                </div>
            ))}
        </div>
      <div className="flex flex-1"  style={{backgroundColor: 'yellow'}}>
        right
      </div>
      </div>
  );
};

function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Sidebar content goes here */}
      <h2>Sidebar2</h2>
    </aside>
  );
}

// Feed component
function Feed() {
  return (
    <main className="feed">
      {/* Main content goes here */}
      {DummyData.map(post => (
         <div className="post">
         {/* Post content goes here */}
         <p>{post.userName}</p>
       </div>
      ))}
    </main>
  );
}
function Post({ text }) {
  return (
    <div className="post">
      {/* Post content goes here */}
      <p>{text}</p>
    </div>
  );
}
function Footer() {
  return <footer>Footer</footer>;
}
export default AnunciosScreen;