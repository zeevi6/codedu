import React, { Component, PropTypes } from 'react';
import { Button } from 'semantic-ui-react';
import './study.css';
import 'whatwg-fetch';

class StudyMaterial extends Component {
    constructor(props) {
        super();
        this.state = {
            data: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates pariatur nisi facilis ullam expedita, in dolor tempore ab cumque amet culpa adipisci sunt dolorem dolorum optio ipsum cupiditate magnam quidem."
        }
    }

    componentDidMount() {
        fetch('/api/study', {
            method: 'get',
            dataType: 'json',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            console.log("json");
            return response.json();
        })
        .then((responseData) => {
            console.log("setState");
            this.setState({data: responseData});
        })
        .catch((error) => {
            console.log('Error Fetching', error);
        });
    }


    render() {
        return (
            <div className="study-wrap">
                <div className="study-header">
                    <span className="mile">
                        PART1 > BASIC
                    </span>
                    <Button floated='right' className="study-start-button top">시작</Button>
                </div>
                <div className="study-content">
                    {this.state.data}
                </div>
                <Button fluid className="study-start-button bottom">시작</Button>
            </div>
        );
    }
}

StudyMaterial.propTypes = {

};

export default StudyMaterial;