import {
  Container,
  Title,
  Anchor,
  Paper,
  TextInput,
  PasswordInput,
  Button,
  Text,
} from "@mantine/core";

export const RegisterPage = () => {
  return (
    <Container size={420} my={40}>
      <Title ta="center">Registration</Title>

      <Text mt="sm" ta="center" c="gray">
        Have an account already? <Anchor>Sign in</Anchor>
      </Text>

      <Paper withBorder shadow="sm" p={22} mt={30} radius="md">
        <TextInput
          label="Email"
          placeholder="you@mantine.dev"
          required
          radius="md"
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
          radius="md"
        />
        <PasswordInput
          label="Confirm Password"
          placeholder="Your password"
          required
          mt="md"
          radius="md"
        />

        <Button fullWidth mt="xl" radius="md">
          Sign up
        </Button>
      </Paper>
    </Container>
  );
};
