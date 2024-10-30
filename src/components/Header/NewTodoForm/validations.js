import * as Yup from 'yup';

const validations = Yup.object().shape({
    gorev:Yup.string().required("Görev Alanı Zorunludur!!!"),
})

export default validations;