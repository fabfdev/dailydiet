import { Container, Header, Logo, Profile } from './styles';

import imgLogo from '@assets/logo.png';
import imgProfile from '@assets/ellipse.png';
import { Spacer } from '@components/Spacer';
import { PercentageReceipe } from '@components/PercentageReceipe';

export function Home() {
    return (
        <Container>
            <Header>
                <Logo source={imgLogo} />
                <Spacer />
                <Profile source={imgProfile} />
            </Header>

            <PercentageReceipe />
        </Container>
    )
}