import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderI {
  heading: string;
  paragraph: string;
  linkName: string;
  linkUrl: string;
}

export default function Header({
  heading,
  paragraph,
  linkName,
  linkUrl = '#',
}: HeaderI) {
  return (
    <div className="mb-10">
      <div className="flex justify-center">
        <img alt="" className="h-14 w-14" src="./images/logo.png" />
      </div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        {heading}
      </h2>
      <p className="text-center text-sm text-gray-600 mt-5">
        {paragraph}{' '}
        <Link
          to={linkUrl}
          className="font-medium text-yellow-600 hover:text-yellow-500"
        >
          {linkName}
        </Link>
      </p>
    </div>
  );
}
