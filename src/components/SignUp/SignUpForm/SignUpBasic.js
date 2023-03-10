import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { Formik, useFormikContext } from 'formik';
import * as yup from 'yup';
import { Alert } from 'react-native';

import Margin from "../../Margin";

export default SignUpBasic = () => {

  const [ isChange, setIsChange ] = useState(false);
  const [ body, setBody ] = useState();
  const [ errors, setErrors ] = useState();

  const formRef = useRef();

  useEffect(()=>{
    setBody(formRef.current.values)
    setErrors(formRef.current.errors)
    console.log(formRef.current.values, formRef.current.errors)
  }, [isChange])

  return(
    <Formik
      initialValues={{
        email: '',
        password: '',
        passwordConfirm: '',
        name: '',
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
        name: yup
          .string()
          .required('이름을 입력해주세요!'),
      })}
      innerRef={formRef}
    >
      {({ values, handleChange, errors, setFieldTouched}) => (
        <FormSection>
          <Input
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={() => {setFieldTouched('email'); setIsChange(!isChange)}}
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
            onBlur={() => {setFieldTouched('password'); setIsChange(!isChange)}}
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
            onBlur={() => {setFieldTouched('passwordConfirm'); setIsChange(!isChange)}}
            placeholder='비밀번호 확인'
          />
          { errors.passwordConfirm ?
            <ErrorText>{errors.passwordConfirm}</ErrorText> :
            <Margin size={16} />
          }
          <Input
            value={values.name}
            onChangeText={handleChange('name')}
            onBlur={() => {setFieldTouched('name'); setIsChange(!isChange)}}
            placeholder='이름'
          />
          { errors.name ?
            <ErrorText>{errors.name}</ErrorText> :
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
  fontFamily: "Medium";
  color: ${(props) => props.theme['grey_300']};
`;

const ErrorText = styled.Text`
  fontSize: 12px;
  fontFamily: "Regular";
  color: ${(props) => props.theme['red']};;
  paddingHorizontal: 20px;
  paddingVertical: 0px;
`;