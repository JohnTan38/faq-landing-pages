import type { ReactNode } from 'react';
import React from 'react';

type ICTABannerProps = {
  title: string;
  subtitle: string;
  buttons: ReactNode[];
  buttonContainerStyle?: React.CSSProperties; // Optional prop for custom button container styles
};

const CTABanner = (props: ICTABannerProps) => (
  <div className="flex flex-col rounded-md bg-primary-100 p-4 text-center sm:flex-row sm:items-center sm:justify-between sm:p-12 sm:text-left">
    <div className="text-2xl font-semibold">
      <div className="text-gray-900">{props.title}</div>
      <div className="text-primary-500">{props.subtitle}</div>
    </div>

    <div
      className="whitespace-no-wrap mt-3 sm:ml-2 sm:mt-0"
      style={props.buttonContainerStyle} // apply style here
    >
      {props.buttons.map((button, index) => (
        <React.Fragment key={index}>{button}</React.Fragment>
      ))}
    </div>
  </div>
);

export { CTABanner };
