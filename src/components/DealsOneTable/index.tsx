import React from "react";

import { Text, List } from "components";

type DealsOneTableProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{
    labelOne: string;
    labelTwo: string;
    labelThree: string;
    label: string;
    secondlabel: string;
    labelOne1: string;
    labelTwo1: string;
    label1: string;
    secondlabel1: string;
    labelOne2: string;
    labelTwo2: string;
    label2: string;
    secondlabel2: string;
    labelOne3: string;
    labelTwo3: string;
    label3: string;
    secondlabel3: string;
    labelOne4: string;
    labelTwo4: string;
    label4: string;
    secondlabel4: string;
    labelOne5: string;
    labelTwo5: string;
  }>;

const DealsOneTable: React.FC<DealsOneTableProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white_A700 flex sm:flex-col flex-row md:gap-10 items-center justify-between outline outline-[0.5px] outline-gray_100 sm:px-5 px-6 py-4 rounded-bl-none rounded-br-none rounded-tl-[24px] rounded-tr-[24px] w-full">
          <div className="flex sm:flex-1 flex-row gap-24 items-center justify-start self-stretch w-auto sm:w-full">
            <div className="flex items-center justify-start w-[200px]">
              <Text
                className="font-inter font-normal not-italic text-bluegray_400 text-left w-auto"
                as="h3"
                variant="h3"
              >
                {props?.labelThree}
              </Text>
            </div>
            <div className="flex items-center justify-start w-20">
              <Text
                className="font-inter font-normal not-italic text-bluegray_400 text-left w-auto"
                as="h3"
                variant="h3"
              >
                {props?.labelThree}
              </Text>
            </div>
          </div>
          <div className="flex items-center justify-end md:pr-10 sm:pr-5 pr-[100px] self-stretch w-auto">
            <div className="flex items-center justify-start w-20">
              <Text
                className="font-inter font-normal not-italic text-bluegray_400 text-left w-auto"
                as="h3"
                variant="h3"
              >
                {props?.labelThree}
              </Text>
            </div>
          </div>
        </div>
        <List
          className="flex-col gap-px grid items-center w-full"
          orientation="vertical"
        >
          <div className="bg-white_A700 flex flex-1 sm:flex-col flex-row md:gap-10 items-center justify-between outline outline-[0.5px] outline-gray_100 p-6 sm:px-5 w-full">
            <div className="flex sm:flex-1 flex-row gap-24 items-center justify-start self-stretch w-auto sm:w-full">
              <div className="flex items-center justify-start w-[200px]">
                <div className="flex flex-col gap-1 items-start justify-start self-stretch w-auto">
                  <Text
                    className="font-inter font-medium text-gray_900 text-left w-auto"
                    as="h3"
                    variant="h3"
                  >
                    {props?.label4}
                  </Text>
                  <Text
                    className="font-inter font-normal not-italic text-bluegray_400 text-left w-auto"
                    as="h4"
                    variant="h4"
                  >
                    {props?.secondlabel4}
                  </Text>
                </div>
              </div>
              <div className="flex items-center justify-start w-20">
                <Text
                  className="font-inter font-normal not-italic text-gray_900 text-left w-auto"
                  as="h3"
                  variant="h3"
                >
                  {props?.labelOne5}
                </Text>
              </div>
            </div>
            <div className="flex items-center justify-start self-stretch w-auto">
              <div className="flex items-start justify-start w-[105px]">
                <div className="bg-green_50 flex items-start justify-start px-2 py-[3px] rounded-[11px] self-stretch w-auto">
                  <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                    <div className="bg-green_300 h-1.5 rounded-[50%] w-1.5"></div>
                    <Text
                      className="font-inter font-medium text-green_500 text-left w-auto"
                      as="h4"
                      variant="h4"
                    >
                      {props?.labelTwo1}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white_A700 flex flex-1 sm:flex-col flex-row md:gap-10 items-center justify-between outline outline-[0.5px] outline-gray_100 p-6 sm:px-5 w-full">
            <div className="flex sm:flex-1 flex-row gap-24 items-center justify-start self-stretch w-auto sm:w-full">
              <div className="flex items-center justify-start w-[200px]">
                <div className="flex flex-col gap-1 items-start justify-start self-stretch w-auto">
                  <Text
                    className="font-inter font-medium text-gray_900 text-left w-auto"
                    as="h3"
                    variant="h3"
                  >
                    {props?.label4}
                  </Text>
                  <Text
                    className="font-inter font-normal not-italic text-bluegray_400 text-left w-auto"
                    as="h4"
                    variant="h4"
                  >
                    {props?.secondlabel4}
                  </Text>
                </div>
              </div>
              <div className="flex items-center justify-start w-20">
                <Text
                  className="font-inter font-normal not-italic text-gray_900 text-left w-auto"
                  as="h3"
                  variant="h3"
                >
                  {props?.labelOne5}
                </Text>
              </div>
            </div>
            <div className="flex items-center justify-start self-stretch w-auto">
              <div className="flex items-start justify-start w-[81px]">
                <div className="bg-orange_50 flex items-start justify-start px-2 py-[3px] rounded-[11px] self-stretch w-auto">
                  <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                    <div className="bg-orange_A200 h-1.5 rounded-[50%] w-1.5"></div>
                    <Text
                      className="font-inter font-medium text-left text-orange_800 w-auto"
                      as="h4"
                      variant="h4"
                    >
                      {props?.labelTwo5}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray_50 flex flex-1 sm:flex-col flex-row md:gap-10 items-center justify-between outline outline-[0.5px] outline-gray_100 p-6 sm:px-5 w-full">
            <div className="flex sm:flex-1 flex-row gap-24 items-center justify-start self-stretch w-auto sm:w-full">
              <div className="flex items-center justify-start w-[200px]">
                <div className="flex flex-col gap-1 items-start justify-start self-stretch w-auto">
                  <Text
                    className="font-inter font-medium text-gray_900 text-left w-auto"
                    as="h3"
                    variant="h3"
                  >
                    {props?.label4}
                  </Text>
                  <Text
                    className="font-inter font-normal not-italic text-bluegray_400 text-left w-auto"
                    as="h4"
                    variant="h4"
                  >
                    {props?.secondlabel4}
                  </Text>
                </div>
              </div>
              <div className="flex items-center justify-start w-20">
                <Text
                  className="font-inter font-normal not-italic text-gray_900 text-left w-auto"
                  as="h3"
                  variant="h3"
                >
                  {props?.labelOne5}
                </Text>
              </div>
            </div>
            <div className="flex items-start justify-start self-stretch w-auto">
              <div className="flex items-start justify-start self-stretch w-auto">
                <div className="flex items-center justify-start self-stretch w-auto">
                  <div className="flex items-start justify-start w-[81px]">
                    <div className="bg-orange_50 flex items-start justify-start px-2 py-[3px] rounded-[11px] self-stretch w-auto">
                      <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                        <div className="bg-orange_A200 h-1.5 rounded-[50%] w-1.5"></div>
                        <Text
                          className="font-inter font-medium text-left text-orange_800 w-auto"
                          as="h4"
                          variant="h4"
                        >
                          {props?.labelTwo5}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white_A700 flex flex-1 sm:flex-col flex-row md:gap-10 items-center justify-between outline outline-[0.5px] outline-gray_100 p-6 sm:px-5 w-full">
            <div className="flex sm:flex-1 flex-row gap-24 items-center justify-start self-stretch w-auto sm:w-full">
              <div className="flex items-center justify-start w-[200px]">
                <div className="flex flex-col gap-1 items-start justify-start self-stretch w-auto">
                  <Text
                    className="font-inter font-medium text-gray_900 text-left w-auto"
                    as="h3"
                    variant="h3"
                  >
                    {props?.label4}
                  </Text>
                  <Text
                    className="font-inter font-normal not-italic text-bluegray_400 text-left w-auto"
                    as="h4"
                    variant="h4"
                  >
                    {props?.secondlabel4}
                  </Text>
                </div>
              </div>
              <div className="flex items-center justify-start w-20">
                <Text
                  className="font-inter font-normal not-italic text-gray_900 text-left w-auto"
                  as="h3"
                  variant="h3"
                >
                  {props?.labelOne5}
                </Text>
              </div>
            </div>
            <div className="flex items-center justify-start self-stretch w-auto">
              <div className="flex items-start justify-start w-[81px]">
                <div className="bg-orange_50 flex items-start justify-start px-2 py-[3px] rounded-[11px] self-stretch w-auto">
                  <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                    <div className="bg-orange_A200 h-1.5 rounded-[50%] w-1.5"></div>
                    <Text
                      className="font-inter font-medium text-left text-orange_800 w-auto"
                      as="h4"
                      variant="h4"
                    >
                      {props?.labelTwo5}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white_A700 flex flex-1 sm:flex-col flex-row md:gap-10 items-center justify-between outline outline-[0.5px] outline-gray_100 p-6 sm:px-5 rounded-bl-[24px] rounded-br-[24px] rounded-tl-none rounded-tr-none w-full">
            <div className="flex sm:flex-1 flex-row gap-24 items-center justify-start self-stretch w-auto sm:w-full">
              <div className="flex items-center justify-start w-[200px]">
                <div className="flex flex-col gap-1 items-start justify-start self-stretch w-auto">
                  <Text
                    className="font-inter font-medium text-gray_900 text-left w-auto"
                    as="h3"
                    variant="h3"
                  >
                    {props?.label4}
                  </Text>
                  <Text
                    className="font-inter font-normal not-italic text-bluegray_400 text-left w-auto"
                    as="h4"
                    variant="h4"
                  >
                    {props?.secondlabel4}
                  </Text>
                </div>
              </div>
              <div className="flex items-center justify-start w-20">
                <Text
                  className="font-inter font-normal not-italic text-gray_900 text-left w-auto"
                  as="h3"
                  variant="h3"
                >
                  {props?.labelOne5}
                </Text>
              </div>
            </div>
            <div className="flex items-center justify-start self-stretch w-auto">
              <div className="flex items-start justify-start w-[81px]">
                <div className="bg-orange_50 flex items-start justify-start px-2 py-[3px] rounded-[11px] self-stretch w-auto">
                  <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                    <div className="bg-orange_A200 h-1.5 rounded-[50%] w-1.5"></div>
                    <Text
                      className="font-inter font-medium text-left text-orange_800 w-auto"
                      as="h4"
                      variant="h4"
                    >
                      {props?.labelTwo5}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </List>
      </div>
    </>
  );
};

DealsOneTable.defaultProps = {
  labelOne: "Status",
  labelTwo: "Status",
  labelThree: "Status",
  label: "LevLegal, LLC",
  secondlabel: "CCA202207405",
  labelOne1: "Julia",
  labelTwo1: "Card Issued",
  label1: "LevLegal, LLC",
  secondlabel1: "CCA202207405",
  labelOne2: "Julia",
  labelTwo2: "Initiated",
  label2: "LevLegal, LLC",
  secondlabel2: "CCA202207405",
  labelOne3: "Julia",
  labelTwo3: "Initiated",
  label3: "LevLegal, LLC",
  secondlabel3: "CCA202207405",
  labelOne4: "Julia",
  labelTwo4: "Initiated",
  label4: "LevLegal, LLC",
  secondlabel4: "CCA202207405",
  labelOne5: "Julia",
  labelTwo5: "Initiated",
};

export default DealsOneTable;
