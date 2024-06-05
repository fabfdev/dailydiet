import { Platform, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { BackIcon, Container, ContentContainer, DateTimeContainer, Header, Icon, Toolbar, VerticalSpacer } from './styles';
import imgBack from '@assets/arrow_left.png';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { DateTimePicker } from '@components/DateTimePickerInput';

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

                <DateTimeContainer>
                    <DateTimePicker title='Data' />
                    <DateTimePicker title='Hora' />
                </DateTimeContainer>
            </ContentContainer>

            <Button 
                title='Cadastrar refeição'
                style={{ marginHorizontal: 16 }}
            />
        </Container>
    )
}