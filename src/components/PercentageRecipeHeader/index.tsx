import { Body, Container, Header } from "./styles";

type Props = {
    percentage: number;
}

export function PercentageRecipeHeader({ percentage }: Props) {
    return (
        <Container>
            <Header>
                {Number(percentage).toFixed(2)}%
            </Header>
            <Body>
                das refeições dentro da dieta
            </Body>
        </Container>
    )
}