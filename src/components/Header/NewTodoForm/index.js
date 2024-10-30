import React from 'react'
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import validationShema from './validations';
import { useTodo } from '../../../context/TodoContext';


function NewTodoForm() {

    const {addTodo} =useTodo();

    return (
        <Formik
            initialValues={{
                gorev: '',
            }}

            onSubmit={(values,bag)=> {

            addTodo(values.gorev);
            //önceki verileri koruyarak yeni benzersiz idli todo ürettik Todocontext sayfasından ekledik
            
            bag.resetForm();
            }}
            validationSchema={validationShema}
            >

            <Form>
                <Field id="gorev" name="gorev" className="new-todo" placeholder="Görev Ekleyiniz" autoFocus />
            </Form>
        </Formik>


    )
}

export default NewTodoForm;