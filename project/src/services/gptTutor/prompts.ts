import { TutorPrompt } from './types';

export function createSystemPrompt(): string {
  return `You are an expert technical tutor specializing in creating clear, actionable learning guides.
Your responses should:
- Be structured in clear, numbered steps
- Focus on practical, hands-on learning
- Include specific actions and expected outcomes
- Be suitable for the specified experience level
- Maintain consistent terminology
- Include relevant documentation links when available`;
}

export function createTutorPrompt(request: TutorPrompt): string {
  const { topic, platform, language, experienceLevel = 'beginner' } = request;
  
  let prompt = `Create a detailed, step-by-step guide for ${experienceLevel} level learners about ${topic}.`;
  
  if (platform) {
    prompt += `\nFocus specifically on the ${platform} platform and its best practices.`;
  }

  if (language && language !== 'en') {
    prompt += `\nProvide the response in ${language} language.`;
  }

  prompt += `\nInclude:
1. Clear, actionable steps
2. Expected outcomes for each step
3. Common pitfalls to avoid
4. Relevant documentation links`;

  return prompt;
}