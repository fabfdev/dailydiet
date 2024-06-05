import { PercentageRecipeHeader } from '@components/PercentageRecipeHeader';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, BackIcon, Icon, StatisticsContainer, Title, HorizontalContainer } from './styles';
import imgBackButton from '@assets/arrow_left.png';
import { GeneralStatistics } from '@components/GeneralStatistics';

export function StatisticsDetails() {

    const navigation = useNavigation();

    function handleGoBack() {
        navigation.navigate('home');
    }

    return (
        <Container>
            <BackIcon onPress={handleGoBack}>
                <Icon source={imgBackButton} />
            </BackIcon>
            <PercentageRecipeHeader />
            <StatisticsContainer >
                <Title>Estatísticas gerais</Title>
                <GeneralStatistics />
                <GeneralStatistics />
                <HorizontalContainer>
                    <GeneralStatistics type='PRIMARY'/>
                    <View style={{ width: 8 }} />
                    <GeneralStatistics type='SECONDARY'/>
                </HorizontalContainer>
            </StatisticsContainer>
        </Container>
    )
}