import { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  MediaQuery,
  Burger,
  useMantineTheme,
  Text,
  Button,
} from '@mantine/core';
import NavbarComponent from './Navbar';
import SidebarComponent from './SidebarComponent';
import FooterComponent from './FooterComponent';
import SignUp from '../Login/SignUp';

export default function Layout({ children }: { children: React.ReactNode }) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint='sm'
      asideOffsetBreakpoint='sm'
      navbar={
        <Navbar
          p='md'
          hiddenBreakpoint='sm'
          hidden={!opened}
          width={{ sm: 150, lg: 200 }}
        >
          <NavbarComponent />
        </Navbar>
      }
      aside={
        <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
          <Aside p='md' hiddenBreakpoint='sm' width={{ sm: 200, lg: 300 }}>
            <SidebarComponent />
          </Aside>
        </MediaQuery>
      }
      footer={
        <Footer height={60} p='md'>
          <FooterComponent />
        </Footer>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p='md'>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              height: '100%',
              gap: '1rem',
            }}
          >
            <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size='sm'
                color={theme.colors.gray[6]}
                mr='xl'
              />
            </MediaQuery>
            {/* <Flex direction='row' align='center' justify='center' gap='md'> */}
            <Text>MultiApp</Text>

            <Button variant='default'>Log in</Button>
            <Button onClick={() => setOpenSignUp(true)}>Sign up</Button>
            {/* </Flex> */}
          </div>
        </Header>
      }
    >
      <SignUp openProp={openSignUp} setOpenProp={setOpenSignUp} />
      <main>{children}</main>
    </AppShell>
  );
}
