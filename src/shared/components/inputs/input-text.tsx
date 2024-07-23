'use client';

import clsx from 'clsx';
import { Colors } from '../../../../tailwind.config';

type Props = {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  placeholder: string;
  label?: string;
  helperText?: string;
  helperLink?: React.ReactElement;
  helperIcon?: boolean;
  error?: boolean;
  type?: string;
};

export const InputText = ({ value, onChange, disabled, placeholder, label, error, helperText, helperLink, helperIcon, type = 'text' }: Props) => {
  return (
    <label className="flex flex-col gap-[4px] text-xs">
      <span
        className={clsx('font-semibold',
          disabled ? (
            'text-neutral-700'
          ) : error ? (
            'text-alert-red'
          ) : (
            'text-neutral-700'
          ),
        )}
      >
        {label}
      </span>

      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        placeholder={placeholder}
        className={clsx('border rounded h-[44px] px-[16px] focus-visible:outline-none placeholder:text-neutral-600',
          disabled ? (
            'border-neutral-400 bg-neutral-200 text-neutral-700'
          ) : [
            'hover:border-neutral-600 focus-visible:border-primary-300 focus-visible:shadow-[0_0_0_2px] focus-visible:shadow-primary-100 text-neutral-800',
            error && 'border-alert-red',
            !error && 'border-neutral-400',
          ]
        )}
      />

      <div className="flex gap-1">
        <div className="flex-1">
          {Boolean(helperText) && (
            <span
              className={clsx(
                error && 'text-alert-red',
                !error && 'text-neutral-700',
              )}
            >
              {helperText}
            </span>
          )}
          {Boolean(helperLink) && (
            <span
              className={clsx('underline',
                disabled ? 'text-neutral-500' : 'text-primary-primary',
                Boolean(helperText) && 'ml-[4px]',
              )}
            >
              {helperLink}
            </span>
          )}
        </div>
        {helperIcon && (
          <div className="w-[16px] h-[16px] flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.33333 3.66665H7.66667V4.99998H6.33333V3.66665ZM7 10.3333C7.36667 10.3333 7.66667 10.0333 7.66667 9.66665V6.99998C7.66667 6.63331 7.36667 6.33331 7 6.33331C6.63333 6.33331 6.33333 6.63331 6.33333 6.99998V9.66665C6.33333 10.0333 6.63333 10.3333 7 10.3333ZM7 0.333313C3.32 0.333313 0.333332 3.31998 0.333332 6.99998C0.333332 10.68 3.32 13.6666 7 13.6666C10.68 13.6666 13.6667 10.68 13.6667 6.99998C13.6667 3.31998 10.68 0.333313 7 0.333313ZM7 12.3333C4.06 12.3333 1.66667 9.93998 1.66667 6.99998C1.66667 4.05998 4.06 1.66665 7 1.66665C9.94 1.66665 12.3333 4.05998 12.3333 6.99998C12.3333 9.93998 9.94 12.3333 7 12.3333Z"
                fill={error ? Colors.alert.red : Colors.neutral[600]}
              />
            </svg>
          </div>
        )}
      </div>
    </label>
  );
};
