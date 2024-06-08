import { useNavigation, useRoute } from '@react-navigation/native';

import { Toolbar } from '@components/Toolbar';
import { Body, Container, ContentContainer, DateTime, Title, HorizontalSpacer, DietStatusContainer, DietStatusIcon, DietStatusTitle } from './styles';
import { InputTitle } from '@components/InputTitle';
import { Button, ButtonIcon } from '@components/Button';
import { OutlinedButton, OutlinedButtonIcon } from '@components/OutlinedButton';
import { Spacer } from '@components/Spacer';
import { DietStorageDTO } from '@storage/diets/DietStorateDTO';

type RouteParams = {
    diet: DietStorageDTO;
}

export function MealDetails() {

    const navigation = useNavigation();
    const route = useRoute();
    const { diet } = route.params as RouteParams;

    function handleBack() {
        navigation.navigate('home');
    }

    return (
        <Container type={diet.status ? 'PRIMARY' : 'SECONDARY'}>
            <Toolbar
                title='Refeição'
                handleBack={handleBack}
            />

            <ContentContainer>
                <Title>
                    {diet.name}
                </Title>
                <Body>
                    {diet.description}
                </Body>

                <InputTitle
                    title='Data e hora'
                />
                <DateTime>
                    {new Date(diet.date).toLocaleDateString()} às {new Date(diet.time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                </DateTime>

                <DietStatusContainer>
                    <DietStatusIcon type={diet.status ? 'PRIMARY' : 'SECONDARY'} />
                    <DietStatusTitle>
                        {diet.status ? 'dentro da dieta' : 'fora da dieta'}
                    </DietStatusTitle>
                </DietStatusContainer>

                <Spacer />

                <Button
                    title='Editar refeição'
                    icon={ButtonIcon.edit}
                />
                <HorizontalSpacer />
                <OutlinedButton
                    title='Excluir refeição'
                    icon={OutlinedButtonIcon.delete}
                />
            </ContentContainer>
        </Container>
    )
}