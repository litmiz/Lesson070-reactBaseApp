import React from 'react';
import PersonalDetailsCard from "./PersonalDetailsCard";

class PersonalDetails extends React.Component {
    render() {
        return <div id="personalDetailsDiv">
            <h1>Personal Details Web App</h1>
                <PersonalDetailsCard/>
        </div>;
    }
}

export default PersonalDetails;