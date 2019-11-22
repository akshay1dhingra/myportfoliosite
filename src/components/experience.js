import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
    render() {
        return (
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{ marginTop: '0px' }}>{this.props.companyName}</h4>
                    <h6 style={{ fontStyle: "italic" }}>{this.props.companyTitle}</h6>
                    <p>{this.props.companyDescription}</p>
                </Cell>
            </Grid>
        )
    }
}

export default Experience