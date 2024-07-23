'use client';

import { Checkbox } from '@/components/inputs/checkbox';
import { RadioButton } from '@/components/inputs/radio-button';
import { SlideToggle } from '@/components/inputs/slide-toggle';
import { useState } from 'react';

const Page = () => {
  const [formData, setFormData] = useState({
    slide1: true,
    slide2: false,
    slide3: false,
    slide4: true,
    slide5: false,
    checkbox1: true,
    checkbox2: false,
    checkbox3: false,
    checkbox4: true,
    checkbox5: false,
    radioGroup1: '1',
    radioGroup2: '4',
  });

  return (
    <main className="flex gap-12">
      <div className="flex flex-col gap-1">
        <div>SlideToggle</div>
        <div className="flex flex-col gap-4">
          <SlideToggle value={formData.slide1} onChange={() => setFormData({ ...formData, slide1: !formData.slide1 })} label="Slide 1" />
          <SlideToggle value={formData.slide2} onChange={() => setFormData({ ...formData, slide2: !formData.slide2 })} label="Slide 2" />
          <SlideToggle value={formData.slide3} onChange={() => setFormData({ ...formData, slide3: !formData.slide3 })} />
          <SlideToggle value={formData.slide4} onChange={() => setFormData({ ...formData, slide4: !formData.slide4 })} label="Slide 4" disabled />
          <SlideToggle value={formData.slide5} onChange={() => setFormData({ ...formData, slide5: !formData.slide5 })} label="Slide 5" disabled />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <div>Checkbox</div>
        <div className="flex flex-col gap-4">
          <Checkbox value={formData.checkbox1} onChange={() => setFormData({ ...formData, checkbox1: !formData.checkbox1 })} label="Checkbox 1" />
          <Checkbox value={formData.checkbox2} onChange={() => setFormData({ ...formData, checkbox2: !formData.checkbox2 })} label="Checkbox 2" />
          <Checkbox value={formData.checkbox3} onChange={() => setFormData({ ...formData, checkbox3: !formData.checkbox3 })} />
          <Checkbox value={formData.checkbox4} onChange={() => setFormData({ ...formData, checkbox4: !formData.checkbox4 })} label="Checkbox 4" disabled />
          <Checkbox value={formData.checkbox5} onChange={() => setFormData({ ...formData, checkbox5: !formData.checkbox5 })} label="Checkbox 5" disabled />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <div>RadioButton</div>
        <div className="flex flex-col gap-4">
          <RadioButton value={formData.radioGroup1 === '1'} onChange={() => setFormData({ ...formData, radioGroup1: '1' })} label="Radio 1" />
          <RadioButton value={formData.radioGroup1 === '2'} onChange={() => setFormData({ ...formData, radioGroup1: '2' })} label="Radio 2" />
          <RadioButton value={formData.radioGroup1 === '3'} onChange={() => setFormData({ ...formData, radioGroup1: '3' })} />
          <RadioButton value={formData.radioGroup2 === '4'} onChange={() => setFormData({ ...formData, radioGroup2: '4' })} label="Radio 4" disabled />
          <RadioButton value={formData.radioGroup2 === '5'} onChange={() => setFormData({ ...formData, radioGroup2: '5' })} label="Radio 5" disabled />
        </div>
      </div>
    </main>
  );
};

export default Page;
