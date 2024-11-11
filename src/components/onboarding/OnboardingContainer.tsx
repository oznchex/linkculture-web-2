'use client';

import { useState } from 'react';
import ProgressBar from '../common/onboarding/ProgressBar';
import InputNameStep from '../common/onboarding/input/InputNameStep';
import SelectGenderStep from '../common/onboarding/select/SelectGenderStep';
import InputBirthDateStep from '../common/onboarding/input/InputBirthDateStep';
import InputResidenceStep from '../common/onboarding/input/InputResidenceStep';
import SelectDisabilityStep from '../common/onboarding/select/SelectDisabilityStep';
import SelectWheelChairAvailabilityStep from '../common/onboarding/select/SelectWheelChairAvailabilityStep';
import CertifyWelfareCardStep from '../common/onboarding/certify/CertifyWelfareCardStep';
import CompleteOnboardingStep from '../common/onboarding/CompleteOnboardingStep';
import { useRouter } from 'next/navigation';

export default function OnboardingContainer() {
  const [step, setStep] = useState(1);
  const router = useRouter();

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => {
    if (step === 1) {
      router.push('/');
      return;
    }
    setStep((prev) => prev - 1);
  };
  
  const handleManualInput = () => setStep(7);
  const renderStep = () => {
    switch(step) {
        case 1:
            return <InputNameStep onNext={handleNext} onBack={handleBack} />;
        case 2:
            return <SelectGenderStep onNext={handleNext} onBack={handleBack} />;
        case 3:
            return <InputBirthDateStep onNext={handleNext} onBack={handleBack} />;
        case 4:
            return <InputResidenceStep onNext={handleNext} onBack={handleBack} />;
        case 5:
            return <SelectDisabilityStep onNext={handleNext} onBack={handleBack} />;
        case 6:
            return <SelectWheelChairAvailabilityStep onNext={handleNext} onBack={handleBack} />;
        case 7:
            return <CertifyWelfareCardStep onNext={handleNext} onBack={handleBack} onManualInput={handleManualInput} />;
        case 8:
            return <CompleteOnboardingStep onNext={handleNext} onBack={handleBack} />;
    }
  };

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Header Area */}
      {step <= 8 && (
        <div className="h-[8%] flex items-center">
          <div className="w-full px-5">
            <ProgressBar currentStep={step} totalSteps={8} />
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="h-[92%] w-full">
        {renderStep()}
      </div>
    </div>
  );
}