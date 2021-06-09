import React from 'react';
import Mailchimp from 'react-mailchimp-form';
import './mailchimp-subscribe-form.styled.scss';




const MailchimpSubscribeForm = (props) => {
    const MAILCHIMP_KEY = process.env.REACT_APP_MAILCHIMP_KEY;

        return (
            <Mailchimp 
                action={MAILCHIMP_KEY}
                className='chimp-forms'
                fields={[
                    {
                        name: 'FNAME',
                        placeholder: 'Name',
                        type: 'text',
                        required: true
                    },
                    {
                        name: 'EMAIL',
                        placeholder: 'Email',
                        type: 'email',
                        required: true
                    }
                ]}
                messages = {
                   {
                    sending: 'Sending...',
                    success: 'Thank you for subscribing! I will be in touch soon for your free master or beat pack!',
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