import React from "react";

import { Button, List, Text } from "components";

type DealsOneTabsProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{
    businessInfo: string;
    label: string;
    label1: string;
    labelOne: string;
    labelTwo: string;
  }>;

const DealsOneTabs: React.FC<DealsOneTabsProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Button className="bg-lime_50 cursor-pointer font-inter font-medium min-w-[126px] px-4 py-2.5 rounded-[20px] text-center text-sm text-yellow_900 w-auto">
          {props?.businessInfo}
        </Button>
        <List
          className="sm:flex-col flex-row gap-4 grid grid-cols-2 w-[39%] md:w-full"
          orientation="horizontal"
        >
          <div className="flex items-start justify-start px-4 py-2.5 self-stretch w-auto">
            <Text
              className="font-inter font-medium text-bluegray_700 text-left w-auto"
              as="h3"
              variant="h3"
            >
              {props?.labelTwo}
            </Text>
          </div>
          <div className="flex items-start justify-start px-4 py-2.5 self-stretch w-auto">
            <Text
              className="font-inter font-medium text-bluegray_700 text-left w-auto"
              as="h3"
              variant="h3"
            >
              {props?.labelTwo}
            </Text>
          </div>
        </List>
        <div className="flex items-start justify-start px-4 py-2.5 self-stretch w-auto">
          <Text
            className="font-inter font-medium text-bluegray_700 text-left w-auto"
            as="h3"
            variant="h3"
          >
            {props?.labelTwo}
          </Text>
        </div>
        <div className="flex items-start justify-start px-4 py-2.5 self-stretch w-auto">
          <Text
            className="font-inter font-medium text-bluegray_700 text-left w-auto"
            as="h3"
            variant="h3"
          >
            {props?.labelTwo}
          </Text>
        </div>
      </div>
    </>
  );
};

DealsOneTabs.defaultProps = {
  label: "KYC",
  label1: "KYC",
  labelOne: "KYC",
  labelTwo: "KYC",
};

export default DealsOneTabs;
