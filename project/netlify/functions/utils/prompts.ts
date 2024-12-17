import { TutorRequest } from './types';

export function createTutorPrompt(request: TutorRequest): string {
  const { topic, platform, language } = request;
  
  let prompt = `Create a detailed, step-by-step guide for beginners to learn about ${topic}.`;
  
  if (platform) {
    prompt += ` Focus specifically on ${platform} platform.`;
  }

  if (language && language !== 'en') {
    prompt += ` Please provide the response in ${language} language.`;
  }

  return prompt;
}

export function createSystemPrompt(): string {
  return `You are an expert technical tutor specializing in creating clear, 
  actionable step-by-step guides. Focus on practical steps that beginners can follow. 
  Keep each step concise but informative. Include specific actions and expected outcomes.`;
}