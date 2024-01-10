import { ChangeEventHandler, Dispatch, SetStateAction, useRef } from "react";
import { TPhoneInputState } from "../types";

const inputMaxLengths = [2, 2, 2, 1];
export const PhoneInput = ({
  phoneInputState,
  setPhoneInputState,
}: {
  phoneInputState: TPhoneInputState;
  setPhoneInputState: Dispatch<SetStateAction<TPhoneInputState>>;
}) => {
  const refs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];
  const [ref0, ref1, ref2, ref3] = refs;

  const createOnChangeHandler = (
    index: 0 | 1 | 2 | 3
  ): ChangeEventHandler<HTMLInputElement> => (e) => {
    const currentMaxLength = inputMaxLengths[index];
    const nextRef = refs[index + 1] ?? refs[3];
    const prevRef = refs[index - 1] ?? refs[0];
    const value = e.target.value;

    const shouldGoToNextRef =
      currentMaxLength === value.length && nextRef?.current;
    const shouldGoToPrevRef = value.length === 0;

    const newState = phoneInputState.map((phoneInput, phoneInputIndex) =>
      index === phoneInputIndex ? value : phoneInput
    ) as TPhoneInputState;

    if (shouldGoToNextRef) nextRef.current?.focus();
    if (shouldGoToPrevRef) prevRef.current?.focus();

    setPhoneInputState(newState);
  };

  return (
    <div className="input-wrap">
      <label>{"Phone:"}</label>
      <div id="phone-input-wrap">
        <input
          id="phone-input-1"
          ref={ref0}
          onChange={createOnChangeHandler(0)}
          value={phoneInputState[0]}
          placeholder="55"
          maxLength={inputMaxLengths[0]}
        />
        <input
          id="phone-input-2"
          ref={ref1}
          maxLength={inputMaxLengths[1]}
          onChange={createOnChangeHandler(1)}
          placeholder="55"
          value={phoneInputState[1]}
        />
        <input
          id="phone-input-3"
          ref={ref2}
          onChange={createOnChangeHandler(2)}
          placeholder="55"
          maxLength={inputMaxLengths[2]}
          value={phoneInputState[2]}
        />
        <input
          id="phone-input-4"
          ref={ref3}
          placeholder="5"
          maxLength={inputMaxLengths[3]}
          onChange={createOnChangeHandler(3)}
          value={phoneInputState[3]}
        />
      </div>
    </div>
  );
};
