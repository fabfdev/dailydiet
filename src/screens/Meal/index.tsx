import { Platform, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { BackIcon, Container, ContentContainer, HorizontalContainer, Header, Icon, Toolbar, VerticalSpacer } from './styles';
import imgBack from '@assets/arrow_left.png';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { DateTimePicker } from '@components/DateTimePickerInput';
import { InDiet } from '@components/InDiet';
import { InputTitle } from '@components/InputTitle';

export function Meal() {

    const navigation = useNavigation();

    function handleBack() {
        navigation.navigate('home');
    }

    return (
        <Container>
            <Toolbar>
                <BackIcon onPress={handleBack}>
                    <Icon source={imgBack} />
                </BackIcon>
                <Header>
                    Nova refeição
                </Header>
            </Toolbar>

            <ContentContainer>
                <Input title='Nome'/>
                <VerticalSpacer />
                <Input title='Descrição' multine={true}/>
                <VerticalSpacer />

                <HorizontalContainer>
                    <DateTimePicker title='Data' />
                    <DateTimePicker title='Hora' />
                </HorizontalContainer>

                <InputTitle title='Está dentro da dieta?' style={{ marginStart: 24, marginTop: 16, marginBottom: 2 }}/>
                <HorizontalContainer>
                    <InDiet title='Sim' buttonStyle='PRIMARY'/>
                    <InDiet title='Não' buttonStyle='SECONDARY'/>
                </HorizontalContainer>
            </ContentContainer>

            <Button 
                title='Cadastrar refeição'
                style={{ marginHorizontal: 16 }}
            />
        </Container>
    )
}