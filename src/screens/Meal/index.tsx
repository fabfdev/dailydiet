import { useRef, useState } from 'react';
import { TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { Container, ContentContainer, HorizontalContainer, VerticalSpacer } from './styles';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { DTPickerInput } from '@components/DTPickerInput';
import { InDiet } from '@components/InDiet';
import { InputTitle } from '@components/InputTitle';
import { Toolbar } from '@components/Toolbar';
import { dietAddByDate } from '@storage/diets/dietAddByDate';

enum ButtonInDiet {
    POSITIVE,
    NEGATIVE
}

export function Meal() {

    const mealNameRef = useRef<TextInput>(null);
    const [mealName, setMealName] = useState('')

    const mealDescriptionRef = useRef<TextInput>(null);
    const [mealDescription, setMealDescription] = useState('')

    const [date, setDate] = useState<Date>()
    const [time, setTime] = useState<Date>()

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

    async function handleSavelMeal() {
        if (mealName.trim().length === 0 || mealDescription.trim().length === 0 || date === undefined || time === undefined || buttonInDiet === undefined) {
            console.log('campos não preenchidos')
            return;
        }

        const newDiet = {
            name: mealName,
            description: mealDescription,
            date: date,
            time: time,
            status: buttonInDiet === ButtonInDiet.POSITIVE
        }

        try {
            await dietAddByDate(newDiet);
            handleNavigateResultMealSaved();
        } catch (error) {
            console.log(error)
        }
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
                    <DTPickerInput title='Data' value={date?.toLocaleDateString()} onPress={() => {
                        setShowDatePicker(true)
                    }} />
                    <DTPickerInput title='Hora' value={time?.toLocaleTimeString()} onPress={() => {
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
                    setDate(date);
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
                    setTime(date);
                    setShowTimePicker(false);
                }}
                onCancel={() => {
                    setShowTimePicker(false);
                }}
            />
        </Container>
    )
}