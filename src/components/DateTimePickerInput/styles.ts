import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    padding: 0 8px;
`;


export const ContainerInput = styled.TextInput`
    height: 48px;
    border-color: ${({ theme }) => theme.COLORS.GRAY_5};
    border-radius: 6px;
    border-width: 1px;
    padding: 16px;
`;