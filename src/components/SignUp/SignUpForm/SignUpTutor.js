import React from "react";
import styled from "styled-components/native";
import { Formik } from 'formik';
import * as yup from 'yup';
import { Alert } from 'react-native';

import Margin from '../Margin';

export default SignUpTutor = () => {
  return(
    <Formik
      initialValues={{
        name: '',
        age: '',
        gender: '',
        university: '',
        major: '',
        phone: '',
      }}
      onSubmit={values => Alert.alert(JSON.stringify(values))}
      validationSchema={yup.object().shape({
        name: yup
          .string()
          .required('이름을 입력해주세요!'),
        age: yup
          .string()
          .required('나이를 입력해주세요!'),
        gender: yup
          .string()
          .required('성별을 입력해주세요!'),
        university: yup
          .string()
          .required('학교명을 입력해주세요!'),
        major: yup
          .string()
          .required('학과를 입력해주세요!'),
        phone: yup
          .string()
          .required('전화번호를 입력해주세요!')
      })}
    >
      {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
        <FormSection>
          <Input
            value={values.name}
            onChangeText={handleChange('name')}
            onBlur={() => setFieldTouched('name')}
            placeholder='이름'
          />
          { errors.name ?
            <ErrorText>{errors.name}</ErrorText> : 
            <Margin size={16} />
          }
          <Input
            value={values.age}
            onChangeText={handleChange('age')}
            onBlur={() => setFieldTouched('age')}
            placeholder='나이'
          />
          { errors.age ?
            <ErrorText>{errors.age}</ErrorText> : 
            <Margin size={16} />
          }
          <Input
            value={values.gender}
            onChangeText={handleChange('gender')}
            onBlur={() => setFieldTouched('gender')}
            placeholder='성별'
          />
          { errors.gender ?
            <ErrorText>{errors.gender}</ErrorText> : 
            <Margin size={16} />
          }
          <Input
            value={values.university}
            onChangeText={handleChange('university')}
            onBlur={() => setFieldTouched('university')}
            placeholder='대학교'
          />
          { errors.university ?
            <ErrorText>{errors.university}</ErrorText> : 
            <Margin size={16} />
          }
          <Input
            value={values.major}
            onChangeText={handleChange('major')}
            onBlur={() => setFieldTouched('major')}
            placeholder='학과'
          />
          { errors.major ?
            <ErrorText>{errors.major}</ErrorText> : 
            <Margin size={16} />
          }
          <Input
            value={values.phone}
            onChangeText={handleChange('phone')}
            onBlur={() => setFieldTouched('phone')}
            placeholder='전화번호'
          />
          { errors.phone ?
            <ErrorText>{errors.phone}</ErrorText> : 
            <Margin size={16} />
          }
        </FormSection>
      )}
    </Formik>
  );
}

const FormSection = styled.View`
  marginVertical: 10px;
`;

const Input = styled.TextInput`
  marginTop: 10px;
  marginHorizontal: 10px;
  border: 1px solid #E8E8E8;
  borderRadius: 12px;
  fontSize: 16px;
  paddingVertical: 4px;
  paddingHorizontal: 10px;
`;

const ErrorText = styled.Text`
  fontSize: 12px;
  color: #FF0D10;
  paddingHorizontal: 20px;
  paddingVertical: 0px;
`;