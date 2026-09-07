import Welcome from './02Welcome'
import { Button } from './03Button' // named export
import { HelloJsx, HelloWithoutJsx } from './04Hello';
import { Card , CardWithoutJsx } from './05Card';
import { UserProfile, UserProfile2 } from './06UserProfile';
import { ContactForm } from './07ContactForm';
import { StyledForm } from './08StyledForm';
import { CandidatePrtofile } from './09CandidateProfile';
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
          <ContactForm/>
          <StyledForm/>
          <CandidatePrtofile/>
        </div>
  );
}
export default App
