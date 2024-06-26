import { TextInput } from 'react-native';
import styled from "styled-components/native";

export type InputTypeStyleProps = boolean;

type Props = {
    type: InputTypeStyleProps;
}

export const Container = styled.View`
    padding: 0 24px;
`;

export const ContainerInput = styled(TextInput)<Props>`
    width: 100%;
    height: ${({ theme, type }) => type ? 120 : 48}px;
    border-color: ${({ theme }) => theme.COLORS.GRAY_5};
    border-radius: 6px;
    border-width: 1px;
    padding: 16px;
`;