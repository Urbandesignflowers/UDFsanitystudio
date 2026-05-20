import {FormField} from '@sanity/base/components';
import PatchEvent, {set, unset} from '@sanity/form-builder/PatchEvent';
import {Marker, Path} from '@sanity/types';
import {uuid} from '@sanity/uuid';
import React, {forwardRef, RefObject, useCallback} from 'react';

type Props = {
  markers: Marker[];
  onBlur: () => void;
  onChange: (event: PatchEvent) => void;
  onFocus: (path: Path) => void;
  type: {
    title?: string;
    description?: string;
    options?: {
      min?: number;
      max?: number;
      step?: number;
      unit?: string;
    };
    initialValue?: number;
  };
  value?: number;
  readOnly?: boolean;
  compareValue?: number;
  presence?: unknown;
};

const RangeSliderInput = forwardRef(
  (props: Props, ref: RefObject<HTMLInputElement>) => {
    const {
      compareValue,
      markers,
      onBlur,
      onChange,
      onFocus,
      presence,
      readOnly,
      type,
      value,
    } = props;

    const min = type?.options?.min ?? 0;
    const max = type?.options?.max ?? 100;
    const step = type?.options?.step ?? 1;
    const unit = type?.options?.unit ?? '';
    const fallback = type?.initialValue ?? min;
    const currentValue = value ?? fallback;

    const handleChange = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        const next = Number(event.currentTarget.value);
        onChange(PatchEvent.from(Number.isFinite(next) ? set(next) : unset()));
      },
      [onChange],
    );

    const inputId = uuid();

    return (
      <FormField
        compareValue={compareValue}
        description={type?.description}
        inputId={inputId}
        markers={markers}
        presence={presence}
        title={type?.title}
      >
        <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
          <input
            ref={ref}
            id={inputId}
            type="range"
            min={min}
            max={max}
            step={step}
            value={currentValue}
            disabled={readOnly}
            onBlur={onBlur}
            onChange={handleChange}
            onFocus={() => onFocus([])}
            style={{width: '100%', cursor: readOnly ? 'not-allowed' : 'pointer'}}
          />
          <span style={{fontSize: '0.8125rem', fontWeight: 600}}>
            {currentValue}
            {unit}
          </span>
        </div>
      </FormField>
    );
  },
);

export default RangeSliderInput;
