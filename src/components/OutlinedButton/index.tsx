import { TouchableOpacityProps } from 'react-native';

import { Container, Title, Icon } from "./styles";

import imgTrash from '@assets/trash.png';

export enum OutlinedButtonIcon {
    'delete' = imgTrash
}

type Props = TouchableOpacityProps & {
    title: string;
    icon?: OutlinedButtonIcon;
}

export function OutlinedButton({ title, icon, ...rest }: Props) {
    return (
        <Container {...rest}>
            {
                icon &&
                <Icon source={icon} />
            }
            <Title>
                {title}
            </Title>
        </Container>
    )
}