import React, { useState } from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import ParkingSpaceSelector from './components/ParkingSpaceSelector';
import TimeSelector from './components/TimeSelector';
import ReservationSummary from './components/ReservationSummary';
import LoginForm from './components/LoginForm';
import UserProfile from './components/UserProfile';
import Header from './components/Header';
import Footer from './components/Footer';
import logo from './logo.svg';
import './App.css';
import PriceDisplay from './PriceDisplay';
import PaymentForm from './PaymentForm';
import ConfirmationModal from './ConfirmationModal';

const App = () => {

  const [selectedSpace, setSelectedSpace] = useState(null);
  const [selectedTime, setSelectedTime] = useState(1);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const ratePerHour = 5; //ejemplo rate pero hour
  const hadleReserve = () => {
    setIsConfirmed(true);
    
  };

  const hadlePaymentSubmit = (paymentData) => {
    console.log("payment submitted", paymentData);
    hadleReserve();
  };

  return (
    <div>
      <h1> Parking Reservation System</h1>
      <ParkingSpaceSelector spaces={[
        { id: 1, status:'avaliable'},
        { id: 2, status: 'occupied'},
      ]}
      onSelect={setSelectedSpace}
    />

    <TimeSelector onTimeSelect={setSelectedTime} />
    {selectedSpace && ( <>
    
    <PriceDisplay time={selectedTime}
    ratePerHour={ratePerHour} />

    <ReservationSummary spaces={selectedSpace}
    time={selectedTime}
    PriceDisplay={selectedTime * ratePerHour} />

    <PaymentForm onsubmit={hadlePaymentSubmit} />
    </>
    )}

    <ConfirmationModal isOpen={isConfirmed}
    onClose={() => setIsConfirmed(false)}
    message= " Your reservation is confirmed!"
    />
    </div>
  );
  
};





function App() {
  return (
    <Router>
    <div className="App">
      <header/>
      <Routes>
        <Route path="/"element={<ParkingSpaceSelector/>}/>
        <Route path="/time" element={<TimeSelector />} />
        <Route path="/sumary" element={<ReservationSummary />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
      <footer />
      </div>
      </Router>
       
  );
};

export default App;
