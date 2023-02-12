import {
  Button,
  Flex,
  Group,
  Modal,
  PasswordInput,
  TextInput,
} from '@mantine/core';
import { IconAt, IconLock } from '@tabler/icons';
import type { Dispatch, SetStateAction } from 'react';
import { useForm } from '@mantine/form';

type ISignUp = {
  openProp: boolean;
  setOpenProp: Dispatch<SetStateAction<boolean>>;
};

const defaultValue = {
  email: '',
  password: '',
  confirmPassword: '',
};
export default function SignUp({ openProp, setOpenProp }: ISignUp) {
  const form = useForm({
    initialValues: defaultValue,
    // validateInputOnChange: true,
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) =>
        value.length < 6 ? 'Password must be at least 6 characters' : null,
      confirmPassword: (value, values) =>
        value !== values.password ? 'Password did not match!' : null,
    },
  });
  const handleSubmit = (values: typeof form.values) => {
    console.log('values', values);
  };
  return (
    <>
      <Modal
        opened={openProp}
        onClose={() => setOpenProp(false)}
        title='Create a New Account with us!'
      >
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Flex direction='column' gap='md'>
            <TextInput
              withAsterisk
              icon={<IconAt />}
              label='Email'
              placeholder='Your Email'
              {...form.getInputProps('email')}
            />
            <PasswordInput
              withAsterisk
              label='Password'
              icon={<IconLock />}
              placeholder='Your Password'
              {...form.getInputProps('password')}
            />
            <PasswordInput
              withAsterisk
              label='Retype password'
              icon={<IconLock />}
              placeholder='Your Password'
              {...form.getInputProps('confirmPassword')}
            />
            <Group position='right' mt='md'>
              <Button type='submit'>Submit</Button>
            </Group>
          </Flex>
        </form>
      </Modal>
    </>
  );
}
