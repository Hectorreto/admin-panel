import clsx from 'clsx';
import { Colors } from '../../../tailwind.config';
import { useState } from 'react';

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
};

export const PasswordInput = ({ value, onChange, disabled, placeholder, label, error, helperText, helperLink, helperIcon }: Props) => {
  const [showPassword, setShowPassword] = useState(false);

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

      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          placeholder={placeholder}
          className={clsx('border rounded h-[44px] px-[16px] outline-none placeholder:text-neutral-600 w-full',
            disabled ? (
              'border-neutral-400 bg-neutral-200 text-neutral-700'
            ) : [
              'hover:border-neutral-600 focus:border-primary-300 focus:shadow-[0_0_0_2px] focus:shadow-primary-100 text-neutral-800',
              error && 'border-alert-red',
              !error && 'border-neutral-400',
            ]
          )}
        />
        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-[8px] top-1/2 -translate-y-1/2">
          {showPassword ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 6.49969C14.76 6.49969 17 8.73969 17 11.4997C17 12.0097 16.9 12.4997 16.76 12.9597L19.82 16.0197C21.21 14.7897 22.31 13.2497 23 11.4897C21.27 7.10969 17 3.99969 12 3.99969C10.73 3.99969 9.51 4.19969 8.36 4.56969L10.53 6.73969C11 6.59969 11.49 6.49969 12 6.49969ZM2.71 3.15969C2.32 3.54969 2.32 4.17969 2.71 4.56969L4.68 6.53969C3.06 7.82969 1.77 9.52969 1 11.4997C2.73 15.8897 7 18.9997 12 18.9997C13.52 18.9997 14.97 18.6997 16.31 18.1797L19.03 20.8997C19.42 21.2897 20.05 21.2897 20.44 20.8997C20.83 20.5097 20.83 19.8797 20.44 19.4897L4.13 3.15969C3.74 2.76969 3.1 2.76969 2.71 3.15969ZM12 16.4997C9.24 16.4997 7 14.2597 7 11.4997C7 10.7297 7.18 9.99969 7.49 9.35969L9.06 10.9297C9.03 11.1097 9 11.2997 9 11.4997C9 13.1597 10.34 14.4997 12 14.4997C12.2 14.4997 12.38 14.4697 12.57 14.4297L14.14 15.9997C13.49 16.3197 12.77 16.4997 12 16.4997ZM14.97 11.1697C14.82 9.76969 13.72 8.67969 12.33 8.52969L14.97 11.1697Z" fill={Colors.primary.primary} />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4C7 4 2.73 7.11 1 11.5C2.73 15.89 7 19 12 19C17 19 21.27 15.89 23 11.5C21.27 7.11 17 4 12 4ZM12 16.5C9.24 16.5 7 14.26 7 11.5C7 8.74 9.24 6.5 12 6.5C14.76 6.5 17 8.74 17 11.5C17 14.26 14.76 16.5 12 16.5ZM12 8.5C10.34 8.5 9 9.84 9 11.5C9 13.16 10.34 14.5 12 14.5C13.66 14.5 15 13.16 15 11.5C15 9.84 13.66 8.5 12 8.5Z" fill={Colors.primary.primary} />
            </svg>
          )}
        </button>
      </div>

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
