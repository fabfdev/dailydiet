import { Container, Title, ContainerInput, InputTypeStyleProps } from './styles';

type Props = {
    title: string;
    multine?: InputTypeStyleProps
}

export function Input({ title, multine = false }: Props) {
    return (
        <Container>
            <Title>
                {title}
            </Title>
            <ContainerInput type={multine} multiline={multine}/>
        </Container>
    )
}