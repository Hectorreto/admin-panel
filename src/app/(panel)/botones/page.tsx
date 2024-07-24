'use client';

import { ButtonDestructive } from '@/components/buttons/button-destructive';
import { ButtonPrimary } from '@/components/buttons/button-primary';
import { ButtonSecondary } from '@/components/buttons/button-secondary';

const Page = () => {
  return (
    <main className="flex gap-12">
      <div className="flex flex-col gap-4">
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
          <div className="flex flex-col gap-4">
            <div className="flex-1"><ButtonPrimary size="lg" icon={<IconPrimary />}>Label</ButtonPrimary></div>
            <div className="flex-1"><ButtonPrimary size="md" icon={<IconPrimary />}>Label</ButtonPrimary></div>
            <div className="flex-1"><ButtonPrimary size="sm" icon={<IconPrimary />}>Label</ButtonPrimary></div>
            <div className="flex-1"><ButtonPrimary size="xs" icon={<IconPrimary />}>Label</ButtonPrimary></div>
            <div className="flex-1"><ButtonPrimary disabled icon={<IconPrimary />}>Label</ButtonPrimary></div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex-1"><ButtonPrimary size="lg" icon={<IconPrimary />} /></div>
            <div className="flex-1"><ButtonPrimary size="md" icon={<IconPrimary />} /></div>
            <div className="flex-1"><ButtonPrimary size="sm" icon={<IconPrimary />} /></div>
            <div className="flex-1"><ButtonPrimary size="xs" icon={<IconPrimary />} /></div>
            <div className="flex-1"><ButtonPrimary disabled icon={<IconPrimary />} /></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
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
          <div className="flex flex-col gap-4">
            <div className="flex-1"><ButtonSecondary size="lg" icon={<IconSecondary />}>Label</ButtonSecondary></div>
            <div className="flex-1"><ButtonSecondary size="md" icon={<IconSecondary />}>Label</ButtonSecondary></div>
            <div className="flex-1"><ButtonSecondary size="sm" icon={<IconSecondary />}>Label</ButtonSecondary></div>
            <div className="flex-1"><ButtonSecondary size="xs" icon={<IconSecondary />}>Label</ButtonSecondary></div>
            <div className="flex-1"><ButtonSecondary disabled icon={<IconSecondary />}>Label</ButtonSecondary></div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex-1"><ButtonSecondary size="lg" icon={<IconSecondary />} /></div>
            <div className="flex-1"><ButtonSecondary size="md" icon={<IconSecondary />} /></div>
            <div className="flex-1"><ButtonSecondary size="sm" icon={<IconSecondary />} /></div>
            <div className="flex-1"><ButtonSecondary size="xs" icon={<IconSecondary />} /></div>
            <div className="flex-1"><ButtonSecondary disabled icon={<IconSecondary />} /></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div>Destructivo</div>
        <div className="flex gap-4">
          <div className="flex flex-col gap-4">
            <span className="flex-1 flex items-center text-xs font-semibold text-neutral-700">Large</span>
            <span className="flex-1 flex items-center text-xs font-semibold text-neutral-700">Medium</span>
            <span className="flex-1 flex items-center text-xs font-semibold text-neutral-700">Small</span>
            <span className="flex-1 flex items-center text-xs font-semibold text-neutral-700">Extra Small</span>
            <span className="flex-1 flex items-center text-xs font-semibold text-neutral-700">Disabled</span>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex-1"><ButtonDestructive size="lg">Label</ButtonDestructive></div>
            <div className="flex-1"><ButtonDestructive size="md">Label</ButtonDestructive></div>
            <div className="flex-1"><ButtonDestructive size="sm">Label</ButtonDestructive></div>
            <div className="flex-1"><ButtonDestructive size="xs">Label</ButtonDestructive></div>
            <div className="flex-1"><ButtonDestructive disabled>Label</ButtonDestructive></div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex-1"><ButtonDestructive size="lg" icon={<IconDestructive />}>Label</ButtonDestructive></div>
            <div className="flex-1"><ButtonDestructive size="md" icon={<IconDestructive />}>Label</ButtonDestructive></div>
            <div className="flex-1"><ButtonDestructive size="sm" icon={<IconDestructive />}>Label</ButtonDestructive></div>
            <div className="flex-1"><ButtonDestructive size="xs" icon={<IconDestructive />}>Label</ButtonDestructive></div>
            <div className="flex-1"><ButtonDestructive disabled icon={<IconDestructive />}>Label</ButtonDestructive></div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex-1"><ButtonDestructive size="lg" icon={<IconDestructive />} /></div>
            <div className="flex-1"><ButtonDestructive size="md" icon={<IconDestructive />} /></div>
            <div className="flex-1"><ButtonDestructive size="sm" icon={<IconDestructive />} /></div>
            <div className="flex-1"><ButtonDestructive size="xs" icon={<IconDestructive />} /></div>
            <div className="flex-1"><ButtonDestructive disabled icon={<IconDestructive />} /></div>
          </div>
        </div>
      </div>
    </main>
  );
};

const IconPrimary = () => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 11.64V13.6667C2 13.8533 2.14667 14 2.33333 14H4.36C4.44667 14 4.53333 13.9667 4.59333 13.9L11.8733 6.62667L9.37333 4.12667L2.1 11.4C2.03333 11.4667 2 11.5467 2 11.64ZM13.8067 4.69334C14.0667 4.43334 14.0667 4.01334 13.8067 3.75334L12.2467 2.19334C11.9867 1.93334 11.5667 1.93334 11.3067 2.19334L10.0867 3.41334L12.5867 5.91334L13.8067 4.69334Z"
        fill="currentColor"
      />
    </svg>
  );
};

const IconSecondary = () => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 11.64V13.6667C2 13.8533 2.14667 14 2.33333 14H4.36C4.44667 14 4.53333 13.9667 4.59333 13.9L11.8733 6.62667L9.37333 4.12667L2.1 11.4C2.03333 11.4667 2 11.5467 2 11.64ZM13.8067 4.69334C14.0667 4.43334 14.0667 4.01334 13.8067 3.75334L12.2467 2.19334C11.9867 1.93334 11.5667 1.93334 11.3067 2.19334L10.0867 3.41334L12.5867 5.91334L13.8067 4.69334Z"
        fill="currentColor"
      />
    </svg>
  );
};

const IconDestructive = () => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.99996 15.8333C4.99996 16.75 5.74996 17.5 6.66663 17.5H13.3333C14.25 17.5 15 16.75 15 15.8333V7.5C15 6.58333 14.25 5.83333 13.3333 5.83333H6.66663C5.74996 5.83333 4.99996 6.58333 4.99996 7.5V15.8333ZM15 3.33333H12.9166L12.325 2.74167C12.175 2.59167 11.9583 2.5 11.7416 2.5H8.25829C8.04163 2.5 7.82496 2.59167 7.67496 2.74167L7.08329 3.33333H4.99996C4.54163 3.33333 4.16663 3.70833 4.16663 4.16667C4.16663 4.625 4.54163 5 4.99996 5H15C15.4583 5 15.8333 4.625 15.8333 4.16667C15.8333 3.70833 15.4583 3.33333 15 3.33333Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Page;
