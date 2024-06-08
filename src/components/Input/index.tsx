import { TextInput, TextInputProps } from 'react-native';
import { Container, ContainerInput, InputTypeStyleProps } from './styles';

import { InputTitle } from '@components/InputTitle';

type Props = TextInputProps & {
    title: string;
    inputRef?: React.RefObject<TextInput>;
    multine?: InputTypeStyleProps
}

export function Input({ inputRef, title, multine = false, ...rest }: Props) {
    return (
        <Container>
            <InputTitle title={title}/>
            <ContainerInput ref={inputRef} type={multine} multiline={multine} {...rest} />
        </Container>
    )
}