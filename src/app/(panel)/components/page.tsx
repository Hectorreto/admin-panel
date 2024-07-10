'use client';

import { Checkbox } from '@/components/inputs/checkbox';
import { RadioButton } from '@/components/inputs/radio-button';
import { SlideToggle } from '@/components/inputs/slide-toggle';
import { useState } from 'react';

const Page = () => {
  const [formData, setFormData] = useState({
    slide1: false,
    slide2: false,
    slide3: false,
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    radioGroup1: '1',
  });

  return (
    <main className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <div>SlideToggle</div>
        <div className="flex gap-4">
          <SlideToggle value={formData.slide1} onChange={() => setFormData({ ...formData, slide1: !formData.slide1 })} />
          <SlideToggle value={formData.slide2} onChange={() => setFormData({ ...formData, slide2: !formData.slide2 })} />
          <SlideToggle value={formData.slide3} onChange={() => setFormData({ ...formData, slide3: !formData.slide3 })} />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <div>Checkbox</div>
        <div className="flex gap-4">
          <Checkbox value={formData.checkbox1} onChange={() => setFormData({ ...formData, checkbox1: !formData.checkbox1 })} />
          <Checkbox value={formData.checkbox2} onChange={() => setFormData({ ...formData, checkbox2: !formData.checkbox2 })} />
          <Checkbox value={formData.checkbox3} onChange={() => setFormData({ ...formData, checkbox3: !formData.checkbox3 })} />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <div>RadioButton</div>
        <div className="flex gap-4">
          <RadioButton value={formData.radioGroup1 === '1'} onChange={() => setFormData({ ...formData, radioGroup1: '1' })} />
          <RadioButton value={formData.radioGroup1 === '2'} onChange={() => setFormData({ ...formData, radioGroup1: '2' })} />
          <RadioButton value={formData.radioGroup1 === '3'} onChange={() => setFormData({ ...formData, radioGroup1: '3' })} />
        </div>
      </div>
    </main>
  );
};

export default Page;
