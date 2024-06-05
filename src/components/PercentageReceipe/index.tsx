import { TouchableOpacityProps } from 'react-native';

import { Container, PercentageReceipeTypeStypeProps, Icon } from "./styles";

import imgIcon from '@assets/arrow_up_right.png';
import { PercentageReceiptHeader } from '@components/PercentageReceiptHeader';

type Props = TouchableOpacityProps & {
    type?: PercentageReceipeTypeStypeProps;
}

export function PercentageReceipe({ type = 'PRIMARY', ...rest }: Props) {
    return (
        <Container type={type} {...rest}>
            <Icon source={imgIcon} type={type}/>
            <PercentageReceiptHeader />
        </Container>
    )    
}