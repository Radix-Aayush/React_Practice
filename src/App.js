//props using class based component.

import './App.css';
import ImageCard from './BootstrapCom-4/ImageCard';
import MessageCard from './16/class-function-based-component/MessageCard';
import WishCard from './16/class-function-based-component/WishCard';
import Counter from './EventHandling-5/Counter-1';
import ProductItem from './EventHandling-5/ProductItem-3';
import WishMessage from './EventHandling-5/WishMessage-2';
import Employee from './props-2/Employee';
import Student from './props-2/Student';
import StateEmployee from './state-3/StateEmployee';
import ShopingCard from './EventHandling-5/ShopingCard-4';
import UserName from './Form-Handling-6/UserName-1';
import LoginForm from './Form-Handling-6/LoginForm-2';
import RegistrationForm from './Form-Handling-6/Registration-3';
import AuthUser from './Conditional Rendring-7/AuthUser';
import ProductCard from './List-Rendering-8/ProductCard';
import ParentComponent from './Component-Interection-9/ParentComponent-1';
import ContactApp from './Contact-App-10/ContactApp';
import DigitalWatch from './LifeCycle-11/DigitalWatch';
import UserList from './ServerConnectionAxios-12/UserList';


// function based component

function App() {
  return (
    <>
     <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
          <a href='/' className='navbar-brand'>React with Server Connection</a>
     </nav>
      {/* props program */}
      {/* <Employee name="Naveen" age={33}/>
      <Employee name="Aayush" age={25}/>
      <Student name="John"/>
      <Student name="Laura"/> */}

       {/* State Program */}
      {/* <StateEmployee/>
      <StateStudent/> */}

      {/* Bootstrap */}
      {/* ------------------- */}
      {/* <ImageCard/> */}


      {/* Event Handling */}
      {/* ---------------------- */}
      {/* <Counter/> */}
      {/* <WishMessage/> */}
      {/* <ProductItem/> */}
      {/* <ShopingCard/> */}

       {/* Form Handling */}
       {/* ---------------------- */}
       {/* <UserName/> */}
       {/* <LoginForm/> */}
       {/* <RegistrationForm/> */}

       {/* Conditional Rendering */}
       {/* <AuthUser/> */}

       {/* List Rendering */}
       {/* <ProductCard/> */}

       {/* Component Intraction */}
      {/* <ParentComponent/> */}


      {/* Contact App */}
       {/* <ContactApp/> */}

       {/* Component Life Cycle */}
       {/* <DigitalWatch/> */}

       {/* Server Connection Axios */}
       {/* <UserList/> */}

    </>
  );
}

export default App;
