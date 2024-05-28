import React, { isValidElement } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import LoadingIcon from '../../loading/spinners/LoadingIcon';
import { LoadingButtonProps } from '../button/props/ButtonProps';
import styles from '../button/styles/ButtonStyles';

const LoadingButton = (props: LoadingButtonProps) => {
    const { children, isLoading, loadingIconSize, ...rest } = props;
    const isTextComponent = isValidElement(children) && children.type === Text;
    
    return (
        <TouchableOpacity style={[styles.default_button, props.button_style, props.disabled && {opacity: 0.5}]} {...rest}>
            {
                isLoading ? (
                    <LoadingIcon size={loadingIconSize || 32}/>
                ) : (
                    isTextComponent ? <Text style={[styles.text, props.text_style]}>{children}</Text> : <View style={[props.text_style]}>{children}</View>
                )
            }
        </TouchableOpacity>
    );
};

export default LoadingButton;

/**
 * HOW TO USE THIS COMPONENT
 * 
 * <LoadingButton 
 *      onPress={() => console.log('Button pressed')}
 *      text_style={{color: 'white'}}
 *      button_style={[styles.button, {backgroundColor: 'blue'}]}
 *     isLoading={true}
 * >
 *    <Text>Press me</Text>
 * </LoadingButton>
 * 
 */
