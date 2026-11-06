import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useWeb3Forms from '@web3forms/react';

/**
 * Reusable Web3Forms React hook for contact and estimate forms.
 *
 * Adheres to the official @web3forms/react and react-hook-form integration pattern.
 *
 * @param {Object} options
 * @param {string} [options.accessKey] - Custom access key (defaults to VITE_WEB3FORMS_ACCESS_KEY or PUBLIC_ACCESS_KEY env variable)
 * @param {string} [options.fromName] - Name that appears as the sender (default: "AeroDome Roofing Calgary")
 * @param {string} [options.subject] - Subject line of the email notification
 * @param {Object} [options.settings] - Additional Web3Forms settings (e.g. replyto, redirect)
 * @param {Object} [options.defaultValues] - Initial form field values
 * @param {Function} [options.onSuccess] - Optional callback triggered on success
 * @param {Function} [options.onError] - Optional callback triggered on error
 */
export function useWeb3ContactForm({
  accessKey,
  fromName = 'AeroDome Roofing Calgary',
  subject = 'New Contact Inquiry — AeroDome Roofing Website',
  settings = {},
  defaultValues = {},
  onSuccess,
  onError,
} = {}) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    control,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    mode: 'onTouched',
    defaultValues,
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Read access key from environment or fallback
  const resolvedKey =
    accessKey ||
    import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ||
    import.meta.env.PUBLIC_ACCESS_KEY ||
    'YOUR_ACCESS_KEY_HERE';

  const { submit } = useWeb3Forms({
    access_key: resolvedKey,
    settings: {
      from_name: fromName,
      subject,
      ...settings,
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg || 'Thank you! Your message has been sent successfully.');
      setErrorMessage('');
      reset();
      if (onSuccess) onSuccess(msg, data);
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      const errMsg = msg || 'Something went wrong. Please check your information and try again.';
      setErrorMessage(errMsg);
      if (onError) onError(errMsg, data);
    },
  });

  const resetForm = () => {
    setIsSuccess(false);
    setMessage('');
    setErrorMessage('');
    reset();
  };

  return {
    register,
    handleSubmit,
    onSubmit: handleSubmit(submit),
    reset: resetForm,
    watch,
    setValue,
    control,
    errors,
    isSubmitting,
    isSubmitSuccessful,
    isSuccess,
    message,
    errorMessage,
    setErrorMessage,
  };
}

export default useWeb3ContactForm;

