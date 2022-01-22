import React from 'react';
import {Formik, Form } from 'formik';
import * as Yup from 'yup';
import {Input, TextArea, Select, Radio, Checkbox, Datepicker} from '../components/common'

export default function PersonalForm(props) {

    const departmentOptions = [
        {key: 'Select an option' , value: ''},
        {key: 'Cards' , value: 'cards'},
        {key: 'Payments' , value: 'payments'},
        {key: 'Banking' , value: 'banking'},
        {key: 'Technology' , value: 'technology'}
    ];

    const modeOfCommunication = [
        {key: 'Telephone', value:'telephone'},
        {key:'Email', value:'email'}
    ];
    const hobbies = [
        {key: 'Playing', value:'playing'},
        {key:'Gardening', value:'gardening'},
        {key:'Reading', value:'reading'},
        {key:'Watching tv', value:'watching tv'}
    ];
    const initialValues = {
        email : '',
        description:'',
        department: '',
        modeOfCommunication: '',
        hobbies: [],
        dateOfJoining: null,
    };
    const validationSchema= Yup.object({
        email: Yup.string().email('invalid format').required('enter email'),
        description: Yup.string().required('Description required'),
        department: Yup.string().required('Department required'),
        modeOfCommunication: Yup.string().required('Mode of Communication required'),
        hobbies: Yup.array().min(1, 'Hobbies required'),
        dateOfJoining: Yup.date().required('Date of Joining required').nullable()
    });
    const onSubmit = values => {
        props.next(values , true);
    } 

    return (
        <Formik initialValues = {props.data}
                validationSchema= {validationSchema}
                onSubmit = {onSubmit}
                >
            {
                (formik) => {
                    return (
                        
                        <Form>
                        <p className="form-label"> Personal Details </p>
                            <Input 
                            type = 'email'
                            label = 'Email Address'
                            name = 'email'
                            />
                             <TextArea 
                            label = 'Description'
                            name = 'description'
                            />
                            <Select 
                            label = 'Select a Department'
                            name='department'
                            options = {departmentOptions}
                            />
                            <Radio
                            name='modeOfCommunication'
                            label= 'Select Mode Of Communication'
                            options = {modeOfCommunication}
                            />
                              <Checkbox
                            name='hobbies'
                            label= 'Select Hobbies'
                            options = {hobbies}
                            />
                            <Datepicker 
                            name='dateOfJoining'
                            label='Enter Date of Joining'
                            />
                            <button type = 'submit' onClick = {()=> props.prev(formik.values)}>Back</button>
                            <button type = 'submit'>Submit</button>
                        </Form>
                    )
                } 
            }
        </Formik>
    )
}
