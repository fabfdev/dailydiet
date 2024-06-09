import { PercentageRecipeHeader } from '@components/PercentageRecipeHeader';
import { useEffect, useState } from 'react';
import { Platform, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, BackIcon, Icon, StatisticsContainer, Title, HorizontalContainer } from './styles';
import imgBackButton from '@assets/arrow_left.png';

import { GeneralStatistics } from '@components/GeneralStatistics';
import { dietGetPercentage } from '@storage/diets/dietGetPercentage';
import { dietGetAll } from '@storage/diets/dietGetAll';
import { dietGetInDiet } from '@storage/diets/dietGetInDiet';
import { dietGetNotInDiet } from '@storage/diets/dietGetNotInDiet';

export function StatisticsDetails() {

    const navigation = useNavigation();

    const [percentage, setPercentage] = useState(0);
    const [totalDiets, setTotalDiets] = useState(0);
    const [inDiet, setInDiet] = useState(0);
    const [notInDiet, setNotInDiet] = useState(0);

    function handleGoBack() {
        navigation.navigate('home');
    }

    async function fetchData() {
        setPercentage(await dietGetPercentage());
        setTotalDiets((await dietGetAll()).length);
        setInDiet((await dietGetInDiet()).length);
        setNotInDiet((await dietGetNotInDiet()).length);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Container 
            edges={Platform.OS === 'ios' ? ["top", "right", "left"] : ["top", "right", "bottom", "left"]}
            isInDiet={percentage >= 50}
        >
            <BackIcon onPress={handleGoBack}>
                <Icon source={imgBackButton} />
            </BackIcon>
            <PercentageRecipeHeader percentage={percentage}/>
            <StatisticsContainer >
                <Title>Estatísticas gerais</Title>
                <GeneralStatistics dietQtd={0} title='melhor sequência de pratos dentro da dieta'/>
                <GeneralStatistics dietQtd={totalDiets} title='refeições registradas'/>
                <HorizontalContainer>
                    <GeneralStatistics dietQtd={inDiet} title='refeições dentro da dieta' type='PRIMARY'/>
                    <View style={{ width: 8 }} />
                    <GeneralStatistics dietQtd={notInDiet} title='refeições fora da dieta' type='SECONDARY'/>
                </HorizontalContainer>
            </StatisticsContainer>
        </Container>
    )
}