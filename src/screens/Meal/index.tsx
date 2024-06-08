import { useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { Container, ContentContainer, HorizontalContainer, VerticalSpacer } from './styles';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { DTPickerInput } from '@components/DTPickerInput';
import { InDiet } from '@components/InDiet';
import { InputTitle } from '@components/InputTitle';
import { Toolbar } from '@components/Toolbar';
import { TextInput } from 'react-native';

enum ButtonInDiet {
    POSITIVE,
    NEGATIVE
}

export function Meal() {

    const mealNameRef = useRef<TextInput>(null);
    const [mealName, setMealName] = useState('')

    const mealDescriptionRef = useRef<TextInput>(null);
    const [mealDescription, setMealDescription] = useState('')

    const [date, setDate] = useState('')
    const [time, setTime] = useState('')

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

    function handleSavelMeal() {
        if (mealName.trim().length === 0 || mealDescription.trim().length === 0 || date.trim().length === 0 || time.trim().length === 0 || buttonInDiet === undefined) {
            console.log('campos não preenchidos')
            return;
        }
        console.log('campos preenchidos')
    }

    return (
        <Container>

            <Toolbar
                title='Nova refeição'
                handleBack={handleBack}
            />

            <ContentContainer>
                <Input
                    inputRef={mealNameRef}
                    title='Nome'
                    onChangeText={setMealName}
                />
                <VerticalSpacer />
                <Input
                    inputRef={mealDescriptionRef}
                    title='Descrição'
                    multine={true}
                    onChangeText={setMealDescription}
                />
                <VerticalSpacer />

                <HorizontalContainer>
                    <DTPickerInput title='Data' value={date} onPress={() => {
                        setShowDatePicker(true)
                    }} />
                    <DTPickerInput title='Hora' value={time} onPress={() => {
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
                onPress={handleSavelMeal}
            />

            <DateTimePickerModal
                isVisible={showDatePicker}
                mode='date'
                onConfirm={(date) => {
                    setDate(date.toLocaleDateString());
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
                    setTime(date.toLocaleTimeString());
                    setShowTimePicker(false);
                }}
                onCancel={() => {
                    setShowTimePicker(false);
                }}
            />
        </Container>
    )
}