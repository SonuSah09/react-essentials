import Welcome from './Welcome'
import { Button } from './Button' // named export
import { HelloJsx, HelloWithoutJsx } from './Hello';
import { Card , CardWithoutJsx } from './Card';
import { UserProfile, UserProfile2 } from './UserProfile';
import './App.css'


function App() {
 
  return (
        <div>
          <HelloJsx/>
          <HelloWithoutJsx/>
          <Welcome/> 
          <Button/>
          <Card/>
          <CardWithoutJsx/>
          <UserProfile/>
          <UserProfile2/>
        </div>
  );
}
export default App
