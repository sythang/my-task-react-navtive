import React, { Component } from "react";
import { Text } from 'react-native';

export default class FormValidationMessage extends Component {
    render() {
        return (
            <Text>
                This field is required
            </Text>
        );
    }
}