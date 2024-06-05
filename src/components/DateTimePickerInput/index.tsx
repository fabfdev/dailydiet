import { Container, Title, ContainerInput } from "./styles";

type Props = {
    title: string;
}

export function DateTimePicker({ title }: Props) {
    return (
        <Container>
            <Title>
                {title}
            </Title>

            <ContainerInput>

            </ContainerInput>
        </Container>
    )
}