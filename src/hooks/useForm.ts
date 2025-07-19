import { useState } from 'react';
import type { keyValueType } from '../types/generic.types';

export const useForm = ( initialForm: keyValueType ) => {

    const [formState, setFormState] = useState(initialForm)

    const onInputChange = ({ target }: any) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
        })
    }

    const onResetForm = () => setFormState(initialForm)

    return {
        formState,
        onInputChange,
        onResetForm,
    }
}
