import * as yup from 'yup';

export default {
    SuperheroSchema: yup.object().shape({
        nickName: yup.string().test('test-review','required',value => (value && value.trim().length>=1))
            .required('Nick name field is required'),
        realName: yup.string().test('test-review',value => (value && value.trim().length>=1))
            .required('Real name field is required'),
        originDescription: yup.string().test('test-review',value => (value && value.trim().length>=1))
            .required('Origin description field is required'),
        superpowers: yup.string().test('test-review',value => (value && value.trim().length>=1))
            .required('Superpowers field is required'),
        catchPhrase: yup.string().test('test-review',value => (value && value.trim().length>=1))
            .required('Catch phrase field is required'),
    })
}
