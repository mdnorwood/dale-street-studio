import React from 'react';
import Mailchimp from 'react-mailchimp-form';
import './mailchimp-subscribe-form.styled.scss';




const MailchimpSubscribeForm = () => {

        return (
            <Mailchimp 
                action={process.env.REACT_APP_MAILCHIMP_KEY}
                className='chimp-forms'
                fields={[
                    {
                        name: 'EMAIL',
                        placeholder: 'Email',
                        type: 'email',
                        required: true
                    },
                    {
                        name: 'FNAME',
                        placeholder: 'First Name',
                        type: 'text',
                        required: true
                    }
                ]}
                messages = {
                   {
                    sending: 'Sending...',
                    success: 'Thank you for subscribing! You will receive an email soon with my rate sheet.',
                    error:  'An unexpected internal error has occured.',
                    empty: 'You must ',
                    duplicate: 'Too many subscribe attempts for this email address.',
                    button: 'Subscribe!'
                   }
                }
            />
        );
};

export default MailchimpSubscribeForm;