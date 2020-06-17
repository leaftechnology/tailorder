import * as React from "react";
import { Text, Item, Input } from "native-base";

import styles from "../styles";

class FormInput extends React.PureComponent {
    render() {
        const { label, value, onChangeText, placeholder } = this.props;
        return (
            <React.Fragment>
                <Text style={styles.formInputText}>{label}</Text>
                <Item regular>
                    <Input
                        value={value}
                        onChangeText={onChangeText}
                        placeholder={placeholder || ""}
                    />
                </Item>
            </React.Fragment>
        );
    }
}

export default FormInput;
