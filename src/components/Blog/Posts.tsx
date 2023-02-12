import { createStyles, Flex, Paper, Text, ThemeIcon } from '@mantine/core';
import { IconColorSwatch } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'transform 150ms ease, box-shadow 100ms ease',
    padding: theme.spacing.xl,
    paddingLeft: theme.spacing.xl * 2,

    '&:hover': {
      boxShadow: theme.shadows.md,
      transform: 'scale(1.02)',
    },

    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: 6,
      backgroundImage: theme.fn.linearGradient(
        0,
        theme.colors.indigo[6],
        theme.colors.blue[6]
      ),
    },
  },
}));

export default function Posts() {
  const prop = {
    title: 'Theming documentation',
    description:
      'Extend default theme with any amount of additional colors, replace shadows, radius, spacing, fonts and many other properties to match your design requirements. ',
  };
  const { classes } = useStyles();
  return (
    <Flex
      mih={50}
      gap='md'
      justify='flex-start'
      align='flex-start'
      direction='column'
      wrap='wrap'
      // ml={50}
    >
      <Paper withBorder radius='md' className={classes.card}>
        <ThemeIcon
          size='xl'
          radius='md'
          variant='gradient'
          gradient={{ deg: 0, from: 'blue', to: 'black' }}
        >
          <IconColorSwatch size={28} stroke={1.5} />
        </ThemeIcon>
        <Text size='xl' weight={500} mt='md'>
          {prop.title}
        </Text>
        <Text size='sm' mt='sm' color='dimmed'>
          {prop.description}
        </Text>
      </Paper>
      <Paper withBorder radius='md' className={classes.card}>
        <ThemeIcon
          size='xl'
          radius='md'
          variant='gradient'
          gradient={{ deg: 0, from: 'blue', to: 'black' }}
        >
          <IconColorSwatch size={28} stroke={1.5} />
        </ThemeIcon>
        <Text size='xl' weight={500} mt='md'>
          {prop.title}
        </Text>
        <Text size='sm' mt='sm' color='dimmed'>
          {prop.description}
        </Text>
      </Paper>
    </Flex>
  );
}
