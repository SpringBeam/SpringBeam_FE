import React from 'react';
import styled from 'styled-components/native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Alert } from 'react-native';

import Margin from '../Margin';

export default SignUpBasic = () => {
  return(
    <Formik
      initialValues={{
        email: '',
        password: '',
        passwordConfirm: '',
      }}
      onSubmit={values => Alert.alert(JSON.stringify(values))}
      validationSchema={yup.object().shape({
        email: yup
          .string()
          .email('올바른 이메일 형식이 아닙니다!')
          .required('이메일을 입력해주세요!'),
        password: yup
          .string()
          .min(4, '비밀번호는 최소 4자리입니다.')
          .max(16, '비밀번호는 최대 16자리입니다.')
          .required('비밀번호를 입력해주세요!'),
        passwordConfirm: yup
          .string()
          .oneOf([yup.ref("password")], '비밀번호 확인이 비밀번호와 일치하지 않습니다!')
          .required('비밀번호 확인을 입력해주세요!'),
      })}
    >
      {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmmit }) => (
        <FormSection>
          <Input
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={() => setFieldTouched('email')}
            placeholder='이메일'
          />
          { errors.email ?
            <ErrorText>{errors.email}</ErrorText> :
            <Margin size={16} />
          }
          <Input
            value={values.password}
            secureTextEntry={true}
            onChangeText={handleChange('password')}
            onBlur={() => setFieldTouched('password')}
            placeholder='비밀번호'
          />
          { errors.password ? 
            <ErrorText>{errors.password}</ErrorText> :
            <Margin size={16} />
          }
          <Input
            value={values.passwordConfirm}
            secureTextEntry={true}
            onChangeText={handleChange('passwordConfirm')}
            onBlur={() => setFieldTouched('passwordConfirm')}
            placeholder='비밀번호 확인'
          />
          { errors.passwordConfirm ?
            <ErrorText>{errors.passwordConfirm}</ErrorText> :
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