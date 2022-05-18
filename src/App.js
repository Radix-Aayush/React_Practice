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

// function based component

function App() {
  return (
    <>
     <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
          <a href='/' className='navbar-brand'>React with Form Handling</a>
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
       <LoginForm/>

    </>
  );
}

export default App;
