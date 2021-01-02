import logo from './logo.svg';
import './App.css';
import ProfileComponent from "./profile/Profil.js";   
import image from './image.jpg';
import Imgap from "./profile/imgap.js";
import PropTypes from "prop-types";

const App = () => {
  const handleName = fullName => alert(fullName);
  ProfileComponent.defaultProps = { age :"30"};
  ProfileComponent.propTypes = {
    age: PropTypes.string,
    fullName: PropTypes.string}
  return (

    <div style={{color: "red", textAlign: "center"}}>
      <Imgap> <img src={image}/> </Imgap>
      <ProfileComponent fullName="mchergui kairia"  bio="produit cosmétique" profession="student at go my code" handleName ={handleName}  age="50"/>
     

    </div>
  );
 };
export default App;
