import { useNavigation } from '@react-navigation/native';

import { Toolbar } from '@components/Toolbar';
import { Body, Container, ContentContainer, DateTime, Title, HorizontalSpacer } from './styles';
import { InputTitle } from '@components/InputTitle';
import { Button, ButtonIcon } from '@components/Button';
import { OutlinedButton, OutlinedButtonIcon } from '@components/OutlinedButton';

export function MealDetails() {

    const navigation = useNavigation();

    function handleBack() {
        navigation.navigate('home');
    }

    return (
        <Container>
            <Toolbar 
                title='Refeição'
                handleBack={handleBack}
            />

            <ContentContainer>
                <Title>
                    Sanduíche
                </Title>
                <Body>
                    Sanduíche de pão integral com atum e salada de alface e tomate
                </Body>

                <InputTitle 
                    title='Data e hora'
                />
                <DateTime>
                    12/08/2024 às 16:00
                </DateTime>

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