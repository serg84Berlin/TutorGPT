import { Product } from '../types/product';

export const SUPPORTED_PRODUCTS: Product[] = [
  {
    id: 'aws-cloud',
    name: 'AWS Cloud Basics',
    category: 'cloud',
  },
  {
    id: 'atlassian-jira',
    name: 'Atlassian Jira',
    category: 'tools',
  },
  {
    id: 'azure-cloud',
    name: 'Azure Cloud',
    category: 'cloud',
  },
  {
    id: 'developer-tools',
    name: 'Developer Tools',
    category: 'tools',
  },
] as const;