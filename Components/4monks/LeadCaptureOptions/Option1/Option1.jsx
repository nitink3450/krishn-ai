import { Button, Modal } from 'antd';
import HTMLReactParser from 'html-react-parser';
import React, { useEffect, useState } from 'react';
import style from './Option1.module.scss';
import { useRouter } from 'next/router';

const Option1 = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [nameError, setNameError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [isEnabled, setIsEnabled] = useState(false);
    const [isNameValidate, setIsNameValidate] = useState(false);
    const [isPhoneValidate, setIsPhoneValidate] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    // useEffect(() => {
    //     const handleBeforeUnload = (event) => {
    //         event.preventDefault();
    //         event.returnValue = ''; // Required for Chrome

    //         // setShowModal(true);
    //         setIsModalOpen(true);
    //         console.log("detected 12");
    //     };

    //     window.addEventListener('beforeunload', handleBeforeUnload);

    //     return () => {
    //         window.removeEventListener('beforeunload', handleBeforeUnload);
    //     };
    // }, []);

    
    
    useEffect(() => {
            const addEvent = (obj, evt, fn) => {
                if (obj.addEventListener) {
                    obj.addEventListener(evt, fn, false);
                } else if (obj.attachEvent) {
                    obj.attachEvent("on" + evt, fn);
                }
            };

            addEvent(document, 'mouseout', function (evt) {
                if (evt.toElement == null && evt.relatedTarget == null) {
                    setIsModalOpen(true);
                }
            });


            // Clean up the event listeners when the component is unmounted
            return () => {
                document.removeEventListener('mouseout', function (evt) {
                    if (evt.toElement == null && evt.relatedTarget == null) {
                        setIsModalOpen(true);
                    }
                });
            };

    }, []);

    // const router = useRouter();
    // useEffect(() => {
    //     const handleBeforeUnload = (event) => {
    //       event.preventDefault();
    //       event.returnValue = ''; // Required for Chrome
    //     };
    
    //     const handleRouteChange = (url) => {
    //       // Display your confirmation message or perform any other actions
    //       const shouldPrompt = window.confirm('Are you sure you want to leave the page?');
    //       if (!shouldPrompt) {
    //         router.events.emit('routeChangeError');
    //         throw 'Abort route change. Please ignore this error.';
    //       }
    //     };
    
    //     window.addEventListener('beforeunload', handleBeforeUnload);
    //     router.events.on('routeChangeStart', handleRouteChange);
    
    //     return () => {
    //       window.removeEventListener('beforeunload', handleBeforeUnload);
    //       router.events.off('routeChangeStart', handleRouteChange);
    //     };
    //   }, [router.events]);


    const handleFocus = (event) => {
        const target = event.target;
        if (!target.value) {
            target.value = '+91 - ';
        }
    };

    let isValid;
    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        if (target.name === 'phone') {
            if (value.startsWith('+91 - ')) {
                // Only allow editing the digits after the prefix
                setPhone(
                    '+91 - ' +
                    value
                        .substring(6)
                        .replace(/[^0-9]/g, '')
                        .substring(0, 10)
                );
            } else {
                // Don't allow editing the prefix
                setPhone(phone);
            }
        } else {
            if (target.name === 'name') {
                const inputVal = value.replace(/[^a-z\s]/gi, '');
                setName(inputVal);
                if (value.trim().length < 1) {
                    setNameError('Kindly enter your full name');
                    setIsNameValidate(false);
                } else {
                    setNameError('');
                    setIsNameValidate(true);
                }
            }
        }

        if (target.name === 'phone') {
            if (!value || value.length < 16) {
                setPhoneError('Kindly enter your mobile number');
                setIsPhoneValidate(false);
            } else {
                setPhoneError('');
                setIsPhoneValidate(true);
            }
        }
    };

    // validation to enable confirm btn
    useEffect(() => {
        isValid = isNameValidate && isPhoneValidate;
        if (isValid) {
            // Form is valid, submit data
            setIsEnabled(true);
        } else {
            setIsEnabled(false);
        }
    }, [isNameValidate, isPhoneValidate]);

    const handleBlur = (event) => {
        const target = event.target;
        const value = target.value;

        if (target.name === 'phone' && !value.substring(6)) {
            setPhone(HTMLReactParser(''));
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('submited');
        setIsSubmitted(true);
    };

    const customStyle = {
        height: 'fit-content',
        borderRadius: '8px',
        overflow: 'hidden',
        // border : "1px solid red",
        padding: '0',
        top: '50px',
    };

    const customBodyStyle = {
        height: 'fit-content',
        borderRadius: '8px',
        overflow: 'hidden',
    };

    return (
        <>
            {/* <Button style={{ marginTop: '100px' }} type="primary" onClick={showModal}>
        Open Modal
      </Button> */}
            <Modal
                zIndex={9999}
                footer={null}
                title={false}
                bodyStyle={customBodyStyle}
                style={customStyle}
                width="1324px"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                className="option-modal"


            >
                <section className={style.option1}>
                    <div
                        className={`${style.option1_box}`}
                    >
                        {!isSubmitted ? (
                            <>
                                <div className={style.option1_box_beforeugo}>Wait!</div>
                                <div className={style.option1_box_wrapper}>
                                    <div className={style.option1_box_wrapper_desc}>
                                        Still thinking to go or not to go for an Ather? Leave your
                                        details and we will get back to you to clear the air.
                                    </div>
                                    <div className={style.option1_box_wrapper_formWrap}>
                                        <form className={`${style.formBox}`} onSubmit={handleSubmit}>
                                            <div className={`${style.inputBox}`}>
                                                <div className={`${style.whiteBox}`}>
                                                    <div className={`${style.inputContainer}`}>
                                                        <input
                                                            type="text"
                                                            required
                                                            name="name"
                                                            value={name}
                                                            onChange={handleChange}
                                                        />
                                                        <label>
                                                            Name <span>*</span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <p
                                                    className={`${style.errorMessage} ${nameError ? style.error : ''
                                                        }`}
                                                >
                                                    {nameError}
                                                </p>
                                            </div>
                                            <div className={`${style.inputBox}`}>
                                                <div className={`${style.whiteBox}`}>
                                                    <div className={`${style.inputContainer}`}>
                                                        <input
                                                            type="text"
                                                            required
                                                            name="phone"
                                                            onBlur={handleBlur}
                                                            value={phone}
                                                            onFocus={handleFocus}
                                                            onChange={handleChange}
                                                            maxLength="16"
                                                        />
                                                        <label>
                                                            Phone number<span>*</span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <p
                                                    className={`${style.errorMessage} ${phoneError ? style.error : ''
                                                        }`}
                                                >
                                                    {phoneError}
                                                </p>
                                            </div>

                                            <div className={`${style.buttonBox}`}>
                                                <button
                                                    className={`${style.confirm}`}
                                                    type="submit"
                                                    disabled={isEnabled ? null : 'disabled'}
                                                >
                                                    Submit
                                                </button>
                                            </div>
                                        </form>
                                        <p className={style.option1_box_wrapper_formWrap_disclaimer}>
                                            By clicking on Submit you are agreeing to our &nbsp;
                                            <a
                                                href="https://www.atherenergy.com/policy"
                                                rel="noreferrer"
                                                target="_blank"
                                            >
                                                Privacy Policy
                                            </a>
                                            &nbsp; and are allowing us (AtherEnergy) and our service
                                            partners to get in touch with you by phone call.
                                        </p>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className={style.option1_box_thanks}>
                                <div className={style.option1_box_thanks_title}>Thank you!</div>
                                <p className={style.option1_box_thanks_msg}>
                                    Your submission has been received.{' '}
                                    <br className={style.option1_box_thanks_msg_br} /> We will be in
                                    touch and contact you soon!
                                </p>
                            </div>
                        )}
                    </div>
                </section>
            </Modal>
        </>
    );
};

export default Option1;