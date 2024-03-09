import React from 'react';
import Header from './component/components/header/Header';
import Button from './component/components/header/button/Button';
import Card from './component/components/card/Card';

const App = () => {
  //state lifting --- when we need to share a common part for multiple cart, we use the common part in the parent div.eikhane amra button e jodi onclick use korte chai tahole tahole data load korte parbe na karon data load hocche card component er moddhe. Button  component er data pete hole amader kase 2 ta option thakbe. 1/ lifting kora-- that means card er load hoawa data take App er moddhe use kora. 2/ Button compponent take card er vhitore map er por use kora.

  // ### state lifting
  // const [data,setData] = useState([])
  // const [lessData, setlessData] = useState(false)

  // useEffect( ()=>{
  //     fetch('https://openapi.programming-hero.com/api/ai/tools')
  //     .then(loaddata => loaddata.json())
  //     .then(show => setData(show.data.tools))
  // },[])

  return (
    <div>
      <Header></Header>
      <Card></Card>
    </div>
  );
};

export default App;