'use client';

import { InputPassword } from '@/components/inputs/input-password';
import { InputText } from '@/components/inputs/input-text';
import { Link } from 'next-view-transitions';
import { useState } from 'react';

const Page = () => {
  const [formData, setFormData] = useState({
    textInput1: '',
    textInput2: '',
    textInput3: '',
    passwordInput1: '',
    passwordInput2: '',
    passwordInput3: '',
  });

  return (
    <main className="flex gap-12">
      <div className="flex flex-col gap-2">
        <div>Text</div>
        <div className="flex flex-col gap-4 w-[300px]">
          <InputText
            label="Text 1"
            placeholder="Placeholder"
            helperText="Helper text"
            helperLink={<Link href="#">Link</Link>}
            helperIcon
            value={formData.textInput1}
            onChange={(value) => setFormData({ ...formData, textInput1: value })}
          />
          <InputText
            label="Text 2"
            placeholder="Placeholder"
            helperText="Helper text"
            error
            helperIcon
            value={formData.textInput2}
            onChange={(value) => setFormData({ ...formData, textInput2: value })}
          />
          <InputText
            label="Text 3"
            placeholder="Placeholder"
            helperText="Helper text"
            helperLink={<>Link</>}
            value={formData.textInput3}
            onChange={(value) => setFormData({ ...formData, textInput3: value })}
            disabled
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div>Password</div>
        <div className="flex flex-col gap-4 w-[300px]">
          <InputPassword
            label="Password 1"
            placeholder="Placeholder"
            helperText="Helper text"
            helperLink={<Link href="#">Link</Link>}
            helperIcon
            value={formData.passwordInput1}
            onChange={(value) => setFormData({ ...formData, passwordInput1: value })}
          />
          <InputPassword
            label="Password 2"
            placeholder="Placeholder"
            helperText="Helper text"
            error
            helperIcon
            value={formData.passwordInput2}
            onChange={(value) => setFormData({ ...formData, passwordInput2: value })}
          />
          <InputPassword
            label="Password 3"
            placeholder="Placeholder"
            helperText="Helper text"
            helperLink={<>Link</>}
            value={formData.passwordInput3}
            onChange={(value) => setFormData({ ...formData, passwordInput3: value })}
            disabled
          />
        </div>
      </div>
    </main>
  );
};

export default Page;
