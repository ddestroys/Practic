import React from 'react';
import * as Api from 'typescript-fetch-api'
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import Moment from 'react-moment';
import moment from 'moment';

class SubscribeComponent extends React.Component {
    constructor(props) {
        this.state = { 
            plans: [
                {id: "1"}
            ]
        }
    }
}
export default withRouter(SubscribeComponent);