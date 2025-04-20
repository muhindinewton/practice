/*
propTypes = a mechanism that ensures that the passed value is of the correct data type
            - age : propTypes.number

defaultProps - default values for props in case they are not passed from the parent component
                - name: "Guest"
*/
import { useState } from 'react';
import PropTypes from 'prop-types';

function Student(props) {
    const [age, setAge] = useState(props.age); // initialize state from props

    const increaseAge = () => {
        setAge(prevAge => prevAge + 1);
    };

    return (
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Student: {props.isStudent ? 'Yes' : 'No'}</p>
            <p>Age: {age}</p>
            <button onClick={increaseAge}>Increase Age</button>
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
};

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
};

export default Student;