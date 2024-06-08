import { TouchableOpacityProps } from 'react-native';
import { Container, Time, Spacer, Title, Indicator } from './styles';

import { DietStorageDTO } from '@storage/diets/DietStorateDTO';

type Props = TouchableOpacityProps & {
    data: DietStorageDTO;
}

export function RecipeItem({ data, ...rest }: Props) {
    return (
        <Container {...rest}>
            <Time>
                {data.time}
            </Time>
            <Spacer />
            <Title >
                {data.name}
            </Title>
            <Indicator type={data.status ? 'PRIMARY' : 'SECONDARY'}/>
        </Container>
    )
}