import './App.css';

import { Formikcontainer } from './components/FormikContainer';
import LoginForm from './pages/LoginForm';
import PersonalForm from './pages/PersonalForm';
import { useState } from 'react'

const formData = {
  username: '',
  password: '',
  email: '',
  description: '',
  department: '',
  modeOfCommunication: '',
  hobbies: [],
  dateOfJoining: null,
}
function App() {

  const [data, setData] = useState({
    username: '',
    password: '',
    email: '',
    description: '',
    department: '',
    modeOfCommunication: '',
    hobbies: [],
    dateOfJoining: null,
  });

  const [currentStep, setCurrentStep] = useState(0);

 const makeApiRequest = finalData =>{
  console.log('Final Data: ', finalData);
 }
  const handleNextStep = (newData, finalStep = false) => {
    setData(data1 =>({...data1, ...newData}));
    if(finalStep) {
      makeApiRequest(newData);
      return;
    }
    setCurrentStep(count=>count+1)
  }
  
  const handlePreviousStep = (newData) => {
    setData(data => ({...data, ...newData}));
    setCurrentStep(count=>count-1);
  }
  const steps = [<LoginForm next= {handleNextStep} data ={data}/>,
    <PersonalForm next= {handleNextStep} data ={data} prev = {handlePreviousStep}/>
   ];

  return (
    <div  className='App'>
        <progress max="2" value={currentStep+1} className="progressbar"/>
        {steps[currentStep]}
    </div>
  );
}

export default App;
