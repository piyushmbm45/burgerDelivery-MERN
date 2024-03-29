import * as React from 'react';

interface FormActionI {
  handleSubmit: (e: any) => void;
  type?: string;
  action?: HTMLButtonElement['type'];
  text: string;
}

export default function FormAction({
  handleSubmit,
  type = 'Button',
  action = 'submit',
  text,
}: FormActionI) {
  return (
    <>
      {type === 'Button' ? (
        <button
          type={action}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 mt-10"
          onSubmit={handleSubmit}
        >
          {text}
        </button>
      ) : (
        <></>
      )}
    </>
  );
}
