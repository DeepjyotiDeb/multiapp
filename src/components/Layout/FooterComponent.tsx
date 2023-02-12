import { ActionIcon, Anchor, Group, createStyles } from '@mantine/core';
import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from '@tabler/icons';

export default function FooterComponent() {
  const useStyles = createStyles((theme) => ({
    links: {
      [theme.fn.smallerThan('sm')]: {
        marginTop: theme.spacing.lg,
        marginBottom: theme.spacing.sm,
      },
    },
  }));
  const { classes } = useStyles();
  const links = [
    { link: '/', label: 'Home' },
    { link: '/', label: 'Twitter' },
  ];

  const items = links.map((link) => (
    <Anchor<'a'>
      color='dimmed'
      key={link.label}
      href={link.link}
      sx={{ lineHeight: 1 }}
      onClick={(event) => event.preventDefault()}
      size='sm'
    >
      {link.label}
    </Anchor>
  ));
  return (
    <>
      {' '}
      <Group className={classes.links}>{items}</Group>
      <Group spacing='xs' position='right' noWrap>
        <ActionIcon size='lg' variant='default' radius='xl'>
          <IconBrandTwitter size={18} stroke={1.5} />
        </ActionIcon>
        <ActionIcon size='lg' variant='default' radius='xl'>
          <IconBrandYoutube size={18} stroke={1.5} />
        </ActionIcon>
        <ActionIcon size='lg' variant='default' radius='xl'>
          <IconBrandInstagram size={18} stroke={1.5} />
        </ActionIcon>
      </Group>
    </>
  );
}
