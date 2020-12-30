import React from 'react';

class PersonalDetailsCard extends React.Component {
    render() {
        let fullName = ["Lital Mizrahi", "Asaf amnony"];
        let birthDate = ["13.07.1994", "17.03.1992"];
        let age = [26, 28];
        let gender = ["female", "male"];
        let city = ["Arad", "Haifa"];
        let work = ["System Administrator", "FPGA Engineer"];
        let workPlace = ["IAF", "Elbit"];
        return <div class="personalDetailsCards">
                    <div class="personalDetailsCard">
                        <h3>{fullName[0]}</h3>
                        <p id="ageP">I'm a {gender[0]} and was born on {birthDate[0]}. I'm {age[0]} years old.</p>
                        <p id="cityP">I'm living in {city[0]}.</p>
                        <p id="workP">I'm working as {work[0]} at {workPlace[0]}.</p>
                    </div>
                    <div class="personalDetailsCard">
                        <h3>{fullName[1]}</h3>
                        <p id="ageP">I'm a {gender[1]} and was born on {birthDate[1]}. I'm {age[1]} years old.</p>
                        <p id="cityP">I'm living in {city[1]}.</p>
                        <p id="workP">I'm working as {work[1]} at {workPlace[1]}.</p>
                    </div>
        </div>;
    }
}

export default PersonalDetailsCard;