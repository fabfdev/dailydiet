import { Container, ContainerInput } from "./styles";

import { InputTitle } from "@components/InputTitle";

type Props = {
    title: string;
}

export function DateTimePicker({ title }: Props) {
    return (
        <Container>
            <InputTitle title={title} />

            <ContainerInput>

            </ContainerInput>
        </Container>
    )
}