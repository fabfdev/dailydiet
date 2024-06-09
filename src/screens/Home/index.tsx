import { Container, Header, Logo, Profile, Snack } from './styles';
import { useCallback, useState } from 'react';
import { SectionList, View } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import imgLogo from '@assets/logo.png';
import imgProfile from '@assets/ellipse.png';

import { Spacer } from '@components/Spacer';
import { PercentageRecipe } from '@components/PercentageRecipe';
import { Button, ButtonIcon } from '@components/Button';
import { RecipeHeaderItem } from '@components/RecipeHeaderItem';
import { RecipeItem } from '@components/RecipeItem';
import { dietGetAll } from '@storage/diets/dietGetAll';
import { DietStorageDTO } from '@storage/diets/DietStorateDTO';
import { dietAddByDate } from '@storage/diets/dietAddByDate';
import { dietGetPercentage } from '@storage/diets/dietGetPercentage';

interface GroupedDiets {
    title: string;
    data: DietStorageDTO[];
}

export function Home() {

    const navigation = useNavigation();

    const [percentage, setPercentage] = useState(0);
    const [diets, setDiets] = useState<GroupedDiets[]>([]);

    function handleOpenStatisticsDetails() {
        navigation.navigate('statisticsDetails');
    }

    function handleOpenCreateMeal() {
        navigation.navigate('meal');
    }

    function handleMealDetails(diet: DietStorageDTO) {
        navigation.navigate('mealDetails', { diet: diet });
    }

    function groupData(data: DietStorageDTO[]) {
        return data.reduce((result: GroupedDiets[], item: DietStorageDTO) => {
            const date = new Date(item.date).toLocaleDateString();
            const index = result.findIndex(group => group.title === date);
            if (!result[index]) {
                result.push({
                    title: date,
                    data: []
                })
            }
            result.find(group => group.title === date)?.data.push(item);
            return result;
        }, []);
    }

    async function fetchDiets() {
        try {
            setPercentage(await dietGetPercentage());
            const data = await dietGetAll();
            setDiets(groupData(data));
        } catch (error) {
            console.log(error)
        }
    }

    useFocusEffect(useCallback(() => {
        fetchDiets();
    }, []))

    return (
        <Container>
            <SectionList
                sections={diets}
                keyExtractor={(item, index) => item.name + index}
                renderItem={({ item }) => (
                    <RecipeItem 
                        data={item}
                        onPress={() => handleMealDetails(item)}
                    />
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <RecipeHeaderItem title={title}/>
                )}
                ListHeaderComponent={() => (
                    <View>
                        <Header>
                            <Logo source={imgLogo} />
                            <Spacer />
                            <Profile source={imgProfile} />
                        </Header>

                        <PercentageRecipe 
                            percentage={percentage}
                            onPress={handleOpenStatisticsDetails}
                            type={percentage >= 50? 'PRIMARY' : 'SECONDARY'}
                        />

                        <Snack>
                            Refeições
                        </Snack>

                        <Button
                            title='Nova refeição'
                            icon={ButtonIcon.add}
                            onPress={handleOpenCreateMeal}
                        />
                    </View>
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
                stickySectionHeadersEnabled={false}
                ListHeaderComponentStyle={{ paddingTop: 16 }}
            />
        </Container>
    )
}