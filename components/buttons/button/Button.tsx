import React, { isValidElement } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { ButtonProps } from './props/ButtonProps';
import styles from './styles/ButtonStyles';

const Button = (props: ButtonProps) => {
    const { children, ...rest } = props;
    const isTextComponent = isValidElement(children) && children.type === Text;
    
    return (
        <TouchableOpacity style={[styles.default_button, props.button_style, props.disabled && {opacity: 0.5}]} {...rest}>
            {isTextComponent ? <Text style={[styles.text, props.text_style]}>{children}</Text> : <View style={[props.text_style]}>{children}</View>}
        </TouchableOpacity>
    );
};

export default Button;

/**
 * HOW TO USE THIS COMPONENT
 * 
 * <Button 
 *      onPress={() => console.log('Button pressed')}
 *      text_style={{color: 'white'}}
 *      button_style={[styles.button, {backgroundColor: 'blue'}]}
 * >
 *    <Text>Press me</Text>
 * </Button>
 * 
 */
