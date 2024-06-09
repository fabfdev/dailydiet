import { useNavigation, useRoute } from '@react-navigation/native';
import { Container, Header, SubTitle, Img, BoldSubTitle } from './styles';

import positiveMealSaved from '@assets/positive_meal_saved.png';
import negativeMealSaved from '@assets/negative_meal_saved.png';

import { Button } from '@components/Button';

type RouteParams = {
    isInDiet: boolean;
}

export function MealSaved() {

    const navigation = useNavigation();
    const route = useRoute();
    const { isInDiet } = route.params as RouteParams;

    function handleNavigateHome() {
        navigation.navigate('home');
    }

    function getIsInDietSubtitle() {
        return (
            <SubTitle>
                Você continua <BoldSubTitle>dentro da dieta.</BoldSubTitle> Muito bem!
            </SubTitle>
        )
    }

    function getNotInDietSubtitle() {
        return (
            <SubTitle>
                Você <BoldSubTitle>saiu da dieta</BoldSubTitle> dessa vez, mas continue se esforçando e não desista!
            </SubTitle>
        )
    }

    return (
        <Container>
            <Header isInDiet={isInDiet}>
                {isInDiet ? 'Continue assim!' : 'Que pena!'}
            </Header>
            {isInDiet ? getIsInDietSubtitle() : getNotInDietSubtitle()}
            <Img source={isInDiet ? positiveMealSaved : negativeMealSaved} />
            <Button
                title='Ir para a página inicial'
                style={{ paddingHorizontal: 24 }}
                onPress={handleNavigateHome}
            />
        </Container>
    )
}