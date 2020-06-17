import * as React from "react";
import { Form, Text } from "native-base";

import styles from "../styles";

class FormRow extends React.PureComponent {
    render() {
        const { title, subtitle, children, notFirst } = this.props;
        const formStyle = [styles.cardView];
        notFirst && formStyle.push(styles.cardViewNext);
        return (
            <Form style={formStyle}>
                <Text>{title}</Text>
                <Text style={styles.cardHelpText}>
                    {subtitle}
                </Text>
                {children}
            </Form>
        );
    }
}

export default FormRow;
