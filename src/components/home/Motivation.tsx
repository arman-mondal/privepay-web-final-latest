import React from "react";

const motivationItems = [
  {
    iconPath: '/icons/icon-online.svg',
    title: 'Turn payments into rewards',
    subtitle:
      '',
  },
  {
    iconPath: '/icons/icon-budgeting.svg',
    title: 'Transform spending into savings',
    subtitle:
      '',
  },
  {
    iconPath: '/icons/icon-onboarding.svg',
    title: 'Pay effortlessly, earn endlessly',
    subtitle:
      '',
  },
  {
    iconPath: '/icons/icon-api.svg',
    title: 'Pay smart, earn more',
    subtitle:
      '',
  },
];

export default function Motivation() {
  return (
    <section className="py-14 bg-neutral-light-grayish-blue lg:py-24 flex justify-center">
      <div className="container text-center lg:text-left">
        <div className="grid lg:grid-cols-2 mb-12 lg:mb-16">
          <div className="col-span-1">
            <h2 className="text-3xl lg:text-4xl text-primary-dark-blue pb-5">
              Why choose PrivePay?
            </h2>
            <p className="text-neutral-grayish-blue text-sm lg:text-base leading-5">
              We leverage Open Banking to turn your bank account into your
              financial hub. Control your finances like never before.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-9 lg:gap-6 lg:grid-cols-4">
          {motivationItems.map((item) => (
            <div key={item.title} className="justify-center">
              <div className="flex justify-center lg:justify-start">
                <img src={item.iconPath} alt="" />
              </div>

              <h2 className="text-lg text-primary-dark-blue py-4 lg:pt-9 lg:pb-6 lg:text-xl lg:font-bold">
                {item.title}
              </h2>
              <p className="text-neutral-grayish-blue text-sm font-light lg:text-base leading-5">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
