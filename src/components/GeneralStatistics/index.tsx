import { Container, GeneralStatisticsStyleTypeProps, Title, Body } from './styles';

type Props = {
    dietQtd: number;
    title: string;
    type?: GeneralStatisticsStyleTypeProps;
}

export function GeneralStatistics({ dietQtd, title, type = 'TERTIARY' }: Props) {
    return (
        <Container type={type}>
            <Title>
                {dietQtd}
            </Title>
            <Body>
                {title}
            </Body>
        </Container>
    )
}