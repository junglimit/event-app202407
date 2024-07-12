import React, { useState } from 'react';
import styles from './SignUpForm.module.scss';
import EmailInput from './EmailInput';
import VerificationInput from './VerificationInput';
import ProgressBar from '../ProgressBar';
import PasswordInput from "./PasswordInput";

const SignUpForm = () => {

    // 현재 몇 단계가 진행되고 있는지
    const [step, setStep] = useState(1);

    // 단계가 성공적으로 완료되었는지
    const [success, setSuccess] = useState(false);

    // 입력된 이메일
    const [enteredEmail, setEnteredEmail] = useState('');

    // 입력된 패스워드
    const [enteredPassword, setEnteredPassword] = useState('');

    // 이메일 중복확인이 끝났을 때 호출될 함수
    const emailSuccessHandler = (email) => {

        setSuccess(true);
        setEnteredEmail(email);

        setTimeout(() => {
            setStep(2);
            setSuccess(false);
        }, 1500);

    };

    const verifyHandler = (password) => {
        setSuccess(true);
        setEnteredPassword(password)

        setTimeout(() => {
            setStep(3);
            setSuccess(false);
        }, 1500)
    }

    return (
        <div className={styles.signupForm}>
            <div className={styles.formStepActive}>

                {step === 1 && <EmailInput onSuccess={emailSuccessHandler} />}

                {step === 2 && <VerificationInput onSuccess={verifyHandler} email={enteredEmail} />}

                {step === 3 && <PasswordInput />}

                {success && <ProgressBar />}

            </div>
        </div>
    );
};

export default SignUpForm;
