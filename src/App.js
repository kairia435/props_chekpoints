import logo from './logo.svg';
import './App.css';
import ProfileComponent from "./profile/Profil.js";   
import image from './image.jpg';
import handleName from "./profile/Handle.js";
import PropTypes from "prop-types";

const App = () => {
  const handleName = fullName => alert(fullName);
  ProfileComponent.defaultProps = { age :"30"};
  ProfileComponent.propTypes = {
    age: PropTypes.number,
    fullName: PropTypes.string}
  return (

    <div style={{color: "red", textAlign: "center"}}>
       <img src={image}/> 
      <ProfileComponent fullName="mchergui kairia"  bio="produit cosmétique" profession="student at go my code" handleName ={handleName} />
     

    </div>
  );
 };
export default App;
