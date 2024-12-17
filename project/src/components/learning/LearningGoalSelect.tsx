import { LEARNING_GOALS } from '../../constants/learningGoals';

interface LearningGoalSelectProps {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function LearningGoalSelect({ onChange }: LearningGoalSelectProps) {
  return (
    <div className="learning-goal-select">
      <label htmlFor="learning-goal" className="block text-gray-700 dark:text-gray-300">
        Select your learning goal:
      </label>
      <select
        id="learning-goal"
        onChange={onChange}
        className="mt-2 w-full p-2 border rounded dark:bg-gray-800 dark:text-gray-200"
      >
        <option value="">Select your learning goal</option>
        {LEARNING_GOALS.map((goal) => (
          <option key={goal.id} value={goal.value}>
            {goal.label}
          </option>
        ))}
      </select>
    </div>
  );
}
