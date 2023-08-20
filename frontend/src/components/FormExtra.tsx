import React from 'react';

export default function FormExtra() {
  return (
    <div className="flex items-center justify-between m-2">
      <div className="flex items-center">
        <input
          id="remember-me"
          name="remember-me"
          type="checkbox"
          className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
        />
        <label
          htmlFor="remember-me"
          className="ml-2 block text-sm text-gray-900"
        >
          Remember me
        </label>
      </div>

      <div className="text-sm">
        <a
          href="www.google.home"
          className="ml-2 font-medium text-yellow-600 hover:text-yellow-500"
        >
          Forgot your password?
        </a>
      </div>
    </div>
  );
}
