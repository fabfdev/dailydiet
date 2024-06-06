import { TouchableOpacityProps } from 'react-native';
import { Container, ContainerInput, DTTitle } from "./styles";

import { InputTitle } from "@components/InputTitle";

type Props = TouchableOpacityProps & {
    title: string;
    value?: string;
}

export function DTPickerInput({ title, value, ...rest }: Props) {
    return (
        <Container>
            <InputTitle title={title} />

            <ContainerInput {...rest}>
                <DTTitle>
                    {value}
                </DTTitle>
            </ContainerInput>
        </Container>
    )
}