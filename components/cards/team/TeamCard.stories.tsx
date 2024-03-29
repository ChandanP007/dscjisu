import { ComponentMeta, ComponentStory } from '@storybook/react';
import TeamCard, { ITeamCard } from './TeamCard';
import { mockTeamCardProps } from './TeamCard.mocks';

export default {
  title: 'cards/team/TeamCard',
  component: TeamCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof TeamCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TeamCard> = (args) => (
  <TeamCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockTeamCardProps.base,
} as ITeamCard;
