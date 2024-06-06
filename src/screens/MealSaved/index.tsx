import { Container, Header, SubTitle, Img, BoldSubTitle } from './styles';
import { useNavigation } from '@react-navigation/native';

import positiveMealSaved from '@assets/positive_meal_saved.png';
import negativeMealSaved from '@assets/negative_meal_saved.png';
import { Button } from '@components/Button';

export function MealSaved() {

    const navigation = useNavigation();

    function handleNavigateHome() {
        navigation.navigate('home');
    }

    return (
        <Container>
            <Header>
                Continue assim!
            </Header>
            <SubTitle>
                Você continua <BoldSubTitle>dentro da dieta.</BoldSubTitle> Muito bem!
            </SubTitle>
            <Img source={positiveMealSaved} />
            <Button
                title='Ir para a página inicial'
                style={{ paddingHorizontal: 24 }}
                onPress={handleNavigateHome}
            />
        </Container>
    )
}