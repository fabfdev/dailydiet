import { TouchableOpacityProps } from 'react-native';
import { Container, Icon, Title, InDietButtonStyleProps, InDietStateButtonStyleProps } from './styles';

type Props = TouchableOpacityProps & InDietStateButtonStyleProps & {
    title: string;
    buttonStyle?: InDietButtonStyleProps
}

export function InDiet({ title, isActive = false, buttonStyle = 'DEFAULT', ...rest }: Props) {
    return (
        <Container isActive={isActive} buttonStyle={buttonStyle} {...rest}>
            <Icon buttonStyle={buttonStyle}/>
            <Title>
                {title}
            </Title>
        </Container>
    )
}