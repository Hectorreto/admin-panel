'use client';

import { ButtonPrimary } from '@/components/buttons/button-primary';
import { ButtonSecondary } from '@/components/buttons/button-secondary';

const Page = () => {
  return (
    <main className="flex gap-12">
      <div className="flex flex-col gap-1">
        <div>Primario</div>
        <div className="flex gap-4">
          <div className="flex flex-col gap-4">
            <span className="flex-1 flex items-center text-xs font-semibold text-neutral-700">Large</span>
            <span className="flex-1 flex items-center text-xs font-semibold text-neutral-700">Medium</span>
            <span className="flex-1 flex items-center text-xs font-semibold text-neutral-700">Small</span>
            <span className="flex-1 flex items-center text-xs font-semibold text-neutral-700">Extra Small</span>
            <span className="flex-1 flex items-center text-xs font-semibold text-neutral-700">Disabled</span>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex-1"><ButtonPrimary size="lg">Label</ButtonPrimary></div>
            <div className="flex-1"><ButtonPrimary size="md">Label</ButtonPrimary></div>
            <div className="flex-1"><ButtonPrimary size="sm">Label</ButtonPrimary></div>
            <div className="flex-1"><ButtonPrimary size="xs">Label</ButtonPrimary></div>
            <div className="flex-1"><ButtonPrimary disabled>Label</ButtonPrimary></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <div>Secundario</div>
        <div className="flex gap-4">
          <div className="flex flex-col gap-4">
            <span className="flex-1 flex items-center text-xs font-semibold text-neutral-700">Large</span>
            <span className="flex-1 flex items-center text-xs font-semibold text-neutral-700">Medium</span>
            <span className="flex-1 flex items-center text-xs font-semibold text-neutral-700">Small</span>
            <span className="flex-1 flex items-center text-xs font-semibold text-neutral-700">Extra Small</span>
            <span className="flex-1 flex items-center text-xs font-semibold text-neutral-700">Disabled</span>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex-1"><ButtonSecondary size="lg">Label</ButtonSecondary></div>
            <div className="flex-1"><ButtonSecondary size="md">Label</ButtonSecondary></div>
            <div className="flex-1"><ButtonSecondary size="sm">Label</ButtonSecondary></div>
            <div className="flex-1"><ButtonSecondary size="xs">Label</ButtonSecondary></div>
            <div className="flex-1"><ButtonSecondary disabled>Label</ButtonSecondary></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
