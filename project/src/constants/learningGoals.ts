import { CATEGORIES } from './categories';
import { PLATFORMS } from './platforms';
import { LearningGoal } from '../types/learning';

export const LEARNING_GOALS: LearningGoal[] = [
  {
    id: 'azure-cloud',
    label: 'Azure Cloud',
    value: 'azure-cloud',
    category: CATEGORIES.CLOUD,
    platform: PLATFORMS.MICROSOFT,
  },
  {
    id: 'power-platform',
    label: 'Power Platform',
    value: 'power-platform',
    category: CATEGORIES.TOOLS,
    platform: PLATFORMS.MICROSOFT,
  },
  {
    id: 'security-compliance',
    label: 'Security & Compliance',
    value: 'security-compliance',
    category: CATEGORIES.SECURITY,
    platform: PLATFORMS.MICROSOFT,
  },
  {
    id: 'ai-ml',
    label: 'AI & Machine Learning',
    value: 'ai-ml',
    category: CATEGORIES.AI,
    platform: PLATFORMS.MICROSOFT,
  },
  {
    id: 'developer-tools',
    label: 'Developer Tools',
    value: 'developer-tools',
    category: CATEGORIES.TOOLS,
    platform: PLATFORMS.MICROSOFT,
  },
  {
    id: 'aws-cloud',
    label: 'Amazon AWS Cloud',
    value: 'aws-cloud',
    category: CATEGORIES.CLOUD,
    platform: PLATFORMS.AWS,
  },
  {
    id: 'atlassian-jira',
    label: 'Atlassian Jira',
    value: 'atlassian-jira',
    category: CATEGORIES.TOOLS,
    platform: PLATFORMS.ATLASSIAN,
  },
  {
    id: 'atlassian-confluence',
    label: 'Atlassian Confluence',
    value: 'atlassian-confluence',
    category: CATEGORIES.TOOLS,
    platform: PLATFORMS.ATLASSIAN,
  },
];
