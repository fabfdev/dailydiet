import { Container, Header, Logo, Profile, Snack } from './styles';
import { SectionList } from 'react-native';

import imgLogo from '@assets/logo.png';
import imgProfile from '@assets/ellipse.png';

import { Spacer } from '@components/Spacer';
import { PercentageRecipe } from '@components/PercentageRecipe';
import { Button, ButtonIcon } from '@components/Button';
import { RecipeHeaderItem } from '@components/RecipeHeaderItem';
import { RecipeItem } from '@components/RecipeItem';

export function Home() {

    const data = [
        {
            title: '12.08.24',
            data: ['a', 'b', 'c', 'd', 'e', 'f', 'g']
        },
        {
            title: '13.08.24',
            data: ['a', 'b', 'c', 'd', 'e', 'f', 'g']
        }
    ]

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
                    <>
                        <Header>
                            <Logo source={imgLogo} />
                            <Spacer />
                            <Profile source={imgProfile} />
                        </Header>

                        <PercentageRecipe />

                        <Snack>
                            Refeições
                        </Snack>

                        <Button
                            title='Nova refeição'
                            icon={ButtonIcon.add}
                        />
                    </>
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
            />
        </Container>
    )
}