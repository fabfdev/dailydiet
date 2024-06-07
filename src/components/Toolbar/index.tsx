import { Container, BackIcon, Icon, Header } from './styles';
import imgBack from '@assets/arrow_left.png';

type Props = {
    title: string;
    handleBack: () => void;
}

export function Toolbar({ title, handleBack }: Props) {

    return (
        <Container>
            <BackIcon onPress={handleBack}>
                <Icon source={imgBack} />
            </BackIcon>
            <Header>
                {title}
            </Header>
        </Container>
    )
}