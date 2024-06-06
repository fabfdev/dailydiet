import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { BackIcon, Container, ContentContainer, HorizontalContainer, Header, Icon, Toolbar, VerticalSpacer } from './styles';
import imgBack from '@assets/arrow_left.png';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { DTPickerInput } from '@components/DTPickerInput';
import { InDiet } from '@components/InDiet';
import { InputTitle } from '@components/InputTitle';

export function Meal() {

    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);
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
                <Input title='Nome' />
                <VerticalSpacer />
                <Input title='Descrição' multine={true} />
                <VerticalSpacer />

                <HorizontalContainer>
                    <DTPickerInput title='Data' onPress={() => {
                        setShowDatePicker(true)
                    }} />
                    <DTPickerInput title='Hora' onPress={() => {
                        setShowTimePicker(true)
                    }} />
                </HorizontalContainer>

                <InputTitle title='Está dentro da dieta?' style={{ marginStart: 24, marginTop: 16, marginBottom: 2 }} />
                <HorizontalContainer>
                    <InDiet title='Sim' buttonStyle='PRIMARY' />
                    <InDiet title='Não' buttonStyle='SECONDARY' />
                </HorizontalContainer>
            </ContentContainer>

            <Button
                title='Cadastrar refeição'
                style={{ marginHorizontal: 16 }}
            />

            <DateTimePickerModal
                isVisible={showDatePicker}
                mode='date'
                onConfirm={(date) => {
                    console.log(date);
                    setShowDatePicker(false);
                }}
                onCancel={() => {
                    setShowDatePicker(false);
                }}
            />

            <DateTimePickerModal
                isVisible={showTimePicker}
                mode='time'
                onConfirm={(date) => {
                    console.log(date);
                    setShowTimePicker(false);
                }}
                onCancel={() => {
                    setShowTimePicker(false);
                }}
            />
        </Container>
    )
}