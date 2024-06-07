import { TouchableOpacityProps } from 'react-native';
import { Container, Time, Spacer, Title, Indicator, RecipeIndicatorTypeStyleProps } from './styles';

type Props = TouchableOpacityProps & {
    indicatorType?: RecipeIndicatorTypeStyleProps;
}

export function RecipeItem({ indicatorType = 'PRIMARY', ...rest }: Props) {
    return (
        <Container {...rest}>
            <Time>
                20:00
            </Time>
            <Spacer />
            <Title >
                Salada cesar com frango
            </Title>
            <Indicator type={indicatorType}/>
        </Container>
    )
}