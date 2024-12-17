import React, { useState } from 'react';
import { Header } from './components/Header';
import { StepIndicator } from './components/StepIndicator';
import { QuestionForm } from './components/QuestionForm';
import { Results } from './components/Results';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState({
    goal: '',
    experience: '',
    timeCommitment: '',
  });

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const updateAnswers = (field: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setCurrentStep(1);
    setShowResults(false);
    setAnswers({
      goal: '',
      experience: '',
      timeCommitment: '',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-3xl mx-auto px-4 py-12">
        {!showResults && (
          <>
            <StepIndicator currentStep={currentStep} totalSteps={3} />
            <div className="bg-white shadow-sm rounded-lg p-6">
              <QuestionForm
                currentStep={currentStep}
                onNext={handleNext}
                onPrev={handlePrev}
                updateAnswers={updateAnswers}
                answers={answers}
              />
            </div>
          </>
        )}

        {showResults && (
          <Results
            answers={answers}
            onReset={resetForm}
          />
        )}
      </main>
    </div>
  );
}

export default App;