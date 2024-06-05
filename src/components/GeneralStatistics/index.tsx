import { Container, GeneralStatisticsStyleTypeProps, Title, Body } from './styles';

type Props = {
    type?: GeneralStatisticsStyleTypeProps;
}

export function GeneralStatistics({ type = 'TERTIARY' }: Props) {
    return (
        <Container type={type}>
            <Title>
                4
            </Title>
            <Body>
                melhor sequencia de pratos dentro da dieta
            </Body>
        </Container>
    )
}