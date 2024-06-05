import { TouchableOpacityProps } from 'react-native';

import { Container, Title, Icon } from "./styles";

import imgAdd from '@assets/add.png';
import imgEdit from '@assets/pencil_edit.png';
import imgTrash from '@assets/trash.png';

export enum ButtonIcon {
    'add' = imgAdd,
    'edit' = imgEdit,
    'delete' = imgTrash
}

type Props = TouchableOpacityProps & {
    title: string;
    icon?: ButtonIcon;
}

export function Button({ title, icon, ...rest }: Props) {
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