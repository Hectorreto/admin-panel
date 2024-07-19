import clsx from 'clsx';
import { Colors } from '../../../../tailwind.config';

type Props = {
  value: boolean;
  onChange: (value: boolean) => void;
  disabled?: boolean;
  label?: string;
};

export const SlideToggle = ({ value, onChange, disabled, label }: Props) => {
  return (
    <button
      type="button"
      onClick={() => onChange(!value)}
      disabled={disabled}
      className="flex items-center gap-[4px] justify-start w-fit group outline-none"
    >
      <div className="relative w-[44px] h-[24px] flex">
        <div
          className={clsx('absolute z-[-3] top-[4px] w-[44px] h-[16px] rounded-[50px] transition-all',
            value && !disabled && 'bg-secondary-200 group-focus:bg-secondary-300 group-active:bg-secondary-400',
            !value && !disabled && 'bg-neutral-300',
            value && disabled && 'bg-neutral-100',
            !value && disabled && 'bg-neutral-100',
          )}
        />
        <div
          className={clsx('absolute z-[-2] w-[40px] h-[40px] top-[-8px] rounded-full opacity-0 transition-all',
            !disabled && 'group-hover:opacity-40 group-focus:opacity-40 group-active:opacity-40',
            value && !disabled && 'left-[12px] group-hover:bg-secondary-200 group-focus:bg-secondary-300 group-active:bg-secondary-400',
            !value && !disabled && 'left-[-8px] group-hover:bg-neutral-300 group-focus:bg-neutral-400 group-active:bg-neutral-500',
          )}
        />
        <div
          className={clsx('absolute z-[-1] w-[24px] h-[24px] rounded-full flex justify-center items-center transition-all',
            value && !disabled && 'left-[20px] bg-secondary-secondary',
            !value && !disabled && 'left-0 bg-neutral-700',
            value && disabled && 'left-[20px] bg-neutral-300',
            !value && disabled && 'left-0 bg-neutral-300',
          )}
        >
          {value ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.99989 16.1701L5.52989 12.7001C5.13989 12.3101 4.50989 12.3101 4.11989 12.7001C3.72989 13.0901 3.72989 13.7201 4.11989 14.1101L8.29989 18.2901C8.68989 18.6801 9.31989 18.6801 9.70989 18.2901L20.2899 7.71007C20.6799 7.32007 20.6799 6.69007 20.2899 6.30007C19.8999 5.91007 19.2699 5.91007 18.8799 6.30007L8.99989 16.1701Z" fill={Colors.neutral['00']} />
            </svg>
          ) : (
            <svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1H13" stroke={Colors.neutral['00']} strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </div>
      </div>

      {label && (
        <span className={clsx('font-normal text-sm', disabled ? 'text-neutral-500' : 'text-neutral-800')}>{label}</span>
      )}
    </button>
  );
};
