import { Container, Header, Logo, Profile, Snack } from './styles';
import { SectionList, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import imgLogo from '@assets/logo.png';
import imgProfile from '@assets/ellipse.png';

import { Spacer } from '@components/Spacer';
import { PercentageRecipe } from '@components/PercentageRecipe';
import { Button, ButtonIcon } from '@components/Button';
import { RecipeHeaderItem } from '@components/RecipeHeaderItem';
import { RecipeItem } from '@components/RecipeItem';

export function Home() {

    const navigation = useNavigation();

    const data = [
        {
            title: '12.08.24',
            data: ['a', 'b', 'c', 'd']
        },
        {
            title: '13.08.24',
            data: ['h', 'i']
        }
    ]

    function handleOpenStatisticsDetails() {
        navigation.navigate('statisticsDetails');
    }

    function handleOpenCreateMeal() {
        navigation.navigate('meal');
    }

    return (
        <Container>
            <SectionList
                sections={data}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => (
                    <RecipeItem />
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <RecipeHeaderItem/>
                )}
                ListHeaderComponent={() => (
                    <View>
                        <Header>
                            <Logo source={imgLogo} />
                            <Spacer />
                            <Profile source={imgProfile} />
                        </Header>

                        <PercentageRecipe onPress={handleOpenStatisticsDetails}/>

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