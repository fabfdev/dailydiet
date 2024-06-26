import { TouchableOpacityProps } from 'react-native';

import { Container, PercentageRecipeTypeStypeProps, Icon } from "./styles";

import imgIcon from '@assets/arrow_up_right.png';
import { PercentageRecipeHeader } from '@components/PercentageRecipeHeader';

type Props = TouchableOpacityProps & {
    percentage: number;
    type?: PercentageRecipeTypeStypeProps;
}

export function PercentageRecipe({ percentage, type = 'PRIMARY', ...rest }: Props) {
    return (
        <Container type={type} {...rest}>
            <Icon source={imgIcon} type={type}/>
            <PercentageRecipeHeader percentage={percentage}/>
        </Container>
    )    
}