import { LearningPath } from '../types/learning';

export const LEARNING_PATHS: Record<string, Record<string, LearningPath>> = {
  'azure-cloud': {
    beginner: {
      url: 'https://learn.microsoft.com/training/paths/azure-fundamentals/',
      title: 'Azure Fundamentals',
      description: 'Learn cloud concepts, core Azure services, security, privacy, compliance, and trust',
    },
    intermediate: {
      url: 'https://learn.microsoft.com/training/paths/architect-great-solutions-azure/',
      title: 'Azure Solutions Architecture',
      description: 'Design and implement solutions for scale, security, and monitoring',
    },
    advanced: {
      url: 'https://learn.microsoft.com/training/paths/azure-solution-architect/',
      title: 'Azure Solution Architect Expert',
      description: 'Advanced architectural patterns and practices for enterprise-scale applications',
    },
  },
  'power-platform': {
    beginner: {
      url: 'https://learn.microsoft.com/training/paths/power-platform-fundamentals/',
      title: 'Power Platform Fundamentals',
      description: 'Introduction to Power Apps, Power Automate, and Power BI',
    },
    intermediate: {
      url: 'https://learn.microsoft.com/training/paths/power-apps-advanced-dev/',
      title: 'Advanced Power Apps Development',
      description: 'Create complex business solutions with advanced Power Apps features',
    },
    advanced: {
      url: 'https://learn.microsoft.com/training/paths/power-platform-architect/',
      title: 'Power Platform Solution Architect',
      description: 'Design and implement enterprise-scale Power Platform solutions',
    },
  },
  'security-compliance': {
    beginner: {
      url: 'https://learn.microsoft.com/training/paths/security-fundamentals/',
      title: 'Security Fundamentals',
      description: 'Learn basic security concepts and Microsoft security solutions',
    },
    intermediate: {
      url: 'https://learn.microsoft.com/training/paths/sc-200-mitigate-threats-microsoft-365-defender/',
      title: 'Threat Protection',
      description: 'Implement and manage security operations with Microsoft 365 Defender',
    },
    advanced: {
      url: 'https://learn.microsoft.com/training/paths/sc-200-configure-azure-sentinel/',
      title: 'Azure Sentinel',
      description: 'Configure and manage Azure Sentinel for advanced threat detection',
    },
  },
};