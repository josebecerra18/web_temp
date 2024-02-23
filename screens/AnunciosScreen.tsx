
import {DummyData} from '../DummyData'
import Card from '../src/components/Card/Card'
const AnunciosScreen = () => {


  
  return (
    <div className="flex flex-row "  >
        <div className="flex flex-1 "  style={{backgroundColor: 'purple', }} >
          Left
        </div>
        <div className='flex-none' style={{marginTop:100, width:685,justifyContent: 'center' }}>
          {DummyData.map((object, index) => {
            return(
             <div >
              {index === 0 ? <MeinsIntro/>: null}
               <Card index={index} objectData={object}/>
             </div>
                 
            )}
            )}
        </div>
        <div className="flex flex-1" style={{backgroundColor: 'orange', }}>
          Right
        </div>
    </div>
  );
};
const AnunciosScreen2 = () => {
  
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
const AnunciosScreen1 = () => {
  
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

const  MeinsIntro=()=> {
  return (
  <div style={{ justifyContent: 'center',width:'100%', backgroundColor: 'white', height:300, color: 'black'}}>
    <h2>
    WELCOME TO MEINS!
      </h2>
      <p>
      MEINS is a social app that allows users to connect with their ethnic group and selected USA region,
       discover local offerings, and post ads for food, products, events, clubs, churches, and services ¹.
      </p>
  </div>
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