import Welcome from './02Welcome'
import { Button } from './03Button' // named export
import { HelloJsx, HelloWithoutJsx } from './04Hello';
import { Card, CardWithoutJsx } from './05Card';
import { UserProfile, UserProfile2 } from './06UserProfile';
import { ContactForm } from './07ContactForm';
import { StyledForm } from './08StyledForm';
import { CandidatePrtofile } from './09CandidateProfile';
import { Products, Equipments } from './10Product';
import './App.css'


function App() {

  return (
    <div>
      <Products title="Gaming Laptops" price={1299.99} inStock={true} categories={["Electronice", "Computers", "Gaming"]} />
      <Equipments title="Earbuds" price={99.99} inStock={false} categories={["Headphones", "In ear", "wireless"]}  />
      <Welcome />
      <Welcome name="Peter" alias="Spiderman" />
      <Welcome name="Steve" alias="Captain" />
      <Welcome name="Bruice" alias="Batman" />
      <CandidatePrtofile />
      <StyledForm />
      <ContactForm />
      <UserProfile />
      <UserProfile2 />
      <HelloJsx />
      <HelloWithoutJsx />
      <Button />
      <Card />
      <CardWithoutJsx />
    </div>
  );
}
export default App
