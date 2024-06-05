import { Container, Icon, Title, InDietButtonStyleProps } from './styles';

type Props = {
    title: string;
    isActive?: boolean;
    buttonStyle?: InDietButtonStyleProps
}

export function InDiet({ title, isActive = false, buttonStyle = 'DEFAULT' }: Props) {
    return (
        <Container isActive={isActive} buttonStyle={buttonStyle}>
            <Icon buttonStyle={buttonStyle}/>
            <Title>
                {title}
            </Title>
        </Container>
    )
}