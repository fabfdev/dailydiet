import { TextProps } from 'react-native';
import { Title } from "./styles";

type Props = TextProps & {
    title: string;
}

export function InputTitle({ title, ...rest }: Props) {
    return (
        <Title {...rest}>
            {title}
        </Title>
    )
}