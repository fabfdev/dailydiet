import { Container, Time, Spacer, Title, Indicator, RecipeIndicatorTypeStyleProps } from './styles';

type Props = {
    indicatorType?: RecipeIndicatorTypeStyleProps;
}

export function RecipeItem({ indicatorType = 'PRIMARY' }: Props) {
    return (
        <Container>
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