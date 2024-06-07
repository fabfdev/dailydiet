import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { Container, ContentContainer, HorizontalContainer, VerticalSpacer } from './styles';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { DTPickerInput } from '@components/DTPickerInput';
import { InDiet } from '@components/InDiet';
import { InputTitle } from '@components/InputTitle';
import { Toolbar } from '@components/Toolbar';

enum ButtonInDiet {
    POSITIVE,
    NEGATIVE
}

export function Meal() {

    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [buttonInDiet, setButtonInDiet] = useState<ButtonInDiet>();
    const navigation = useNavigation();

    function handleNavigateResultMealSaved() {
        navigation.navigate('resultMealSaved');
    }

    function handleBack() {
        navigation.navigate('home');
    }

    return (
        <Container>
            
            <Toolbar 
                title='Nova refeição'
                handleBack={handleBack}
            />

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
                    <InDiet
                        title='Sim'
                        buttonStyle='PRIMARY'
                        isActive={buttonInDiet === ButtonInDiet.POSITIVE}
                        onPress={() => setButtonInDiet(ButtonInDiet.POSITIVE)}
                    />
                    <InDiet
                        title='Não'
                        buttonStyle='SECONDARY'
                        isActive={buttonInDiet === ButtonInDiet.NEGATIVE}
                        onPress={() => setButtonInDiet(ButtonInDiet.NEGATIVE)}
                    />
                </HorizontalContainer>
            </ContentContainer>

            <Button
                title='Cadastrar refeição'
                style={{ marginHorizontal: 16 }}
                onPress={handleNavigateResultMealSaved}
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