import { Container, ContainerInput, InputTypeStyleProps } from './styles';

import { InputTitle } from '@components/InputTitle';

type Props = {
    title: string;
    multine?: InputTypeStyleProps
}

export function Input({ title, multine = false }: Props) {
    return (
        <Container>
            <InputTitle title={title}/>
            <ContainerInput type={multine} multiline={multine}/>
        </Container>
    )
}